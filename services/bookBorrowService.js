
import Books from '../models/Books.js';

const bookBorrowService = {
    borrowNow: async (bookID) => {
        try{
            //const books = await Books.find();
            const book = await Books.findOne({bookId: bookID});
            if (book && !book.isAvailable){

                return book.name + " not avaialble in Stock";
            }
            return book.name + " is issued to your account";
        }
        catch(error){
            console.log("exception " + error); 
            return "error occured";
        }
    }
}

export default bookBorrowService;