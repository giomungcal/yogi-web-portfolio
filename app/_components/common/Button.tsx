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
        " jetbrains-mono-extrabold bg-[#DCF615] border-2 border-black h-10 px-4 hover:px-5 select-none transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
