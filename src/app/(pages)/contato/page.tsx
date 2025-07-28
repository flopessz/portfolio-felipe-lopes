"use client";
import { useState, useEffect } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Github,
    Linkedin,
    ExternalLink,
    CheckCircle,
    AlertCircle,
    User,
    MessageSquare,
    Zap,
    Globe,
    Calendar,
} from "lucide-react";

interface ContactMethod {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    value: string;
    description: string;
    color: string;
    href?: string;
}

interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    url: string;
    color: string;
    username: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const contactMethods: ContactMethod[] = [
    {
        icon: Mail,
        title: "Email",
        value: "felipelopesdemoura@gmail.com",
        description: "Respondo em até 24 horas",
        color: "orange",
        href: "mailto:felipelopesdemoura@gmail.com"
    },
    {
        icon: Phone,
        title: "WhatsApp",
        value: "+55 (11) 99695-0910",
        description: "Disponível das 9h às 18h",
        color: "green",
        href: "https://wa.me/5511996950910?text=Ola%20Felipe!%20Tudo%20bem?%20Me%20interessei%20no%20seu%20curriculo,%20podemos%20conversar?"
    },
    {
        icon: Linkedin,
        title: "Linkedin",
        value: "Reunião Online",
        description: "Veja meu perfil e competências",
        color: "blue",
        href: "https://www.linkedin.com/in/felipe-lopes-de-moura-296936246/"
    },
    {
        icon: Github,
        title: "Github",
        value: "@flopessz",
        description: "Portfolio de projetos",
        color: "purple",
        href: "https://github.com/flopessz"
    }
];

const socialLinks: SocialLink[] = [
    {
        icon: Github,
        name: "GitHub",
        url: "https://github.com/flopessz",
        color: "gray",
        username: "@flopessz"
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felipe-lopes-de-moura-296936246/",
        color: "blue",
        username: "Felipe Lopes"
    },
];

const getColorClasses = (color: string) => {
    const colors: Record<string, Record<string, string>> = {
        blue: {
            bg: "from-blue-600/20 to-blue-400/20",
            border: "border-blue-500/50",
            text: "text-blue-400",
            accent: "bg-blue-500/20",
            hover: "hover:border-blue-400"
        },
        green: {
            bg: "from-green-600/20 to-green-400/20",
            border: "border-green-500/50",
            text: "text-green-400",
            accent: "bg-green-500/20",
            hover: "hover:border-green-400"
        },
        purple: {
            bg: "from-purple-600/20 to-purple-400/20",
            border: "border-purple-500/50",
            text: "text-purple-400",
            accent: "bg-purple-500/20",
            hover: "hover:border-purple-400"
        },
        orange: {
            bg: "from-orange-600/20 to-orange-400/20",
            border: "border-orange-500/50",
            text: "text-orange-400",
            accent: "bg-orange-500/20",
            hover: "hover:border-orange-400"
        },
        gray: {
            bg: "from-gray-600/20 to-gray-400/20",
            border: "border-gray-500/50",
            text: "text-gray-400",
            accent: "bg-gray-500/20",
            hover: "hover:border-gray-400"
        },
        pink: {
            bg: "from-pink-600/20 to-pink-400/20",
            border: "border-pink-500/50",
            text: "text-pink-400",
            accent: "bg-pink-500/20",
            hover: "hover:border-pink-400"
        },
        sky: {
            bg: "from-sky-600/20 to-sky-400/20",
            border: "border-sky-500/50",
            text: "text-sky-400",
            accent: "bg-sky-500/20",
            hover: "hover:border-sky-400"
        }
    };
    return colors[color] || colors.blue;
};

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    useEffect(() => {
        setIsLoaded(true);
    }, [isLoaded]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Enviando mensagem...' });

        try {
            const response = await fetch('/api/email-send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // envia os dados do formulário
            });

            if (response.ok) {
                setFormStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Erro ao enviar email');
            }
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Ocorreu um erro ao enviar a mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
            });
        } finally {
            setTimeout(() => {
                setFormStatus({ type: 'idle', message: '' });
            }, 5000);
        }
    };


    return (
        <div className="text-white overflow-hidden">

            <div className="relative z-10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                            <MessageCircle className="w-4 h-4 mr-2 text-gray-300" />
                            <span className="text-gray-300 text-sm font-medium">
                                Vamos Conversar
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            Entre em{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-400 to-blue-500">
                                Contato
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Fique à vontade para entrar em contato comigo!
                            Você pode me enviar uma mensagem pelo formulário abaixo ou, se preferir,
                            falar diretamente por e-mail ou redes sociais.
                        </p>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            const colors = getColorClasses(method.color);
                            return (
                                <div key={index} className="group">
                                    {method.href ? (
                                        <a
                                            href={method.href}
                                            target={method.href.startsWith('http') ? '_blank' : undefined}
                                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={`block p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 ${colors.hover}`}
                                        >
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className={`p-3 rounded-xl ${colors.accent}`}>
                                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                                            <p className={`font-medium mb-2 ${colors.text}`}>{method.value}</p>
                                            <p className="text-gray-400 text-sm">{method.description}</p>
                                        </a>
                                    ) : (
                                        <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className={`p-3 rounded-xl ${colors.accent}`}>
                                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                                            <p className={`font-medium mb-2 ${colors.text}`}>{method.value}</p>
                                            <p className="text-gray-400 text-sm">{method.description}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="bg-green-800/30 backdrop-blur-sm rounded-3xl px-8 py-6 border border-green-700/50 mb-6">
                        <div className="">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-green-500/20">
                                    <Zap className="w-5 h-5 text-green-400" />
                                </div>
                                <span className="flex flex-col text-start">
                                    <h3 className="text-lg font-bold">Resposta Rápida</h3>
                                    <p className="text-gray-300 text-sm">
                                        Normalmente respondo em até 2 horas durante o horário comercial.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                        
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Send className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold">Envie uma Mensagem</h2>
                        </div>

                        {formStatus.type !== 'idle' && (
                            <div className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${formStatus.type === 'success'
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : formStatus.type === 'error'
                                    ? 'bg-red-500/10 border-red-500/30 text-red-400'
                                    : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                                }`}>
                                {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                                {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                                {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />}
                                <span>{formStatus.message}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        <User className="w-4 h-4 inline mr-2" />
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    <MessageSquare className="w-4 h-4 inline mr-2" />
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                                    placeholder="Sobre o que você gostaria de falar?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    <MessageCircle className="w-4 h-4 inline mr-2" />
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400 resize-none"
                                    placeholder="Descreva sua proposta ou dúvida..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus.type === 'loading'}
                                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-400 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                {formStatus.type === 'loading' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
}