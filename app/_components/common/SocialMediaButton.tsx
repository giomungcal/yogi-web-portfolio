type SocialMediaButtonProps = {
  name: string;
  link: string;
  img: string;
};

function SocialMediaButton({ name, link, img }: SocialMediaButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={name} className="transition-all hover:scale-110" />
    </a>
  );
}

export default SocialMediaButton;
