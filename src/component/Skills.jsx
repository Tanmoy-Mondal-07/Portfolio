import { useRef, useCallback, useState } from "react"
import { color, motion } from "framer-motion"
import SkillIcon from "./SkillIcon"

const skillData = [
  { name: "JavaScript", link: "https://cdn.simpleicons.org/javascript", color: "rgba(247, 223, 30, 0.8)" },
  { name: "TypeScript", link: "https://cdn.simpleicons.org/typescript", color: "rgba(0, 122, 204, 0.8)" },
  { name: "Tailwind", link: "https://cdn.simpleicons.org/tailwindcss", color: "rgba(56, 189, 248, 0.8)" },
  { name: "React", link: "https://cdn.simpleicons.org/react", color: "rgba(97, 218, 251, 0.8)" },
  { name: "Redux", link: "https://cdn.simpleicons.org/redux", color: "rgba(118, 74, 188, 0.8)" },
  { name: "Axios", link: "https://cdn.simpleicons.org/axios", color: "rgba(90, 103, 216, 0.8)" },
  { name: "Appwrite", link: "https://cdn.simpleicons.org/appwrite", color: "rgba(255, 0, 153, 0.8)" },
  { name: "Postman", link: "https://cdn.simpleicons.org/postman", color: "rgba(255, 89, 43, 0.8)" },
  { name: "Python", link: "https://cdn.simpleicons.org/python", color: "rgba(53, 114, 165, 0.8)" },
  { name: "Git", link: "https://cdn.simpleicons.org/git", color: "rgba(240, 80, 51, 0.8)" },
  { name: "Cloudflare", link: "https://cdn.simpleicons.org/cloudflare", color: "rgba(255, 123, 0, 0.8)" },
  { name: "Arch Linux", link: "https://cdn.simpleicons.org/archlinux", color: "rgba(33, 142, 190, 0.8)" },

  // { name: "HTML", link: "https://cdn.simpleicons.org/html5/334155" },
  // { name: "CSS", link: "https://cdn.simpleicons.org/css3/334155" },
  // { name: "Bootstrap", link: "https://cdn.simpleicons.org/bootstrap/334155" },
  // { name: "Framer Motion", link: "https://cdn.simpleicons.org/framer/334155" },
  // { name: "Node.js", link: "https://cdn.simpleicons.org/nodedotjs/334155" },
  // { name: "NPM", link: "https://cdn.simpleicons.org/npm/334155" },
];


const getSkillIcon = (link, name) => (
  <img loading="lazy" src={link} alt={name} className="w-8 h-8" />
)

// Simplified ripple effect using CSS instead of canvas
export default function Skills() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-zinc-50 py-20">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-800">
            <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full"></div>
          {/* <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
            The technologies I work with to bring ideas to life. Hover over each skill to see the ripple effect.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillIcon
                name={skill.name}
                color={skill.color}
                icon={getSkillIcon(skill.link, skill.name)}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}