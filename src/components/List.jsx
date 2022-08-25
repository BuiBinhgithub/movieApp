import React from "react"
import { Row, Col, Card } from "antd"

const { Meta } = Card

const LisDataMovie = ({ movies }) => {
  return (
    <Row style={{ margin: "20px 0" }}>
      {movies.map((movie, index) => (
        <Col span={6} key={index}>
          <Card
            style={{ margin: "10px 10px" }}
            hoverable
            cover={<img alt="example" src={movie.Poster} />}
          >
            <Meta title={movie.Title} description={movie.Year} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default React.memo(LisDataMovie)
