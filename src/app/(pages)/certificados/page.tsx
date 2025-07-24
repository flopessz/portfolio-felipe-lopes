"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Award,
  ExternalLink,
  Download,
  Calendar,
  Building,
} from "lucide-react";

const lista_certificados = [
  {
    id: 1,
    titulo: "Introduction to IoT",
    instituicao: "Cisco Networking Academy",
    categoria: "Tecnologia",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Curso introdutório sobre Internet das Coisas, abordando conceitos fundamentais, protocolos de comunicação e aplicações práticas em diversos setores.",
    status: "Concluído",
    link: "/path/Introdução-IOT-certificate.pdf",
  },
  {
    id: 2,
    titulo: "Introduction to Cybersecurity",
    instituicao: "Cisco Networking Academy",
    categoria: "Segurança",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Fundamentos de segurança cibernética, incluindo tipos de ameaças, métodos de proteção e melhores práticas para manter sistemas seguros.",
    status: "Concluído",
    link: "/path/Introdução-a-Cib-certificate.pdf",
  },
  {
    id: 3,
    titulo: "Inteligência Artificial e Machine Learning",
    instituicao: "Ecossistema Ânima",
    categoria: "IA/ML",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Curso abrangente sobre IA e ML, cobrindo algoritmos, redes neurais, deep learning e aplicações práticas em diversos domínios.",
    status: "Concluído",
    link: "/path/Inteligencia-artificial-machine-learning.pdf",
  },
  {
    id: 4,
    titulo: "ESG na Prática: O Meio Ambiente do Trabalho",
    instituicao: "Ecossistema Ânima",
    categoria: "Social",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Princípios ESG aplicados ao ambiente corporativo, sustentabilidade empresarial e responsabilidade social corporativa.",
    status: "Concluído",
    link: "/path/ESG-na-pratica-o-meio-ambiente-do-trabalho.pdf",
  },
  {
    id: 5,
    titulo: "Equidade Social e o Mercado de Trabalho",
    instituicao: "Ecossistema Ânima",
    categoria: "Social",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Estudo sobre diversidade, inclusão e equidade no mercado de trabalho, abordando políticas públicas e práticas empresariais.",
    status: "Concluído",
    link: "/path/equidade-social-e-o-mercado-de-trabalho.pdf",
  },
  {
    id: 6,
    titulo: "Trilha Conectar do Discover",
    instituicao: "Rocketseat",
    categoria: "Programação",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Curso introdutório de programação, cobrindo lógica de programação, estruturas de dados e fundamentos do desenvolvimento web.",
    status: "Concluído",
    link: "/path/discover-conectar-certificate.pdf",
  },
  {
    id: 7,
    titulo: "Desenvolvimento de Aplicativo com App Inventor",
    instituicao: "Ecossistema Ânima",
    categoria: "Mobile",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Desenvolvimento de aplicativos móveis usando App Inventor, uma plataforma visual para criação de apps Android.",
    status: "Concluído",
    link: "/path/Desenvolvimento-app-inventor.pdf",
  },
  {
    id: 8,
    titulo: "Introdução a HTML + CSS",
    instituicao: "Escola DNC",
    categoria: "Web",
    ano: "2022",
    image: "/api/placeholder/400/300",
    description:
      "Fundamentos do desenvolvimento web, incluindo estruturação com HTML e estilização com CSS para criação de páginas web.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 9,
    titulo: "Aprofundamentos em responsabilidade civil",
    instituicao: "Ecossistema Ânima",
    categoria: "Social",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Visa proporcionar aos participantes um conhecimento detalhado sobre os fundamentos e as aplicações práticas do instituto da responsabilidade civil, tanto na esfera contratual quanto extracontratual, com ênfase em questões atuais e relevantes do direito.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 10,
    titulo: "Arduino e lógica de programação",
    instituicao: "Ecossistema Ânima",
    categoria: "Web",
    ano: "2022",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
    {
    id: 11,
    titulo: "Analista de Dados Power BI",
    instituicao: "Microsoft",
    categoria: "Web",
    ano: "2024",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 12,
    titulo: "AI Fundamentals",
    instituicao: "Microsoft Azure",
    categoria: "Web",
    ano: "2023",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 13,
    titulo: "Internet das Coisas (IoT)",
    instituicao: "Santander Open Academy",
    categoria: "Web",
    ano: "2025",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 14,
    titulo: "Introdução à ciência de dados",
    instituicao: "Santander Open Academy",
    categoria: "Web",
    ano: "2025",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 15,
    titulo: "Introdução à IA generativa",
    instituicao: "Santander Open Academy",
    categoria: "Web",
    ano: "2025",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
  {
    id: 14,
    titulo: "Introdução à Python",
    instituicao: "Santander Open Academy",
    categoria: "Web",
    ano: "2025",
    image: "/api/placeholder/400/300",
    description:
      "Objetivo o desenvolvimento de raciocínio lógico, para a estruturação de programas utilizando a Interface de Desenvolvimento do Arduíno, resolvendo problemas através de programas otimizados, seguindo procedimentos e normas técnicas de qualidade, saúde e segurança no trabalho.",
    status: "Concluído",
    link: "/path/certificado-html,css Introdução.pdf",
  },
];

const categories = [
  { id: "all", name: "Todos", icon: Award },
  { id: "IA/ML", name: "IA/ML", icon: Award },
  { id: "Tecnologia", name: "Tecnologia", icon: Award },
  { id: "Programação", name: "Programação", icon: Award },
  { id: "Web", name: "Web", icon: Award },
  { id: "Segurança", name: "Segurança", icon: Award },
  { id: "Mobile", name: "Mobile", icon: Award },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = lista_certificados.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" || cert.categoria === selectedCategory;
    const matchesSearch =
      cert.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.instituicao.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent text-white">
      <motion.section
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">
          Certificados & Certificações
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Todos os cursos realizados com comprovantes de conclusão
        </p>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gray-700 border-gray-500 text-white"
                      : "bg-gray-800/50 border-gray-600 text-gray-400 hover:border-gray-500/50 hover:text-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar certificados..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors w-64"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl font-bold mb-8 flex items-center justify-between"
          variants={itemVariants}
        >
          <span>Todos os Certificados</span>
          <span className="text-sm text-gray-500 font-normal">
            {filteredCertificates.length}{" "}
            {filteredCertificates.length === 1 ? "certificado" : "certificados"}
          </span>
        </motion.h2>

        <motion.div
          key={selectedCategory + searchTerm}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              layout
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700/30 to-gray-600/30 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white/40" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold group-hover:text-gray-200 transition-colors">
                    {cert.titulo}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      cert.status === "Concluído"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description.length > 120
                    ? cert.description.substring(0, 120) + "..."
                    : cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                    <Building className="w-3 h-3" />
                    {cert.instituicao}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                    <Calendar className="w-3 h-3" />
                    {cert.ano}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex gap-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      title="Ver certificado"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={cert.link}
                      download
                      className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              Nenhum certificado encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termo de busca
            </p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
