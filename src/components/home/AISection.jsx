import { Reveal } from '../ui/Reveal.jsx'
import { Icon } from '../ui/Icon.jsx'

// Real logos are dropped into /public/logos/<slug>.svg (official brand assets).
// Until a file is present, the tool name shows on its own (graceful fallback).
const SLUG = {
  Claude: 'claude', ChatGPT: 'chatgpt', Gemini: 'gemini', Codex: 'codex',
  Copilot: 'copilot', Mistral: 'mistral', Perplexity: 'perplexity', Llama: 'llama',
  Cursor: 'cursor', n8n: 'n8n', Zapier: 'zapier', Make: 'make',
}

export default function AISection({ t }) {
  const { ai } = t
  const loop = [...ai.tools, ...ai.tools]
  return (
    <section id="ia" className="section ai-sec" aria-labelledby="ai-title">
      <div className="container">
        <Reveal className="ai-head">
          <h2 id="ai-title" className="section-title">{ai.title}</h2>
          <p className="section-intro ai-text">{ai.text}</p>
        </Reveal>
      </div>
      <div className="ai-marquee" aria-hidden="true">
        <div className="ai-track">
          {loop.map((name, i) => {
            const logoSrc = `/logos/${SLUG[name] || name.toLowerCase()}.svg`
            return (
              <span className="ai-chip" key={i}>
                <span
                  className="ai-logo"
                  aria-hidden="true"
                  style={{ WebkitMaskImage: `url(${logoSrc})`, maskImage: `url(${logoSrc})` }}
                />
                {name}
              </span>
            )
          })}
        </div>
      </div>
      <div className="container">
        <Reveal className="section-cta" delay={2}>
          <span>{ai.cta.text}</span>
          <a href="#contact" className="btn btn-primary">{ai.cta.button} <Icon.arrow /></a>
        </Reveal>
      </div>
    </section>
  )
}
