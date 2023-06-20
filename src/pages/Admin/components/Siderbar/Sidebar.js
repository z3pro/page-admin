import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Accordion } from "react-bootstrap";

const cx = classNames.bind(styles);
function Sidebar({ setState, state }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>ShopCard</div>
      <div className={cx("list-manage")}>
        <ul>
          <li
            onClick={() => setState("category")}
            className={state === "category" ? cx("active") : ""}
          >
            Quản trị danh mục
          </li>
          <li
            onClick={() => setState("product")}
            className={state === "product" ? cx("active") : ""}
          >
            Quản trị sản phẩm
          </li>
          <li
            onClick={() => setState("user")}
            className={state === "user" ? cx("active") : ""}
          >
            Quản trị người dùng
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
