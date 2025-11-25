'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ContactBannerProps {
  iconSrc?: string;
  title?: string;
  value?: string;
  bgColor?: string;
}

export default function ContactBanner({
  iconSrc,
  title,
  value,
  bgColor = "bg-gray-800",
}: ContactBannerProps) {
  return (
    <section className="w-full px-6 lg:px-16">
      <div
        className="w-full max-w-[1200px] mx-auto relative rounded-[100px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/CTA.png')", height: "197px" }}
      >
        {/* Removed Gradient overlay */}

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12 py-6 flex items-center h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">

            {/* Left Section: CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 w-full lg:w-1/2">
              <div className="flex flex-col gap-2 sm:gap-4 w-full">
                <p className="text-[16px] sm:text-[18px] font-outfit font-normal text-white">
                  Have any questions?
                </p>
                <Link href="/contact">
                  <h3 className="text-[28px] sm:text-[36px] lg:text-[48px] font-outfit font-semibold text-white hover:text-[#47d4aa] transition-colors">
                    Contact Us
                  </h3>
                </Link>
              </div>

              {/* Decorative Images */}
              <div className="relative w-[120px] h-[36px] mt-2 sm:mt-0 flex-shrink-0">
                <Image
                  src="/images/img_vector_19.svg"
                  alt=""
                  width={120}
                  height={36}
                  className="absolute bottom-0 left-0"
                />
                <Image
                  src="/images/img_vector_18.svg"
                  alt=""
                  width={32}
                  height={36}
                  className="absolute top-3 right-0"
                />
              </div>
            </div>

            {/* Right Section: Contact Info */}
            <div className="flex flex-col sm:flex-row sm:justify-end gap-6 w-full lg:w-auto">

              {/* Phone */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/img_line_md_phone_call.svg"
                  alt="Phone"
                  width={40}
                  height={34}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] font-outfit font-normal text-white">
                    Phone Number
                  </p>
                  <p className="text-[20px] sm:text-[20px] lg:text-[28px] font-outfit font-semibold text-white whitespace-nowrap">
                    +0(850) 544 7514
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/img_ic_outline_email.svg"
                  alt="Email"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] font-outfit font-normal text-white">
                    E-Mail Address
                  </p>
                  <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-outfit font-medium text-white whitespace-nowrap">
                    hello@crosson.com
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
