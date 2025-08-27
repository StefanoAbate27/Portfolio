import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext' 

const items = [
  { id: 1, title: { es: 'Dashboard Financiero', en: 'Financial Dashboard' }, desc: { es: 'Panel con métricas e informes', en: 'Panel with metrics and reports' }, tags: ['React', 'D3'] },
  { id: 2, title: { es: 'E-commerce Minimal', en: 'Minimal E-commerce' }, desc: { es: 'Tienda con carrito y pagos', en: 'Store with cart and payments' }, tags: ['Node', 'Stripe'] },
  { id: 3, title: { es: 'Landing Producto', en: 'Product Landing' }, desc: { es: 'Landing con A/B testing', en: 'Landing with A/B testing' }, tags: ['React', 'Figma'] },
  { id: 4, title: { es: 'App Mobile', en: 'Mobile App' }, desc: { es: 'App cross-platform', en: 'Cross-platform app' }, tags: ['React Native'] },
]

export default function Projects() {
  const { language } = useLanguage()
  const [q, setQ] = useState('All')

  const texts = {
    es: {
      proyectos: 'Proyectos',
      todo: 'Todos',
      demo: 'Demo',
      codigo: 'Código',
    },
    en: {
      proyectos: 'Projects',
      todo: 'All',
      demo: 'Demo',
      codigo: 'Code',
    },
  }

  const t = texts[language]
  const tags = [t.todo, ...Array.from(new Set(items.flatMap(i => i.tags)))]

  const filtered = items.filter(i =>
    q === t.todo ? true : i.tags.includes(q)
  )

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t.proyectos}</h2>

      {}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {tags.map(tg => (
          <button
            key={tg}
            onClick={() => setQ(tg)}
            className={`px-4 py-2 rounded-full transition-shadow duration-300 
              ${q === tg
                ? 'bg-gray-900 text-white shadow-[0_0_12px_rgba(59,130,246,0.9),0_0_20px_rgba(59,130,246,0.7)]'
                : 'bg-white border hover:shadow-[0_0_12px_rgba(59,130,246,0.9),0_0_20px_rgba(59,130,246,0.7)]'
              }`}
          >
            {tg}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            className="bg-white rounded-2xl p-6 shadow card-hover cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">{p.title[language]}</h3>
            <p className="mt-2 text-slate-600">{p.desc[language]}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="
                  px-4 py-2 rounded-full bg-gray-900 text-white
                  hover:shadow-[0_0_12px_rgba(59,130,246,0.9),0_0_20px_rgba(59,130,246,0.7)]
                  transition-shadow duration-300
                "
              >
                {t.demo}
              </a>
              <a
                href="#"
                className="
                  px-4 py-2 rounded-full border
                  hover:shadow-[0_0_12px_rgba(59,130,246,0.9),0_0_20px_rgba(59,130,246,0.7)]
                  transition-shadow duration-300
                "
              >
                {t.codigo}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
