import { Link } from "react-router";
import { PlusIcon, UserRound } from "lucide-react";

function Navbar() {
  return (
    <header className="border-b border-primary">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            LIBSOU
          </h1>

          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-outline">
              <PlusIcon className="size-5" />

              <span>New Book</span>
            </Link>

            <Link to={"/login"} className="btn btn-primary">
              <UserRound className="size-5" />

              <span>Login/Register</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
