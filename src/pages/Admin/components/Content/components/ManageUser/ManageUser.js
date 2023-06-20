import classNames from "classnames/bind";
import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import styles from "./ManageUser.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACT_USER_GET, ACT_USER_SEARCH } from "../../../../../../redux/actions";

const cx = classNames.bind(styles);
function ManageUser() {
  const [valueSearch, setValueSearch] = useState("");
  const [user, setUser] = useState({});
  const [model, setModel] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACT_USER_GET());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearch = () => {
    dispatch(ACT_USER_SEARCH(valueSearch));
    setValueSearch("");
  };
  const handleShowInfo = (user) => {
    setModel(true);
    setUser(user);
  };
  const data = useSelector((state) => state.users);
  const listUser = data.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.admin ? "admin" : "user"}</td>
        <td>
          <Button variant="primary" onClick={() => handleShowInfo(user)}>
            Xem chi tiết
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
            value={valueSearch}
            onFocus={() => setValueSearch("")}
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
      <div className={cx("list-user")}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quyền hạn</th>
              <th>Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>{listUser}</tbody>
        </Table>
      </div>
      <Modal
        onHide={() => setModel(false)}
        show={model}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div style={{ margin: "10px" }}>
            <label>Name :</label>{" "}
            <Form.Control
              disabled
              size="sm"
              type="text"
              placeholder=""
              value={user.name}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label>Email :</label>{" "}
            <Form.Control
              disabled
              size="sm"
              type="text"
              placeholder=""
              value={user.email}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label>BirthDate :</label>{" "}
            <Form.Control
              disabled
              size="sm"
              type="text"
              placeholder=""
              value={user.birthDate}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label>Gender :</label>{" "}
            <Form.Control
              disabled
              size="sm"
              type="text"
              placeholder=""
              value={user.gender === 0 ? "Male" : "Female"}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ManageUser;
