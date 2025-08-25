"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Tools & Others",
      icon: <Code className="h-6 w-6" />,
      technologies: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
      color: "from-gray-500 to-gray-600"
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6" />,
      technologies: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a full-stack developer with a passion for creating innovative web applications 
                that solve real-world problems. With expertise spanning both frontend and backend 
                technologies, I enjoy the entire development process from concept to deployment.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, and it has evolved 
                into a deep appreciation for clean code, user-centered design, and scalable architecture. 
                I believe in writing code that not only works but is also maintainable and elegant.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I&apos;m always excited to take on 
                new challenges and collaborate on meaningful projects.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-400">Photo</div>
              </div>
              {/* Replace with actual image when available */}
              {/* <Image
                src="/about-photo.jpg"
                alt="Shovan working"
                width={320}
                height={320}
                className="rounded-2xl shadow-2xl"
              /> */}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-4`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
