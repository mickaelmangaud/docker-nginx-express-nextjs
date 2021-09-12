import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

export class UserDAO {
  private static instance: UserDAO;
  private static repository: Repository<User>;

  constructor() {
    if (!UserDAO.instance) {
      UserDAO.instance = this;
    }
    UserDAO.repository = getRepository<User>(User);
    return UserDAO.instance;
  }

  async create(user: any): Promise<void> {
    const createdUser = await UserDAO.repository.create(user);
    await UserDAO.repository.save(createdUser);
  }
}

const instance = new UserDAO();

Object.freeze(instance);

export default instance;
