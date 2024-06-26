import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  async getUser(id: string) {
    return {
      id,
      name: 'John Doe',
      age: 25,
    };
  }
}
