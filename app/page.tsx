import {
  ArrowUpRight,
  Clapperboard,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Sparkles
} from "lucide-react";
import { InteractiveBackground } from "./components/InteractiveBackground";

const links = {
  linkedin: "https://www.linkedin.com/in/piyush-kumar-556aba33b/",
  github: "https://github.com/int01001",
  edits:
    "https://drive.google.com/drive/u/1/folders/1cEFXSPAAlIbOwCV8AmHAyJi7i0aaRe49",
  instagram: "https://www.instagram.com/piyu.sshhh._/"
};

const focusAreas = [
  {
    icon: Clapperboard,
    title: "Video Editing",
    text: "Sharp cuts, polished pacing, and visual storytelling for social-first work."
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    text: "Building practical web experiences from interface to logic."
  },
  {
    icon: Sparkles,
    title: "AI/ML",
    text: "Exploring intelligent systems, creative tooling, and automation."
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <InteractiveBackground />
      <div className="ambient-grid" aria-hidden="true" />

      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary links">
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">Piyush Kumar</h1>
            <p className="role">Editor. Full stack developer. AI/ML enthusiast.</p>
            <p className="intro">
              I build clean digital experiences, experiment with intelligent
              tools, and shape video edits that feel sharp, modern, and easy to
              watch.
            </p>

            <div className="hero-actions" aria-label="Featured links">
              <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                Connect on LinkedIn
                <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href={links.edits} target="_blank" rel="noreferrer">
                <Clapperboard size={18} />
                View editing samples
              </a>
            </div>
          </div>

          <div className="avatar-card" aria-label="Pixelated avatar of Piyush Kumar">
            <div className="avatar-frame">
              <img src="/avatar.svg" alt="Pixelated avatar of Piyush Kumar" />
            </div>
            <div className="status-pill">Available for creative + dev work</div>
          </div>
        </div>
      </section>

      <section className="panel highlights" aria-label="Highlights">
        <div>
          <p className="section-kicker">Highlights</p>
          <h2>Work that connects code, visuals, and intelligent tools.</h2>
        </div>
        <div className="highlight-grid">
          <a className="highlight-card" href={links.github} target="_blank" rel="noreferrer">
            <Github size={22} />
            <span>GitHub</span>
            <p>Explore projects, experiments, and development work.</p>
          </a>
          <a className="highlight-card" href={links.edits} target="_blank" rel="noreferrer">
            <Clapperboard size={22} />
            <span>Editing Samples</span>
            <p>Watch selected video editing work hosted on Drive.</p>
          </a>
        </div>
      </section>

      <section className="focus-grid" aria-label="What I do">
        {focusAreas.map((area) => {
          const Icon = area.icon;
          return (
            <article className="focus-card" key={area.title}>
              <Icon size={24} />
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </article>
          );
        })}
      </section>

      <section className="panel socials" aria-labelledby="socials-title">
        <div>
          <p className="section-kicker">Socials</p>
          <h2 id="socials-title">One tap away.</h2>
        </div>

        <div className="social-list">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={20} />
            <span>LinkedIn</span>
            <ArrowUpRight size={18} />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={20} />
            <span>GitHub</span>
            <ArrowUpRight size={18} />
          </a>
          <a href={links.edits} target="_blank" rel="noreferrer">
            <Clapperboard size={20} />
            <span>Video Work</span>
            <ArrowUpRight size={18} />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <Instagram size={20} />
            <span>Instagram</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
