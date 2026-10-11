const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
    {diagonal ? <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" /> : <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />}
  </svg>
);

function Mark() {
  return <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-lg border border-white/15 bg-white/[.04]"><span className="h-3 w-3 rotate-45 rounded-[3px] border border-violet-300 bg-violet-300/20 shadow-[0_0_16px_rgba(167,139,250,.5)]" /></span>;
}

function WorkflowVisual() {
  const node = "absolute z-10 rounded-xl border border-white/10 bg-[#111216]/95 shadow-[0_16px_55px_rgba(0,0,0,.5)]";
  return (
    <div aria-label="Illustrative workflow diagram showing a request moving through an orchestrator, specialized agents, and a human review checkpoint" role="img" className="relative mx-auto aspect-[1.38] w-full max-w-[690px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10]">
      <div className="grid-fade absolute inset-0 opacity-70" />
      <div className="glow absolute -left-24 top-0 h-80 w-80 opacity-70" />
      <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.18em] text-zinc-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Illustrative system flow</div>
      <div className="absolute right-5 top-5 rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-widest text-zinc-500">Concept · not a live system</div>
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 690 500" preserveAspectRatio="none">
        <defs><linearGradient id="route" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a78bfa" stopOpacity=".75"/><stop offset="1" stopColor="#a5f3d0" stopOpacity=".42"/></linearGradient></defs>
        <path d="M145 252 H226 M346 252 H390 M480 252 C526 252 510 155 548 155 M480 252 C526 252 510 352 548 352" stroke="url(#route)" strokeWidth="1.4" fill="none" className="flow-line" />
        <path d="M596 193 V313" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeDasharray="3 5" />
      </svg>
      <div className={`${node} left-[5%] top-[43%] w-[22%] p-3 sm:p-4`}>
        <div className="mb-3 grid h-7 w-7 place-items-center rounded-lg bg-white/[.06] text-zinc-300">↳</div><p className="text-[10px] font-medium text-zinc-100 sm:text-xs">Business request</p><p className="mt-1 text-[9px] leading-relaxed text-zinc-500 sm:text-[10px]">Context + constraints</p>
      </div>
      <div className={`${node} left-[33%] top-[39%] w-[22%] border-violet-300/25 p-3 sm:p-4`}>
        <div className="mb-3 grid h-7 w-7 place-items-center rounded-lg bg-violet-300/10 text-violet-200">✳</div><p className="text-[10px] font-medium text-zinc-100 sm:text-xs">Orchestration</p><p className="mt-1 text-[9px] leading-relaxed text-zinc-500 sm:text-[10px]">Plan · route · verify</p>
      </div>
      <div className={`${node} right-[4%] top-[22%] w-[25%] p-3 sm:p-4`}>
        <div className="mb-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-300"/><p className="text-[10px] font-medium text-zinc-100 sm:text-xs">Research agent</p></div><p className="text-[9px] text-zinc-500 sm:text-[10px]">Gather approved context</p>
      </div>
      <div className={`${node} right-[4%] top-[59%] w-[25%] p-3 sm:p-4`}>
        <div className="mb-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-200"/><p className="text-[10px] font-medium text-zinc-100 sm:text-xs">Operations agent</p></div><p className="text-[9px] text-zinc-500 sm:text-[10px]">Prepare a bounded action</p>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-[9px] text-zinc-400 sm:text-[10px]"><span className="text-amber-200">◇</span> Human approval at consequential steps</div>
    </div>
  );
}

