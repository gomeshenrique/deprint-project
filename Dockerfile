# Multi-stage build otimizado para Next.js 15 com standalone output
# Base image com versão específica para reprodutibilidade
FROM node:22-alpine3.19 AS base

# Instalar dependências do sistema apenas uma vez
RUN apk add --no-cache libc6-compat

# Atualizar corepack para versão mais recente (resolve problemas de assinatura)
# Depois habilitar e preparar pnpm
RUN npm install -g corepack@latest && \
    corepack enable && \
    corepack prepare pnpm@latest --activate

# Stage 1: Builder
FROM base AS builder

WORKDIR /app

# Copiar arquivos de dependências primeiro (melhor cache)
COPY package.json pnpm-lock.yaml ./

# Instalar todas as dependências (incluindo devDependencies para build)
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm run build

# Stage 2: Runner (imagem final otimizada)
FROM base AS runner

WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Variáveis de ambiente
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar apenas os arquivos necessários do standalone output
# O Next.js standalone já inclui apenas as dependências de produção
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mudar para usuário não-root
USER nextjs

# Expor porta
EXPOSE 3000

# Variável de ambiente para porta
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Healthcheck para monitoramento (verifica se o servidor responde)
# Nota: Para um healthcheck mais robusto, considere criar uma rota /api/health no Next.js
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode >= 200 && r.statusCode < 500 ? 0 : 1)}).on('error', () => process.exit(1))"

# Usar node diretamente (mais eficiente que npm/pnpm)
CMD ["node", "server.js"]

