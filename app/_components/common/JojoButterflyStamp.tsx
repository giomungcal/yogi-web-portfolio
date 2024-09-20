type JojoButterflyStampProps = {
  fileName: string;
  classNames: string;
};

export function JojoButterflyStamp({
  fileName,
  classNames,
}: JojoButterflyStampProps) {
  return (
    <img
      src={`/assets/images/${fileName}.png`}
      alt="Jojo Butterfly Stamp"
      className={classNames}
    />
  );
}
