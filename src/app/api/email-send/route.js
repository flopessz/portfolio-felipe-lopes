import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const {
            name,
            email,
            subject,
            message
        } = await req.json();
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_LOGIN, // Seu e-mail
              pass: process.env.EMAIL_PASSWORD, // Sua senha ou app password
            },
        });
            // Configuração do e-mail
            const mailOptions = {
                from: process.env.EMAIL_LOGIN, // Remetente
                to: process.env.EMAIL_LOGIN, // Destinatário
                subject: "Mensagem de Contato - Portfolio", // Assunto
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Mensagem de Contato</title>
                      <style>
                        body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                          margin: 0;
                          padding: 0;
                        }
                        .email-container {
                          max-width: 600px;
                          margin: 20px auto;
                          background: #ffffff;
                          padding: 20px;
                          border-radius: 8px;
                          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                          //text-align: center;
                          margin-bottom: 20px;
                        }
                        .header img {
                          max-width: 150px;
                          height: auto;
                          margin-bottom: 10px;
                        }
                        .header h1 {
                          font-size: 24px;
                          font-weight: bold;
                          color: #333333;
                          margin: 0;
                        }
                        .code {
                          font-size: 20px;
                          font-weight: bold;
                          color: #0056b3;
                          text-align: center;
                          margin: 20px 0;
                        }
                        .footer {
                          font-size: 12px;
                          color: #999999;
                          text-align: center;
                          margin-top: 20px;
                        }
                      </style>
                    </head>
                    <body>
                      <div class="email-container">
                        <p>Nome: ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Assunto: ${subject}</p>
                        <p>Descrição: ${message}</p>
                        <div class="footer">
                          &copy; ${new Date().getFullYear()} Felipe Lopes de Moura. Todos os direitos reservados.
                        </div>
                      </div>
                    </body>
                    </html>
                `,
            };
    
        // Enviar o e-mail
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 405 });
    }
}