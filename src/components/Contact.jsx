import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext' 

export default function Contact() {
  const { language } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

 
  const texts = {
    es: {
      titulo: "Contacto",
      descripcion: "¿Tienes un proyecto? Escríbeme y te respondo en 24–48 horas.",
      placeholderName: "Tu nombre",
      placeholderEmail: "Tu email",
      placeholderMsg: "Cuéntame sobre tu proyecto",
      emailDirecto: "También puedes enviar un email directo:",
      enviar: "Enviar mensaje",
      enviando: "Enviando...",
      alertaCompletar: "Completa todos los campos",
      alertaEnviado: "Mensaje enviado (simulado)"
    },
    en: {
      titulo: "Contact",
      descripcion: "Got a project? Write me and I’ll reply within 24–48 hours.",
      placeholderName: "Your name",
      placeholderEmail: "Your email",
      placeholderMsg: "Tell me about your project",
      emailDirecto: "You can also send a direct email:",
      enviar: "Send message",
      enviando: "Sending...",
      alertaCompletar: "Please fill all fields",
      alertaEnviado: "Message sent (simulated)"
    }
  }

  const t = texts[language]

  const submit = (e) => {
    e.preventDefault()
    if (!name || !email || !msg) return alert(t.alertaCompletar)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert(t.alertaEnviado)
      setName('')
      setEmail('')
      setMsg('')
    }, 1200)
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">{t.titulo}</h2>
      <p className="text-slate-600 mb-8">{t.descripcion}</p>

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-gray-900
          p-8
          rounded-3xl
          shadow-[0_8px_15px_rgba(0,0,0,0.3), inset_0_4px_8px_rgba(255,255,255,0.05)]
          space-y-6
          "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t.placeholderName}
            className="
              p-4 border border-gray-700 rounded-lg
              bg-gray-800 text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition
            "
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.placeholderEmail}
            type="email"
            className="
              p-4 border border-gray-700 rounded-lg
              bg-gray-800 text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition
            "
          />
        </div>
        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          rows="6"
          placeholder={t.placeholderMsg}
          className="
            w-full p-4 border border-gray-700 rounded-lg
            bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
          "
        ></textarea>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400 max-w-md">
            {t.emailDirecto} <a href="mailto:stefanoabate2002@gmail.com" className="text-blue-500 underline">stefanoabate2002@gmail.com</a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="
              px-6 py-3 rounded-full
              bg-gradient-to-r from-gray-700 to-gray-900
              text-white font-semibold
              shadow-[0_0_12px_rgba(59,130,246,0.9),0_0_20px_rgba(59,130,246,0.7)]
              hover:shadow-[0_0_20px_rgba(59,130,246,1),0_0_30px_rgba(59,130,246,0.9)]
              transition-shadow duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? t.enviando : t.enviar}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
