type JojoButterflyStampProps = {
  fileName: string;
  className: string;
};

export function JojoButterflyStamp({
  fileName,
  className,
}: JojoButterflyStampProps) {
  return (
    <img
      src={`/assets/images/${fileName}.png`}
      alt="Jojo Butterfly Stamp"
      className={className}
    />
  );
}
