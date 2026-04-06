"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

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

export default function CarouselPackageDemoPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Package Demo
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight">
                Recently applied for this job
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-300">
                This version uses a carousel package so you can compare the
                tradeoff against the custom demo page.
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
                Package-based looped carousel with 3 visible cards
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true);
                    emblaApi?.scrollPrev();
                  }}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
                  aria-label="Show previous applicants"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true);
                    emblaApi?.scrollNext();
                  }}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm font-medium transition hover:bg-cyan-400/25"
                  aria-label="Show next applicants"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-4 flex">
                {applicants.map((applicant) => (
                  <div
                    key={applicant.id}
                    className="min-w-0 shrink-0 grow-0 basis-1/3 pl-4"
                  >
                    <article className="h-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/20">
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
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {applicants.map((applicant, index) => (
                <button
                  key={applicant.id}
                  type="button"
                  onClick={() => {
                    setIsPaused(true);
                    emblaApi?.scrollTo(index);
                  }}
                  aria-label={`Jump to applicant ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    selectedIndex === index
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
