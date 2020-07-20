"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsFilter = void 0;
function corsFilter(req, res, next) {
    //we should always, on every request, we have to set the Access-Control-Allow-Origin header
    res.header('Access-Control-Allow-Origin', "" + req.headers.origin); //this is a dirty hack, its really bad, don't do it when you app is deployed or I will be very disappointed in you
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        //will send by the options pre-flight requests
    }
    else {
        next();
        //allows real requests to move towards endpoint
    }
}
exports.corsFilter = corsFilter;
//# sourceMappingURL=cors-filter.js.map