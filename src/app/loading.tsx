export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#03020a]">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-16 w-16 animate-pulse rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-neon" />
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/70">Loading DSTRTO CITY</p>
      </div>
    </div>
  );
}
