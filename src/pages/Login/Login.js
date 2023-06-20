/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACT_USER_GET } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(ACT_USER_GET());
  }, []);
  const listUser = useSelector((state) => state.users);
  console.log(listUser);
  const handleLogin = (e) => {
    e.preventDefault();
    listUser.forEach((element) => {
      if (element.email === user.email) {
        if (element.password === user.password) {
          console.log("tài khoản chính xác");
          if (element.admin) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          console.log("tài khoản k chính xác");
        }
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        {/* The image half */}
        <div className="col-md-6 d-none d-md-flex bg-image" />
        {/* The content half */}
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            {/* Demo content*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Login</h3>
                  <p className="text-muted mb-4">Welcome to ShopCard!</p>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email"
                        required
                        autoFocus
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required
                        className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        id="customCheck1"
                        type="checkbox"
                        defaultChecked
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="customCheck1"
                        className="custom-control-label"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      onClick={handleLogin}
                    >
                      Sign in
                    </button>
                    <div className="text-center d-flex justify-content-between mt-4">
                      <p>
                        <a href="/register" className="font-italic text-muted">
                          <u>Register ?</u>
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
}
export default Login;
