import { SOCIAL_LINKS } from "@/app/_constants/social_links";
import SocialMediaButton from "./SocialMediaButton";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      {SOCIAL_LINKS.map((l, index) => {
        return <SocialMediaButton key={index} {...l} />;
      })}
    </div>
  );
}
