export default function RulesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24 text-white sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/65" data-reveal>
        Rules
      </p>
      <h1 className="mt-4 text-4xl font-semibold" data-reveal data-reveal-delay="1">
        DSTRTO CITY Rules and Guidelines
      </h1>
      <p className="mt-4 text-slate-300" data-reveal data-reveal-delay="2">
        Please read carefully. These rules apply in Discord, tickets, and in-city roleplay.
      </p>

      <section className="mt-12 space-y-10" data-reveal data-reveal-delay="3">
        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">General Discord Rules</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>No toxicity, harassment, or personal attacks. Violations can result in permanent ban.</li>
            <li>Do not share personal information. Doxxing results in dismissal of in-game and Discord access.</li>
            <li>No NSFW content/images/GIFs. Severe sanctions apply.</li>
            <li>No illegal software/mods. If you vouch for someone using them, you may be sanctioned.</li>
            <li>No threats or disrespect towards the city or management. Permanent ban.</li>
            <li>These rules also apply in ticket creation. Respect management decisions.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Ticket Guidelines and Rules</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Tickets are clip-based only. No clip, no verdict.</li>
            <li>Improper forms or wrong categories may be closed without response.</li>
            <li>Reports must be submitted within 24 hours of the scenario.</li>
            <li>All forms must be filled out properly. No admin assistance unless complete.</li>
            <li>No response policy: 5 hours = temporary ban; 24 hours = temp ban + automatic verdict.</li>
            <li>Blank tickets: 4 hours to complete or ticket is void and closed.</li>
            <li>No multiple sanctions. Only the category specified is addressed.</li>
            <li>Clips cannot be reused for another report.</li>
            <li>Multiple violations in one ticket = heaviest sanction applies.</li>
            <li>No toxicity or unprofessionalism in tickets; management may void the ticket.</li>
            <li>Counters stay within the same ticket; no new ticket creation.</li>
            <li>Using another person's POV is void unless submitted by the person involved.</li>
          </ul>
          <p className="text-sm text-slate-300">
            Note: Management may accept reports without clips only for extreme cases, at their discretion.
          </p>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Roleplay Rules</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Metagaming is prohibited.</li>
            <li>RDM: killing without proper verbal engagement is not allowed.</li>
            <li>VDM: killing someone with a vehicle is not allowed.</li>
            <li>Vulture gaming: no looting during gang war or outside your RP involvement.</li>
            <li>Trunkmaster: no stealing stash cars or vehicles in green/safe zones.</li>
            <li>Value/Fear of life: comply during robberies/hostage situations.</li>
            <li>New life rule: after death, you either revive at HP or transition to STL (new life).</li>
            <li>Combat logging is prohibited. Provide evidence for accidental disconnects.</li>
            <li>Bug exploit is prohibited.</li>
            <li>Sexual roleplay without consent is strictly prohibited.</li>
            <li>Harassment/offensive remarks have zero tolerance; verdicts may vary by case.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Vehicle Rules</h2>
          <p className="text-sm text-slate-300">
            Civilians and off-duty citizens are strictly prohibited from using government, MD, PD, or SD vehicles.
          </p>
          <p className="text-sm text-slate-300">Community Service: 500 sanctions.</p>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Safe Zone Rules</h2>
          <h3 className="text-lg font-semibold">Hospital Zone</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>No disturbances or disrespect towards staff or patients.</li>
            <li>No car chases or reckless driving on hospital grounds.</li>
            <li>No shooting or gunfire inside the hospital area.</li>
          </ul>
          <h3 className="text-lg font-semibold">Business Establishments</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Hold-ups inside businesses are prohibited.</li>
            <li>Business garages are not green zones.</li>
            <li>Staff must prioritize customer safety and well-being.</li>
            <li>All interactions must begin with verbal RP before escalating.</li>
          </ul>
          <h3 className="text-lg font-semibold">Side Job Locations</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>No hold-ups or robberies.</li>
            <li>No ambushing or camping to attack workers.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Government Protocols</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>No impersonation of government employees, police, or EMS.</li>
            <li>Only authorized PD/EMS may use official vehicles.</li>
            <li>Cop baiting is prohibited. Sentence: 1440 minutes (24 hours).</li>
            <li>Brandishing weapons inside/in front of PD premises is treated as no fear of life.</li>
            <li>Dirty cop roleplay is prohibited. Sanction: character deletion + 1000 community service.</li>
            <li>PD garage access is restricted to law enforcement only.</li>
            <li>Salvage RP is allowed only if suspects provoke or show non-compliance.</li>
            <li>Impersonating management/government staff results in permanent ban.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Business Perimeter Rules</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Doors may only be locked during emergencies: active shooting, red zone declaration, or gang harassment RP.</li>
            <li>No locking during normal operations, even if staff are off-duty.</li>
            <li>Lockdown must be announced using the template below.</li>
            <li>Once safe, unlock immediately and resume normal operations.</li>
            <li>Lock spam to gain advantage is power gaming.</li>
            <li>Owners must identify reported individuals or be liable for community service.</li>
          </ul>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Lockdown Template</p>
            <p>[Business Name] is currently UNDER LOCKDOWN due to [Reason]. All doors are locked and operations are suspended until the area is deemed safe.</p>
            <p className="mt-3 font-semibold text-white">Valid Reasons</p>
            <ul className="list-disc pl-5">
              <li>Active shooting inside premises</li>
              <li>Red Zone declaration</li>
              <li>Active gang harassment</li>
            </ul>
            <p className="mt-3 font-semibold text-white">All Clear Template</p>
            <p>[Business Name] has lifted the lockdown protocol. The premises are now SAFE and normal operations have resumed.</p>
          </div>
          <p className="text-sm text-slate-300">
            Note: Businesses are Yellow Zone. RP inside is allowed, but all shootouts must occur outside. Violation: 500 city sanctions.
          </p>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold">Voice Changer Rules</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Voice changers are prohibited unless using paid peds.</li>
            <li>Only citizens with access to peds may use voice changers for RP.</li>
            <li>Sanction: 500 community service.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
