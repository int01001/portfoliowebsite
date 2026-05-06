"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clapperboard, Code2, Sparkles } from "lucide-react";

// Content Links
const links = {
  linkedin: "https://www.linkedin.com/in/piyush-kumar-556aba33b/",
  github: "https://github.com/int01001",
  edits: "https://drive.google.com/drive/u/1/folders/1cEFXSPAAlIbOwCV8AmHAyJi7i0aaRe49",
  instagram: "https://www.instagram.com/piyu.sshhh._/"
};

const timeline = [
  { year: "2022", title: "Algorithmic Foundations", desc: "Engineered a high-performance C-Sort Web Engine demonstrating core computing efficiency within full-stack environments." },
  { year: "2023", title: "Architectural Scaling", desc: "Built end-to-end scalable architectures including a Netflix Clone with robust database implementations and a Spotify Clone handling extensive media delivery." },
  { year: "2024", title: "Intelligent Systems", desc: "Pivoted towards integrating AI/ML models into user-facing products and mastering advanced video motion graphics." }
];

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "PyTorch", "PostgreSQL", "Premiere Pro", "After Effects",
  "Framer Motion", "Tailwind CSS", "C / C++", "AWS", "Figma"
];

const expertise = [
  { icon: Code2, title: "Full Stack Dev", desc: "Building practical, high-performance web experiences. From sleek, interactive interfaces using Next.js and React, to robust, scalable backend logic using Node.js and PostgreSQL." },
  { icon: Clapperboard, title: "Video Editing", desc: "Crafting visual narratives that command attention. Specializing in sharp cuts, polished pacing, and dynamic motion graphics for modern digital platforms using Premiere Pro and After Effects." },
  { icon: Sparkles, title: "AI & Machine Learning", desc: "Exploring intelligent systems and creative automation. Leveraging LLMs, computer vision, and generative AI to push the boundaries of what digital products can do." }
];

