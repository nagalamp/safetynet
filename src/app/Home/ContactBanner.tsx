'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ContactBannerProps {
  iconSrc?: string;
  title?: string;
  value?: string;
  bgColor?: string; // optional background color
}

export default function ContactBanner({
  iconSrc,
  title,
  value,
  bgColor = "bg-gray-800",
}: ContactBannerProps) {
  return (
    <section className="w-full py-16 px-6 lg:px-16">
      <div
        className="w-full relative rounded-[98px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/CTA.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row justify-start items-end gap-6 w-full">
            {/* Left Content */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 w-full">
              <div className="flex flex-col lg:flex-row justify-start items-start gap-6 w-full">
                <div className="flex flex-col justify-center items-start w-full">
                  <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                    Have any questions?
                  </p>
                  <Link href="/contact">
                    <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-outfit font-semibold leading-[40px] sm:leading-[52px] lg:leading-[61px] text-left text-white hover:text-[#47d4aa] transition-colors">
                      Contact Us
                    </h3>
                  </Link>
                </div>
                <div className="relative w-[194px] h-[36px] mt-6 lg:mt-6">
                  <Image
                    src="/images/img_vector_19.svg"
                    alt=""
                    width={190}
                    height={30}
                    className="absolute bottom-0 left-0"
                  />
                  <Image
                    src="/images/img_vector_18.svg"
                    alt=""
                    width={32}
                    height={36}
                    className="absolute top-0 right-0"
                  />
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex gap-4 justify-center items-start px-6">
                <Image
                  src="/images/img_line_md_phone_call.svg"
                  alt="Phone"
                  width={34}
                  height={34}
                  className="mt-3.5"
                />
                <div className="flex flex-col gap-1 justify-start items-start">
                  <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                    Phone Number
                  </p>
                  <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-outfit font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-left text-white">
                    +0(850) 544 7514
                  </p>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex gap-4 justify-center items-start px-7 pb-1.5">
              <Image
                src="/images/img_ic_outline_email.svg"
                alt="Email"
                width={34}
                height={34}
                className="mt-2.5"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                  E-Mail Address
                </p>
                <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-outfit font-medium leading-[28px] sm:leading-[32px] lg:leading-[36px] text-left text-white">
                  hello@crosson.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