const stack = ["Claude 3.5 Sonnet", "Next.js", "Python", "Supabase"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nirvania.ai home"><Mark/><span className="text-sm font-semibold tracking-tight">nirvania<span className="text-zinc-500">.ai</span></span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-xs text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#platform">Platform</a><a className="transition hover:text-white" href="#architecture">Architecture</a><a className="transition hover:text-white" href="#trust">Principles</a>
        </nav>
        <a href="https://www.linkedin.com/search/results/people/?keywords=Irving%20Nirvania%20AI" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-[11px] text-zinc-300 transition hover:border-white/25 hover:text-white sm:px-4 sm:text-xs">Founder LinkedIn <Arrow diagonal/></a>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="grid-fade pointer-events-none absolute inset-x-0 -top-12 h-[570px] opacity-70"/><div className="glow pointer-events-none absolute -top-32 left-[30%] h-[500px] w-[700px]"/>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-[10px] tracking-[.14em] text-zinc-400 uppercase sm:text-[11px]"><span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_#a78bfa]"/> Early access · Enterprise operations</div>
          <h1 className="text-balance text-[clamp(2.7rem,7vw,5.6rem)] font-medium leading-[.99] tracking-[-.065em] text-white">Cognitive infrastructure for <span className="bg-gradient-to-r from-violet-200 via-white to-emerald-100 bg-clip-text text-transparent">high-ticket enterprise workflows.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">Nirvania.ai is building a multi-agent orchestration layer for complex B2B operations—coordinating specialized AI, business tools, and human judgment across work that matters.</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href="mailto:ceo@nirvaniaai.com?subject=Nirvania.ai%20early%20access" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-violet-200 px-5 py-3 text-xs font-semibold text-[#17131f] transition hover:bg-violet-100">Request Early Access <Arrow/></a>
            <a href="/docs" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[.025] px-5 py-3 text-xs font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[.05]">Read the Docs <Arrow diagonal/></a>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20"><WorkflowVisual/></div>
        <div className="relative mx-auto mt-12 flex max-w-4xl flex-col items-center gap-5 border-t border-white/[.08] pt-6 sm:flex-row sm:justify-between">
          <span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Technology direction</span><div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">{stack.map((item, i) => <span key={item} className="flex items-center gap-2 text-xs text-zinc-400"><span className="h-1 w-1 rounded-full" style={{backgroundColor: i === 0 ? "#c4b5fd" : "#55565b"}}/>{item}</span>)}</div>
        </div>
      </section>

      <section id="platform" className="border-y border-white/[.08] bg-[#0b0c0f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28">
          <div><p className="text-[10px] uppercase tracking-[.2em] text-violet-200/80">The platform</p><h2 className="mt-5 max-w-lg text-3xl font-medium leading-tight tracking-[-.04em] text-white sm:text-4xl">From scattered tasks to a coordinated operation.</h2><p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">High-value workflows cross teams, systems, and approval boundaries. Nirvania is designed to give that work a structured path from request to reviewable outcome.</p></div>
          <div className="grid gap-0 sm:grid-cols-2 sm:divide-x sm:divide-white/[.08]">
            {[{n:"01",h:"Decompose the work",p:"Turn a complex request into bounded steps with explicit context and constraints."},{n:"02",h:"Coordinate specialists",p:"Route subtasks to purpose-built agents and approved business tools."},{n:"03",h:"Keep decisions visible",p:"Make handoffs, sources, and proposed actions inspectable by the people responsible."},{n:"04",h:"Close the loop",p:"Return a clear result and capture exceptions for the next iteration."}].map((x,i)=><div key={x.n} className={`border-t border-white/[.08] py-6 sm:px-6 ${i > 1 ? "sm:border-b" : ""} ${i % 2 === 0 ? "sm:pl-0" : ""}`}><span className="font-mono text-[10px] text-violet-200/70">{x.n}</span><h3 className="mt-4 text-sm font-medium text-zinc-100">{x.h}</h3><p className="mt-2 max-w-xs text-xs leading-6 text-zinc-500">{x.p}</p></div>)}
          </div>
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center"><p className="text-[10px] uppercase tracking-[.2em] text-violet-200/80">Architecture</p><h2 className="mt-5 text-3xl font-medium tracking-[-.04em] text-white sm:text-4xl">Designed for control at every handoff.</h2><p className="mt-5 text-sm leading-7 text-zinc-400">A practical foundation for workflows that need coordination, traceability, and human ownership—not a black box between a prompt and a business action.</p></div>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[{tag:"ORCHESTRATION",title:"Plan before acting",copy:"Keep workflow state, task boundaries, and routing logic explicit so each step has a defined purpose."},{tag:"GUARDRAILS",title:"Constrain tool use",copy:"Scope access to the tools and context a task requires, with review points for consequential actions."},{tag:"OBSERVABILITY",title:"Make outcomes legible",copy:"Design for inspectable decisions, clear exceptions, and useful feedback throughout the workflow."}].map(c=><article key={c.tag} className="rounded-xl border border-white/[.09] bg-white/[.018] p-6 sm:p-7"><span className="font-mono text-[9px] tracking-[.16em] text-zinc-500">{c.tag}</span><h3 className="mt-8 text-lg font-medium tracking-tight text-zinc-100">{c.title}</h3><p className="mt-3 text-xs leading-6 text-zinc-500">{c.copy}</p></article>)}
        </div>
      </section>

      <section id="trust" className="border-t border-white/[.08] bg-[#0b0c0f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-9 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
          <div className="max-w-2xl"><p className="text-[10px] uppercase tracking-[.2em] text-emerald-200/80">Operating principles</p><h2 className="mt-4 text-2xl font-medium tracking-[-.04em] text-white sm:text-3xl">Automation should be useful, bounded, and accountable.</h2><p className="mt-4 text-sm leading-7 text-zinc-400">Nirvania.ai is at an early stage. We are focused on earning trust through clear task boundaries, human review where it matters, and honest communication about what is ready today.</p></div>
          <a href="mailto:ceo@nirvaniaai.com?subject=Talk%20to%20Nirvania.ai" className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-white/15 px-4 py-3 text-xs text-zinc-200 transition hover:border-white/30 hover:bg-white/[.04] lg:self-center">Talk to the founder <Arrow/></a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-[10px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><a href="#top" className="flex items-center gap-2 text-zinc-400"><Mark/><span>© 2026 Nirvania.ai</span></a><div className="flex flex-wrap gap-x-5 gap-y-2"><span>Tampico, MX</span><a className="transition hover:text-zinc-300" href="mailto:ceo@nirvaniaai.com">ceo@nirvaniaai.com</a><a className="transition hover:text-zinc-300" href="/docs">Documentation</a></div></footer>
    </main>
  );
}
