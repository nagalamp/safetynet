'use client';

import Image from 'next/image';
import TeamSlider from './TeamSlider';

const WhoweareSection = () => {
  return (
    <>
      {/* Who We Are Section */}
      <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto">
          



          <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full mb-10">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
            Who We Are
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
            <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-center text-white max-w-4xl">
              BEST B4-Global is a multinational safety, engineering, and sustainability solutions provider,
              delivering best-in-class support for exhibitions, events, and temporary structures.
            </p>
          </div>



          {/* Company Image */}
          <div className="w-full mb-0">
            <Image
              src="/images/img_rectangle_758.png"
              alt="BEST B4-Global Office"
              width={1200}
              height={348}
              className="w-full h-auto rounded-t-[4px] object-cover"
            />
          </div>

          {/* Event Experience Section */}
          <div className="w-full bg-[#272730] rounded-b-[4px] p-6 sm:p-8 lg:p-[62px]">
            <div className="flex flex-col gap-4 justify-start items-start w-full">
              <h3 className="text-[24px] sm:text-[28px] font-outfit font-semibold leading-[30px] sm:leading-[36px] text-left text-white">
                Event Experience
              </h3>

              <div className="w-full">



                <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-6">
                  {/* Bullet Points */}
                  <div className="flex flex-row gap-6">
                    {/* Bullet Icons */}


                    {/* Bullet Text */}
                    <div className="flex-1 flex flex-col gap-6 justify-start items-center w-auto">
                      <ul className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[32px] sm:leading-[40px] text-left text-white space-y-4">
                        {[
                          "Team of highly skilled professionals trained in Health & Safety (IOSH & NEBOSH certified).",
                          "Engineers specializing in Structural, Electrical, and Mechanical ensures that all aspects of safety are covered comprehensively.",
                          "Over 30 years of industry experience, supporting 50+ brands and events.",
                          "Global experience across UK, Europe, Middle East, Asia, and Africa.",
                          "Provide Health & Safety training workshops for clients, contractors, and exhibitors.",
                          "Reduced waste by 50% through modular structure solutions."
                        ].map((item, index) => (
                          <li key={index} className="flex gap-3 items-start">
                            <Image
                              src="/images/img_vector_stroke.svg"
                              alt=""
                              width={14}
                              height={14}
                              className="w-[14px] h-[14px] mt-[10px]"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0 bg-[#070B23]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8 justify-start items-center">
            


            <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full mb-10">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
            Ownership
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
            
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
      <TeamSlider />
      {/* Information Sections */}
      <section className="w-full py-1 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* Staff Qualifications */}
          <div
            className="w-full border rounded border-[#ffffff33]  bg-cover bg-center p-6 sm:p-8 lg:p-[58px]"
            style={{
              backgroundImage: ' url(/images/AboutUs/StaffQualifications.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            
            }}
          >
            <div className="flex flex-col gap-6 justify-start rounded">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Staff Qualifications
              </h3>
              <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                  All BEST staff have qualification commensurate with the roles and tasks that they are undertaking.
                </p>
                <div className="flex gap-[18px] justify-start items-end">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Safety Managers will have a minimum of NEBOSH Certificate or level 3 British Safety Council Certificate
                  </p>
                </div>
                <div className="flex gap-[18px] justify-start items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Floor management staff will be qualified to at least IOSH Managing Safely.
                  </p>
                </div>
                <div className="flex gap-[18px] justify-start items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Structural Engineers have engineering degrees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Freelancers and Temporary Staff */}
          <div
            className="w-full border border-[#ffffff33] rounded bg-[#070b23] bg-cover bg-center p-6 sm:p-8 lg:p-[62px]"
            style={{ backgroundImage: 'url(/images/img_image_14.png)' }}
          >
            <div className="flex flex-col gap-6 justify-center items-start">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-center text-white">
                Freelancers and Temporary Staff
              </h3>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                BEST recognizes the significance of qualified and experienced freelancers in supporting its operations. All freelancers employed by BEST are required to wear BEST uniforms and are covered by the company's comprehensive insurance, which includes Employee, Public and Products, and Professional Indemnity coverage. Freelancers are also expected to adhere to BEST's policies and procedures, ensuring consistency in service delivery and safety standards.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                While freelancers are integral to BEST's workforce, no event is exclusively or predominantly staffed by freelancers alone. A BEST manager is always included as part of the event team, providing oversight, and ensuring smooth operations.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                BEST takes pride in its pool of experienced and qualified freelancers, many of whom have benefited from training and development courses delivered by Stuart Mann. This showcases the company's commitment to continuous improvement and career development. Freelancers who have previously worked on specific events are often requested to return for future events, promoting continuity and familiarity with event requirements.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                By leveraging the expertise and experience of qualified freelancers, BEST maintains consistency in safety standards and adherence to company policies and procedures. This approach ensures that clients receive reliable, efficient, and high-quality services for their events, meeting their health, safety, and environmental obligations while building long-term relationships based on trust and professionalism.
              </p>
            </div>
          </div>

          {/* Corporate Governance */}
          <div
            className="w-full bg-cover bg-center"
            
            style={{
              backgroundImage: ' url(/images/AboutUs/CorporateGovernance.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            
            }}
            
          >
            <div className="w-full border border-[#ffffff2d] rounded-[4px] bg-[#070b23e5] p-6 sm:p-8 lg:p-16">
              <div className="flex flex-col gap-6 justify-center items-start">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                  Corporate Governance
                </h3>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  BEST is a safety company led by seasoned safety professionals, dedicated to ensuring our commitment to meeting and surpassing legal and regulatory requirements. Our policies, procedures, and systems align with UK and European laws and regulations. The company upholds various essential policies, including:
                </p>

                <div className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full">
                  <div className="flex flex-col gap-[6px] justify-start items-center w-full lg:w-[36%]">
                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Health and Safety Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>

                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Anti-Bribery and Corruption Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>

                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Equal Opportunities Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>

                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Modern Slavery Statement
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>

                    <div className="flex gap-4 justify-start items-center w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} />
                      <div className="flex justify-between items-center w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          HR Policies and Procedures
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 justify-center items-start w-full lg:flex-1">
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Financial Management Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Communications Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Information Technology Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Environmental Policy and Procedures
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Data Protection Policy and Procedures
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Information Governance Policy
                  </p>
                </div>

                <p className="text-[14px] sm:text-[16px] font-opensans font-normal leading-[20px] sm:leading-[24px] text-left text-white">
                  To uphold our BSC, IOSH, and Qualsafe Awards training centre status, BEST adheres to comprehensive training delivery and assessment policies and procedures. Regular audits by these organizations are conducted, necessitating the presence of our internal quality assurance officer.
                </p>

                <p className="text-[14px] sm:text-[16px] font-opensans font-normal leading-[20px] sm:leading-[24px] text-left text-white">
                  Continued training and skill updates are integral to our operations. All staff members are obligated to maintain professional membership in Accredited and Chartered safety organizations, engaging in ongoing professional development. Internal training and attendance are not merely encouraged but mandatory, as skill fade, especially in the rapidly evolving events sector, can significantly impact service delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Event Experience */}
          <div
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/img_560_1.png)' }}
          >
            <div className="w-full border border-[#ffffff2d] rounded-[4px] bg-[#070b23e5] p-6 sm:p-8 lg:p-[58px]">
              <div className="flex flex-col gap-6 justify-start items-start">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                  Event Experience
                </h3>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  BEST Directors and Staff have provided Floor Management, Safety Management, Training, and other related services to event organisers globally either directly or as part of the previous organisations, clients have included
                </p>

                <div className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full">
                  <div className="flex flex-col gap-[10px] justify-center items-center w-full">
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Informa Markets (India, UAE, UK)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Dubai World Trade Centre (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Abu Dhabi National Exhibition Company (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        ADNEC Services (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        CSM Sports & Entertainment (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Blink Experience (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Reed (UK/UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        DMG Events (UAE, India)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[10px] justify-start items-center w-full">
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Fairs & Events (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        TPG Media (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Quartz Business Media (UAE/UK)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        UBM (UK/India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        HYVE (UK/India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Mess München (India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Nuremberg Messe (India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Real Food Markets UK/UAE (outside events)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default WhoweareSection;
