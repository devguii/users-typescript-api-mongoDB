import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      // validar a requisição
      // direcionar a chamada para o Repository
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
