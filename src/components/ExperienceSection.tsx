import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Member",
      company: "Google Developer Group on Campus",
      location: "UIN Syarif Hidayatullah Jakarta",
      period: "November 2024 - November 2025",
      duration: "1 tahun 1 bulan",
      description: "Aktif berpartisipasi dalam komunitas developer Google, mengikuti berbagai workshop dan event teknologi.",
      current: true
    },
    {
      title: "Observer",
      company: "TPA KB TK Aisyiyah Bustanul Athfal Bebekan",
      location: "Surabaya",
      period: "Februari 2025 - Juni 2025",
      duration: "5 bulan",
      description: "Mengamati dinamika perkembangan anak usia dini, termasuk interaksi sosial, regulasi emosi, dan pertumbuhan kognitif. Mengaplikasikan prinsip-prinsip psikologi untuk menginterpretasi observasi perilaku.",
      current: true
    },
    {
      title: "Agent",
      company: "MMBC Travel & Tours Sdn.Bhd.",
      location: "Malaysia",
      period: "Juni 2020 - Juni 2022",
      duration: "2 tahun 1 bulan",
      description: "Mengelola layanan perjalanan dan wisata, berkomunikasi dengan klien, dan mengkoordinasikan paket perjalanan.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Pengalaman</span> Kerja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perjalanan profesional dan pengalaman yang telah membentuk skill saya
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="card-glass rounded-2xl p-6 hover:border-primary/50 transition-all group">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        Saat Ini
                      </span>
                    )}
                    
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
