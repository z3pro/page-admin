import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Siderbar/Sidebar";
import Content from "./components/Content/Content";
import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function Admin() {
  const [state, setState] = useState("category");
  return (
    <div className={cx("wrapper")}>
      <Row style={{ height: "100%", margin: "0" }}>
        <Col xl={3} style={{ padding: "0" }}>
          <Sidebar setState={setState} state={state}/>
        </Col>
        <Col xl={9} style={{ padding: "0" }}>
          <Content state={state} />
        </Col>
      </Row>
    </div>
  );
}

export default Admin;
