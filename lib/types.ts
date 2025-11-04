// Banner Types
export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: {
      url: string;
      width: number;
      height: number;
    };
    medium?: {
      url: string;
      width: number;
      height: number;
    };
    small?: {
      url: string;
      width: number;
      height: number;
    };
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Banner {
  id: number;
  documentId: string;
  order: number;
  image_desk: Image;
  image_mobile: Image | null;
}

export interface Product {
  createdAt: string;
  description: string;
  documentId: string;
  id: number;
  order: number;
  publishedAt: string;
  title: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Hook Types
export interface UseScrollProgressOptions {
  /** Offset do topo em pixels para começar a animação */
  startOffset?: number;
  /** Offset do bottom em pixels para terminar a animação */
  endOffset?: number;
}

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
