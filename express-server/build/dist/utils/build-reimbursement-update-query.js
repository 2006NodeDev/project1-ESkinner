"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReimbursementUpdateQuery = void 0;
function buildReimbursementUpdateQuery(dataToChange) {
    var reimbIdStr = '';
    var amountStr = '';
    var dateSubStr = '';
    var dateResStr = ', "date_resolved" = now()';
    var descStr = '';
    var resolverStr = '';
    var statusIdStr = '';
    var typeIdStr = '';
    if (dataToChange.reimbursementId !== undefined) {
        reimbIdStr = "\"reimbursement_id\"=" + dataToChange.reimbursementId;
    }
    if (dataToChange.amount !== undefined) {
        amountStr = ", \"amount\"= " + dataToChange.amount;
    }
    /*
    if(dataToChange.dateResolved!== undefined || null){
        dateResStr = `, "date_resolved"= ${dataToChange.dateResolved}`
    }
    */
    if (dataToChange.dateSubmitted !== undefined || null) {
        dateSubStr = ", \"date_submitted\"=" + dataToChange.dateSubmitted;
    }
    if (dataToChange.description !== undefined) {
        descStr = ", \"description\"='" + dataToChange.description + "'";
    }
    if (dataToChange.resolver !== undefined) {
        resolverStr = ", \"resolver\"= " + dataToChange.resolver;
    }
    if (dataToChange.status !== undefined) {
        statusIdStr = ", \"status_id\"= " + dataToChange.status;
    }
    if (dataToChange.type !== undefined) {
        typeIdStr = ", \"type_id\"= " + dataToChange.type;
    }
    var sqlScript = "update reimbursements set " + reimbIdStr + amountStr + dateSubStr + dateResStr + descStr + resolverStr + statusIdStr + typeIdStr + " where \"reimbursement_id\"=" + dataToChange.reimbursementId + ";";
    return (sqlScript);
}
exports.buildReimbursementUpdateQuery = buildReimbursementUpdateQuery;
//# sourceMappingURL=build-reimbursement-update-query.js.map