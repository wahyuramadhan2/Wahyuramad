import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Universitas Negeri Surabaya",
      degree: "Psikologi Kognitif dan Psikolinguistik",
      period: "2022 - 2026",
      icon: GraduationCap,
      current: true,
      description: "Fokus pada studi perilaku manusia, proses kognitif, dan psikolinguistik"
    },
    {
      institution: "Universitas Terbuka",
      degree: "Statistics",
      period: "Februari 2025",
      icon: BookOpen,
      current: false,
      description: "Kursus statistik untuk mendukung kemampuan analisis data"
    }
  ];

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Pendidikan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latar belakang akademik yang membentuk fondasi pengetahuan saya
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              className="card-glass rounded-2xl p-8 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <edu.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Saat Ini
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
