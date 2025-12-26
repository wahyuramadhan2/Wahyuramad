import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mochammad Wahyu Ramadhan | Psychology & Data Enthusiast</title>
        <meta 
          name="description" 
          content="Portfolio Mochammad Wahyu Ramadhan - Mahasiswa Psikologi dengan minat di Data Science, Teknologi, dan Perilaku Manusia. Surabaya, Indonesia." 
        />
        <meta name="keywords" content="Mochammad Wahyu Ramadhan, Psikologi, Data Science, Portfolio, Surabaya, Cognitive Psychology" />
        <meta property="og:title" content="Mochammad Wahyu Ramadhan | Portfolio" />
        <meta property="og:description" content="Psychology Student with Interest in Data, Technology, and Human Behavior" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wahyuramadhan2.github.io/wahyuportfolio/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
