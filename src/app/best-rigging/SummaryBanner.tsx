'use client';

import Image from "next/image";

interface SummaryBannerProps {
  image: string;
  text: string;
}

export default function SummaryBanner({ image, text }: SummaryBannerProps) {
  return (
    <div
      className="
        relative 
        w-[1200px] 
        h-[456px] 
        rounded-[4px] 
        overflow-hidden 
        mx-auto
      "
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="summary background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-10">
        <p
          className="
            text-white 
            font-outfit 
            font-medium 
            text-[30px] 
            leading-[45px] 
            text-center 
            max-w-[997px]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}
