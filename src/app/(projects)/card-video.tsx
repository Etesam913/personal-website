export default function CardVideo({
  isOpen,
  src,
  poster,
}: {
  isOpen: boolean;
  src: string;
  poster: string;
}) {
  return (
    <video
      // whileHover={{ scale: !isOpen ? 1.05 : 1 }}
      data-isOpen={isOpen}
      preload='none'
      width={"100%"}
      height={"100%"}
      controls={isOpen}
      poster={poster}
      src={src}
    />
  );
}
