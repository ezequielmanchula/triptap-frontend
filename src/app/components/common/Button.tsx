import { ButtonProps }  from "@/utils/types";

export default function Button({
  type = "button",
  isSubmitting = false,
  label,
  loadingLabel,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      className="w-full py-3 mt-2 btn font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
      <span></span>
      {isSubmitting ? (
        loadingLabel || "Cargando..."
      ) : (
        <>
          {label}{icon}
        </>
      )}
    </button>
  );
}
