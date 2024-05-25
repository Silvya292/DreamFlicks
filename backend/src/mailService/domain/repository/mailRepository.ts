export abstract class MailRepository {
  abstract sendMailCreateList(
    userMail: string,
    userName: string,
    listTitle: string
  ): Promise<string>;

  abstract sendMailCollaborativeList(
    userMail: string,
    userName: string,
    listTitle: string,
    url: string
  ): Promise<string>;

  abstract sendMailAddCollaborativeList(
    userMail: string,
    listTitle: string
  ): Promise<string>;
}
