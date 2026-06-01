"use client";

import { useState, useEffect } from "react";

/* ════════════════════════════════════════════════════════════
   ⬇️  YOUR CONTENT — edit everything below. No other file needed.
   ════════════════════════════════════════════════════════════ */

const profile = {
  name: "Rishikumar Mathiazhagan",
  title: "Analytical Data Professional",
  bio: "Analytical data professional with 3+ years of experience and an MS in Business Analytics, specializing in actionable analytics, A/B testing, and KPI optimization to drive paid user acquisition and growth.",
  email: "rishimathi@gmail.com",
  phone: "(858) 241-1288",
  linkedin: "https://www.linkedin.com/in/rishimathi",
  github: "https://github.com/rishimathi2824?tab=repositories", //
  picture: "/profile.svg", // ← drop your photo in /public and point here (e.g. "/me.jpg")
  resumeFile: "/resume.pdf", // ← drop your resume PDF in /public to enable the download button
};

const skills = [
  {
    title: "Programming & Big Data",
    items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "SQL", "R"],
  },
  {
    title: "Operations & AI",
    items: ["AI Automations", "Gen AI Agents", "Workflow Streamlining", "Automated QA"],
  },
  {
    title: "Data Engineering",
    items: ["ETL Pipelines", "Data Quality", "Data Modeling", "Data Integration"],
  },
  {
    title: "BI & Analytics",
    items: ["Tableau", "Power BI", "Excel Modeling", "A/B Testing", "Statistics"],
  },
  {
    title: "Cloud & Collaboration",
    items: ["AWS (S3, EC2)", "Databricks", "Agile / Jira", "Git / GitHub"],
  },
];

const experience = [
  {
    role: "Research Assistant",
    org: "University of California, San Diego, CA",
    when: "05/2025 — Present",
    points: [
      "Built and deployed automated data-quality monitoring for 30,000+ records using Python validation checks and anomaly logic to surface inconsistencies in real time.",
      "Standardized definitions and controls with SQL and Python, reducing reporting risk and automating recurring exception reporting to remove manual QA bottlenecks.",
    ],
  },
  {
    role: "Business Consultant — Thermo Fisher",
    org: "University of California, San Diego, CA",
    when: "04/2025 — 06/2025",
    points: [
      "Created self-serve Tableau dashboards and drill-down scorecards, merging ~14,000 records with SQL and Python to remove reporting bottlenecks.",
      "Conducted feature engineering and statistical analysis to isolate friction points in order-fulfillment, translating findings into prioritized operational changes.",
    ],
  },
  {
    role: "Business Analyst — Delivery",
    org: "Quantiphi Analytics, Bangalore, India",
    when: "11/2022 — 08/2023",
    points: [
      "Led cross-functional delivery of an automated recommendation workflow from concept to AWS-hosted deployment (Amazon S3, EC2).",
      "Partnered with Product and Engineering to define success metrics, ensuring Spark and SQL-driven analytics aligned with business outcomes.",
    ],
  },
  {
    role: "Business Analyst — Presales",
    org: "Quantiphi Analytics, Bangalore, India",
    when: "07/2021 — 11/2022",
    points: [
      "Led GTM strategy and design for custom AI solutions, translating client discovery into scoped approaches for $100K–$250K proposals.",
      "Synthesized pipeline and whitespace data to identify growth opportunities and built executive-ready presentations for strategic planning and QBRs.",
    ],
  },
];

const education = [
  {
    school: "University of California, San Diego, CA",
    degree: "M.S. in Business Analytics",
    when: "Dec 2025 · GPA 3.8",
  },
  {
    school: "Manipal Institute of Technology, India",
    degree: "B.Tech in Mechanical Engineering",
    when: "Aug 2021 · GPA 3.62",
  },
];

