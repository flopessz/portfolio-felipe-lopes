"use client";
import { useState, useEffect } from "react";
import {
  Database,
  Server,
  Zap,
  Award,
  TrendingUp,
  Star,
  ChevronRight,
  Target,
  Cpu,
  Cloud,
  FileText,
  Code,
} from "lucide-react";

type ColorType = "gray" | "darkgray" | "lightgray";
type ColorPropertyType = "bg" | "border" | "text" | "accent";

interface Skill {
  name: string;
  level: number;
  experience: string;
  projects: number;
  stars: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: ColorType;
  skills: Skill[];
}

interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: ColorType;
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Linguagens de Programação",
    icon: Code,
    color: "gray",
    skills: [
      {
        name: "Python",
        level: 85,
        experience: "2+ anos",
        projects: 4,
        stars: 2,
      },
      { name: "Java", level: 80, experience: "2+ anos", projects: 3, stars: 2 },
      {
        name: "JavaScript",
        level: 90,
        experience: "3+ anos",
        projects: 6,
        stars: 3,
      },
      { name: "LUA", level: 60, experience: "1+ ano", projects: 2, stars: 1 },
      {
        name: "TypeScript",
        level: 85,
        experience: "2+ anos",
        projects: 5,
        stars: 2,
      },
      { name: "HTML", level: 95, experience: "3+ anos", projects: 8, stars: 3 },
      { name: "CSS", level: 90, experience: "3+ anos", projects: 8, stars: 3 },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas e Tecnologias",
    icon: Server,
    color: "darkgray",
    skills: [
      {
        name: "Visual Studio Code",
        level: 95,
        experience: "3+ anos",
        projects: 8,
        stars: 3,
      },
      {
        name: "GitHub",
        level: 90,
        experience: "3+ anos",
        projects: 8,
        stars: 3,
      },
      {
        name: "React",
        level: 90,
        experience: "2+ anos",
        projects: 5,
        stars: 3,
      },
      {
        name: "Next.js",
        level: 85,
        experience: "2+ anos",
        projects: 4,
        stars: 2,
      },
      {
        name: "Node.js",
        level: 80,
        experience: "2+ anos",
        projects: 4,
        stars: 2,
      },
      {
        name: "Tailwind CSS",
        level: 85,
        experience: "2+ anos",
        projects: 5,
        stars: 2,
      },
    ],
  },
  {
    id: "database",
    name: "Banco de Dados",
    icon: Database,
    color: "lightgray",
    skills: [
      { name: "SQL", level: 75, experience: "1+ ano", projects: 3, stars: 2 },
      { name: "MySQL", level: 70, experience: "1+ ano", projects: 2, stars: 2 },
      {
        name: "HeidiSQL",
        level: 65,
        experience: "1+ ano",
        projects: 2,
        stars: 1,
      },
      {
        name: "MariaDB",
        level: 60,
        experience: "6+ meses",
        projects: 1,
        stars: 1,
      },
    ],
  },
  {
    id: "office",
    name: "Pacote Office",
    icon: FileText,
    color: "gray",
    skills: [
      {
        name: "Word",
        level: 85,
        experience: "5+ anos",
        projects: 10,
        stars: 2,
      },
      {
        name: "PowerPoint",
        level: 80,
        experience: "3+ anos",
        projects: 8,
        stars: 2,
      },
      {
        name: "Excel",
        level: 75,
        experience: "3+ anos",
        projects: 6,
        stars: 2,
      },
      {
        name: "Power BI",
        level: 60,
        experience: "1+ ano",
        projects: 2,
        stars: 1,
      },
    ],
  },
];

const achievements: Achievement[] = [
  {
    icon: Award,
    title: "8+ Projetos Concluídos",
    description: "Portfolio diversificado com aplicações completas",
    color: "gray",
  },
  {
    icon: TrendingUp,
    title: "Full Stack Developer",
    description: "Domínio completo do ciclo de desenvolvimento",
    color: "darkgray",
  },
  {
    icon: Target,
    title: "Foco em UX/UI",
    description: "Interfaces modernas e experiência do usuário",
    color: "lightgray",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Otimização e melhores práticas em todos os projetos",
    color: "gray",
  },
];

