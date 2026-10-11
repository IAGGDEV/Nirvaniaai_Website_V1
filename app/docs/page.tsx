import Link from "next/link";

export const metadata = { title: "Technical Overview — Nirvania.ai", description: "Product direction and architecture principles for Nirvania.ai." };

const principles = [
  ["Workflow orchestration", "Represent a complex business request as an explicit sequence of bounded tasks, with state and ownership visible at each step."],
  ["Specialized agents", "Delegate focused subtasks to agents with narrow responsibilities, clear inputs, and defined outputs."],
  ["Tool boundaries", "Connect business tools through scoped permissions and validate proposed actions before execution."],
  ["Human review", "Keep people in control of consequential decisions, exceptions, and actions that require business judgment."],
  ["Evaluation and observability", "Track task outcomes, failures, and quality signals so workflows can be inspected and improved."],
];

export default function Docs() {
  return <main className="min-h-screen bg-[#08090b] text-zinc-100">
    <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-8"><Link href="/" className="text-sm font-semibold tracking-tight">nirvania<span className="text-zinc-500">.ai</span><span className="ml-3 border-l border-white/15 pl-3 text-xs font-normal text-zinc-500">Docs</span></Link><Link href="/" className="text-xs text-zinc-400 hover:text-white">← Back to home</Link></header>
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-violet-200/80">Technical overview · v0.1</p>
      <h1 className="mt-5 text-4xl font-medium tracking-[-.05em] sm:text-5xl">Nirvania.ai product direction</h1>
      <p className="mt-6 text-base leading-8 text-zinc-400">Nirvania.ai is building cognitive infrastructure for high-ticket enterprise workflows: a coordination layer for multi-step B2B operations involving AI agents, business tools, and human review.</p>
      <div className="mt-10 rounded-xl border border-amber-200/15 bg-amber-100/[.035] p-4 text-xs leading-6 text-zinc-400"><span className="font-medium text-amber-100">Early-stage project.</span> This overview describes product direction and design principles. It does not claim that production integrations, certifications, customer deployments, or service-level commitments are currently available.</div>
      <h2 className="mt-14 text-xl font-medium tracking-tight">Architecture principles</h2>
      <div className="mt-5 divide-y divide-white/[.08] border-y border-white/[.08]">{principles.map(([title, desc], i) => <section key={title} className="grid gap-2 py-5 sm:grid-cols-[38px_1fr]"><span className="font-mono text-[10px] text-violet-200/60">0{i+1}</span><div><h3 className="text-sm font-medium">{title}</h3><p className="mt-2 text-xs leading-6 text-zinc-500">{desc}</p></div></section>)}</div>
      <h2 className="mt-14 text-xl font-medium tracking-tight">Technology direction</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-400">The current technology direction includes Claude 3.5 Sonnet, Next.js, Python, and Supabase. The public stack list describes intended or selected technologies; it should be updated as implementation and provider choices evolve.</p>
      <h2 className="mt-14 text-xl font-medium tracking-tight">Early access</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-400">We are interested in conversations with teams operating complex, exception-heavy B2B workflows. Share the workflow, systems involved, approval boundaries, and what a successful outcome would look like.</p>
      <a href="mailto:ceo@nirvaniaai.com?subject=Nirvania.ai%20early%20access" className="mt-6 inline-flex rounded-lg bg-violet-200 px-4 py-3 text-xs font-semibold text-[#17131f] hover:bg-violet-100">Request Early Access →</a>
      <p className="mt-20 border-t border-white/[.08] pt-5 text-[10px] text-zinc-600">Nirvania.ai · Tampico, MX · <a href="mailto:ceo@nirvaniaai.com" className="hover:text-zinc-400">ceo@nirvaniaai.com</a></p>
    </article>
  </main>;
}
