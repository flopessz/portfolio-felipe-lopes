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
import Image from "next/image";

const lista_certificados = [
  {
    id: 1,
    titulo: "Introduction to IoT",
    instituicao: "Cisco Networking Academy",
    categoria: "Segurança & IoT",
    ano: "2022",
    description:
      "Curso introdutório sobre Internet das Coisas, abordando conceitos fundamentais, protocolos de comunicação e aplicações práticas.",
    status: "Concluído",
    image: "/path/imagens/introducao-iot.webp",
    link: "/path/introducao-iot.pdf",
  },
  {
    id: 2,
    titulo: "Introduction to Cybersecurity",
    instituicao: "Cisco Networking Academy",
    categoria: "Segurança & IoT",
    ano: "2022",
    description:
      "Fundamentos de segurança cibernética, incluindo ameaças e melhores práticas para manter sistemas seguros.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-cib.webp",
    link: "/path/introducao-a-cib.pdf",
  },
  {
    id: 3,
    titulo: "Inteligência Artificial e Machine Learning",
    instituicao: "Ecossistema Ânima",
    categoria: "IA/ML & Dados",
    ano: "2022",
    description:
      "Curso sobre algoritmos, redes neurais, deep learning e aplicações práticas.",
    status: "Concluído",
    image: "/path/imagens/inteligencia-artificial-machine-learning.webp",
    link: "/path/inteligencia-artificial-machine-learning.pdf",
  },
  {
    id: 4,
    titulo: "Desenvolvimento de Aplicativo com App Inventor",
    instituicao: "Ecossistema Ânima",
    categoria: "Mobile",
    ano: "2022",
    description:
      "Desenvolvimento de aplicativos Android usando App Inventor.",
    status: "Concluído",
    image: "/path/imagens/desenvolvimento-app-inventor.webp",
    link: "/path/desenvolvimento-app-inventor.pdf",
  },
  {
    id: 5,
    titulo: "Introdução a HTML + CSS",
    instituicao: "Escola DNC",
    categoria: "Programação & Web",
    ano: "2022",
    description:
      "Fundamentos de HTML e CSS para criação de páginas web.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-html-css.webp",
    link: "/path/introducao-a-html-css.pdf",
  },
  {
    id: 6,
    titulo: "ESG na Prática: O Meio Ambiente do Trabalho",
    instituicao: "Ecossistema Ânima",
    categoria: "Responsabilidade & ESG",
    ano: "2023",
    description:
      "Sustentabilidade empresarial e responsabilidade social no ambiente corporativo.",
    status: "Concluído",
    image: "/path/imagens/esg-na-pratica.webp",
    link: "/path/esg-na-pratica.pdf",
  },
  {
    id: 7,
    titulo: "Equidade Social e o Mercado de Trabalho",
    instituicao: "Ecossistema Ânima",
    categoria: "Responsabilidade & ESG",
    ano: "2023",
    description:
      "Diversidade, inclusão e políticas públicas no mercado de trabalho.",
    status: "Concluído",
    image: "/path/imagens/equidade-social-e-o-mercado-de-trabalho.webp",
    link: "/path/equidade-social-e-o-mercado-de-trabalho.pdf",
  },
  {
    id: 8,
    titulo: "Trilha Conectar do Discover",
    instituicao: "Rocketseat",
    categoria: "Programação & Web",
    ano: "2023",
    description:
      "Curso introdutório de programação com lógica e fundamentos web.",
    status: "Concluído",
    image: "/path/imagens/discover-conectar.webp",
    link: "/path/discover-conectar.pdf",
  },
  {
    id: 9,
    titulo: "Aprofundamentos em responsabilidade civil",
    instituicao: "Ecossistema Ânima",
    categoria: "Responsabilidade & ESG",
    ano: "2023",
    description:
      "Estudo sobre responsabilidade civil contratual e extracontratual.",
    status: "Concluído",
    image: "/path/imagens/aprofundamentos-em-responsabilidade-civil.webp",
    link: "/path/aprofundamentos-em-responsabilidade-civil.pdf",
  },
  {
    id: 10,
    titulo: "Arduino e lógica de programação",
    instituicao: "Ecossistema Ânima",
    categoria: "Programação & Web",
    ano: "2023",
    description:
      "Uso de Arduino para desenvolvimento lógico e resolução de problemas.",
    status: "Concluído",
    image: "/path/imagens/arduino-e-logica-de-programacao.webp",
    link: "/path/arduino-e-logica-de-programacao.pdf",
  },
  {
    id: 11,
    titulo: "AI Fundamentals",
    instituicao: "Microsoft Azure",
    categoria: "IA/ML & Dados",
    ano: "2023",
    description:
      "Fundamentos de inteligência artificial e aprendizado de máquina.",
    status: "Concluído",
    image: "/path/imagens/azure-ia-introducao-a-inteligencia-artificial.webp",
    link: "/path/azure-ia-introducao-a-inteligencia-artificial.pdf",
  },
  {
    id: 12,
    titulo: "Analista de Dados Power BI",
    instituicao: "Microsoft",
    categoria: "IA/ML & Dados",
    ano: "2024",
    description:
      "Visualização de dados e criação de dashboards com Power BI.",
    status: "Concluído",
    image: "/path/imagens/introducao-ao-powerbi.webp",
    link: "/path/introducao-ao-powerbi.pdf",
  },
  {
    id: 13,
    titulo: "Internet das Coisas (IoT)",
    instituicao: "Santander Open Academy",
    categoria: "Segurança & IoT",
    ano: "2025",
    description:
      "Uso de dispositivos conectados para soluções inteligentes.",
    status: "Concluído",
    image: "/path/imagens/internet-das-coisas-iot.webp",
    link: "/path/internet-das-coisas-iot.pdf",
  },
  {
    id: 14,
    titulo: "Introdução à ciência de dados",
    instituicao: "Santander Open Academy",
    categoria: "IA/ML & Dados",
    ano: "2025",
    description:
      "Fundamentos de ciência de dados, análise e visualização.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-ciencia-de-dados.webp",
    link: "/path/introducao-a-ciencia-de-dados.pdf",
  },
  {
    id: 15,
    titulo: "Introdução à IA generativa",
    instituicao: "Santander Open Academy",
    categoria: "IA/ML & Dados",
    ano: "2025",
    description:
      "Uso de IA generativa em aplicações práticas.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-ia-generativa.webp",
    link: "/path/introducao-a-ia-generativa.pdf",
  },
  {
    id: 16,
    titulo: "Introdução à Python",
    instituicao: "Santander Open Academy",
    categoria: "Programação & Web",
    ano: "2025",
    description:
      "Fundamentos da linguagem Python com foco em lógica e estruturas.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-python.webp",
    link: "/path/introducao-a-python.pdf",
  },
  {
    id: 17,
    titulo: "API com NodeJS",
    instituicao: "Escola DNC",
    categoria: "Back-end",
    ano: "2025",
    description:
      "Criação de APIs RESTful com Express e NodeJS.",
    status: "Concluído",
    image: "/path/imagens/api-com-nodejs.webp",
    link: "/path/api-com-nodejs.pdf",
  },
  {
    id: 18,
    titulo: "Fundamentos de JavaScript",
    instituicao: "Escola DNC",
    categoria: "Programação & Web",
    ano: "2025",
    description:
      "Interatividade com variáveis, funções e eventos no navegador.",
    status: "Concluído",
    image: "/path/imagens/fundamentos-de-javascript.webp",
    link: "/path/fundamentos-de-javascript.pdf",
  },
  {
    id: 19,
    titulo: "Introdução a HTML + CSS",
    instituicao: "Escola DNC",
    categoria: "Programação & Web",
    ano: "2025",
    description:
      "Criação e estilização de páginas HTML.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-html-e-css.webp",
    link: "/path/introducao-a-html-e-css.pdf",
  },
  {
    id: 20,
    titulo: "Introdução à Lógica de Programação",
    instituicao: "Escola DNC",
    categoria: "Programação & Web",
    ano: "2025",
    description:
      "Algoritmos e estruturas básicas de controle.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-logica-de-programacao.webp",
    link: "/path/introducao-a-logica-de-programacao.pdf",
  },
  {
    id: 21,
    titulo: "Introdução à NodeJS",
    instituicao: "Escola DNC",
    categoria: "Back-end",
    ano: "2025",
    description:
      "Fundamentos de aplicações assíncronas com NodeJS.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-nodejs.webp",
    link: "/path/introducao-a-nodejs.pdf",
  },
  {
    id: 22,
    titulo: "Introdução à TypeScript",
    instituicao: "Escola DNC",
    categoria: "Programação & Web",
    ano: "2025",
    description:
      "Código JavaScript tipado com foco em segurança e escalabilidade.",
    status: "Concluído",
    image: "/path/imagens/introducao-a-typescript.webp",
    link: "/path/introducao-a-typescript.pdf",
  },
]

const categories = [
  { id: "all", name: "Todos", icon: Award },
  { id: "IA/ML & Dados", name: "IA/ML & Dados", icon: Award },
  { id: "Segurança & IoT", name: "Segurança & IoT", icon: Award },
  { id: "Programação & Web", name: "Programação & Web", icon: Award },
  { id: "Mobile", name: "Mobile", icon: Award },
  { id: "Back-end", name: "Back-end", icon: Award },
  { id: "Responsabilidade & ESG", name: "Responsabilidade & ESG", icon: Award },
]

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

  const filteredCertificates = lista_certificados.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" || cert.categoria === selectedCategory;
    return matchesCategory;
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
          key={selectedCategory}
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
                
                <Image src={cert.image} alt={cert.titulo} width={1117} height={792} className="w-full h-full"/>
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
