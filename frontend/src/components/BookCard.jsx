import { Link } from "react-router";
import { formatDate } from "../lib/utils.js";

function BookCard({ book }) {
  return (
    <Link
      to={`/library/${book._id}`}
      className="hover:shadow-lg transition-all duration-200"
    >
      <div className="m-1 h-full">
        <div className="card bg-base-100 w-full h-full shadow-sm border border-primary justify-between">
          <div className="card-title justify-center mt-3 mx-3">
            <div className="badge badge-primary w-full">
              {formatDate(new Date(book.createdAt))}
            </div>

            <div className="badge badge-secondary w-full">{book.author}</div>
          </div>

          <div className="m-3">
            <div className="card-title justify-center">
              <figure>
                <img className="image-full" src={book.image} alt={book.title} />
              </figure>
            </div>

            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>

              <div className="card-actions justify-start">
                <div className="badge badge-outline">{book.publisher}</div>

                <div className="badge badge-outline">{book.year}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
