

import { borrowMapper } from '../mappers/borrowMapper.js';
import { borrowDBHelper } from '../helper/borrowDBHelper.js';
const bookBorrowService = {

    borrowNow: async (bookID, userId) => {
        const book = await borrowDBHelper.findBookbyId(bookID);
        if (book) {
            if (book.isAvailable) {
                const bookDetails = borrowMapper.mapBorrowSuccessDetails(book, userId);
                return bookDetails;
            }
            return borrowMapper.mapBorrowFailureDetails(book, userId);
        }

        return { message: "Sorrry, we couldn't find the book" }

    },

    isBookAvailable: async (bookID) => {
        const book = await borrowDBHelper.findBookbyId(bookID);
        if (book && book.isAvailable) {
            return "book is avaiable";
        }
        return "book is not avaiable";
    }
}

export default bookBorrowService;