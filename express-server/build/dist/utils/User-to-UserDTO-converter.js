"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDTO = void 0;
function userToUserDTO(userInfo) {
    var userIdValue;
    if (userInfo.role !== undefined) {
        userIdValue = userInfo.role.roleId;
    }
    else {
        userIdValue = undefined;
    }
    return {
        user_id: userInfo.userId,
        username: userInfo.username,
        password: userInfo.password,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        email: userInfo.email,
        role_id: userIdValue
    };
}
exports.userToUserDTO = userToUserDTO;
//# sourceMappingURL=User-to-UserDTO-converter.js.map