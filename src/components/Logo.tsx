import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  withText?: boolean;
  textClassName?: string;
  href?: string;
}

/**
 * Brand mark — the cube emblem + wordmark. The logo art reads cleanly on the
 * light theme, so no glow is needed.
 */
export default function Logo({ size = 36, withText = true, textClassName, href = "/" }: LogoProps) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/logo.png" alt="Study Flow logo" width={size} height={size} className="rounded-full" priority />
      {withText && (
        <span className={textClassName ?? "font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"}>
          Study Flow
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
