"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
var express_session_1 = __importDefault(require("express-session"));
//this is copy-pasted for alec's 'lightlyburning' session-middleware ts file
var sessionConfig = {
    secret: 'secret',
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: false
};
exports.sessionMiddleware = express_session_1.default(sessionConfig);
//# sourceMappingURL=session-middleware.js.map