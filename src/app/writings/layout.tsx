export default function WritingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-screen-sm space-y-6">{children}</div>

      {/* Gradient to hide the content when scrolling */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 h-20 w-full backdrop-blur-xs"
        style={{
          maskImage: "linear-gradient(to top, black 25%, transparent)",
        }}
      />
    </>
  );
}
