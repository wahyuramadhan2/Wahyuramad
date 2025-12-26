import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, BarChart, Database, Brain, CheckCircle } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Microsoft PowerPoint", level: 90 },
    { name: "Microsoft Word", level: 85 },
    { name: "Search Engine Optimization (SEO)", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Power BI", level: 70 },
    { name: "Machine Learning", level: 65 },
  ];

  const certifications = [
    {
      icon: Cloud,
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services"
    },
    {
      icon: BarChart,
      title: "Power BI for Beginners",
      issuer: "Microsoft"
    },
    {
      icon: Database,
      title: "Intermediate SQL",
      issuer: "DataCamp"
    },
    {
      icon: CheckCircle,
      title: "Data Analyst Associate Certificate",
      issuer: "DataCamp"
    },
    {
      icon: Brain,
      title: "Belajar Machine Learning untuk Pemula",
      issuer: "Dicoding"
    }
  ];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
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
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kemampuan teknis dan sertifikasi yang telah saya raih
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Top Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="card-glass rounded-xl p-4 flex items-start gap-4 hover:border-primary/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
