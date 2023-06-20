import classNames from "classnames/bind";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ManageProduct.module.scss";
import { useEffect, useRef, useState } from "react";
import {
  ACT_PRODUCT_DELETE,
  ACT_PRODUCT_GET,
  ACT_PRODUCT_SEARCH,
  ACT_PRODUCT_SEARCH_ASC,
  ACT_PRODUCT_SEARCH_CATEGORY,
  ACT_PRODUCT_SEARCH_DESC,
  ACT_USER_GET,
} from "../../../../../../redux/actions";
import { TYPE_USER_GET } from "../../../../../../redux/constants/actionTypes";
import ModelEdit from "./components/ModelEdit";
import products from "../../../../../../redux/reducers/product";

const cx = classNames.bind(styles);
function ManageProduct() {
  const [valueSearch, setValueSearch] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [product, setProduct] = useState({});
  const [typeButton, setTypeButton] = useState("");
  const inputSearch = useRef();
  const dispatch = useDispatch();
  //handle
  const handleDelete = (id) => {
    dispatch(ACT_PRODUCT_DELETE(id));
  };
  const handleSearch = (e) => {
    dispatch(ACT_PRODUCT_SEARCH(valueSearch));
    inputSearch.current.focus();
  };
  useEffect(() => {
    dispatch(ACT_PRODUCT_GET());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const resetProduct = () => {
    setProduct({});
  };
  const handleAdd = () => {
    setTypeButton("add");
    setShowEdit(true);
    setProduct({});
  };
  const handleShowInfo = (product) => {
    setShowEdit(true);
    setProduct(product);
  };
  const handleSelect = (e)=>{
    const value = e.target.value; 
    if(value === "1") {
      console.log(value);
      dispatch(ACT_PRODUCT_SEARCH_ASC("price"))
    } else if (value === "2") {
      dispatch(ACT_PRODUCT_SEARCH_DESC("price"))
    } else if (value === "3") {
      dispatch(ACT_PRODUCT_SEARCH_CATEGORY("price"))
    }
  }
  const data = useSelector((state) => state.products);
  const listProducts = data.map((product, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.category}</td>
        <td>{product.title}</td>
        <td>
          <img width="50px" height="50px" src={product.img} alt="" />
        </td>
        <td>{product.price}</td>
        <td>
          <Button variant="primary" onClick={() => handleShowInfo(product)}>
            Xem chi tiết
          </Button>
        </td>
        <td>
          <Button
            variant="primary"
            onClick={() => {
              setShowEdit(true);
              setTypeButton("update");
              setProduct(product);
            }}
          >
            Sửa
          </Button>
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(product.id)}
          >
            Xóa
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search")}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Tìm kiếm người dùng"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={inputSearch}
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onFocus={() => setValueSearch("")}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSearch}
          >
            Tìm kiếm
          </Button>
        </InputGroup>
      </div>
      <div className={cx("arrange")}>
        <Form.Select aria-label="Default select example" onChange={handleSelect}>
          <option>Sắp xếp</option>
          <option value="1">Giá tăng dần</option>
          <option value="2">Giá giảm dần</option>
          <option value="3">Theo danh mục</option>
        </Form.Select>
      </div>
      <div className={cx("add-product")}>
        <Button variant="primary" onClick={handleAdd}>
          Thêm sản phẩm
        </Button>
      </div>
      <div className={cx("list-user")}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Danh mục</th>
              <th>Tiêu đề</th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Hiển thị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{listProducts}</tbody>
        </Table>
      </div>
      <ModelEdit
        product={product}
        typeButton={typeButton}
        resetProduct={resetProduct}
        setProduct={setProduct}
        show={showEdit}
        onHide={() => setShowEdit(false)}
      />
    </div>
  );
}
export default ManageProduct;
