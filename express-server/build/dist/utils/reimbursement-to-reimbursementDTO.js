"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reimbursementToReimbursementDTO = void 0;
function reimbursementToReimbursementDTO(reimbursement) {
    var reimbursementDTO = {
        reimbursement_id: reimbursement.reimbursementId,
        author_id: reimbursement.author,
        amount: reimbursement.amount,
        date_submitted: reimbursement.dateSubmitted,
        date_resolved: reimbursement.dateResolved,
        description: reimbursement.description,
        resolver: reimbursement.resolver,
        status: 1,
        type: 4
    };
    return reimbursementDTO;
}
exports.reimbursementToReimbursementDTO = reimbursementToReimbursementDTO;
//# sourceMappingURL=reimbursement-to-reimbursementDTO.js.map