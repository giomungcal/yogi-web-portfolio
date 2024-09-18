type SocialMediaButtonProps = {
  name: string;
  link: string;
  img: string;
};

function SocialMediaButton({ name, link, img }: SocialMediaButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={name} className="hover:scale-110 transition-all" />
    </a>
  );
}

export default SocialMediaButton;
