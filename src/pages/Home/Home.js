import { Button, CardGroup, Col, Form, InputGroup, Row } from "react-bootstrap";
import IndividualIntervalsExample from "../../components/Carousels";
import classNames from "classnames/bind";
import Cards from "../../components/Card";
import styles from "./Home.module.scss";
import ItemCategory from "../../components/ItemCategory";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <IndividualIntervalsExample />
      <div className={cx('category')}>
        <ItemCategory img= 'https://mayxachtay.vn/uploads/2022/04/dell.png'/>
        <ItemCategory img= 'https://mayxachtay.vn/uploads/2022/04/asus.png'/>
      </div>
      <div className={cx("menu-option")}>
        <div className={cx("option-search")}>
          <Form.Select
            aria-label="Default select example"
            style={{ width: "200px", marginLeft: "10px" }}
          >
            <option>Lựa chọn</option>
            <option value="1">Laptop Lenovo</option>
            <option value="2">Laptop Dell</option>
            <option value="3">Laptop Hp</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            style={{ width: "200px", marginLeft: "10px" }}
          >
            <option>Sắp xếp theo</option>
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
          </Form.Select>
        </div>
        <div className={cx("search")}>
          <InputGroup>
            <Form.Control
              placeholder="Tìm kiếm sản phẩm"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Tìm Kiếm
            </Button>
          </InputGroup>
        </div>
      </div>
      <div className={cx("list-card")}>
        <div className={cx("product")}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
