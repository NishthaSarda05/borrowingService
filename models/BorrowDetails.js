import mongoose from 'mongoose';

const BorrowDetailsSchema = new mongoose.Schema({
    isBorrrowSuccess: {Boolean},
    bookId: { type: String },
    bookname: { type: String },
    borrowId: {type: String},
    borrowDate: {type: String},
    dueDate: {type: String},    
    borrowedByUser : {
    userId: {type: String},
    userName: {type: String},
  }
    
})

const BorrowDetails = mongoose.model('BorrowDetails', BorrowDetailsSchema);
export default BorrowDetails;