"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionPool = void 0;
//entry point for all of the database files
var pg_1 = require("pg");
//build a connection pool
exports.connectionPool = new pg_1.Pool({
    host: process.env['LB_ADDRESS'],
    user: process.env['LB_DATABASE'],
    password: process.env['LB_PASSWORD'],
    database: process.env['LB_USERNAME'],
    port: 5432,
    max: 5 //max of connections created
});
//# sourceMappingURL=index.js.map