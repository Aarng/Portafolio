import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Download,
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import profile from "./static/Profile.jpg";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'React', proficiency: 90 },
    { name: 'TypeScript', proficiency: 70 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'Python', proficiency: 75 },
    { name: 'javaScript', proficiency: 90 },
  ];

  const projects = [
    {
      title: 'E-Commerce (Vinyl-Zone Demo)',
      description:
        'A full-stack e-commerce solution with real-time inventory management.',
      technologies: [
        'React.js',
        'Node.js',
        'React Hooks',
        'FirebaseDB',
        'Vite',
      ],
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
      liveLink: 'https://vinyl-zone-demo.netlify.app/',
      githubLink: 'https://github.com/Aarng/vinyl-zone',
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Algorithm Visualizer app with Code Tracking',
      technologies: ['React', 'Typescript', 'D3.js', 'vite'],
      image:
        'https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      liveLink: 'https://aarng.github.io/Algorithm-Visualizer/',
      githubLink: 'https://github.com/Aarng/Algorithm-Visualizer',
    },
    {
      title: 'Gallery-Hexa',
      description: 'Simple Hexa Gallery.',
      technologies: ['HTML', 'CSS', 'JS'],
      image:
        'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      liveLink: 'https://galeria-hex-min.netlify.app/',
      githubLink: 'https://github.com/Aarng/GaleriaHexa',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Portafolio Alex
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-8">
                  {[
                    'home',
                    'about',
                    'skills',
                    'projects',
                    'contact',
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`${
                        activeSection === section
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      } capitalize transition-colors duration-200`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                  Hi, I'm Alex
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">
                    Full Stack Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                  I build exceptional digital experiences that make life easier
                  and more enjoyable.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    Contact Me <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="/UNAB-Alex Aranguiz-CVFinal.docx"
                    download
                    className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-200"
                  >
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-12 md:mt-0">
                <img
                  src={profile}
                  alt="Alex Aranguiz"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
          id="about"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Computer Science & IT Engineer
                I am a results-driven professional with excellent communication skills and 
                deep expertise in programming languages and database processes. 
                
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong background in process analysis, documentation, project management, 
                and continuous improvement, I excel at implementing technological solutions and optimizing 
                operations. My focus on data analysis and digital transformation has consistently
                enhanced customer satisfaction and operational efficiency.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest technologies. When I'm not coding,
                  you can find me learning about new technologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Born in Santiago de Chile
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    2+ Years of Professional Experience
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    10+ Projects Completed
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Bachelor's Degree in Computer Science
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
          id="skills"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Soft Skills
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Problem Solving & Critical Thinking
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Team Leadership & Communication
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Project Management
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                    Agile Methodologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in hearing about new projects and
                  opportunities. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <a
                    href="aaranguizacua@gmail.com"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Aaranguizauca@gmail.com
                  </a>
                  <a
                    href="https://github.com/Aarng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    github.com/Aarng
                  </a>
                  <a
                    href="linkedin.com/in/Alex-Aranguiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    Linkedin Alex Aranguiz
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 Alex Aranguiz. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
