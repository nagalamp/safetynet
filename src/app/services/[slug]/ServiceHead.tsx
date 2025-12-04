'use client';
import Image from 'next/image';

interface ServiceHead {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHead({
  title,
  description,
  image,
}: ServiceHead) {
  return (
    <section className="w-full flex justify-center  rounded">
      <div className="max-w-[1200px] w-full bg-[#232233] border border-white/20  flex flex-col md:flex-row overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 p-10 md:w-1/2">
          
          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-outfit font-bold text-3xl leading-[120%]">
              {title}
            </h2> 
          </div>

          {/* Description */}
          <p className="text-white font-openSans text-[18px] leading-[150%]">
            {description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 h-[358px] opacity-90">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded"
          />
        </div>

      </div>
    </section>
  );
}
