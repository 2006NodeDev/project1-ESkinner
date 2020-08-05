import { User } from "../Models/User";
import { UserDTO } from "../dtos/user-dto";

export function userToUserDTO(userInfo:User):UserDTO{
    return{
        
        user_id: userInfo.userId,
        username: userInfo.username,
        password: userInfo.password,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        email: userInfo.email,
        picture_path: userInfo.picturePath
    }

}