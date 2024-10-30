import { cn } from "@/lib/utils";

interface IImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: IImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-full object-cover", className)}
    />
  );
};

export default Image;
