import { twMerge } from "tailwind-merge";

type MobileNoticeProps = {
  className?: string;
};

export default function MobileNotice({ className }: MobileNoticeProps) {
  return (
    <p
      className={twMerge(
        "block md:hidden text-center text-[12px] italic opacity-50 px-8",
        className
      )}
    >
      note: use desktop for a better experience
    </p>
  );
}
