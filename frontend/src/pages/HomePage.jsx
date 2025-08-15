import { useEffect, useState } from "react";
import api from "../lib/axios.js";
import Navbar from "../components/Navbar.jsx";
import BookCard from "../components/BookCard.jsx";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/library");

        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading books...</div>
        )}

        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center text-primary py-10">No books found.</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
