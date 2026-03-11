import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { books } from "../models/book.model";

const pool = mysql.createPool(process.env.DATABASE_URL as string);
const db = drizzle(pool);

const bookData = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { title: "1984", author: "George Orwell", publishedYear: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
  { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", publishedYear: 1967 },
  { title: "Brave New World", author: "Aldous Huxley", publishedYear: 1932 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publishedYear: 1951 },
  { title: "Lord of the Flies", author: "William Golding", publishedYear: 1954 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", publishedYear: 1953 },
  { title: "Jane Eyre", author: "Charlotte Bronte", publishedYear: 1847 },
  { title: "Wuthering Heights", author: "Emily Bronte", publishedYear: 1847 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", publishedYear: 1954 },
  { title: "Animal Farm", author: "George Orwell", publishedYear: 1945 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", publishedYear: 1866 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", publishedYear: 1880 },
  { title: "War and Peace", author: "Leo Tolstoy", publishedYear: 1869 },
  { title: "Anna Karenina", author: "Leo Tolstoy", publishedYear: 1877 },
  { title: "Moby-Dick", author: "Herman Melville", publishedYear: 1851 },
  { title: "Great Expectations", author: "Charles Dickens", publishedYear: 1861 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", publishedYear: 1859 },
  { title: "The Odyssey", author: "Homer", publishedYear: -700 },
  { title: "Don Quixote", author: "Miguel de Cervantes", publishedYear: 1605 },
  { title: "Frankenstein", author: "Mary Shelley", publishedYear: 1818 },
  { title: "Dracula", author: "Bram Stoker", publishedYear: 1897 },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", publishedYear: 1890 },
  { title: "Les Miserables", author: "Victor Hugo", publishedYear: 1862 },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", publishedYear: 1844 },
  { title: "Catch-22", author: "Joseph Heller", publishedYear: 1961 },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", publishedYear: 1969 },
  { title: "The Grapes of Wrath", author: "John Steinbeck", publishedYear: 1939 },
  { title: "Of Mice and Men", author: "John Steinbeck", publishedYear: 1937 },
  { title: "Beloved", author: "Toni Morrison", publishedYear: 1987 },
  { title: "The Color Purple", author: "Alice Walker", publishedYear: 1982 },
  { title: "Invisible Man", author: "Ralph Ellison", publishedYear: 1952 },
  { title: "The Bell Jar", author: "Sylvia Plath", publishedYear: 1963 },
  { title: "On the Road", author: "Jack Kerouac", publishedYear: 1957 },
  { title: "Heart of Darkness", author: "Joseph Conrad", publishedYear: 1899 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", publishedYear: 1926 },
  { title: "A Farewell to Arms", author: "Ernest Hemingway", publishedYear: 1929 },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", publishedYear: 1952 },
  { title: "Dune", author: "Frank Herbert", publishedYear: 1965 },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", publishedYear: 1985 },
  { title: "Neuromancer", author: "William Gibson", publishedYear: 1984 },
  { title: "The Road", author: "Cormac McCarthy", publishedYear: 2006 },
  { title: "Blood Meridian", author: "Cormac McCarthy", publishedYear: 1985 },
  { title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011 },
  { title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 },
  { title: "Norwegian Wood", author: "Haruki Murakami", publishedYear: 1987 },
  { title: "Kafka on the Shore", author: "Haruki Murakami", publishedYear: 2002 },
];

async function seed() {
  console.log("Seeding 50 books...");
  await db.insert(books).values(bookData);
  console.log("Done.");
  await pool.end();
}

seed();
