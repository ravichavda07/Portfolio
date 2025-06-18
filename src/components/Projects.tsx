import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Analog Watch',
      description: 'Watch time in analog',
      image: 'https://images.unsplash.com/flagged/photo-1571827289865-19ebcc134002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuYWxvZyUyMGNsb2NrfGVufDB8fDB8fHww',
      githubUrl: 'https://github.com/ravichavda07/Analog-Clock',
      liveUrl: 'http://analog-clock-three-omega.vercel.app',
    },
    {
      title: 'Calculator',
      description: 'Easy way to calculate any number',
      image: 'https://images.unsplash.com/photo-1636033503567-a59bff19d79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubUrl: 'https://github.com/ravichavda07/Calculator-App',
      liveUrl: 'http://calculator-alpha-livid.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="h-1 w-20 bg-purple-500 mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4 justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}