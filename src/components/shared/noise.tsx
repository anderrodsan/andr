export default function Noise({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full transform [mask-image:radial-gradient(#fff,transparent,75%)]${
        className ? ` ${className}` : "scale-[1.2] opacity-10"
      }`}
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
}
