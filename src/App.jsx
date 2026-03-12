import { useState } from "react";

export default function Portfolio() {
  const [openEdu, setOpenEdu] = useState(null);
  const [openSubject, setOpenSubject] = useState(null);
  const [showTopoPage, setShowTopoPage] = useState(false);

  const education = [
    {
      title: "Bachelor of Civil Engineering (Honours)",
      place: "Swinburne University of Technology",
      detail: "Year 2, Semester 1",
      items: [
        {
          name: "Structural Mechanics",
          desc: "Study of stress, strain, shear force diagrams and bending moments to understand how structures behave under load.",
          more: "This subject develops the core structural thinking needed in civil engineering. It focuses on how beams and members react under loading, and how engineers use calculations and diagrams to understand internal forces and structural response.",
          image: "/images/Structural Mechanics.png",
        },
        {
          name: "Fluid Mechanics",
          desc: "Behaviour of fluids at rest and in motion including pressure, hydrostatics and Bernoulli principles.",
          more: "This subject introduces how water and other fluids behave in engineering systems. It connects theory with practical applications such as pressure, flow, and fluid movement in pipes, channels, and hydraulic situations.",
          image: "/images/Fluid Mechanics.png",
        },
        {
          name: "Topographical Engineering",
          desc: "Surveying and land measurement techniques used in civil engineering projects.",
          more: "This subject focuses on how engineers measure land, map terrain, and gather accurate site data. It supports real engineering work by building skills in surveying, levels, coordinates, and site layout.",
          image: "/images/Topographical Engineering.png",
        },
        {
          name: "Digital Engineering Project",
          desc: "Team based engineering project using digital tools and modelling methods.",
          more: "This subject is project based and brings engineering ideas into a digital environment. It involves teamwork, planning, modelling, and presenting solutions using modern engineering workflows.",
          image: "/images/Digital Engineering Project.png",
        },
      ],
    },
    {
      title: "Diploma of Engineering",
      place: "Swinburne University of Technology",
      detail: "Completed before entering the bachelor’s program",
      items: [
        { name: "Methods / Specialist Mathematics Stream", desc: "Advanced mathematics used for engineering calculations." },
        { name: "Fundamentals of Programming", desc: "Programming fundamentals for solving engineering problems." },
        { name: "Energy and Motion", desc: "Engineering physics covering forces, motion and energy systems." },
        { name: "Sustainable and Innovative Design", desc: "Engineering design projects using tools such as SolidWorks." },
        { name: "Calculus and Applications", desc: "Mathematics for modelling engineering systems." },
        { name: "Mechanics of Structures", desc: "Introduction to structural behaviour and analysis." },
        { name: "Materials and Processes", desc: "Study of engineering materials and manufacturing processes." },
        { name: "Linear Algebra", desc: "Mathematical systems widely used in engineering analysis." },
      ],
    },
    {
      title: "Foundation Program",
      place: "Swinburne University of Technology",
      detail: "Completed before the diploma",
      items: [
        { name: "Academic and Communication Skills", desc: "Academic writing and communication preparation for university." },
        { name: "General Mathematics", desc: "Mathematical preparation for engineering studies." },
        { name: "Foundation Mathematics", desc: "Algebra and calculus fundamentals." },
        { name: "Design Fundamentals", desc: "Introduction to design thinking." },
        { name: "Innovation and Change", desc: "Understanding innovation and technology." },
        { name: "Information Technology", desc: "Digital computing fundamentals." },
      ],
    },
  ];

  const skills = {
    engineering: ["SolidWorks", "Engineering Design", "Engineering Mathematics", "Structural Engineering Fundamentals"],
    professional: ["Leadership", "Team Management", "Problem Solving", "Project Coordination"],
  };

  const tiles = [
    { id: "about", title: "About", subtitle: "Who I am and where I’m headed" },
    { id: "education", title: "Education", subtitle: "My academic pathway in engineering" },
    { id: "engineering", title: "Engineering", subtitle: "Current studies and technical direction" },
    { id: "leadership", title: "Leadership", subtitle: "Rowing and kayaking captaincy" },
    { id: "skills", title: "Skills", subtitle: "Technical and professional strengths" },
    { id: "contact", title: "Contact", subtitle: "Professional details" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">Portfolio</div>
            <div className="text-lg font-semibold">Jineth Y. Y. Mudalige</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
            {tiles.map((tile) => (
              <button key={tile.id} onClick={() => scrollToSection(tile.id)} className="hover:text-white">
                {tile.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-end">
          <div>
            <div className="mb-6 inline-block rounded-full border border-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Future Structural Engineer
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-tight md:text-8xl">Jineth Y. Y. Mudalige</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Civil engineering student at Swinburne University of Technology, currently in Year 2,
              Semester 1. My focus is on the structural side of civil engineering, backed by a strong
              pathway through foundation and diploma studies, along with leadership experience in
              rowing and kayaking at national level competition.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">Current Focus</div>
            <div className="mt-4 space-y-3 text-base text-neutral-200">
              <p>Bachelor of Civil Engineering (Honours)</p>
              <p>Swinburne University of Technology</p>
              <p>Year 2 · Semester 1</p>
              <p>Structural Engineering Path</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => scrollToSection(tile.id)}
              className="group rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">Section</div>
              <div className="mt-5 text-2xl font-semibold">{tile.title}</div>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{tile.subtitle}</p>
              <div className="mt-8 text-sm font-medium text-neutral-100">Open section →</div>
            </button>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-24 space-y-8">
        <Section id="about" title="About">
          <p className="max-w-4xl text-base leading-8 text-neutral-300">
            I am Jineth Yashanath Yadeeshwara Mudalige, a civil engineering student currently studying
            the Bachelor of Civil Engineering (Honours) at Swinburne University of Technology in
            Australia. I am originally from Sri Lanka and moved to Australia for my studies. Before
            starting my bachelor’s degree, I completed the Swinburne Foundation Program and then a
            Diploma of Engineering, which helped me build a strong base in mathematics, engineering,
            and design. I am especially interested in structural engineering and want to build a
            career on the structural side of civil engineering.
          </p>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-6 lg:grid-cols-3">
            {education.map((entry, index) => (
              <button
                key={entry.title}
                onClick={() => {
                  setOpenEdu(index);
                  setOpenSubject(null);
                }}
                className="rounded-[2rem] border border-neutral-800 p-7 shadow-sm text-left hover:border-neutral-600"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Qualification</div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{entry.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{entry.place}</p>
                <p className="mt-1 text-sm text-neutral-500">{entry.detail}</p>
                <p className="mt-6 text-sm font-medium">Click to explore subjects →</p>
              </button>
            ))}
          </div>

          {openEdu !== null && (
            <div className="mt-10 rounded-[2rem] border border-neutral-800 p-8">
              <button
                onClick={() => {
                  setOpenEdu(null);
                  setOpenSubject(null);
                }}
                className="text-sm mb-6 underline"
              >
                ← Back
              </button>
              <h2 className="text-3xl font-semibold">{education[openEdu].title}</h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {education[openEdu].items.map((sub, subIndex) => (
                  <button
                    key={sub.name}
                    onClick={() => {
                      setOpenSubject(subIndex);
                      setShowTopoPage(false);
                    }}
                    className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]"
                  >
                    <h3 className="text-xl font-semibold">{sub.name}</h3>
                    <p className="text-neutral-300 mt-3 leading-7">{sub.desc}</p>
                    <p className="mt-5 text-sm font-medium text-neutral-100">Open subject →</p>
                  </button>
                ))}
              </div>

              {openSubject !== null && openEdu === 0 && !showTopoPage && (
                <div className="mt-8 rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Subject Detail</div>
                      <h3 className="mt-3 text-2xl font-semibold">{education[openEdu].items[openSubject].name}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      {education[openEdu].items[openSubject].name === "Topographical Engineering" && (
                        <button
                          onClick={() => setShowTopoPage(true)}
                          className="rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 hover:bg-neutral-900"
                        >
                          Read more
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setOpenSubject(null);
                          setShowTopoPage(false);
                        }}
                        className="text-sm underline"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <p className="text-neutral-300 leading-8">
                        {education[openEdu].items[openSubject].more}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-900 p-3">
                      <img
                        key={education[openEdu].items[openSubject].image}
                        src={education[openEdu].items[openSubject].image}
                        alt={education[openEdu].items[openSubject].name}
                        className="block w-full max-w-full h-[320px] object-cover rounded-[1rem]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {openSubject !== null &&
                openEdu === 0 &&
                showTopoPage &&
                education[openEdu].items[openSubject].name === "Topographical Engineering" && (
                  <div className="mt-8 rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-8">
                    <button
                      onClick={() => setShowTopoPage(false)}
                      className="text-sm underline"
                    >
                      ← Back to subject overview
                    </button>

                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Topographical Engineering</div>
                      <h3 className="mt-3 text-3xl font-semibold">Detailed Work</h3>
                      <p className="mt-4 max-w-3xl text-neutral-300 leading-8">
                        This page is for the detailed work completed in Topographical Engineering. You can add your own site work, surveying tasks, mapping exercises, field activities, drawings, and any project notes here.
                      </p>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-900 p-4">
                        <img
                          src="/images/topographical-fieldwork.jpg"
                          alt="Levelling survey fieldwork"
                          className="w-full h-[320px] object-cover rounded-xl"
                        />
                        <p className="mt-3 text-xs text-neutral-500">
                          Practical levelling work completed during Topographical Engineering class.
                        </p>

                        <p className="mt-5 text-neutral-300 leading-8 text-sm">
                          During the practical sessions for Topographical Engineering, we carried out
                          levelling exercises using an automatic level and staff. In week 1 we
                          performed the two peg test to check the accuracy of the instrument. On our
                          first attempt, the accuracy was not up to the required standard, so we
                          repeated the test. We then completed it a second and third time, and our
                          accuracy improved clearly with each attempt.
                        </p>

                        <p className="mt-4 text-neutral-300 leading-8 text-sm">
                          In week 2, we again worked on the two peg test and the improvement in
                          accuracy was visible. We also completed a project where we had to measure
                          the elevation difference from point A to point B, and then measure it again
                          from point B back to point A in order to calculate the error. After
                          subtracting the sum of all BS readings from the sum of all FS readings, we
                          obtained 0.015, which was within the required standard of less than 0.020.
                        </p>

                        <p className="mt-4 text-neutral-300 leading-8 text-sm">
                          I did make some errors during the process, but luckily we double checked
                          each reading before writing it down. Some of the mistakes included reading
                          from the wrong crosshair and counting up the staff incorrectly. Even so,
                          this practical work helped me understand how important precision,
                          observation, and checking measurements are in surveying.
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-dashed border-neutral-700 bg-neutral-900 p-6 min-h-[260px] flex items-center justify-center text-center text-neutral-500">
                        Add topographical image 2 here
                      </div>

                      <div className="rounded-[1.5rem] border border-dashed border-neutral-700 bg-neutral-900 p-6 min-h-[260px] flex items-center justify-center text-center text-neutral-500 lg:col-span-2">
                        Add topographical image 3 or drawing here
                      </div>
                    </div>

                    <div className="mt-10 rounded-[1.5rem] border border-neutral-800 bg-neutral-900 p-6">
                      <h4 className="text-xl font-semibold">My Work in This Subject</h4>
                      <p className="mt-4 text-neutral-300 leading-8">
                        Add your own writing here about what you did in this subject, what practical work you completed, what software or tools you used, and what you learned from the field or class activities.
                      </p>
                    </div>
                  </div>
                )}
            </div>
          )}
        </Section>

        <Section id="engineering" title="Engineering">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-neutral-800 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Current Studies</div>
              <h3 className="mt-4 text-2xl font-semibold">Year 2, Semester 1</h3>
              <ul className="mt-6 space-y-3 text-base leading-8 text-neutral-300">
                <li>• Structural Mechanics</li>
                <li>• Fluid Mechanics</li>
                <li>• Topographical Engineering</li>
                <li>• Digital Engineering Project</li>
              </ul>
            </article>

            <article className="rounded-[2rem] border border-neutral-800 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Design Interest</div>
              <h3 className="mt-4 text-2xl font-semibold">Structural Direction</h3>
              <p className="mt-6 text-base leading-8 text-neutral-300">
                My main interest in civil engineering is the structural side. I am interested in how
                structures behave under forces and loads and how engineering design ensures safety
                and stability in real structures.
              </p>
            </article>
          </div>
        </Section>

        <Section id="leadership" title="Leadership">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Sport & Responsibility</div>
              <h3 className="mt-4 text-2xl font-semibold">D. S. Senanayake College</h3>
              <div className="mt-6 space-y-3 text-base text-neutral-300">
                <p>Vice Captain · 2022 – 2023</p>
                <p>Captain · 2023 – 2024</p>
                <p>National 2nd Place</p>
                <p>National 3rd Place</p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Gallery</div>
              <h3 className="mt-4 text-2xl font-semibold">Rowing & Kayaking</h3>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <img src="/images/AdobeStock_334372094.jpeg" alt="Rowing crew boat" className="rounded-xl object-cover w-full h-48" />
                <img src="/images/AdobeStock_10784653.jpeg" alt="Single rowing scull" className="rounded-xl object-cover w-full h-48" />
                <img src="/images/AdobeStock_747885421.jpeg" alt="Kayaking action" className="rounded-xl object-cover w-full h-48" />
                <img src="/images/AdobeStock_1687167796.jpeg" alt="Kayak paddle close up" className="rounded-xl object-cover w-full h-48" />
              </div>

              <p className="mt-6 text-sm text-neutral-400">
                Representative images of rowing and kayaking to illustrate the sport and leadership experience.
              </p>
            </article>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-neutral-800 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Technical</div>
              <h3 className="mt-4 text-2xl font-semibold">Engineering Skills</h3>
              <ul className="mt-6 space-y-3 text-base leading-8 text-neutral-300">
                {skills.engineering.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-neutral-800 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Professional</div>
              <h3 className="mt-4 text-2xl font-semibold">Core Strengths</h3>
              <ul className="mt-6 space-y-3 text-base leading-8 text-neutral-300">
                {skills.professional.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-[2rem] border border-neutral-800 p-8 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Contact</div>
            <h3 className="mt-4 text-2xl font-semibold">Professional Enquiries</h3>
            <p className="mt-6 text-base leading-8 text-neutral-300">jinethmudalige27@gmail.com</p>
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 md:p-10 transition-opacity duration-500">
      <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">{title}</div>
      <div className="mt-6">{children}</div>
    </section>
  );
}