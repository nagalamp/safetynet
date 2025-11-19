'use client';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

interface ServiceHighlight {
  id: number;
  number: string;
  title: string;
  bgGradient: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface KeyHighlightsSectionProps {
  serviceHighlights: ServiceHighlight[];
  onGetInTouch: () => void;
}

export default function KeyHighlightsSection({ 
  serviceHighlights, 
  onGetInTouch 
}: KeyHighlightsSectionProps) {
  return (
    <motion.section 
      className="w-full py-12 sm:py-16 lg:py-[48px] px-4 relative z-10 bg-[#040711]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-[1202px] mx-auto">
        <div className="flex flex-col gap-9 items-center w-full">
          <motion.div 
            className="flex flex-col gap-1 items-center w-full md:w-[36%] px-4 md:px-12"
            variants={fadeInUp}
          >
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
              The Key Highlights
            </h2>
            <motion.div 
              className="w-[66px] h-1 bg-[#47d4aa]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            variants={staggerContainer}
          >
            {serviceHighlights.map((highlight, index) => (
              <motion.div 
                key={highlight.id} 
                className="w-full max-w-[384px] mx-auto"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="flex flex-col items-center justify-start h-auto mb-10 md:mb-[42px] lg:mb-[84px] xl:mb-[86px] hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    background: highlight.bgGradient,
                    backgroundColor: highlight.id === 1 ? '#2c0087' : 
                                    highlight.id === 2 ? '#016c4c' : '#822101'
                  }}
                >
                  <div className="flex flex-col gap-8 items-center w-[88%] my-8">
                    <div className="flex flex-row justify-start items-center w-full">
                      <motion.h3 
                        className="text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bruno-ace font-normal leading-tight text-white text-left drop-shadow-lg" 
                        style={{ lineHeight: '218px' }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        {highlight.number}
                      </motion.h3>
                      <motion.div 
                        className="w-6 h-6 bg-white self-end mb-12 -ml-1.5 shadow-lg rounded"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.5 
                        }}
                      />
                    </div>
                    <motion.p 
                      className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-outfit font-medium leading-tight text-white text-left w-full px-2 drop-shadow-md" 
                      style={{ lineHeight: '43px' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                    >
                      {highlight.title}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="GET IN TOUCH"
              text_font_size="20"
              text_font_family="Outfit"
              text_font_weight="600"
              text_line_height="26px"
              text_color="#ffffff"
              fill_background_color="#f05623"
              border_border_radius="4px"
              padding="12px 34px"
              className="uppercase hover:bg-[#e04a1f] transition-colors duration-300 shadow-lg"
              onClick={onGetInTouch}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
