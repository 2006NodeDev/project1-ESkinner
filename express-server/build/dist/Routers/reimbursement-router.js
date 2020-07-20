"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reimbursementRouter = void 0;
var express_1 = __importDefault(require("express"));
var reimbursement_to_reimbursementDTO_1 = require("../utils/reimbursement-to-reimbursementDTO");
var create_reimbursement_request_dao_1 = require("../daos/create-reimbursement-request-dao");
var retrieve_reimbursements_by_id_dao_1 = require("../daos/retrieve-reimbursements-by-id-dao");
var authorization_middleware_1 = require("../middleware/authorization-middleware");
var retrieve_reimbursements_by_status_dao_1 = require("../daos/retrieve-reimbursements-by-status-dao");
var update_reimbursement_dao_1 = require("../daos/update-reimbursement-dao");
exports.reimbursementRouter = express_1.default.Router();
exports.reimbursementRouter.get('/status/:statusId', authorization_middleware_1.authorizationMiddleware(['finance-manager']), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var statusNumber, retrieveReimbursements, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                statusNumber = Number(req.params.statusId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, retrieve_reimbursements_by_status_dao_1.retrieveReimbursementsByStatus(statusNumber)];
            case 2:
                retrieveReimbursements = _a.sent();
                res.json(retrieveReimbursements);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.reimbursementRouter.get('/author/userId/:userId', authorization_middleware_1.authorizationMiddleware(['finance-manager']), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, retieveReimbursements, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = Number(req.params.userId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, retrieve_reimbursements_by_id_dao_1.retrieveReimbursementsById(userId)];
            case 2:
                retieveReimbursements = _a.sent();
                res.json(retieveReimbursements);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//authorizationMiddleware(['finance-manager']),
exports.reimbursementRouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, reimbursementId, author, amount, description, statusId, typeId, reimbursement, newReimbursement, newRequest, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, reimbursementId = _a.reimbursementId, author = _a.author, amount = _a.amount, description = _a.description, statusId = _a.statusId, typeId = _a.typeId;
                reimbursement = {
                    reimbursementId: reimbursementId,
                    author: author,
                    amount: amount,
                    description: description,
                    dateSubmitted: 0,
                    resolver: 0,
                    dateResolved: 0,
                    status: statusId,
                    type: typeId
                };
                newReimbursement = reimbursement_to_reimbursementDTO_1.reimbursementToReimbursementDTO(reimbursement);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, create_reimbursement_request_dao_1.createReimbursementRequest(newReimbursement)];
            case 2:
                newRequest = _b.sent();
                res.json(newRequest);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                console.log(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.reimbursementRouter.patch('/', authorization_middleware_1.authorizationMiddleware(['finance-manager']), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type, fieldsUpdated, updatedReimbursement, newReimbursement, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, reimbursementId = _a.reimbursementId, author = _a.author, amount = _a.amount, dateSubmitted = _a.dateSubmitted, dateResolved = _a.dateResolved, description = _a.description, resolver = _a.resolver, status = _a.status, type = _a.type;
                fieldsUpdated = { reimbursementId: reimbursementId, author: author, amount: amount, dateSubmitted: dateSubmitted,
                    dateResolved: dateResolved, description: description, resolver: resolver, status: status, type: type };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, update_reimbursement_dao_1.updateReimbursement(fieldsUpdated)];
            case 2:
                updatedReimbursement = _b.sent();
                newReimbursement = updatedReimbursement[0];
                res.json(newReimbursement);
                return [3 /*break*/, 4];
            case 3:
                e_4 = _b.sent();
                console.log(e_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=reimbursement-router.js.map