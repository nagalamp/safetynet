'use client';

import Image from 'next/image';

const OwnershipSection = () => {
  return (
    <section className="w-full py-10 flex flex-col items-center px-4 md:px-8 bg-black">
      {/* Section Heading */}
      <div className="w-full max-w-[1200px] mx-auto pt-24 pb-16 px-4">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
            Ownership
          </h2>
          <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
        </div>
      </div>

      {/* SCROLL STACK */}
      <div className="relative">

        {/* ================= Stuart Mann ================= */}
        <div className="sticky top-0 min-h-screen flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="w-full bg-[#272730] border-none rounded-[4px] flex flex-col lg:flex-row">
              <div className="flex-1 p-6 sm:p-8 lg:p-[38px] lg:mt-[58px]">
                <div className="flex flex-col gap-6 items-start">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold text-white">
                    Mr. Stuart Mann
                  </h3>

                  <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold text-white">
                    Managing Director
                  </h4>

                  <p className="text-[18px] sm:text-[20px] font-outfit font-medium text-[#ffffffcc]">
                    BA (Hons), CertEd, Dip.NEBOSH, CertIOSH, FIIRSM, Registered Safety Professional, OSHCR Registered Consultant
                  </p>

                  <p className="text-[16px] sm:text-[18px] font-opensans text-white leading-relaxed">
                  Stuart is a seasoned health and safety practitioner with a rich history in the event, public, and commercial sectors since 1995. As a Fellow of the International Institute of Risk and Safety Management, Stuart brings extensive expertise in strategic risk management, emergency planning, business continuity, and commercial insurance risk management. Additionally, Stuart is actively involved in teaching and assessing for the British Safety Council's Diploma and Certificate programs. He serves as an IOSH accredited trainer, imparting knowledge in areas such as First Aid Training and various safety and management subjects.
                  </p>
                  <div className="flex gap-2 justify-start items-center w-full">
                  <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                  <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                  <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/img_rectangle_61.png"
                  alt="Mr. Stuart Mann"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-r-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= Naveen KS ================= */}
        <div className="sticky top-0 min-h-screen flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="w-full bg-[#2c0087] border-none rounded-[4px] flex flex-col lg:flex-row gap-10">
              <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold text-white">
                    Mr. Naveen KS
                  </h3>

                  <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold text-white">
                    Director: Engineering & Business Development
                  </h4>

                  <p className="text-[18px] sm:text-[20px] font-outfit font-medium text-[#ffffffcc]">
                    B. Eng, M.B.A, Cert. IOSH
                  </p>

                  <p className="text-[16px] sm:text-[18px] font-opensans text-white leading-relaxed">
                  Naveen KS is a highly accomplished and qualified engineer with over 20 years of experience in the industry. His impressive track record includes the successful delivery of large-scale civil engineering, infrastructure, and building projects. Naveen's expertise extends beyond engineering, as he holds an MBA, positioning him as an asset for steering the business forward with his strategic and managerial skills. Having contributed to events in India, the U.K., and Europe, Naveen showcases his international experience and profound understanding of diverse markets. His pivotal role in the business involves leveraging his extensive knowledge of the event industry to drive it towards success.
                  </p>
                  <div className="flex gap-2 justify-start items-center w-full">
                  <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                  <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                  <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/img_rectangle_774.png"
                  alt="Mr. Naveen KS"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-r-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= Duncan Robertson ================= */}
        <div className="sticky top-0 min-h-screen flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="w-full bg-[#272730] border-none rounded-[4px] flex flex-col lg:flex-row gap-10">
              <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold text-white">
                    Mr. Duncan Robertson
                  </h3>

                  <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold text-white">
                    Technical Director
                  </h4>

                  <p className="text-[18px] sm:text-[20px] font-outfit font-medium text-[#ffffffcc]">
                    Cert.NEBOSH, Tech IOSH, IFPO, NIC+EIC Electrical Inspection
                  </p>

                  <p className="text-[16px] sm:text-[18px] font-opensans text-white leading-relaxed">
                  Duncan boasts over 25 years of experience providing high-level safety services within the event and exhibition industry. As a qualified electrical auditor, Duncan specializes in Fire Safety, Crowd Management, and business risk mitigation. Notably, he recently completed the Fire Safety Management documentation, including occupancies and risk assessments, for several structures within Yas Island. Duncan serves as the company's lead auditor, spearheading the development and delivery of onsite audit functions. His expertise ensures the highest standards of safety in every aspect of event execution.
                  </p>
                  <div className="flex gap-2 justify-start items-center w-full">
                  <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                  <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                  <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/img_rectangle_61_798x600.png"
                  alt="Mr. Duncan Robertson"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-r-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OwnershipSection;
