"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_router_1 = require("./Routers/login-router");
var user_router_1 = require("./Routers/user-router");
var reimbursement_router_1 = require("./Routers/reimbursement-router");
var express_1 = __importDefault(require("express"));
var session_middleware_1 = require("./middleware/session-middleware");
var cors_filter_1 = require("./middleware/cors-filter");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_filter_1.corsFilter);
app.use(session_middleware_1.sessionMiddleware);
app.use("/login", login_router_1.loginRouter);
app.use("/users", user_router_1.findUsers);
app.use("/reimbursements", reimbursement_router_1.reimbursementRouter);
app.listen(2005, function () {
    console.log("Server has started!");
});
//# sourceMappingURL=index.js.map