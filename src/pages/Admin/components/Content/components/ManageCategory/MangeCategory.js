import classNames from "classnames/bind";
import styles from "./ManageCategory.module.scss";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ACT_CATEGORY_DELETE,
  ACT_CATEGORY_GET,
  ACT_CATEGORY_SEARCH,
  ACT_CATEGORY_SEARCH_ASC,
  ACT_CATEGORY_SEARCH_DESC,
} from "../../../../../../redux/actions";
import ModelEdit from "./components/ModelEdit";

const cx = classNames.bind(styles);
function ManageCategory() {
  const [valueSearch, setValueSearch] = useState("");
  const [category, setCategory] = useState({});
  const [show, setShow] = useState(false);
  const [typeButton, setTypeButton] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACT_CATEGORY_GET());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleUpdate = (category) => {
    setShow(true);
    setCategory(category);
    setTypeButton("update");
  };
  const handleAdd = () => {
    setShow(true);
    setCategory({});
    setTypeButton("add");
  };
  const handleDelete = (id) => {
    dispatch(ACT_CATEGORY_DELETE(id));
  };
  const handleSearch = () => {
    dispatch(ACT_CATEGORY_SEARCH(valueSearch));
    setValueSearch("");
  };
  const data = useSelector((state) => state.category);
  const listCategory = data.map((category, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{category.title}</td>
        <td>{category.module}</td>
        <td>{category.slug}</td>
        <td>
          <Button variant="secondary" onClick={() => handleUpdate(category)}>
            Sửa
          </Button>
          <Button
            variant="secondary"
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(category.id)}
          >
            Xóa
          </Button>
        </td>
      </tr>
    );
  });
  const handleSort = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "1") {
      dispatch(ACT_CATEGORY_SEARCH_DESC("title"));
    } else if (value === "2") {
      dispatch(ACT_CATEGORY_SEARCH_ASC("title"));
    }
  };
  return (
    <div className="wrapper">
      <div className={cx("search")}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Tìm kiếm danh mục"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
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
        <Form.Select aria-label="Default select example" onChange={handleSort}>
          <option>Sắp xếp</option>
          <option value="1">Từ A-Z</option>
          <option value="2">Từ Z-A</option>
        </Form.Select>
      </div>
      <div className={cx("add-category")}>
        <Button variant="primary" onClick={handleAdd}>
          Thêm danh mục
        </Button>
      </div>
      <div className={cx("list-category")}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Danh mục</th>
              <th>Module</th>
              <th>Đường dẫn</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{listCategory}</tbody>
        </Table>
      </div>
      <ModelEdit
        category={category}
        setCategory={setCategory}
        show={show}
        onHide={() => setShow(false)}
        typeButton={typeButton}
      />
    </div>
  );
}

export default ManageCategory;
