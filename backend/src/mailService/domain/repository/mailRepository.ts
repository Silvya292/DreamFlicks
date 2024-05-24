export abstract class MailRepository {
  abstract sendMailCreateList(userMail: string): Promise<void>;
}
