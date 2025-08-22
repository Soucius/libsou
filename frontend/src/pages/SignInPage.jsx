import { Link } from "react-router";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-96 h-97 shadow-sm border border-primary">
        <div className="card-title justify-center mt-3">
          <h2 className="text-3xl">Sign In</h2>
        </div>

        <div className="label mt-3 mx-auto">
          Sign in your{" "}
          <span className="text-primary hover:underline">
            <Link to="/">LIBSOU</Link>
          </span>{" "}
          account.
        </div>

        <div className="m-3">
          <div className="form">
            <div className="card-body">
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend">
                  Username <span className="text-red-600">*</span>
                </legend>

                <input
                  type="text"
                  className="input"
                  placeholder="Your Username..."
                />
              </fieldset>

              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend">
                  Password <span className="text-red-600">*</span>
                </legend>

                <input
                  type="password"
                  className="input"
                  placeholder="Your Password..."
                />
              </fieldset>
            </div>
          </div>

          <div className="card-actions justify-center mx-6">
            <button className="btn btn-primary w-full">Sign In</button>

            <p className="label mt-3">
              You don't have any{" "}
              <span className="text-primary hover:underline">
                <Link to="/">LIBSOU</Link>
              </span>{" "}
              account yet?
            </p>

            <p className="label">
              <span className="text-secondary hover:underline">
                <Link to="/sign-up">Sign Up</Link>
              </span>{" "}
              with this link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
