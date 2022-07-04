import mongoose from 'mongoose';

interface BookSchema {
  author: string;
  title: string;
  year: number;
}

const bookSchema = new mongoose.Schema<BookSchema>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  year: Number,
  
});

bookSchema.index({ author: 1, title: -1 }, { unique: true });

const Book = mongoose.model('book', bookSchema);

export default Book;
