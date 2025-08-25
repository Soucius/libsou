import { useState } from "react";
import { Link } from "react-router";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log(username);

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-96 h-97 shadow-sm border border-primary">
        <div className="card-title justify-center mt-3">
          <h2 className="text-3xl">Sign Up</h2>
        </div>

        <div className="label mt-3 mx-auto">
          Sign up to{" "}
          <span className="text-primary hover:underline">LIBSOU</span>{" "}
        </div>

        <div className="m-3">
          <form onSubmit={handleForm} className="form">
            <div className="card-body">
              <div className="form-control">
                <fieldset className="fieldset mb-1">
                  <legend className="fieldset-legend">
                    Username <span className="text-red-600">*</span>
                  </legend>

                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="input"
                    placeholder="Your Username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
              </div>

              <div className="form-control">
                <fieldset className="fieldset mb-2">
                  <legend className="fieldset-legend">
                    Password <span className="text-red-600">*</span>
                  </legend>

                  <input
                    type="password"
                    id="password"
                    required
                    name="password"
                    className="input"
                    placeholder="Your Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
              </div>

              <div className="form-control">
                <fieldset className="fieldset mb-2">
                  <legend className="fieldset-legend">
                    Re-type Password <span className="text-red-600">*</span>
                  </legend>

                  <input
                    type="password"
                    id="retype-password"
                    required
                    name="retype-password"
                    className="input"
                    placeholder="Re-type Your Password..."
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                  />
                </fieldset>
              </div>
            </div>
          </form>

          <div className="card-actions justify-center mx-6">
            <input
              type="submit"
              value={isLoading ? "Loading..." : "Sign Up"}
              className="btn btn-primary w-full"
            />

            <p className="label mt-3">
              Do you have
              <span className="text-primary hover:underline">LIBSOU</span>{" "}
              account?
            </p>

            <p className="label">
              <span className="text-secondary hover:underline">
                <Link to="/sign-in">Sign In</Link>
              </span>{" "}
              with this link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
