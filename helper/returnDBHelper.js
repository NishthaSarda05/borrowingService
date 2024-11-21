import BorrowDetails from "../models/BorrowDetails.js"; 

export const returnDBHelper = {

    getBorrowDetailsByBookID: async (bookID) => {
        try{
        return await BorrowDetails.findOne({bookId: bookID});
        } 
        catch(error){
            console.log("error in Retun DB " + error);
        }
    },

    deleteBorrowDetailOnSuccessfulReturn : async (borrowID) => {
    console.log()
    await BorrowDetails.findOneAndDelete( { borrowId: borrowID});
    console.log("Return is updated to DB successfully")
    }
}