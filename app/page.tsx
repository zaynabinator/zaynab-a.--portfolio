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
    <main className="min-h-screen bg-[#f5f0e6] text-[#263129]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#cbd3c5] bg-[#f5f0e6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="display-font text-3xl font-semibold italic text-[#2f4235]"
          >
            ZA
          </a>

          <div className="hidden gap-7 text-xs uppercase tracking-[0.12em] text-[#687269] md:flex">
            <a href="#about" className="transition hover:text-[#2f4235]">
              About
            </a>

            <a href="#projects" className="transition hover:text-[#2f4235]">
              Projects
            </a>

            <a href="#labs" className="transition hover:text-[#2f4235]">
              Technical Experience
            </a>

            <a href="#skills" className="transition hover:text-[#2f4235]">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-[#2f4235]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#4f6253] px-5 py-2.5 text-sm font-medium text-[#fbf8f1] transition duration-300 hover:bg-[#2f4235]"
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
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6253]">
            Cybersecurity Engineering Student
          </p>

          <h1 className="display-font max-w-4xl text-6xl font-semibold italic leading-[0.95] tracking-tight text-[#2f4235] md:text-8xl">
            Building thoughtful, practical security solutions.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#687269]">
            I&apos;m Zaynab Abdulquddos, a Cybersecurity Engineering student at
            George Mason University interested in network defense,
            vulnerability analysis, technical leadership, and public-service
            cybersecurity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#4f6253] px-6 py-3 text-sm font-medium text-[#fbf8f1] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f4235]"
            >
              View my work
            </a>

            <a
              href="#labs"
              className="rounded-full border border-[#4f6253] px-6 py-3 text-sm font-medium text-[#4f6253] transition duration-300 hover:bg-[#4f6253] hover:text-[#fbf8f1]"
            >
              View technical demos
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[#cbd3c5] bg-[#fbf8f1]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6253]">
              // About
            </p>

            <h2 className="display-font mt-3 text-4xl font-semibold italic tracking-tight text-[#2f4235] md:text-5xl">
              A little about me
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#687269]">
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
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6253]">
          // Featured Projects
        </p>

        <h2 className="display-font mt-3 text-4xl font-semibold italic tracking-tight text-[#2f4235] md:text-5xl">
          Selected work
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#687269]">
          A selection of engineering and technology projects involving
          hardware, software, networking, and user-focused design.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-[#cbd3c5] bg-[#fbf8f1] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#9eaa92] hover:shadow-[0_18px_45px_rgba(47,66,53,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f6253]">
                {project.tools}
              </p>

              <h3 className="display-font mt-5 text-3xl font-semibold tracking-tight text-[#2f4235]">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-[#687269]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Labs */}
      <section
        id="labs"
        className="border-y border-[#cbd3c5] bg-[#fbf8f1]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6253]">
            // Hands-On Security Experience
          </p>

          <h2 className="display-font mt-3 text-4xl font-semibold italic tracking-tight text-[#2f4235] md:text-5xl">
            Technical demonstrations
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#687269]">
            These demonstrations highlight practical experience with Linux
            administration, system hardening, storage management,
            containerization, software security, and operating systems.
          </p>

          <div className="mt-12 space-y-10">
            {technicalLabs.map((lab) => (
              <article
                key={lab.title}
                className="overflow-hidden rounded-[2rem] border border-[#cbd3c5] bg-[#f5f0e6] shadow-[0_14px_35px_rgba(47,66,53,0.08)]"
              >
                <div className="grid md:grid-cols-[1.1fr_1fr]">
                  <div className="aspect-video bg-black">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${lab.youtubeId}`}
                      title={`${lab.title} video demonstration`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6253]">
                      {lab.category}
                    </p>

                    <h3 className="display-font mt-4 text-3xl font-semibold tracking-tight text-[#2f4235] md:text-4xl">
                      {lab.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#687269]">
                      {lab.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {lab.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#b7c2af] bg-[#fbf8f1] px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-[#4f6253]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://www.youtube.com/watch?v=${lab.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#4f6253] hover:underline"
                    >
                      Watch on YouTube
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#2f4235] text-[#fbf8f1]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dce3d5]">
            // Skills
          </p>

          <h2 className="display-font mt-3 text-4xl font-semibold italic tracking-tight text-[#fbf8f1] md:text-5xl">
            Technical foundation
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="display-font text-2xl font-semibold text-[#fbf8f1]">
                Programming
              </h3>

              <p className="mt-4 leading-8 text-[#dce3d5]">
                Python, C, MATLAB, and TypeScript fundamentals
              </p>
            </div>

            <div>
              <h3 className="display-font text-2xl font-semibold text-[#fbf8f1]">
                Cybersecurity
              </h3>

              <p className="mt-4 leading-8 text-[#dce3d5]">
                Network security, system hardening, packet analysis,
                vulnerability analysis, and security fundamentals
              </p>
            </div>

            <div>
              <h3 className="display-font text-2xl font-semibold text-[#fbf8f1]">
                Platforms and Tools
              </h3>

              <p className="mt-4 leading-8 text-[#dce3d5]">
                Linux, Docker, Nginx, Wireshark, Kali Linux, GitHub, VS Code,
                and virtual machines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6253]">
            // Contact
          </p>

          <h2 className="display-font mt-3 text-5xl font-semibold italic tracking-tight text-[#2f4235] md:text-6xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#687269]">
            I&apos;m interested in cybersecurity internships, professional
            development opportunities, and meaningful technical projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:zaynababdulquddos@gmail.com"
              className="rounded-full bg-[#4f6253] px-6 py-3 text-sm font-medium text-[#fbf8f1] transition duration-300 hover:bg-[#2f4235]"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/zaynab-a-2a5403302"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4f6253] px-6 py-3 text-sm font-medium text-[#4f6253] transition duration-300 hover:bg-[#4f6253] hover:text-[#fbf8f1]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#cbd3c5] bg-[#fbf8f1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#687269] sm:flex-row sm:justify-between">
          <p>© 2026 Zaynab Abdulquddos</p>

          <a href="#home" className="transition hover:text-[#2f4235]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}