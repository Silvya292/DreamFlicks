import { Injectable } from '@nestjs/common';
import { MailRepository } from '../domain/repository/mailRepository';

@Injectable()
export class CollaborativeListMail {
  constructor(private repository: MailRepository) {}

  async run(
    userMail: string,
    userName: string,
    listTitle: string,
    url: string
  ): Promise<void> {
    await this.repository.sendMailCollaborativeList(
      userMail,
      userName,
      listTitle,
      url
    );
  }
}