/* PROJECTS
   - Set `featured: true` on the 3 you want shown as big cards up top.
     (If you mark more or fewer than 3, it still works — it shows whatever
      you flag as featured. Aim for 3 to match the layout.)
   - `tags` are the filter buttons in "More Projects" (tools / use cases).
     The filter list builds itself from whatever tags you use here.
   - To add a project: copy one block, edit it, done. Tabs/filters auto-update.
*/
const projects = [
  {
    name: "Intuit QuickBooks Propensity Modeling",
    featured: true,
    blurb: "Regression propensity models + A/B testing that drove $380K in incremental profit.",
    stack: ["Python", "Regression", "A/B Testing"],
    tags: ["Python", "A/B Testing", "Growth"],
    points: [
      "Built regression-based propensity models and automated Python pipelines to forecast upgrade likelihood across 75,000 small-business customers.",
      "Designed and analyzed A/B tests and conversion funnels to optimize acquisition, improving ROAS to drive $380K in incremental profit.",
      "Benchmarked a neural-network model to capture non-linear signals and folded the strongest insights into an interpretable solution.",
    ],
    link: "",
  },
  {
    name: "Credit Card Financial Dashboard",
    featured: true,
    blurb: "Interactive Power BI dashboard on PostgreSQL visualizing $55M in revenue.",
    stack: ["PostgreSQL", "Power BI", "DAX"],
    tags: ["Power BI", "SQL", "Dashboards"],
    points: [
      "Developed an interactive Power BI dashboard on PostgreSQL to visualize $55M in revenue and $45M in transaction volume.",
      "Quantified KPIs including delinquency (6.06%) and activation (57%), optimizing risk monitoring.",
      "Engineered DAX measures tracking WoW performance — found a 28.8% revenue spike and 93% transaction contribution from Blue & Silver segments.",
    ],
    link: "",
  },
  {
    name: "Customer Churn Prediction",
    featured: true,
    blurb: "Compared ML churn models on 39K customers and built a 60-month CLV model.",
    stack: ["Python", "Logistic Regression", "Neural Nets"],
    tags: ["Python", "Machine Learning", "Growth"],
    points: [
      "Built and compared churn models on 39,000 customers, calibrating to a 2% base rate and selecting the best holdout performer.",
      "Identified top churn drivers via permutation importance and translated results into retention triggers and monitoring KPIs.",
      "Quantified impact with a 60-month CLV model prioritizing cohorts up to 4.17% churn vs. a 2% baseline.",
    ],
    link: "",
  },

  // ── More projects (not featured). Add as many as you like below. ──
  // Example template — copy this block, set featured:false, fill it in:
  // {
  //   name: "Project Name",
  //   featured: false,
  //   blurb: "One-line summary shown on the card.",
  //   stack: ["Tool A", "Tool B"],
  //   tags: ["Python", "SQL"],            // these power the filter buttons
  //   points: ["Bullet one.", "Bullet two."],
  //   link: "https://github.com/you/repo", // optional; leave "" to hide
  // },
];

/* ════════════════════════════════════════════════════════════
   ⬇️  Layout & logic — you usually won't need to touch below here.
   ════════════════════════════════════════════════════════════ */

