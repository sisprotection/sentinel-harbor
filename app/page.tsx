'use client'

import { useMemo, useState } from 'react'
import {
  Anchor,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Command,
  Compass,
  Fuel,
  Gauge,
  LockKeyhole,
  MapPin,
  Radio,
  ShieldCheck,
  Ship,
  Signal,
  Sparkles,
  Users,
  Waves,
  Zap,
} from 'lucide-react'

const availability = [
  { name: 'Mara K.', vessel: 'FV Northstar', port: 'New Bedford, MA', type: 'Coastal hand', status: 'Ready now', eta: '08 min', accent: 'gold' },
  { name: 'Owen R.', vessel: 'Tug Resolute', port: 'Baltimore, MD', type: 'Tug captain', status: 'On standby', eta: '24 min', accent: 'blue' },
  { name: 'Tess L.', vessel: 'Cape Runner', port: 'Norfolk, VA', type: 'Coastal hand', status: 'Ready now', eta: '11 min', accent: 'gold' },
  { name: 'Jules B.', vessel: 'Harbor Wolf', port: 'Portland, ME', type: 'Tug captain', status: 'On standby', eta: '35 min', accent: 'blue' },
]

export default function Page() {
  const [mode, setMode] = useState<'crew' | 'captain'>('crew')
  const [port, setPort] = useState('All coastal ports')
  const [radius, setRadius] = useState('50')
  const [isDispatched, setIsDispatched] = useState(false)

  const matches = useMemo(() => availability.filter((person) => port === 'All coastal ports' || person.port.includes(port)), [port])

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090a] text-[#e9e7df] selection:bg-[#d9ac58] selection:text-[#08090a]">
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(rgba(217,172,88,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(217,172,88,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <header className="relative border-b border-[#c79842]/40 bg-[#0c0e0f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="relative flex size-10 items-center justify-center border border-[#d9ac58] bg-[#131313] text-[#d9ac58]">
              <Command className="size-5" strokeWidth={1.4} />
              <span className="absolute -right-1 -top-1 size-2 bg-[#d9ac58]" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#d9ac58]">Sentinel Harbor</p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Tug Dispatch</p>
            </div>
          </div>
          <div className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.22em] text-[#85867f] md:flex">
            <a href="#availability" className="transition-colors hover:text-[#d9ac58]">Availability</a>
            <a href="#protocol" className="transition-colors hover:text-[#d9ac58]">Protocol</a>
            <span className="flex items-center gap-2 text-[#7fc9ad]"><span className="size-1.5 animate-pulse rounded-full bg-[#7fc9ad]" /> Network live</span>
          </div>
          <button className="border border-[#d9ac58]/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d9ac58] transition hover:bg-[#d9ac58] hover:text-[#08090a]">Join the roster</button>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#d9ac58]"><span className="h-px w-10 bg-[#d9ac58]" /> Coastal operations / 07</div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl">When the water moves, <span className="text-[#d9ac58]">move first.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#9d9d94]">The tactical network for independent coastal hands and tugboat captains. See who is ready, where they are, and how fast they can get underway.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#availability" className="group flex items-center gap-3 bg-[#d9ac58] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0b0c0d] transition hover:bg-[#efc976]">Scan availability <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="#protocol" className="flex items-center gap-3 border border-[#40413e] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d5d3c8] transition hover:border-[#d9ac58]">How it works <ChevronDown className="size-4" /></a>
          </div>
          <div className="mt-12 flex gap-9 border-t border-[#323330] pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6f716c]"><span><b className="block text-lg font-medium text-white">4.2s</b> average match</span><span><b className="block text-lg font-medium text-white">312</b> active hands</span><span><b className="block text-lg font-medium text-white">24/7</b> coastal watch</span></div>
        </div>
        <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[440px]">
          <div className="absolute size-[290px] rounded-full border border-[#d9ac58]/20 sm:size-[390px]" />
          <div className="absolute size-[205px] rounded-full border border-[#d9ac58]/25 sm:size-[290px]" />
          <div className="absolute h-px w-full max-w-[420px] bg-[#d9ac58]/20" /><div className="absolute h-full w-px max-h-[420px] bg-[#d9ac58]/20" />
          <div className="absolute left-[16%] top-[22%] size-2 rounded-full bg-[#7fc9ad] shadow-[0_0_14px_#7fc9ad]" /><div className="absolute bottom-[22%] right-[20%] size-2 rounded-full bg-[#d9ac58] shadow-[0_0_14px_#d9ac58]" />
          <div className="relative flex size-40 items-center justify-center rounded-full border border-[#d9ac58]/60 bg-[#101213] shadow-[0_0_80px_rgba(217,172,88,0.1)] sm:size-56"><Compass className="size-16 text-[#d9ac58] sm:size-20" strokeWidth={0.8} /><span className="absolute top-5 font-mono text-[9px] tracking-[0.3em] text-[#d9ac58]">N 41°</span><span className="absolute bottom-5 font-mono text-[9px] tracking-[0.3em] text-[#77786f]">W 071°</span></div>
          <div className="absolute right-0 top-4 max-w-[140px] border border-[#323330] bg-[#111314] p-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#7fc9ad]"><Signal className="mb-2 size-4" /> Signal integrity<br /><span className="text-[#d5d3c8]">98.7% nominal</span></div>
          <div className="absolute bottom-2 left-0 max-w-[150px] border border-[#323330] bg-[#111314] p-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d9ac58]"><Waves className="mb-2 size-4" /> Water state<br /><span className="text-[#d5d3c8]">Calm / visibility 9nm</span></div>
        </div>
      </section>

      <section id="availability" className="relative border-y border-[#c79842]/40 bg-[#0d0f10] px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#d9ac58]"><span className="size-2 bg-[#d9ac58]" /> Live board</div><h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Find your next <span className="text-[#d9ac58]">underway.</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#85867f]">A clear line to the right set of hands. Filter by role and radius, then transmit a dispatch request.</p></div>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="border border-[#343632] bg-[#111314] p-5"><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#77786f]">Dispatch parameters</p><div className="mb-5 flex border border-[#3b3c38] p-1"><button onClick={() => setMode('crew')} className={`flex-1 px-2 py-2 font-mono text-[10px] uppercase tracking-[0.1em] ${mode === 'crew' ? 'bg-[#d9ac58] text-[#0b0c0d]' : 'text-[#85867f]'}`}>Need crew</button><button onClick={() => setMode('captain')} className={`flex-1 px-2 py-2 font-mono text-[10px] uppercase tracking-[0.1em] ${mode === 'captain' ? 'bg-[#d9ac58] text-[#0b0c0d]' : 'text-[#85867f]'}`}>I captain</button></div><label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#77786f]">Operating port</label><select value={port} onChange={(e) => setPort(e.target.value)} className="mb-5 w-full appearance-none border border-[#3b3c38] bg-[#17191a] px-3 py-3 text-sm text-[#e9e7df] outline-none focus:border-[#d9ac58]"><option>All coastal ports</option><option>New Bedford</option><option>Baltimore</option><option>Norfolk</option><option>Portland</option></select><label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#77786f]">Range / nautical miles</label><input value={radius} onChange={(e) => setRadius(e.target.value)} type="number" className="mb-7 w-full border border-[#3b3c38] bg-[#17191a] px-3 py-3 text-sm text-[#e9e7df] outline-none focus:border-[#d9ac58]" /><button onClick={() => setIsDispatched(true)} className="flex w-full items-center justify-center gap-2 bg-[#d9ac58] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0b0c0d] transition hover:bg-[#efc976]">{isDispatched ? <Check className="size-4" /> : <Zap className="size-4" />}{isDispatched ? 'Request transmitted' : 'Transmit request'}</button><p className="mt-4 flex gap-2 text-[11px] leading-5 text-[#77786f]"><LockKeyhole className="mt-0.5 size-3 shrink-0" /> Calculations stay local. No personal data leaves this console.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{matches.map((person) => <article key={person.name} className="group border border-[#343632] bg-[#111314] p-5 transition hover:border-[#d9ac58]/70"><div className="mb-5 flex items-start justify-between"><div className={`flex size-10 items-center justify-center border ${person.accent === 'gold' ? 'border-[#d9ac58]/50 text-[#d9ac58]' : 'border-[#6b9eb4]/50 text-[#8bb8ca]'}`}><Ship className="size-5" /></div><span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#7fc9ad]"><span className="size-1.5 rounded-full bg-[#7fc9ad]" /> {person.status}</span></div><h3 className="text-lg font-medium text-white">{person.name}</h3><p className="mt-1 text-sm text-[#96978f]">{person.vessel} <span className="text-[#4d4e4a]">/</span> {mode === 'crew' ? person.type : 'Open for dispatch'}</p><div className="mt-5 flex items-center justify-between border-t border-[#2a2c2a] pt-4 font-mono text-[10px] uppercase tracking-[0.13em] text-[#77786f]"><span className="flex items-center gap-2"><MapPin className="size-3 text-[#d9ac58]" /> {person.port}</span><span className="flex items-center gap-1.5 text-[#d9ac58]"><Clock3 className="size-3" /> {person.eta}</span></div></article>)}</div>
          </div>
        </div>
      </section>

      <section id="protocol" className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#d9ac58]">The Sentinel protocol</div><h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">Built for the people who keep the coast <span className="text-[#d9ac58]">moving.</span></h2></div><div className="grid gap-3 sm:grid-cols-3"><div className="border-l border-[#d9ac58] bg-[#111314] p-5"><Users className="mb-8 size-5 text-[#d9ac58]" /><h3 className="font-medium text-white">Declare once</h3><p className="mt-2 text-sm leading-6 text-[#85867f]">Set your role, port, and radius. Stay visible when you want work.</p></div><div className="border-l border-[#d9ac58] bg-[#111314] p-5"><Gauge className="mb-8 size-5 text-[#d9ac58]" /><h3 className="font-medium text-white">Read the board</h3><p className="mt-2 text-sm leading-6 text-[#85867f]">Scan live availability without calls, group texts, or guesswork.</p></div><div className="border-l border-[#d9ac58] bg-[#111314] p-5"><Radio className="mb-8 size-5 text-[#d9ac58]" /><h3 className="font-medium text-white">Transmit clean</h3><p className="mt-2 text-sm leading-6 text-[#85867f]">Send a clear request and let the right captain respond.</p></div></div></div></section>

      <footer className="border-t border-[#c79842]/40 bg-[#0c0e0f] px-5 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><div className="mb-4 flex items-center gap-3"><Anchor className="size-5 text-[#d9ac58]" /><span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9ac58]">Sentinel Harbor Tug Dispatch</span></div><p className="max-w-sm text-xs leading-5 text-[#6f716c]">A private coordination layer for independent maritime operators. Keep your watch. Keep your word.</p></div><div className="flex gap-3"><div className="flex items-center gap-2 border border-[#343632] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867f]"><ShieldCheck className="size-4 text-[#d9ac58]" /> Silent Security</div><div className="flex items-center gap-2 border border-[#343632] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867f]"><Sparkles className="size-4 text-[#d9ac58]" /> Serpent Intelligence Systems</div></div></div><div className="mx-auto mt-8 flex max-w-7xl justify-between border-t border-[#252725] pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#565852]"><span>© 2026 Sentinel Harbor</span><span>Local console / v1.0.7</span></div></footer>
    </main>
  )
}
