
import bookBorrowService from '../services/bookBorrowService.js';

export const borrowControllers = {
    brorrowNow: async (req, res) => {
       const bookID =  req.params.bookId;
       const message =  await bookBorrowService.borrowNow(bookID);
    res.json(message);   
} 
}