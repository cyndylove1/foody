import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-bold text-sm px-6 h-[42px] rounded-full transition-all hover:-translate-y-0.5 select-none";

  const variantStyles = {
    primary: "bg-[var(--main)] cursor-pointer text-white hover:bg-[#d63f26]",
    secondary:
      "bg-transparent text-black hover:text-white cursor-pointer border border-gray-300 hover:bg-gray-900",
    tertiary:
      "bg-white/10 text-white hover:text-black cursor-pointer border border-gray-200 shadow-lg shadow-black/30 hover:bg-white",
  };

  return (
    <button
      {...props}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
