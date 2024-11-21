import BorrowDetails from "../models/BorrowDetails.js"; 
import Books from '../models/Books.js';

export const borrowDBHelper = {

saveBorrowDetails :  async (borrowDetails) => {
        try {
            const bororwDetailsobj =new BorrowDetails ({ 
                isBorrrowSuccess: borrowDetails.isBorrrowSuccess,
                bookId: borrowDetails.bookId,
                bookname: borrowDetails.bookname,
                borrowId: borrowDetails.borrowId,
                borrowDate: borrowDetails.borrowDate,
                dueDate: borrowDetails.dueDate,  
                borrowedByUser : {
                userId: borrowDetails.borrowedByUser.userId,
                userName: "",
              }
            });
            await bororwDetailsobj.save();
            console.log("BorrowDetails Saved to DB");
        }catch (error) {
            console.log(error);
        }
    },

    findBookbyId :  async (bookID) => {
     return await Books.findOne({bookId: bookID})
    }
}