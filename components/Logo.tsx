import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "compact";
  theme?: "light" | "dark";
}

export default function Logo({
  className = "",
  variant = "full",
  theme = "light",
}: LogoProps) {
  const textColor = theme === "dark" ? "text-white" : "text-base-content";

  if (variant === "compact") {
    return (
      <Image
        src="/carnegie-logo.png"
        alt="Carnegie Global Services Sarl"
        width={48}
        height={48}
        className={`object-contain ${className}`}
        priority
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/carnegie-logo.png"
        alt="Carnegie Global Services Sarl"
        width={52}
        height={52}
        className="w-12 h-12 object-contain flex-shrink-0"
        priority
      />
      <div className="leading-tight">
        <span className={`block font-extrabold tracking-tight text-[15px] ${textColor}`}>
          CARNEGIE
        </span>
        <span className={`block font-bold tracking-tight text-[15px] ${textColor}`}>
          GLOBAL SERVICES
        </span>
        <span className="block text-secondary text-[9px] font-bold tracking-[0.25em] uppercase mt-0.5">
          Sarl · Douala
        </span>
      </div>
    </div>
  );
}