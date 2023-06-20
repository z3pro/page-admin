/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { storage } from "../../../../../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import {
  ACT_CATEGORY_GET,
  ACT_PRODUCT_POST,
  ACT_PRODUCT_PUT,
} from "../../../../../../../redux/actions";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function ModelEdit({
  onHide,
  show,
  product,
  resetProduct,
  setProduct,
  typeButton,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACT_CATEGORY_GET());
  }, []);
  const category = useSelector((state) => state.category);
  const refImg = useRef();
  const handleInput = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setProduct({ ...product, img: e.target.result });
    });
  };
  const handleClose = () => {
    onHide();
  };
  const handleAdd = async () => {
    if (refImg.current.files && refImg.current.files[0]) {
      const file = await refImg.current.files[0];
      const storageRef = ref(storage, file.name);
      const metadata = {
        contentType: "image/jpeg",
      };
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          // eslint-disable-next-line default-case
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            // ...

            case "storage/unknown":
              break;
          }
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            product = { ...product, img: downloadURL };
          });
          dispatch(ACT_PRODUCT_POST(product));
        }
      );
      onHide();
    }
  };
  const handleUpdate = async () => {
    if (refImg.current.files && refImg.current.files[0]) {
      const file = await refImg.current.files[0];
      const storageRef = ref(storage, file.name);
      const metadata = {
        contentType: "image/jpeg",
      };
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          // eslint-disable-next-line default-case
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            // ...

            case "storage/unknown":
              break;
          }
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            product = { ...product, img: downloadURL };
          });
          dispatch(ACT_PRODUCT_PUT(product));
        }
      );
    } else {
      dispatch(ACT_PRODUCT_PUT(product));
    }
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {product.img !== "" && (
          <img
            src={product.img}
            alt=""
            width="100px"
            height="100px"
            style={{
              display: "block",
              marginBottom: "10px",
              marginLeft: "20px",
            }}
          />
        )}
        <div style={{ margin: "10px" }}>
          <label>Hình ảnh :</label>
          <input
            ref={refImg}
            type="file"
            onChange={handleInput}
            accept="image/gif,image/jpeg,image/png"
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Danh mục :</label>{" "}
          {/* <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={product.category}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, category: value });
            }}
          /> */}
          <Form.Select
            aria-label="Default select example"
            value={product.category}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, category: value });
            }}
          >
            <option value="">Loại danh mục</option>
            {category.map((e, index) => {
              return (
                <option value={e.title} key={index}>
                  {e.title}
                </option>
              );
            })}
          </Form.Select>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Tiêu đề :</label>{" "}
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={product.title}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, title: value });
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Thông tin sản phẩm :</label>{" "}
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            value={product.content}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, content: value });
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Giá bán :</label>{" "}
          <Form.Control
            size="sm"
            type="number"
            placeholder=""
            value={product.price}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, price: value });
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Số lượng :</label>{" "}
          <Form.Control
            size="sm"
            type="number"
            placeholder=""
            value={product.target}
            onChange={(e) => {
              const value = e.target.value;
              setProduct({ ...product, target: value });
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {/* <Button
            variant="primary"
            style={{ margin: "10px" }}
            onClick={handleUpdate}
          >
            Cập nhật
          </Button> */}
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
