import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "#models/book.model";

dotenv.config();

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925, category: "Fiction", price: 12.99 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960, category: "Fiction", price: 14.99 },
  { title: "1984", author: "George Orwell", publishedYear: 1949, category: "Dystopian", price: 13.99 },
  { title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813, category: "Romance", price: 10.99 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publishedYear: 1951, category: "Fiction", price: 13.99 },
  { title: "Brave New World", author: "Aldous Huxley", publishedYear: 1932, category: "Dystopian", price: 12.99 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937, category: "Fantasy", price: 15.99 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", publishedYear: 1953, category: "Dystopian", price: 11.99 },
  { title: "Jane Eyre", author: "Charlotte Brontë", publishedYear: 1847, category: "Romance", price: 10.99 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", publishedYear: 1954, category: "Fantasy", price: 24.99 },
  { title: "Animal Farm", author: "George Orwell", publishedYear: 1945, category: "Satire", price: 9.99 },
  { title: "Wuthering Heights", author: "Emily Brontë", publishedYear: 1847, category: "Romance", price: 10.99 },
  { title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988, category: "Fiction", price: 14.99 },
  { title: "Moby Dick", author: "Herman Melville", publishedYear: 1851, category: "Adventure", price: 11.99 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", publishedYear: 1866, category: "Fiction", price: 13.99 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", publishedYear: 1880, category: "Fiction", price: 15.99 },
  { title: "Anna Karenina", author: "Leo Tolstoy", publishedYear: 1878, category: "Fiction", price: 14.99 },
  { title: "War and Peace", author: "Leo Tolstoy", publishedYear: 1869, category: "Historical", price: 19.99 },
  { title: "Don Quixote", author: "Miguel de Cervantes", publishedYear: 1605, category: "Adventure", price: 12.99 },
  { title: "The Odyssey", author: "Homer", publishedYear: -800, category: "Epic", price: 10.99 },
  { title: "Hamlet", author: "William Shakespeare", publishedYear: 1603, category: "Drama", price: 8.99 },
  { title: "Macbeth", author: "William Shakespeare", publishedYear: 1606, category: "Drama", price: 8.99 },
  { title: "The Divine Comedy", author: "Dante Alighieri", publishedYear: 1320, category: "Epic", price: 13.99 },
  { title: "Les Misérables", author: "Victor Hugo", publishedYear: 1862, category: "Historical", price: 16.99 },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", publishedYear: 1844, category: "Adventure", price: 17.99 },
  { title: "Dracula", author: "Bram Stoker", publishedYear: 1897, category: "Horror", price: 11.99 },
  { title: "Frankenstein", author: "Mary Shelley", publishedYear: 1818, category: "Horror", price: 10.99 },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", publishedYear: 1890, category: "Fiction", price: 11.99 },
  { title: "Catch-22", author: "Joseph Heller", publishedYear: 1961, category: "Satire", price: 13.99 },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", publishedYear: 1969, category: "Satire", price: 12.99 },
  { title: "The Grapes of Wrath", author: "John Steinbeck", publishedYear: 1939, category: "Fiction", price: 14.99 },
  { title: "Of Mice and Men", author: "John Steinbeck", publishedYear: 1937, category: "Fiction", price: 9.99 },
  { title: "East of Eden", author: "John Steinbeck", publishedYear: 1952, category: "Fiction", price: 15.99 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", publishedYear: 1926, category: "Fiction", price: 12.99 },
  { title: "A Farewell to Arms", author: "Ernest Hemingway", publishedYear: 1929, category: "War", price: 12.99 },
  { title: "For Whom the Bell Tolls", author: "Ernest Hemingway", publishedYear: 1940, category: "War", price: 13.99 },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", publishedYear: 1952, category: "Fiction", price: 10.99 },
  { title: "Lolita", author: "Vladimir Nabokov", publishedYear: 1955, category: "Fiction", price: 13.99 },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", publishedYear: 1967, category: "Magical Realism", price: 15.99 },
  { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", publishedYear: 1985, category: "Romance", price: 14.99 },
  { title: "Invisible Man", author: "Ralph Ellison", publishedYear: 1952, category: "Fiction", price: 13.99 },
  { title: "Beloved", author: "Toni Morrison", publishedYear: 1987, category: "Historical", price: 14.99 },
  { title: "The Road", author: "Cormac McCarthy", publishedYear: 2006, category: "Dystopian", price: 13.99 },
  { title: "Blood Meridian", author: "Cormac McCarthy", publishedYear: 1985, category: "Western", price: 14.99 },
  { title: "No Country for Old Men", author: "Cormac McCarthy", publishedYear: 2005, category: "Thriller", price: 13.99 },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", publishedYear: 1985, category: "Dystopian", price: 14.99 },
  { title: "Dune", author: "Frank Herbert", publishedYear: 1965, category: "Sci-Fi", price: 16.99 },
  { title: "Foundation", author: "Isaac Asimov", publishedYear: 1951, category: "Sci-Fi", price: 14.99 },
  { title: "Neuromancer", author: "William Gibson", publishedYear: 1984, category: "Sci-Fi", price: 13.99 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", publishedYear: 1979, category: "Sci-Fi", price: 12.99 },
];

await mongoose.connect(process.env.mongoDBURL);
await Book.deleteMany();
await Book.insertMany(books);
console.log("Seeded 50 books");
mongoose.disconnect();
