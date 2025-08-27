import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiDocker,
  SiPostgresql
} from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext' 

const skills = [
  { name: 'React', icon: <SiReact size={28} /> },
  { name: 'JavaScript', icon: <SiJavascript size={28} /> },
  { name: 'TypeScript', icon: <SiTypescript size={28} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={28} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={28} /> },
  { name: 'Figma', icon: <SiFigma size={28} /> },
  { name: 'Docker', icon: <SiDocker size={28} /> },
  { name: 'Postgres', icon: <SiPostgresql size={28} /> },
]

export default function Skills() {
  const { language } = useLanguage()

  const texts = {
    es: {
      habilidades: 'Habilidades',
    },
    en: {
      habilidades: 'Skills',
    },
  }

  const t = texts[language]

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t.habilidades}</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {skills.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            className="
              flex items-center gap-4
              bg-gray-900 text-white
              rounded-2xl
              px-6 py-4
              cursor-default
              shadow-[0_4px_8px_rgba(59,130,246,0.7),0_8px_24px_rgba(59,130,246,0.5)]
              hover:shadow-[0_6px_12px_rgba(59,130,246,1),0_12px_36px_rgba(59,130,246,0.7)]
              transition-shadow duration-300
              select-none
              transform
              hover:-translate-y-1 hover:scale-105
              "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <div
              className="
                flex
                items-center
                justify-center
                bg-gray-800
                rounded-lg
                w-12 h-12
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_4px_8px_rgba(59,130,246,0.7)]
                "
            >
              {icon}
            </div>
            <span className="text-lg font-semibold">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
