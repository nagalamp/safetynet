'use client';

import Image from 'next/image';

const OwnershipSection = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-0 bg-[#070B23]">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8 justify-start items-center">
          <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11 w-full mb-10">
            <h2
              className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
              style={{ lineHeight: '51px' }}
            >
              Ownership
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
          </div>

          {/* Stuart Mann Card */}
          <div className="w-full bg-[#272730] border-none rounded-[4px] flex flex-col lg:flex-row">
            <div className="flex-1 p-6 sm:p-8 lg:p-[38px] lg:mt-[58px]">
              <div className="flex flex-col gap-6 justify-start items-start">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                  Mr. Stuart Mann
                </h3>
                <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white">
                  Managing Director
                </h4>
                <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[26px] sm:leading-[30px] text-left text-[#ffffffcc]">
                  BA (Hons), CertEd, Dip.NEBOSH, CertIOSH, FIIRSM, Registered Safety Professional, OSHCR Registered Consultant
                </p>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  Stuart is a seasoned health and safety practitioner with a rich history in the event, public, and commercial sectors since 1995.
                  As a Fellow of the International Institute of Risk and Safety Management, Stuart brings extensive expertise in strategic risk management,
                  emergency planning, business continuity, and commercial insurance risk management.
                </p>
                <div className="flex gap-2 justify-start items-center w-full">
                  <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                  <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                  <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:self-center">
              <Image
                src="/images/img_rectangle_61.png"
                alt="Mr. Stuart Mann"
                width={598}
                height={798}
                className="w-full h-auto rounded-r-[3px] object-cover"
              />
            </div>
          </div>

          {/* Naveen KS Card */}
          <div className="w-full bg-[#2c0087] border-none rounded-[4px] flex flex-col lg:flex-row gap-10">
            <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
              <div className="flex flex-col gap-8 justify-start items-center">
                <div className="flex flex-col gap-1 justify-start items-start w-full">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                    Mr. Naveen KS
                  </h3>
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white">
                      Director: Engineering & Business Development
                    </h4>
                    <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[22px] sm:leading-[26px] text-left text-[#ffffffcc]">
                      B. Eng, M.B.A, Cert. IOSH
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 justify-start items-center w-full">
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                    Naveen KS is a highly accomplished and qualified engineer with over 20 years of experience in the industry.
                    His impressive track record includes large-scale civil engineering, infrastructure, and building projects.
                  </p>
                  <div className="flex gap-2 justify-start items-center w-full">
                    <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                    <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                    <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:self-center">
              <Image
                src="/images/img_rectangle_774.png"
                alt="Mr. Naveen KS"
                width={598}
                height={798}
                className="w-full h-auto rounded-r-[3px] object-cover"
              />
            </div>
          </div>

          {/* Duncan Robertson Card */}
          <div className="w-full bg-[#272730] border-none rounded-[4px] flex flex-col lg:flex-row gap-10">
            <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
              <div className="flex flex-col gap-8 justify-start items-center">
                <div className="flex flex-col justify-start items-start w-full">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                    Mr. Duncan Robertson
                  </h3>
                  <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white mt-2">
                    Technical Director
                  </h4>
                  <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[26px] sm:leading-[30px] text-left text-[#ffffffcc] mt-2">
                    Cert.NEBOSH, Tech IOSH, IFPO, NIC+EIC Electrical Inspection
                  </p>
                </div>

                <div className="flex flex-col gap-6 justify-start items-center w-full">
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                    Duncan boasts over 25 years of experience providing high-level safety services within the event and exhibition industry.
                    As a qualified electrical auditor, he specializes in Fire Safety, Crowd Management, and business risk mitigation.
                  </p>
                  <div className="flex gap-2 justify-start items-center w-full">
                    <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                    <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                    <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:self-center">
              <Image
                src="/images/img_rectangle_61_798x600.png"
                alt="Mr. Duncan Robertson"
                width={600}
                height={798}
                className="w-full h-auto rounded-r-[3px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSection;