const getColorClasses = (
  color: ColorType,
  type: ColorPropertyType = "bg"
): string => {
  const colors: Record<ColorType, Record<ColorPropertyType, string>> = {
    gray: {
      bg: "from-gray-800/30 to-gray-700/30",
      border: "border-gray-600/50",
      text: "text-gray-300",
      accent: "bg-gray-700/30",
    },
    darkgray: {
      bg: "from-gray-900/30 to-gray-800/30",
      border: "border-gray-700/50",
      text: "text-gray-400",
      accent: "bg-gray-800/30",
    },
    lightgray: {
      bg: "from-gray-700/30 to-gray-600/30",
      border: "border-gray-500/50",
      text: "text-gray-200",
      accent: "bg-gray-600/30",
    },
  };
  return colors[color][type];
};

const renderStars = (stars: number) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index <= stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
};

export default function Page() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("programming");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const selectedCategoryData = skillCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gray-800/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gray-700/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gray-600/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-12">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              <Cpu className="w-5 h-5 mr-3 text-gray-300" />
              <span className="text-gray-300 text-sm font-medium">
                Minhas Habilidades
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Tecnologias &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400">
                Expertises
              </span>
            </h1>

            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Uma visão abrangente das tecnologias que domino e utilizo para
              criar soluções inovadoras. Desde linguagens de programação até
              ferramentas de desenvolvimento e banco de dados.
            </p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${getColorClasses(
                    achievement.color
                  )} border ${getColorClasses(
                    achievement.color,
                    "border"
                  )} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl ${getColorClasses(
                        achievement.color,
                        "accent"
                      )}`}
                    >
                      <Icon
                        className={`w-6 h-6 ${getColorClasses(
                          achievement.color,
                          "text"
                        )}`}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 font-medium ${
                    isActive
                      ? `bg-gradient-to-r ${getColorClasses(
                          category.color
                        )} ${getColorClasses(
                          category.color,
                          "border"
                        )} text-white shadow-lg scale-105`
                      : "bg-gray-800/30 border-gray-700/50 text-gray-400 hover:border-gray-500/50 hover:text-gray-300 hover:bg-gray-700/30"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                    {category.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold flex items-center justify-center gap-4 mb-4">
              {selectedCategoryData && (
                <>
                  <selectedCategoryData.icon
                    className={`w-10 h-10 ${getColorClasses(
                      selectedCategoryData.color,
                      "text"
                    )}`}
                  />
                  {selectedCategoryData.name}
                </>
              )}
            </h2>
            <p className="text-gray-400 text-lg">
              {selectedCategoryData?.skills.length} Tecnologias Dominadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategoryData?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-8 bg-gradient-to-br ${getColorClasses(
                  selectedCategoryData.color
                )} backdrop-blur-sm rounded-3xl border ${getColorClasses(
                  selectedCategoryData.color,
                  "border"
                )} hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {skill.experience}
                    </p>
                    {renderStars(skill.stars)}
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-3xl font-bold ${getColorClasses(
                        selectedCategoryData.color,
                        "text"
                      )}`}
                    >
                      {skill.level}%
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {skill.projects} projetos
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gray-400 to-gray-300 transition-all duration-1000 ease-out rounded-full"
                      style={{ width: isLoaded ? `${skill.level}%` : "0%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-400">
                      <Target className="w-4 h-4" />
                      Nível{" "}
                      {skill.level >= 90
                        ? "Expert"
                        : skill.level >= 70
                        ? "Avançado"
                        : "Intermediário"}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 hover:text-gray-400 transition-colors cursor-pointer">
                      Ver detalhes
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-700/50 border border-gray-600/50">
                <Cloud className="w-5 h-5 mr-3 text-gray-300" />
                <span className="text-gray-300 text-sm font-medium">
                  Resumo da Experiência
                </span>
              </div>

              <h2 className="text-4xl font-bold">
                Transformando Ideias em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-200">
                  Realidade Digital
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-300 mb-3">
                    20+
                  </div>
                  <div className="text-gray-400 text-lg">
                    Tecnologias Conhecidas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-300 mb-3">
                    8+
                  </div>
                  <div className="text-gray-400 text-lg">
                    Projetos Concluídos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-300 mb-3">
                    3+
                  </div>
                  <div className="text-gray-400 text-lg">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-300 mb-3">4</div>
                  <div className="text-gray-400 text-lg">
                    Áreas de Especialização
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Minha jornada no desenvolvimento começou com curiosidade e
                evoluiu para uma paixão por criar soluções tecnológicas que
                fazem a diferença. Cada projeto é uma oportunidade de aprender
                algo novo e aprimorar minhas habilidades, sempre buscando
                excelência e inovação.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
