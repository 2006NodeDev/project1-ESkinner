"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationMiddleware = void 0;
//this is very similar to alec's authorization middleware in lightly-burning
function authorizationMiddleware(roles) {
    return function (req, res, next) {
        var isAuthorized = false;
        //console.log(req.session.user.role)
        if (req.session.user) {
            for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                var role = roles_1[_i];
                if (role === req.session.user.role) {
                    isAuthorized = true;
                    next();
                }
                if (!isAuthorized) {
                    res.status(401).send("The incoming token has expired");
                }
            }
        }
        else {
            res.status(401).send("The incoming token has expired");
        }
    };
}
exports.authorizationMiddleware = authorizationMiddleware;
//# sourceMappingURL=authorization-middleware.js.map