import { IUser } from "..";

interface RequestWithUser extends Request {
  user: IUser;
}
