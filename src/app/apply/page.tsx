"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";

type RoleType = "EMS" | "PD" | "MECH";

type Question = {
  key: string;
  label: string;
  multiline?: boolean;
  placeholder?: string;
};

type FormState = {
  role: RoleType;
  answers: Record<string, string>;
};

const baseQuestions: Question[] = [
  { key: "inGameName", label: "In-Game Name", placeholder: "Character name" },
  { key: "age", label: "Age", placeholder: "18+" },
  { key: "discordSteam", label: "Discord ID & Steam link", placeholder: "name#0000 | steamcommunity.com/id/..." },
  { key: "timezoneAvailability", label: "Timezone and availability", placeholder: "PST, weekdays 6pm-10pm" }
];

const emsQuestions: Question[] = [
  { key: "emsExperience", label: "Do you have experience in the medical field?", multiline: true },
  { key: "emsHire", label: "Why should we hire you?", multiline: true },
  { key: "emsQualities", label: "What are the qualities of EMS?", multiline: true },
  { key: "emsPositive", label: "How will you create a positive workspace?", multiline: true },
  { key: "emsPressure", label: "How will you handle high pressure situations?", multiline: true },
  { key: "emsNonCompliant", label: "What will you do with a non compliant patient?", multiline: true },
  { key: "emsCoworker", label: "How will you handle a co-worker who is struggling?", multiline: true }
];

const pdQuestions: Question[] = [
  { key: "pdSteam", label: "Steam link", placeholder: "steamcommunity.com/id/..." },
  { key: "pdGangs", label: "Do you have any gangs/families inside the city?", multiline: true },
  { key: "pdBackground", label: "Provide a short background story of your character.", multiline: true },
  { key: "pdStrengths", label: "What are your character's strengths and weaknesses?", multiline: true },
  { key: "pdExperience", label: "Do you have any previous experience in law enforcement roleplay? If yes, explain.", multiline: true },
  { key: "pdWhy", label: "Why do you want to become a police officer?", multiline: true },
  { key: "pdTraining", label: "Are you willing to undergo the training program?", multiline: true },
  { key: "pdChain", label: "What is Chain Of Command?", multiline: true },
  { key: "pdTrainee", label: "What is Trainee for you?", multiline: true }
];

const mechQuestions: Question[] = [
  { key: "mechExperience", label: "Do you have experience as a mechanic?", multiline: true },
  { key: "mechWhy", label: "Why do you want to join the mechanic team?", multiline: true },
  { key: "mechStrengths", label: "What are your strengths as a mechanic?", multiline: true },
  { key: "mechPressure", label: "How will you handle high pressure repair situations?", multiline: true }
];

const defaultForm: FormState = {
  role: "EMS",
  answers: {}
};

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const activeQuestions = useMemo(() => {
    if (form.role === "PD") {
      return [...baseQuestions, ...pdQuestions];
    }
    if (form.role === "MECH") {
      return [...baseQuestions, ...mechQuestions];
    }
    return [...baseQuestions, ...emsQuestions];
  }, [form.role]);

  const onChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value as RoleType }));
    };

  const onAnswerChange = (key: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setForm((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [key]: value
      }
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: form.role,
          answers: activeQuestions.map((question) => ({
            question: question.label,
            answer: form.answers[question.key] || ""
          }))
        })
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setErrorMessage(payload.error || "Submission failed. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(defaultForm);
    } catch {
      setErrorMessage("Submission failed. Try again.");
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-24 text-white sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/65" data-reveal>
        Whitelist Application
      </p>
      <h1 className="mt-4 text-4xl font-semibold" data-reveal data-reveal-delay="1">
        Apply for EMS, PD, or MECH
      </h1>
      <p className="mt-4 text-slate-300" data-reveal data-reveal-delay="2">
        Submit your details below and the staff will review your application in Discord.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-panel"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Desired Role
            <select
              value={form.role}
              onChange={onChange("role")}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
            >
              <option value="EMS">EMS</option>
              <option value="PD">PD</option>
              <option value="MECH">MECH</option>
            </select>
          </label>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            Questions update automatically based on the role you select.
          </div>
        </div>

        <div className="grid gap-5">
          {activeQuestions.map((question, index) => (
            <label key={question.key} className="grid gap-2 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-cyan-100">
                  Q{index + 1}
                </span>
                {question.label}
              </span>
              {question.multiline ? (
                <textarea
                  required
                  rows={4}
                  value={form.answers[question.key] || ""}
                  onChange={onAnswerChange(question.key)}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
                  placeholder={question.placeholder || "Type your answer"}
                />
              ) : (
                <input
                  required
                  value={form.answers[question.key] || ""}
                  onChange={onAnswerChange(question.key)}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
                  placeholder={question.placeholder || "Type your answer"}
                />
              )}
            </label>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>
          {status === "success" ? <span className="text-sm text-emerald-300">Application sent successfully.</span> : null}
          {status === "error" ? <span className="text-sm text-rose-300">{errorMessage}</span> : null}
        </div>
      </form>
    </main>
  );
}
