import { IMessage } from "./mailInterface";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '88fe9e57717dc0',
                pass: '309a8b085e5778'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: "lucas",
                address: "lucasamorimlima17@gmail.com",
            },
            from: {
                name: 'Equipe do Meu App',
                address: 'equipe@meuapp.com',
            },
            subject: message.subject,
            html: message.body,
        })
    }
}