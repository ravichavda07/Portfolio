import { Github, Linkedin, Mail, Send} from 'lucide-react';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = 'service_jpu48lz'; 
      const templateId = 'template_7zryuo8'; 
      const publicKey = 'PozR8NweRc2xQjBVH'; 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'mehulchavda20057@gmail.com', 
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
        <div className="h-1 w-20 bg-purple-500 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl text-white mb-8">Connect With Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/ravi-chavda-79139728b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/ravichavda07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
                title="GitHub Profile"
              >
                <Github size={32} />
              </a>
              <a
                href="mailto:chavdaravi805@gmail.com"
                className="text-white hover:text-purple-500 transition-colors"
                title="Send Email"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-4 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-4 rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}