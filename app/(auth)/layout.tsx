export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-12 selection:bg-black selection:text-white">
      <div className="w-full max-w-[420px] bg-white border border-neutral-200/60 p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
        {children}
      </div>
    </div>
  );
}