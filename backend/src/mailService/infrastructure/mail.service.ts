import { Injectable } from '@nestjs/common';
import { MailRepository } from '../domain/repository/mailRepository';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService implements MailRepository {
  constructor(private readonly mailerService: MailerService) {}

  async sendMailCreateList(
    userMail: string,
    userName: string,
    listTitle: string
  ): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to: userMail,
        from: 'DreamFlicks <no-reply@dreamflicks.com>',
        subject: 'Se ha creado con éxito una nueva lista 📝',
        text: `Hola, ${userName} ​😉​

        Te informamos que tu lista "${listTitle}" ha sido creada con éxito.
    
        ¡Gracias por usar nuestro servicio!
    
        Saludos,
        El equipo de DreamFlicks🍿
        `,
        html: `<p>Hola, ${userName} ​😉​​</p>
        <p>Te informamos que tu lista <strong>"${listTitle}"</strong> ha sido creada con éxito.</p>
        <img src="https://media.giphy.com/media/chzz1FQgqhytWRWbp3/giphy.gif" alt="GIF">
        <p>¡Gracias por usar nuestro servicio!</p>
        <p>Saludos,<br>El equipo de DreamFlicks🍿</p>
        `,
      });
      console.log('Email sent successfully to:', userMail);
      return 'Email sent successfully!';
    } catch (error) {
      console.error(
        'Error sending email to:',
        userMail,
        'Error:',
        error.message
      );
      return `Error sending email: ${error.message}`;
    }
  }

  async sendMailCollaborativeList(
    userMail: string,
    userName: string,
    listTitle: string,
    url: string
  ): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to: userMail,
        from: 'DreamFlicks <no-reply@dreamflicks.com>',
        subject: 'Nueva lista colaborativa 👥',
        text: `Hola, ${userName} ​😉​

        Te informamos que tu lista "${listTitle}" es ahora una lista colaborativa.
        Envía a quien quieras el siguiente enlace y disfrutad de la emoción de compartir una nueva lista de deseos: 
        ${url}
    
        ¡Gracias por usar nuestro servicio!
    
        Saludos,
        El equipo de DreamFlicks🍿
        `,
        html: `<p>Hola, ${userName} ​😉​​</p>
        <p>Te informamos que tu lista <strong>"${listTitle}"</strong> es ahora una lista colaborativa. </p>
        <p>Envía a quien quieras el siguiente enlace y disfrutad de la emoción de compartir una nueva lista de deseos: </p>
        <p><strong>${url}</strong></p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWhxcWg3Zmh0OTN4bmtpbXp3azQxMWRhYmt6ZnV2YzYxOWM3cDYxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bVcpc4QFNUxkOfCw0E/giphy.gif" alt="GIF">
        <p>¡Gracias por usar nuestro servicio!</p>
        <p>Saludos,<br>El equipo de DreamFlicks🍿</p>
        `,
      });
      console.log('Email sent successfully to:', userMail);
      return 'Email sent successfully!';
    } catch (error) {
      console.error(
        'Error sending email to:',
        userMail,
        'Error:',
        error.message
      );
      return `Error sending email: ${error.message}`;
    }
  }

  async sendMailAddCollaborativeList(
    userMail: string,
    listTitle: string
  ): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to: userMail,
        from: 'DreamFlicks <no-reply@dreamflicks.com>',
        subject: 'Nuevo usuario colaborador 🎉​',
        text: `Hola! ​😉​

        Te informamos que tu lista colaborativa "${listTitle}" ha sido añadida a la biblioteca de otro usuario.
        Disfrutad juntos de la emoción de compartir una lista con los títulos cinematográficos que más os gusten.
    
        ¡Gracias por usar nuestro servicio!
    
        Saludos,
        El equipo de DreamFlicks🍿
        `,
        html: `<p>Hola! ​😉​​</p>
        <p>Te informamos que tu lista colaborativa <strong>"${listTitle}"</strong> ha sido añadida a la biblioteca de otro usuario. </p>
        <p>Disfrutad juntos de la emoción de compartir una lista con los títulos cinematográficos que más os gusten. </p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemphMmRtcjBxMTc4dDA0NXBiOHphMXNxYzlzcDA5dmE3YTh1dG5reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3KC2jD2QcBOSc/giphy.gif" alt="GIF">
        <p>¡Gracias por usar nuestro servicio!</p>
        <p>Saludos,<br>El equipo de DreamFlicks🍿</p>
        `,
      });
      console.log('Email sent successfully to:', userMail);
      return 'Email sent successfully!';
    } catch (error) {
      console.error(
        'Error sending email to:',
        userMail,
        'Error:',
        error.message
      );
      return `Error sending email: ${error.message}`;
    }
  }
}
