import BorrowDetails from "../models/BorrowDetails.js"; 
import fetch from "node-fetch";

export const returnDBHelper = {

    getBorrowDetailsByBookID: async (bookID) => {
        try{
        return await BorrowDetails.findOne({bookId: bookID});
        } 
        catch(error){
            console.log("error in Retun DB " + error);
        }
    },

    deleteBorrowDetailOnSuccessfulReturn : async (borrowID, bookID) => {
    console.log()
    await BorrowDetails.findOneAndDelete( { borrowId: borrowID});
    console.log("Return is updated to DB successfully")
    const url  = 'http://localhost:3000/book/'+ bookID + '/false';
    const resp = await axios.get(url);    
    console.log("Service updated book DB " + resp?.data);
    }
}