import { returnDBHelper } from "../helper/returnDBHelper.js"
export const returnService = {

    returnBook: async (userId, bookID) => {
        console.log("returnService");
        const borrowDetails = await returnDBHelper.getBorrowDetailsByBookID(bookID);
        console.log("borrowDetails  " + borrowDetails);
        if (borrowDetails) {
            if (borrowDetails.borrowedByUser &&
                borrowDetails.borrowedByUser.userId === userId) {
                if (utiltyFunction.anyDueAmountOnBook(borrowDetails.dueDate)) {
                    const dueAmt = utiltyFunction.getDueAmount(borrowDetails.dueDate);
                    return { message: "please clear the due amount of Rs " + dueAmt }
                } else {
                    await returnDBHelper.deleteBorrowDetailOnSuccessfulReturn(borrowDetails.borrowId, bookID);
                    return { message: "your Return is successful " }
                }
            } else {
                return { message: "user don't have any pending returns" }
            }
        }
        return { message: "no record found" }
    }
}

const utiltyFunction = {
    anyDueAmountOnBook: (dueDate) => {
        if (dueDate < new Date()) {
            return true;
        }
        else
            return false;

    },

    getDueAmount: (dueAmt) => {
        const AMOUNT_Charge_PER_DAY = 5;
        const today = new Date();
        const dueTime = dueAmt.getTime();
        const currentTime = today.getTime();

        const differnce = currentTime - dueTime;
        const difference_In_Days = Math.round(differnce / (1000 * 3600 * 24));
        return difference_In_Days * AMOUNT_Charge_PER_DAY;
    }

}