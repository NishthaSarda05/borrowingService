import { borrowDBHelper } from "../helper/borrowDBHelper.js";

export const borrowMapper = {    

    mapBorrowSuccessDetails : (book, userId) => {
        const today = Date();
         const bororwDetails ={
           isBorrrowSuccess: true,
           message: "book is successfully issued",           
           bookId: book.bookId,
           bookname: book.name,
           borrowId: crypto. randomUUID(),
           borrowDate: today,
           dueDate: new Date(new Date().setDate(today.getDate() + 20)),
           borrowedByUser: {
            userId:userId
           }
        }

        borrowDBHelper.saveBorrowDetails(bororwDetails);

        return bororwDetails;


    },
    
    mapBorrowFailureDetails: (book) => {
        return {
            isBorrrowSuccess: false,
            message: "book is not availble for now",           
            bookId: book.bookID,
            bookname: book.name
        }
    }

}