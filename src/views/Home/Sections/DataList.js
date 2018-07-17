import React from 'react';
import { Row, Col, Card, Button, Preloader } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataCard = props => {
  const { data } = props;
  const url = `data/${data.url}`;
  return (
    <Card
      className="w3-spin"
      textClassName=""
      title={data.title}
      actions={[
        <Link to={url} key={data.url}>
          <Button waves="light">Detail</Button>
        </Link>,
      ]}
    >
      <p>{data.description}</p>
    </Card>
  );
};

const DataList = props => {
  const { dataList } = props;
  if (!dataList) return <Preloader flashing />;
  return (
    <section className="dataList">
      <div className="container content-wrap">
        <h2>Datasets and Models</h2>
        {dataList.length === 0 ? (
          <p>There is no data matching your query :(</p>
        ) : (
            <ul className="dataListCards">
              <Row>
                {dataList.map(data => (
                  <Col key={data.title} s={12} m={6} xl={4}>
                    <li>
                      <DataCard data={data} />
                    </li>
                  </Col>
                ))}
              </Row>
            </ul>
          )}
      </div>
    </section>
  );
};

export default DataList;
