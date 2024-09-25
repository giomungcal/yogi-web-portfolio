import { twMerge } from "tailwind-merge";

type MobileNoticeProps = {
  className?: string;
};

export default function MobileNotice({ className }: MobileNoticeProps) {
  return (
    <p
      className={twMerge(
        "block px-8 text-center text-[12px] italic opacity-50 md:hidden",
        className,
      )}
    >
      note: use desktop for a better experience
    </p>
  );
}
