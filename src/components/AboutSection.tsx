import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code, Languages } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "Cognitive Psychology",
      description: "Memahami perilaku manusia dan proses mental"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Menganalisis data untuk insights bermakna"
    },
    {
      icon: Code,
      title: "Technology",
      description: "Mengintegrasikan teknologi dalam penelitian"
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "English, Mandarin, Dutch"
    }
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mahasiswa Psikologi di Universitas Negeri Surabaya dengan fokus pada 
            Psikologi Kognitif dan Psikolinguistik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass rounded-2xl p-8">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Saya adalah mahasiswa Psikologi dengan ketertarikan kuat pada perpaduan antara 
                <span className="text-primary font-medium"> Data Science</span>, 
                <span className="text-accent font-medium"> Teknologi</span>, dan 
                <span className="text-primary font-medium"> Perilaku Manusia</span>.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Sebagai Observer di TK Aisyiyah Bustanul Athfal, saya mendapatkan pengalaman langsung 
                mengamati dinamika perkembangan anak usia dini, termasuk interaksi sosial, regulasi emosi, 
                dan pertumbuhan kognitif.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saat ini saya aktif mengeksplorasi machine learning, SQL, dan data analytics 
                sambil mendalami psikologi kognitif di universitas.
              </p>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
