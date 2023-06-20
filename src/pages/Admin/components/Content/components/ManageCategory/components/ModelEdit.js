import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ACT_CATEGORY_POST, ACT_CATEGORY_PUT } from "../../../../../../../redux/actions";

function ModelEdit({ show, onHide, typeButton, category, setCategory }) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(ACT_CATEGORY_POST(category));
    onHide();
  };
  const handleUpdate = () => {
    dispatch(ACT_CATEGORY_PUT(category));
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div style={{ margin: "10px" }}>
          <label>Danh mục :</label>{" "}
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={category.title}
            onChange={(e) => {
              const value = e.target.value;
              setCategory({ ...category, title: value });
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Module :</label>{" "}
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={category.module}
            onChange={(e) => {
              const value = e.target.value;
              setCategory({ ...category, module: value });
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Slug đường dẫn :</label>{" "}
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={category.slug}
            onChange={(e) => {
              const value = e.target.value;
              setCategory({ ...category, slug: value });
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {typeButton === "add" ? (
            <Button
              variant="primary"
              style={{ margin: "10px" }}
              onClick={handleAdd}
            >
              Thêm sản phẩm
            </Button>
          ) : typeButton === "update" ? (
            <Button
              variant="primary"
              style={{ margin: "10px" }}
              onClick={handleUpdate}
            >
              Cập nhật
            </Button>
          ) : (
            <></>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModelEdit;
