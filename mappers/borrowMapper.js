import { borrowDBHelper } from "../helper/borrowDBHelper.js";
import date from "date-and-time";

export const borrowMapper = {    

    mapBorrowSuccessDetails : (book, userId) => {
        const today = new Date();
         const bororwDetails ={
           isBorrrowSuccess: true,
           message: "book is successfully issued",           
           bookId: book.bookId,
           bookname: book.name,
           borrowId: crypto.randomUUID(),
           borrowDate: today,
           dueDate: date.addDays(today, 20),
           borrowedByUser: {
            userId:userId
           }
        }

        borrowDBHelper.saveBorrowDetails(bororwDetails, book.bookId);

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