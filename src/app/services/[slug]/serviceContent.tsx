// components/HealthSafetySection.tsx
'use client';

import Image from 'next/image';

interface HealthSafetySectionProps {
  title?: string;
  description?: string;
  imageSrc: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
}

export default function HealthSafetySection({
  title = "Health & Safety Services",
  description = "Health & Safety Services ensure the well-being of everyone involved in an event while safeguarding the reputation and integrity of the brands we represent. Through proactive risk management, compliance monitoring, and on-site supervision, we help create a safe, controlled, and professional event environment from setup to breakdown.",
  imageSrc = '/images/img_frame_44_3.png',
  ctaPrimaryText = "Get Started",
  ctaSecondaryText = "Learn More",
}: HealthSafetySectionProps) {
  return (
    <section className="relative">
      <div className=" mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                {ctaPrimaryText}
              </button>
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors">
                {ctaSecondaryText}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt="Professional event safety management with crowds and security"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
