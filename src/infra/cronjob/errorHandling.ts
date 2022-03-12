import { readFileSync, writeFileSync } from "fs";
import { MailtrapMailProvider } from "../emailService/mail";

export function errorHandling(error:any) {

    const mailProvider = new MailtrapMailProvider()
        if (error.isAxiosError) {           
            let axiosLogs = readFileSync('./logs/AxiosLogs.txt').toString()

            const errorResponse =
                "[" + new Date().toISOString() + "]"
                + " - "
                + "Request to Space Flight News."
                + " - "
                + "Status: " + error.response.status
                + " - "
                + "Message: " + error.response.data

            const data = axiosLogs + "\n" + errorResponse

            writeFileSync('./logs/AxiosLogs.txt', data);

            mailProvider.sendMail(
                {
                    subject: 'Ops, parece que houve um error no seu CronJob',
                    body: `${errorResponse}`
                })
        }else{
            mailProvider.sendMail(
                {
                    subject: 'Ops, parece que houve um error no seu CronJob',
                    body: `${error}`
                }
            )
        }
       
}