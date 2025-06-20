import Image from "next/image";
import React from "react";

interface ButtonProps {
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSize?: number;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Schedule a Call",
  imageSrc = "/Vector (1).png",
  imageAlt = "Call icon",
  imageSize = 12,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center gap-2 mt-8 border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors ${className}`}
    >
      <div className="-ml-6 p-2 border rounded-full">
        <Image
          src={imageSrc}
          width={imageSize}
          height={imageSize}
          alt={imageAlt}
        />
      </div>
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Button;
