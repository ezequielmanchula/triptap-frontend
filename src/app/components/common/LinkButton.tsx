import Link from "next/link";
import { LinkButtonProps } from "@/utils/types";

export default function LinkButton({
  href,
  label,
  icon,
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`btn inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg shadow-lg transition-all duration-300 w-full sm:w-auto max-w-[270px] ${className}`}>
      {label} {icon}
    </Link>
  );
}
