import { Button, ModalHeader } from "react-bootstrap";
import styles from "./Content.module.scss";
import classNames from "classnames/bind";
import ManageCategory from "./components/ManageCategory/MangeCategory";
import ManageUser from "./components/ManageUser/ManageUser";
import category from "../../../../redux/reducers/category";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function Content({ state }) {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate("/login")
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
      <Button variant="primary" style={{margin:"0 10px"}} onClick={handleLogout}>Đăng xuất</Button>
        <div className={cx("logo")}>Admin</div>
      </div>
      <div className={cx("content")}>
        {state === "category" ? (
          <ManageCategory />
        ) : state === "product" ? (
          <ManageProduct />
        ) : state === "user" ? (
          <ManageUser />
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  );
}

export default Content;
