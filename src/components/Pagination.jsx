import React from "react";
import { Row, Col, Pagination } from "antd";

const PaginationMovie = () => {
  <Row>
    <Col span={12} offset={6} style={{ margin: "10px" }}>
      <Pagination defaultCurrent={1} total={500} />
    </Col>
  </Row>;
};

export default React.memo(PaginationMovie);
