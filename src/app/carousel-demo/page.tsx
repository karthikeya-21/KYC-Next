"use client";

import { useEffect, useMemo, useState } from "react";

type Applicant = {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  appliedAt: string;
  skills: string[];
  accentColor: string;
};

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 320;
const CARD_GAP = 16;
const AUTO_SCROLL_MS = 3000;

const applicants: Applicant[] = [
  {
    id: "applicant-1",
    name: "Aarav Mehta",
    role: "Frontend Engineer",
    experience: "4 years experience",
    location: "Bengaluru, India",
    appliedAt: "Applied 12 minutes ago",
    skills: ["React", "TypeScript", "Tailwind"],
    accentColor: "from-sky-500 to-cyan-400",
  },
  {
    id: "applicant-2",
    name: "Neha Sharma",
    role: "UI Developer",
    experience: "3 years experience",
    location: "Pune, India",
    appliedAt: "Applied 28 minutes ago",
    skills: ["Next.js", "Figma", "Motion"],
    accentColor: "from-emerald-500 to-lime-400",
  },
  {
    id: "applicant-3",
    name: "Rohan Patel",
    role: "Full Stack Developer",
    experience: "5 years experience",
    location: "Ahmedabad, India",
    appliedAt: "Applied 40 minutes ago",
    skills: ["Node.js", "Postgres", "REST"],
    accentColor: "from-orange-500 to-amber-400",
  },
  {
    id: "applicant-4",
    name: "Ishita Verma",
    role: "Product Engineer",
    experience: "2 years experience",
    location: "Delhi, India",
    appliedAt: "Applied 1 hour ago",
    skills: ["React", "Testing", "UX"],
    accentColor: "from-fuchsia-500 to-pink-400",
  },
  {
    id: "applicant-5",
    name: "Kabir Nair",
    role: "Frontend Developer",
    experience: "6 years experience",
    location: "Kochi, India",
    appliedAt: "Applied 2 hours ago",
    skills: ["Performance", "A11y", "Design Systems"],
    accentColor: "from-violet-500 to-indigo-400",
  },
  {
    id: "applicant-6",
    name: "Sana Khan",
    role: "React Developer",
    experience: "3.5 years experience",
    location: "Hyderabad, India",
    appliedAt: "Applied 3 hours ago",
    skills: ["React Query", "APIs", "Tailwind"],
    accentColor: "from-rose-500 to-red-400",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CarouselDemoPage() {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_CARDS);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const duplicatedApplicants = useMemo(
    () => [
      ...applicants.slice(-VISIBLE_CARDS),
      ...applicants,
      ...applicants.slice(0, VISIBLE_CARDS),
    ],
    []
  );

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previousIndex) => previousIndex + 1);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  function handlePrevious() {
    setIsPaused(true);
    setCurrentIndex((previousIndex) => previousIndex - 1);
  }

  function handleNext() {
    setIsPaused(true);
    setCurrentIndex((previousIndex) => previousIndex + 1);
  }

  function handleDotClick(index: number) {
    setIsPaused(true);
    setCurrentIndex(VISIBLE_CARDS + index);
  }

  function handleTransitionEnd() {
    if (currentIndex < VISIBLE_CARDS) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + applicants.length);
      return;
    }

    if (currentIndex >= applicants.length + VISIBLE_CARDS) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - applicants.length);
    }
  }

  useEffect(() => {
    if (!transitionEnabled) {
      const timeoutId = window.setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);

      return () => window.clearTimeout(timeoutId);
    }
  }, [transitionEnabled]);

  const activeDotIndex =
    ((currentIndex - VISIBLE_CARDS) % applicants.length + applicants.length) %
    applicants.length;

  const viewportWidth =
    VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;

  const translateX = currentIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Carousel Demo
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight">
                Recently applied for this job
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-300">
                Desktop-first carousel demo with autoplay, infinite looping,
                manual previous/next controls, and direct jump navigation.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-sm text-cyan-100">
              <p className="font-semibold">Role</p>
              <p className="mt-1 text-lg font-bold">Senior Frontend Engineer</p>
            </div>
          </div>

          <div
            className="mt-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="text-sm text-slate-400">
                Showing {VISIBLE_CARDS} applicants at a time
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
                  aria-label="Show previous applicants"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm font-medium transition hover:bg-cyan-400/25"
                  aria-label="Show next applicants"
                >
                  Next
                </button>
              </div>
            </div>

            <div
              className="overflow-hidden"
              style={{ width: `${viewportWidth}px` }}
            >
              <div
                className="flex"
                style={{
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(-${translateX}px)`,
                  transition: transitionEnabled
                    ? "transform 500ms ease"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {duplicatedApplicants.map((applicant, index) => (
                  <article
                    key={`${applicant.id}-${index}`}
                    className="shrink-0 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/20"
                    style={{ width: `${CARD_WIDTH}px` }}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${applicant.accentColor} text-lg font-bold text-white`}
                    >
                      {getInitials(applicant.name)}
                    </div>

                    <div className="mt-5">
                      <h2 className="text-xl font-semibold text-white">
                        {applicant.name}
                      </h2>
                      <p className="mt-1 text-sm text-cyan-300">
                        {applicant.role}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2 text-sm text-slate-300">
                      <p>{applicant.experience}</p>
                      <p>{applicant.location}</p>
                      <p>{applicant.appliedAt}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {applicant.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    >
                      View profile
                    </button>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {applicants.map((applicant, index) => (
                <button
                  key={applicant.id}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  aria-label={`Jump to ${applicant.name}`}
                  className={`h-2.5 rounded-full transition ${
                    activeDotIndex === index
                      ? "w-8 bg-cyan-300"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
