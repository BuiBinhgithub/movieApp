import React from "react";
import { Row, Col, Input } from "antd";

const { Search } = Input;

const SearchMovie = (props) => {
  return (
    <Row
      className="gutter"
      style={{ margin: "20px 0" }}
    >
      <Col span={12} offset={6}>
        <Search
          placeholder="input search text"
          enterButton
          onSearch={(val) => props.search(val)}
        />
      </Col>
    </Row>
  );
};

export default React.memo(SearchMovie);
