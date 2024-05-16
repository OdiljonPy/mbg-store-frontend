import Image, { StaticImageData } from "next/image";

interface props {
  src: string | StaticImageData;
  // src:string
  alt?: string;
  width?: number;
  height?: number;
  isStretch?: boolean;
  objectFit?: "cover" | "contain";
  priority?: boolean;
}

const ResponsiveImage = ({
  src,
  alt = "",
  width,
  height,
  isStretch,
  objectFit,
  priority = false,
}: props) => {
  const url = typeof src === "string" ? `${src ? src : ""}` : src;

  return (
    <Image
      priority={priority}
      src={url ? url : ""}
      alt={alt}
      sizes="100vw"
      style={{
        width: "100%",
        minWidth: isStretch ? "100%" : "auto",
        maxHeight: "100%",
        objectFit: objectFit ? objectFit : "fill",
      }}
      width={width ? width : 500}
      height={height ? height : 300}
    />
  );
};

export default ResponsiveImage;