const projects = [
  { title: "E-Commerce C-Sort Engine", link: links.github, type: "Full Stack & C" },
  { title: "Spotify Clone Architecture", link: links.github, type: "React & Next.js" },
  { title: "Netflix Clone Database", link: links.github, type: "Backend & SQL" },
  { title: "Dynamic Brand Anthem", link: links.edits, type: "Video Edit" }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax logic for background orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  // Refs for specific scroll-animated sections
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutSpring = useSpring(aboutProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35
  });

  // Three deliberate sweeps: enter, lock together, then exit with alternating direction.
  const aboutLine1X = useTransform(aboutSpring, [0.12, 0.34, 0.66, 0.88], ['-80vw', '0vw', '0vw', '80vw']);
  const aboutLine2X = useTransform(aboutSpring, [0.14, 0.36, 0.64, 0.86], ['80vw', '0vw', '0vw', '-80vw']);
  const aboutLine3X = useTransform(aboutSpring, [0.16, 0.38, 0.62, 0.84], ['-80vw', '0vw', '0vw', '80vw']);

  const techRef = useRef(null);
  const { scrollYProgress: techProgress } = useScroll({
    target: techRef,
    offset: ["start end", "end start"]
  });
  const techX = useTransform(techProgress, [0, 1], ['0%', '-50%']);

  const philosophyRef = useRef(null);
  const { scrollYProgress: philosophyProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"]
  });
  const philosophyY = useTransform(philosophyProgress, [0, 1], ['40%', '-40%']);

  return (
    <main ref={containerRef} style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>

      {/* Background Parallax Orbs */}
      <motion.div className="bg-orb bg-orb-1" style={{ y: orb1Y }} />
      <motion.div className="bg-orb bg-orb-2" style={{ y: orb2Y }} />
      <motion.div className="bg-orb bg-orb-3" style={{ y: orb3Y }} />

      {/* 1. HERO SECTION */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5vw', position: 'relative', zIndex: 10, flexWrap: 'wrap-reverse', gap: '4rem' }}>
        <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{
              fontSize: 'clamp(4rem, 14vw, 12rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              textTransform: 'uppercase',
              letterSpacing: '-0.04em'
            }}>
              Piyush<br />
              <span className="text-stroke">Kumar</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ marginTop: '6vh', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--text)', maxWidth: '600px', lineHeight: 1.5, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Creative Developer & Editor. I shape digital experiences through code, motion, and intelligent systems.
            </p>
            <a href="#work" className="btn btn-accent">Explore Work</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '250px' }}
        >
          <div style={{ position: 'relative', width: 'clamp(200px, 25vw, 400px)', aspectRatio: '1/1', border: '4px solid var(--accent)', overflow: 'hidden', boxShadow: '20px 20px 0px rgba(255, 42, 42, 0.2)' }}>
            <img src="/avatar.png" alt="Pixel Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated', filter: 'contrast(1.2)' }} />
          </div>
        </motion.div>
      </section>

      {/* 2. STICKY ABOUT SECTION */}
      <section ref={aboutRef} style={{ minHeight: '72vh', position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '8vh 0' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: 'clamp(0.35rem, 1.2vw, 0.8rem)', padding: '0 1rem' }}>

          <motion.h2 className="about-scroll-line" style={{ x: aboutLine1X }}>
            NOT JUST <span className="text-stroke">ANOTHER</span>
          </motion.h2>

          <motion.h2 className="about-scroll-line about-scroll-line-accent" style={{ x: aboutLine2X }}>
            <span className="text-accent text-stroke-accent">DEVELOPER.</span>
          </motion.h2>

          <motion.h2 className="about-scroll-line about-scroll-line-long" style={{ x: aboutLine3X }}>
            I MERGE <span className="text-stroke">STORY</span> WITH LOGIC.
          </motion.h2>

        </div>
      </section>

      {/* 3. NEW PARALLAX PHILOSOPHY SECTION */}
      <section ref={philosophyRef} style={{ position: 'relative', minHeight: '150vh', backgroundColor: '#000', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
        <motion.div
          style={{
            position: 'absolute',
            fontSize: 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 900,
            color: 'rgba(255, 255, 255, 0.04)',
            whiteSpace: 'nowrap',
            y: philosophyY,
            pointerEvents: 'none'
          }}
        >
          AESTHETICS
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 5vw', maxWidth: '1200px', textAlign: 'center' }}>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.4, fontWeight: 600 }}
          >
            I don't just write code. I build digital <span className="text-accent">experiences</span>.
            <br /><br />
            Performance is mandatory. Aesthetics are <span className="text-stroke">everything</span>.
          </motion.h3>
        </div>
      </section>

      {/* 4. NEW JOURNEY / TIMELINE SECTION */}
      <section style={{ minHeight: '100vh', padding: '20vh 5vw', position: 'relative', zIndex: 10 }}>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', marginBottom: '15vh', borderBottom: '1px solid var(--line)', paddingBottom: '3vh' }}
        >
          The Journey
        </motion.h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '15px', top: 0, bottom: 0, width: '2px', background: 'var(--line)', zIndex: -1 }}></div>

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{ display: 'flex', gap: '3vw', alignItems: 'flex-start' }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg)', border: '4px solid var(--accent)', flexShrink: 0, marginTop: '5px' }}></div>
              <div>
                <h4 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '1rem', lineHeight: 1 }}>{item.year}</h4>
                <h5 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, marginBottom: '1.5rem' }}>{item.title}</h5>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'var(--muted)', maxWidth: '700px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. EXPERTISE SECTION */}
      <section style={{ minHeight: '100vh', padding: '15vh 5vw', backgroundColor: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10, borderTop: '1px solid var(--line)' }}>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', marginBottom: '15vh', borderBottom: '1px solid var(--line)', paddingBottom: '3vh' }}
        >
          My Arsenal
        </motion.h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8vh' }}>
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: 'minmax(60px, 1fr) 4fr', gap: '2rem', alignItems: 'start', paddingBottom: '8vh', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              <div style={{ color: 'var(--accent)' }}><item.icon size={54} strokeWidth={1.5} /></div>
              <div>
                <h4 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>{item.title}</h4>
                <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '800px' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. SKILL MATRIX GRID SECTION */}
      <section style={{ padding: '15vh 5vw', position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '5vh', fontWeight: 500, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Skill Matrix</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ padding: '1.5rem 2.5rem', border: '1px solid var(--line)', borderRadius: '100px', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: 600, backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. NEW MARQUEE TECH STACK SECTION */}
      <section ref={techRef} style={{ padding: '10vh 0', backgroundColor: 'var(--accent)', color: 'var(--bg)', overflow: 'hidden', position: 'relative', zIndex: 20 }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '3rem',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            x: techX
          }}
        >
          <span>CODE — CUT — CREATE — INNOVATE — DEPLOY —</span>
          <span>CODE — CUT — CREATE — INNOVATE — DEPLOY —</span>
          <span>CODE — CUT — CREATE — INNOVATE — DEPLOY —</span>
        </motion.div>
      </section>

      {/* 8. WORK SECTION */}
      <section id="work" style={{ minHeight: '100vh', padding: '15vh 5vw', position: 'relative', zIndex: 10 }}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', marginBottom: '12vh' }}
        >
          Selected Projects
        </motion.h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((work, i) => (
            <motion.a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              key={work.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5vh 0',
                borderBottom: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--text)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
            >
              <span style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{work.title}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {work.type} <ArrowUpRight />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 9. FOOTER */}
      <section style={{ padding: '15vh 5vw 5vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6vh', backgroundColor: '#020202', position: 'relative', zIndex: 10 }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '-0.05em' }}
        >
          Let's Talk
        </motion.h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={links.linkedin} className="btn">LinkedIn</a>
          <a href={links.instagram} className="btn">Instagram</a>
          <a href={links.github} className="btn">GitHub</a>
        </div>
        <p style={{ marginTop: '12vh', color: 'var(--muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          © {new Date().getFullYear()} Piyush Kumar. Designed for impact.
        </p>
      </section>
    </main>
  );
}
