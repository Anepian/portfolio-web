"use client";

import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, BookOpenIcon, CodeIcon, GlobeIcon, CoffeeIcon, DownloadIcon, MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Language = 'en' | 'es';

export default function Portafolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const translations: Record<Language, { [key: string]: string }> = {
    es: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia y Educación',
      technologies: 'Tecnologías',
      contact: 'Contacto',
      role: 'Desarrollador Full Stack',
      description: 'Creando experiencias profesionales y funcionales',
      contactMe: 'Contáctame',
      downloadCV: 'Descargar CV',
      // ... más traducciones
    },
    en: {
      about: 'About Me',
      projects: 'Projects',
      experience: 'Experience & Education',
      technologies: 'Technologies',
      contact: 'Contact',
      role: 'Full Stack Developer',
      description: 'Creating professional and functional experiences',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
      // ... more translations
    }
  }

  const t = translations[language]

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative transition-colors duration-300`}>
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <header className="sticky top-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Alex Lupian1</h1>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#sobre-mi" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">{t.about}</Link>
              <Link href="#proyectos" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">{t.projects}</Link>
              <Link href="#experiencia" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">{t.experience}</Link>
              <Link href="#tecnologias" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">{t.technologies}</Link>
              <Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">{t.contact}</Link>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="language-select" className="sr-only">Language</label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-2 py-1 text-sm border-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <div className="md:hidden">
                <button 
                  onClick={() => setMenuOpen(!menuOpen)} 
                  aria-label="Menú"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded-md"
                >
                  <MenuIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Menú móvil */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 shadow-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#sobre-mi" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">{t.about}</Link>
            <Link href="#proyectos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">{t.projects}</Link>
            <Link href="#experiencia" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">{t.experience}</Link>
            <Link href="#tecnologias" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">{t.technologies}</Link>
            <Link href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">{t.contact}</Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <section className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t.role}</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">{t.description}</p>
          <div className="flex justify-center space-x-4">
            <Link href="#contacto" className="inline-block bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105">
              {t.contactMe}
            </Link>
            <a href="/CV.pdf" download className="inline-flex items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform hover:scale-105">
              <DownloadIcon className="mr-2 w-5 h-5" />
              {t.downloadCV}
            </a>
          </div>
        </section>

        <section id="sobre-mi" className="mb-16 md:mb-24 bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">{t.about}</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image src="/profile.jpg" alt="Your Name" width={200} height={200} className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
          {language === 'es' ? 
            'Soy un desarrollador web apasionado por crear soluciones innovadoras y eficientes. Con experiencia en tecnologías front-end y back-end, disfruto enfrentando desafíos complejos y aprendiendo continuamente en este campo en constante evolución.' : 
            'I am a web developer passionate about creating innovative and efficient solutions. With experience in front-end and back-end technologies, I enjoy tackling complex challenges and continuously learning in this ever-evolving field.'
          }
              </p>
              <ul className="space-y-2">
          <li className="flex items-center">
            <CodeIcon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
            <span>{language === 'es' ? 'Especializado en JavaScript, React y Node.js' : 'Specialized in JavaScript, React, and Node.js'}</span>
          </li>
          <li className="flex items-center">
            <GlobeIcon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
            <span>{language === 'es' ? 'Experiencia en proyectos internacionales' : 'Experience in international projects'}</span>
          </li>
          <li className="flex items-center">
            <CoffeeIcon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
            <span>{language === 'es' ? 'Amante del café y del código limpio' : 'Coffee lover and clean code enthusiast'}</span>
          </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 1, title: { en: "Project 1", es: "Proyecto 1" }, description: { en: "Brief description of project 1 and the technologies used.", es: "Descripción breve del proyecto 1 y las tecnologías utilizadas." }, image: "/project1.jpg", technologies: ["React", "Node.js", "MongoDB"] },
              { id: 2, title: { en: "Project 2", es: "Proyecto 2" }, description: { en: "Brief description of project 2 and the technologies used.", es: "Descripción breve del proyecto 2 y las tecnologías utilizadas." }, image: "/project2.jpg", technologies: ["Vue.js", "Firebase"] },
              { id: 3, title: { en: "Project 3", es: "Proyecto 3" }, description: { en: "Brief description of project 3 and the technologies used.", es: "Descripción breve del proyecto 3 y las tecnologías utilizadas." }, image: "/project3.jpg", technologies: ["Angular", "Express"] },
              { id: 4, title: { en: "Project 4", es: "Proyecto 4" }, description: { en: "Brief description of project 4 and the technologies used.", es: "Descripción breve del proyecto 4 y las tecnologías utilizadas." }, image: "/project4.jpg", technologies: ["Next.js", "Tailwind CSS"] }
            ].map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image src={project.image} alt={`${project.title[language]}`} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title[language]}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href="#" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">{language === 'es' ? 'Ver más' : 'See more'}</Link>
                    <GithubIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mb-16 md:mb-24 bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t.experience}</h3>
          <div className="max-w-3xl mx-auto">
            {[
              { 
                title: { en: "Senior Full Stack Developer", es: "Desarrollador Full Stack Senior" }, 
                organization: "Tech Innovators Inc.", 
                period: { en: "2021 - Present", es: "2021 - Presente" },
                description: { en: "Led the development of scalable web applications using React, Node.js, and AWS.", es: "Lideré el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS." },
                type: "work"
              },
              { 
                title: { en: "Master's in Software Engineering", es: "Máster en Ing</section>eniería de Software" }, 
                organization: "Technological University", 
                period: { en: "2019 - 2021", es: "2019 - 2021" },
                description: { en: "Specialized in software architectures and agile methodologies.", es: "Especialización en arquitecturas de software y metodologías ágiles." },
                type: "education"
              },
              { 
                title: { en: "Front-end Developer", es: "Desarrollador Front-end" }, 
                organization: "Creative Web Solutions", 
                period: { en: "2018 - 2021", es: "2018 - 2021" },
                description: { en: "Designed and developed responsive and accessible user interfaces with React and Vue.js.", es: "Diseñé y desarrollé interfaces de usuario responsivas y accesibles con React y Vue.js." },
                type: "work"
              },
              { 
                title: { en: "Bachelor's in Computer Science", es: "Grado en Ciencias de la Computación" }, 
                organization: "National University", 
                period: { en: "2014 - 2018", es: "2014 - 2018" },
                description: { en: "Fundamentals of programming, data structures, algorithms, and web development.", es: "Fundamentos de programación, estructuras de datos, algoritmos y desarrollo web." },
                type: "education"
              },
              { 
                title: { en: "Junior Developer", es: "Desarrollador Junior" }, 
                organization: "StartUp Digital", 
                period: { en: "2016 - 2018", es: "2016 - 2018" },
                description: { en: "Collaborated in the development of web and mobile applications using JavaScript and PHP.", es: "Colaboré en el desarrollo de aplicaciones web y móviles utilizando JavaScript y PHP." },
                type: "work"
              }
            ].map((item, index) => (
              <div key={index} className="mb-8 flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <BookOpenIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title[language]}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.organization}</p>
                  <p className="text-gray-500 dark:text-gray-400">{item.period[language]}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tecnologias" className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t.technologies}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'].map((tech) => (
              <div key={tech} className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold transform hover:scale-110 transition-transform duration-300 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white">
                {tech}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" className="bg-gray-100 dark:bg-gray-800 py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">{t.contact}</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Anepian" title="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/alejandro-vizcaino-lupian/" title="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {language === 'es' ? '¿Tienes un proyecto en mente? ¡Hablemos!' : 'Do you have a project in mind? Let\'s talk!'}
          </p>
          <Link href="avizcainolupian@gmail.com" className="inline-flex items-center bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105">
            <MailIcon className="mr-2" />
            {t.contactMe}
          </Link>
        </div>
      </footer>
    </div>
  )
}