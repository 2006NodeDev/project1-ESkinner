import { ReimbursementStatus } from "./ReimbursementStatus"
import { ReimbursementType } from "./ReimbursementType"

export class Reimbursement {
    //fields copy pasted from README
    reimbursementId: number  // primary key
	author: number   // foreign key -> User  not null
	amount: number   // not null
    dateSubmitted: number  // not null
    dateResolved: number  // not null
    description: string  // not null
    resolver: number  // foreign key -> User
    status: ReimbursementStatus  // foreign ey -> ReimbursementStatus  not null
    type: ReimbursementType // foreign key -> ReimbursementType
}