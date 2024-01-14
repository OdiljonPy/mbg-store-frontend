import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    isStretch?: boolean;
}

const ResponsiveImage: React.FC<props> = ({
                                              src,
                                              alt = "",
                                              width,
                                              height,
                                              isStretch,
                                          }) => {
    const url =
        typeof src === "string"
            ? `${process.env.NEXT_PUBLIC_BASE_URL}${src}`
            : src;

    return (
        <Image
            src={url}
            alt={alt}
            sizes="100vw"
            style={{
                width: "100%",
                minWidth: isStretch ? "100%" : "auto",
                maxHeight: "100%",
            }}
            width={width ? width : 500}
            height={height ? height : 300}
        />
    );
};

export default ResponsiveImage;
