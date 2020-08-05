"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUpdateQuery = void 0;
function buildUpdateQuery(dataToChange) {
    var userStr = '';
    var passwordStr = '';
    var firstNameStr = '';
    var lastNameStr = '';
    var emailStr = '';
    var roleIdStr = '';
    if (dataToChange.username !== undefined) {
        userStr = ", \"username\"='" + dataToChange.username + "' ";
    }
    if (dataToChange.password !== undefined) {
        passwordStr = ", \"password\"='" + dataToChange.password + "'";
    }
    if (dataToChange.first_name !== undefined) {
        firstNameStr = ", \"first_name\"='" + dataToChange.first_name + "'";
    }
    if (dataToChange.last_name !== undefined) {
        lastNameStr = ", \"last_name\"='" + dataToChange.last_name + "'";
    }
    if (dataToChange.email !== undefined) {
        emailStr = ", \"email\"='" + dataToChange.email + "'";
    }
    if (dataToChange.role_id !== undefined) {
        roleIdStr = ", \"role_id\"=" + dataToChange.role_id;
    }
    var sqlScript = "update project0.users u set \"user_id\" = \n    " + dataToChange.user_id + userStr + passwordStr + firstNameStr + lastNameStr + emailStr + roleIdStr + " \n     where \"user_id\"=" + dataToChange.user_id + ";";
    return sqlScript;
}
exports.buildUpdateQuery = buildUpdateQuery;
//# sourceMappingURL=Build-update-query.js.map