function Icon({ name }) {
  const paths = {
    sun: "M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
    moon: "M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z",
    linkedin:
      "M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z",
    github:
      "M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .3.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z",
    download: "M12 3v12M7 10l5 5 5-5M5 21h14",
    mail: "M3 5h18v14H3zM3 6l9 7 9-7",
    arrow: "M5 12h14M13 6l6 6-6 6",
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All");
  const [activeFeatured, setActiveFeatured] = useState(0); // which featured tab is open
  const [openProject, setOpenProject] = useState(null); // name of expanded "more" card

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  // Split projects into the featured ones and the rest.
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  // Build filter buttons automatically from the tags used in "more" projects.
  const allTags = ["All", ...new Set(more.flatMap((p) => p.tags || []))];
  const visibleMore =
    filter === "All" ? more : more.filter((p) => (p.tags || []).includes(filter));

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="dot" />
            {profile.name.split(" ")[0]} {profile.name.split(" ")[1]?.[0]}.
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-btn theme-keep"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="wrap hero-grid">
          <div className="reveal" style={{ animationDelay: "0.05s" }}>
            <div className="eyebrow">Portfolio · Data &amp; Analytics</div>
            <h1>
              {profile.name.split(" ")[0]}{" "}
              <span className="accent">{profile.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="bio">{profile.bio}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={profile.resumeFile} download>
                <Icon name="download" /> Download Resume
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>
          <div className="avatar-wrap reveal" style={{ animationDelay: "0.2s" }}>
            <img className="avatar" src={profile.picture} alt={profile.name} />
          </div>
        </div>
      </header>

      {/* ABOUT / SKILLS */}
      <section id="about" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-num">01 — About</span>
            <h2>Skills &amp; toolkit</h2>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <h3>{s.title}</h3>
                <div className="chips">
                  {s.items.map((i) => (
                    <span className="chip" key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-num">02 — Resume</span>
            <h2>Experience &amp; education</h2>
          </div>
          <div className="timeline">
            {experience.map((e) => (
              <div className="tl-item" key={e.role + e.when}>
                <div className="tl-role">{e.role}</div>
                <div className="tl-meta">
                  <span>{e.org}</span>
                  <span className="when">{e.when}</span>
                </div>
                <ul className="tl-points">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="edu-grid">
            {education.map((ed) => (
              <div className="edu-card" key={ed.school}>
                <div className="when">{ed.when}</div>
                <div className="deg">{ed.degree}</div>
                <div className="school">{ed.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-num">03 — Projects</span>
            <h2>Featured work</h2>
          </div>

          {/* Featured: click between projects (tabs) */}
          <div className="tabs">
            {featured.map((p, i) => (
              <button
                key={p.name}
                className={"tab" + (i === activeFeatured ? " active" : "")}
                onClick={() => setActiveFeatured(i)}
              >
                {p.name}
              </button>
            ))}
          </div>
          {featured[activeFeatured] && (
            <div className="project-panel" key={activeFeatured}>
              <h3>{featured[activeFeatured].name}</h3>
              {featured[activeFeatured].blurb ? (
                <p className="feature-blurb">{featured[activeFeatured].blurb}</p>
              ) : null}
              <div className="stack">
                {featured[activeFeatured].stack.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              <ul>
                {featured[activeFeatured].points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
              {featured[activeFeatured].link ? (
                <a
                  className="project-link"
                  href={featured[activeFeatured].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <Icon name="arrow" />
                </a>
              ) : null}
            </div>
          )}

          {/* More projects: only render if there are any */}
          {more.length > 0 && (
            <div className="more-projects">
              <div className="section-head" style={{ marginTop: "10px" }}>
                <span className="section-num">More projects</span>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  Browse by tool or use case
                </h2>
              </div>

              {/* Filter buttons (auto-built from tags) */}
              <div className="tabs">
                {allTags.map((t) => (
                  <button
                    key={t}
                    className={"tab" + (t === filter ? " active" : "")}
                    onClick={() => {
                      setFilter(t);
                      setOpenProject(null);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Compact cards; click to expand details */}
              <div className="more-grid">
                {visibleMore.map((p) => {
                  const isOpen = openProject === p.name;
                  return (
                    <article
                      className={"mini-card" + (isOpen ? " open" : "")}
                      key={p.name}
                      onClick={() => setOpenProject(isOpen ? null : p.name)}
                    >
                      <div className="mini-head">
                        <h4>{p.name}</h4>
                        <span className="mini-toggle">{isOpen ? "–" : "+"}</span>
                      </div>
                      {p.blurb ? <p className="feature-blurb">{p.blurb}</p> : null}
                      <div className="stack">
                        {p.stack.map((t) => (
                          <span className="chip" key={t}>{t}</span>
                        ))}
                      </div>
                      {isOpen && (
                        <>
                          <ul>
                            {p.points.map((pt, idx) => (
                              <li key={idx}>{pt}</li>
                            ))}
                          </ul>
                          {p.link ? (
                            <a
                              className="project-link"
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View project <Icon name="arrow" />
                            </a>
                          ) : null}
                        </>
                      )}
                    </article>
                  );
                })}
                {visibleMore.length === 0 && (
                  <p className="empty-note">No projects tagged “{filter}” yet.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="wrap">
          <div className="eyebrow">04 — Contact</div>
          <h2>Let&apos;s work together</h2>
          <p>
            Open to data analytics, growth, and BI roles. Reach out and I&apos;ll get
            back to you.
          </p>
          <div className="contact-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="footer-note">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js
      </div>
    </>
  );
}
