import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "jetbrains-mono-extrabold h-10 select-none border-2 border-black bg-[#DCF615] px-4 transition-all hover:px-5",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
