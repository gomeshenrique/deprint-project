type LoadingProps = {
  text?: string;
};

export default function LoadingUI({ text = "Carregando" }: LoadingProps) {
  return (
    <main className="grid place-items-center min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="text-center">
        <p className="text-xl">{text}</p>
        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="block w-3 h-3 rounded-full bg-primary animate-bounce"></span>
          <span className="block w-3 h-3 rounded-full bg-secondary animate-bounce delay-100"></span>
          <span className="block w-3 h-3 rounded-full bg-accent animate-bounce delay-150"></span>
        </div>
      </div>
    </main>
  );
}
