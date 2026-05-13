export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <section className="text-center py-24">
          <p className="tracking-[0.4em] text-zinc-400 text-sm mb-4">
            _ZANO911_
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Minecraft & Discord Developer
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-8">
            Professional developer specialized in Minecraft servers,
            Discord systems, automation, protections, custom setups,
            and community infrastructure.
          </p>

          
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Minecraft Development",
              desc: "Server setup, optimization, plugins, configs, permissions, and advanced systems.",
            },
            {
              title: "Discord Systems",
              desc: "Bots, tickets, moderation, logging, verification, and automation systems.",
            },
            {
              title: "Server Protection",
              desc: "Security improvements, anti-abuse systems, backups, and management tools.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-zinc-400 leading-7">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-white" />
            <h2 className="text-4xl font-black">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Custom Minecraft Server",
              "Advanced Discord Bot",
              "Ticket & Store System",
              "Moderation Dashboard",
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 hover:border-zinc-500 transition-all duration-300"
              >
                <div className="text-zinc-500 text-sm mb-4">
                  PROJECT 0{index + 1}
                </div>
                <h3 className="text-3xl font-bold mb-4">{project}</h3>
                <p className="text-zinc-400 leading-7">
                  Professional infrastructure with clean configuration,
                  performance optimization, and scalable systems.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 text-center">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-12 backdrop-blur-xl">
            <p className="text-zinc-500 tracking-[0.3em] text-sm mb-4">
              CONTACT
            </p>

            <h2 className="text-5xl font-black mb-6">
              Let’s Build Something Powerful.
            </h2>

            <div className="space-y-3 text-zinc-300 text-lg">
              <p>Discord: _zano911_</p>
              <p>TikTok: @_zahraa911_</p>
              
            </div>
          </div>
        </section>

        <footer className="text-center text-zinc-600 mt-20 pb-10 text-sm">
          © 2026 _ZANO911_ — All Rights Reserved.
        </footer>
      </main>
    </div>
  )
}
