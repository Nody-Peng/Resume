import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education"; // 新增的教育背景區塊
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Articles />
      <Certificates /> {/* 新增的證明文件區塊 */}
      <Contact />
      <Footer />
    </main>
  );
}
