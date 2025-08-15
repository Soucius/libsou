import { Link } from "react-router";
import { formatDate } from "../lib/utils.js";

function BookCard({ book }) {
  return (
    <Link
      to={`/library/${book._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-2 border-solid border-primary"
    >
      <div className="m-3">
        <figure>
          <img src={book.image} alt={book.title} />
        </figure>

        <div className="card-body">
          <h3 className="card-title text-base-content">{book.title}</h3>

          <p className="text-base-content/70 line-clamp-3">
            {book.description}
          </p>

          <hr className="my-2" />

          <div className="grid grid-cols-2 gap-2 justify-between align-items-center">
            <div className="flex justify-start">
              <span>
                Author: <b>{book.author}</b>
              </span>
            </div>

            <div className="flex justify-end">
              <span>
                Publisher: <b>{book.publisher}</b>
              </span>
            </div>

            <div className="flex justify-start">
              <span>
                Publish Date: <b>{book.year}</b>
              </span>
            </div>

            <div className="flex">
              <span>
                Adding Date: <b>{formatDate(new Date(book.createdAt))}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
