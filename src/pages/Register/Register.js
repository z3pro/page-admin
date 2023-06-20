/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACT_USER_POST } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleName = (e) => {
    const name = e.target.value.trim();
    if (name.length > 0) {
      e.target.parentElement.querySelector(".validate").innerHTML = "";
      setUser({ ...user, name: name });
    } else {
      e.target.parentElement.querySelector(".validate").innerHTML =
        "Vui lòng nhập trường này";
    }
  };
  const handleBirthDate = (e) => {
    const birthDate = e.target.value;
    if (birthDate !== null) {
      setUser({ ...user, birthDate: birthDate });
    }
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setUser({ ...user, email: email });
      e.target.parentElement.querySelector(".validate").innerHTML = "";
    } else {
      e.target.parentElement.querySelector(".validate").innerHTML =
        "Vui lòng nhập email";
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    if (
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
    ) {
      setUser({ ...user, password: password });
      e.target.parentElement.querySelector(".validate").innerHTML = "";
    } else {
      e.target.parentElement.querySelector(".validate").innerHTML =
        "Vui lòng nhập mật khẩu,có số chữ cái thường,có chữ in hoa và trên 8 ký tự";
    }
  };
  const handleConfirm = (e) => {
    const confirm = e.target.value;
    if (confirm === user.password) {
      setForm(true);
      e.target.parentElement.querySelector(".validate").innerHTML = "";
    } else {
      e.target.parentElement.querySelector(".validate").innerHTML =
        "Mật khẩu nhập lại k đúng";
    }
  };
  const handleRegister = () => {
    if (
      user.name !== undefined &&
      user.birthDate !== undefined &&
      user.gender !== undefined &&
      user.email !== undefined &&
      user.password !== undefined &&
      form
    ) {
      dispatch(ACT_USER_POST(user));
      navigate("/login");
    }
  };
  return (
    <div className="wrapper1 rounded bg-white">
      <div className="h3">Registration Form</div>
      <div className="form">
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleName}
            />
            <label className="validate"></label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Birthday</label>
            <input
              type="date"
              className="form-control"
              required
              onChange={handleBirthDate}
            />
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Gender</label>
            <div className="d-flex align-items-center mt-2">
              <label className="option">
                <input
                  type="radio"
                  name="radio"
                  onChange={() => setUser({ ...user, gender: 0 })}
                />
                Male
                <span className="checkmark" />
              </label>
              <label className="option ms-4">
                <input
                  type="radio"
                  name="radio"
                  onChange={() => setUser({ ...user, gender: 0 })}
                />
                Female
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={handleEmail}
            />
            <label className="validate"></label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              required
              onChange={handlePassword}
            />
            <label className="validate"></label>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              required
              onChange={handleConfirm}
            />
            <label className="validate"></label>
          </div>
        </div>
        <div className="btn btn-primary mt-3" onClick={handleRegister}>
          Register
        </div>
        <div className="text-center d-flex justify-content-between mt-4">
          <p>
            <a href="/login" className="font-italic text-muted">
              <u>Login ?</u>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
