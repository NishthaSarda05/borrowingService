import { returnService } from "../services/returnService.js";

export const returnController = {
    returnBook : async (req, resp) => {
        try {
        const userId = req.params.userId;
        const bookID =  req.params.bookId;
        const response = await returnService.returnBook(userId, bookID);
        console.log("return controller");
        resp.status(200).json(response ); 
        }
        catch (error) {
            console.log("exception " + error);
            resp.status(500).json("error occured " + error);
        }        
    }
}