"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Full Stack Developer - Intern",
      company: "Info Brain Technologies",
      location: "Kathmandu-4, Chandol",
      period: "22 June 2025 - 29 August 2025",
      description: "Leading development of scalable web support chat applications using .NET MVC Core.",
      achievements: [
        "Led a team of 3 interns in building a support system for the company",
        "Built and deployed a support chat app that reduced average response time by ~40% compared to email-based support.",
        "Enabled handling of X+ inquiries daily through real-time ticket management system."
      ],
      technologies: [".NET", "PostgreSQL", "SignalR"]
    }
    // {
    //   id: 2,
    //   type: "work",
    //   title: "Full Stack Developer",
    //   company: "Digital Innovations Ltd.",
    //   location: "New York, NY",
    //   period: "2020 - 2022",
    //   description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality solutions.",
    //   achievements: [
    //     "Built 15+ responsive web applications from scratch",
    //     "Integrated third-party APIs and payment systems",
    //     "Improved code quality through implementation of testing frameworks"
    //   ],
    //   technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"]
    // },
    // {
    //   id: 3,
    //   type: "work",
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   location: "San Francisco, CA",
    //   period: "2019 - 2020",
    //   description: "Focused on creating intuitive user interfaces and improving user experience. Worked closely with UX designers to implement pixel-perfect designs.",
    //   achievements: [
    //     "Increased user engagement by 35% through UI/UX improvements",
    //     "Developed reusable component library used across multiple projects",
    //     "Optimized website performance resulting in 50% faster load times"
    //   ],
    //   technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"]
    // }
  ];

  const education = [
    {
      id: 1,
      degree: "Bsc (Hons) Computing",
      institution: "Itahari Internation College - London Metropolitan University",
      location: "Sundar Dulari, Nepal",
      period: "2023 - Present",
      description: "Specialization in Web Developement and Software Development",
      achievements: [
        "GPA: 3.92/4.0",
        "Candidate for AAA Scholarship",
        "Member of Innovation Lab"
      ]
    }
    // {
    //   id: 2,
    //   degree: "Full Stack Web Development Bootcamp",
    //   institution: "Code Academy",
    //   location: "Online",
    //   period: "2018",
    //   description: "Intensive 12-week program covering modern web development technologies and best practices.",
    //   achievements: [
    //     "Top 5% of graduating class",
    //     "Built 10+ full-stack applications",
    //     "Mentored 5+ junior students"
    //   ]
    // }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "2024",
      credentialId: "2a81fcb8-2cc0-4a81-a96f-ffed544c7fbc"
    },
    {
      id: 2,
      name: "AWS Academy Graduate - AWS Academy Data Engineering",
      issuer: "Amazon Web Services Training and Certification",
      date: "2024",
      credentialId: "5089dc2e-1c05-41a5-84e3-cc5f72219cb6"
    },
    {
      id: 3,
      name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "2024",
      credentialId: "c0cf1dbf-abe0-4372-8339-52933dd29a4c"
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Building className="mr-3 h-6 w-6 text-blue-600" />
                Professional Experience
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-gray-600">
                          <div className="flex items-center mb-1">
                            <Calendar className="mr-1 h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="text-green-600 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-green-600" />
                Education
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-lg text-green-600 font-semibold mb-2">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-gray-600">
                          <div className="flex items-center mb-1">
                            <Calendar className="mr-1 h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{edu.description}</p>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Highlights:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-purple-600" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-gray-100"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-gray-700 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 mb-2">Issued: {cert.date}</p>
                    <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>
                  </div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Experience</span>
                    <span className="font-semibold">4+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Projects</span>
                    <span className="font-semibold">50+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Certifications</span>
                    <span className="font-semibold">{certifications.length} Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Languages</span>
                    <span className="font-semibold">10+ Technologies</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
