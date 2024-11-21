
import bookBorrowService from '../services/bookBorrowService.js';

export const borrowControllers = {
    brorrowNow: async (req, resp) => {
        try {
            const userId = req.params.userId;
            const bookID = req.params.bookId;
            const message = await bookBorrowService.borrowNow(bookID, userId);
            resp.status(200).json(message);
        }
        catch (error) {
            console.log("exception " + error);
            resp.status(500).json("error occured " + error);
        }
    },
    isBookAvailable: async (req, resp) => {
        try {
            const bookID = req.params.bookId;
            resp.status(200).json(await bookBorrowService.isBookAvailable(bookID));
        } catch (error) {
            console.log("exception " + error);
            resp.status(500).json("error occured " + error);
        }
    }
}