const projects = [
  {
    title: "Smart Grip Trainer",
    description:
      "An Arduino-based grip-strength device using a force-sensitive resistor, OLED display, LEDs, and audio feedback.",
    tools: "Arduino · Embedded Systems · Hardware",
  },
  {
    title: "Network Security Labs",
    description:
      "Hands-on work involving packet analysis, networking protocols, Kali Linux, virtual machines, and web vulnerabilities.",
    tools: "Wireshark · Kali Linux · Networking",
  },
  {
    title: "AI Rehabilitation Navigator",
    description:
      "A chatbot prototype designed to help users navigate rehabilitation information and related resources.",
    tools: "AI · Product Design · Prototyping",
  },
];

const technicalLabs = [
  {
    title: "Buffer Overflow Lab",
    category: "Software Security",
    description:
      "Explored how unsafe memory operations can cause a buffer overflow and demonstrated the behavior of a vulnerable program in a controlled lab environment.",
    skills: [
      "Buffer Overflows",
      "Memory Safety",
      "Linux",
      "Software Vulnerabilities",
    ],
    youtubeId: "Hx4TkcTtEik",
  },
  {
    title: "CPU Scheduling Algorithm in Python",
    category: "Operating Systems",
    description:
      "Implemented and demonstrated a CPU scheduling algorithm in Python, using process data to calculate and display scheduling behavior and results.",
    skills: [
      "Python",
      "CPU Scheduling",
      "Operating Systems",
      "Algorithm Design",
    ],
    youtubeId: "Sk1ZzyJXNbA",
  },
  {
    title: "Linux USB Storage Management",
    category: "Linux Administration",
    description:
      "Partitioned, formatted, mounted, and inspected a USB storage device using Linux command-line tools and the ext4 filesystem.",
    skills: [
      "Linux",
      "Disk Partitioning",
      "ext4",
      "Filesystem Management",
    ],
    youtubeId: "IQqzrfkhY0A",
  },
  {
    title: "Docker Container and Nginx Deployment",
    category: "Containerization",
    description:
      "Installed and verified Docker, created containers, worked with Linux images, and deployed a customized webpage through an Nginx container.",
    skills: ["Docker", "Nginx", "Linux", "Containers"],
    youtubeId: "krX3l2cu8_Q",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#172033]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-lg font-semibold">
            ZA
          </a>

          <div className="hidden gap-7 text-sm text-[#5f6673] md:flex">
            <a href="#about" className="hover:text-[#172033]">
              About
            </a>

            <a href="#projects" className="hover:text-[#172033]">
              Projects
            </a>

            <a href="#labs" className="hover:text-[#172033]">
              Technical Experience
            </a>

            <a href="#skills" className="hover:text-[#172033]">
              Skills
            </a>

            <a href="#contact" className="hover:text-[#172033]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#172033] px-5 py-2.5 text-sm font-medium text-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-[82vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#536d8c]">
            Cybersecurity Engineering Student
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Building thoughtful, practical security solutions.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6673]">
            I&apos;m Zaynab Abdulquddos, a Cybersecurity Engineering student at
            George Mason University interested in network defense,
            vulnerability analysis, technical leadership, and public-service
            cybersecurity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View my work
            </a>

            <a
              href="#labs"
              className="rounded-full border border-[#172033] px-6 py-3 text-sm font-medium transition hover:bg-[#172033] hover:text-white"
            >
              View technical demos
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#536d8c]">
              About
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A little about me
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#5f6673]">
            <p>
              I am pursuing a Bachelor of Engineering in Cybersecurity
              Engineering at George Mason University. My coursework and
              practical experience have drawn me toward networking, defensive
              security, and vulnerability analysis.
            </p>

            <p>
              Outside the classroom, I have developed leadership and
              communication skills through Women in CyberSecurity and my work
              as a tutor.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#536d8c]">
          Featured Projects
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Selected work
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#5f6673]">
          A selection of engineering and technology projects involving
          hardware, software, networking, and user-focused design.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#536d8c]">
                {project.tools}
              </p>

              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-[#5f6673]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Labs */}
      <section id="labs" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#536d8c]">
            Hands-On Security Experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Technical demonstrations
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#5f6673]">
            These demonstrations highlight practical experience with Linux
            administration, system hardening, storage management, containers,
            and web-service deployment.
          </p>

          <div className="mt-12 space-y-10">
            {technicalLabs.map((lab) => (
              <article
                key={lab.title}
                className="overflow-hidden rounded-3xl border border-black/10 bg-[#f8f7f4]"
              >
                <div className="grid md:grid-cols-[1.1fr_1fr]">
                  {/* Video */}
                  <div className="aspect-video bg-black">
                    {lab.youtubeId.startsWith("PASTE_") ? (
                      <div className="flex h-full items-center justify-center px-8 text-center text-sm text-white/70">
                        Add the YouTube video ID in the technicalLabs array to
                        display this video.
                      </div>
                    ) : (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${lab.youtubeId}`}
                        title={`${lab.title} video demonstration`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Description */}
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#536d8c]">
                      {lab.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                      {lab.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#5f6673]">
                      {lab.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {lab.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#536d8c]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {!lab.youtubeId.startsWith("PASTE_") && (
                      <a
                        href={`https://www.youtube.com/watch?v=${lab.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#536d8c] hover:underline"
                      >
                        Watch on YouTube
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#172033] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7c8dc]">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Technical foundation
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Programming</h3>

              <p className="mt-4 leading-8 text-white/70">
                Python, C, MATLAB, TypeScript fundamentals
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Cybersecurity</h3>

              <p className="mt-4 leading-8 text-white/70">
                Network security, system hardening, packet analysis,
                vulnerability analysis, security fundamentals
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Platforms and Tools</h3>

              <p className="mt-4 leading-8 text-white/70">
                Linux, Docker, Nginx, Wireshark, Kali Linux, GitHub, VS Code,
                virtual machines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#536d8c]">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6673]">
            I&apos;m interested in cybersecurity internships, professional
            development opportunities, and meaningful technical projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:zaynababdulquddos@gmail.com"
              className="rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/zaynab-a-2a5403302"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#172033] px-6 py-3 text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#5f6673] sm:flex-row sm:justify-between">
          <p>© 2026 Zaynab Abdulquddos</p>

          <a href="#home" className="hover:text-[#172033]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}