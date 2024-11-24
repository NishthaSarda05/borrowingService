import BorrowDetails from "../models/BorrowDetails.js"; 
import axios from "axios";
export const borrowDBHelper = {

saveBorrowDetails :  async (borrowDetails, bookID) => {
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
            const url  = 'http://localhost:3000/book/'+ bookID + '/false';
            await axios.get(url);
            console.log("borrow Service updated book DB");            
            console.log("BorrowDetails Saved to DB");

            const notificationDTO = {     
                subject: "Welcome to Book Management System",     
                message: "You have been registered successfully",     
                receiverEmail: "mdizharahamed@gmail.com"
            };

            axios.post(`http://EMAIL-SERVICE/api/notifications/notify/${borrowDetails.borrowedByUser.userId}`, notificationDTO)

        }catch (error) {
            console.log(error);
        }
    },

    findBookbyId :  async (bookID) => {
        const url  = 'http://localhost:3000/book/' + bookID;
        const response = await axios.get(url);
        const book = response?.data;
        console.log("Book Service got the book" );
        return book;
    
    
    }
}