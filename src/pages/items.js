import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col, Button, Pagination, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {loadItems, updateItemCategory, getUrl} from '../actions/itemAction'
import AddItem from "../components/AddItem";
import AppNavBar from "../components/AppNavBar";

export const Items = (props) => {
  dispatch(updateItemCategory(props.itemType))
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setModal] = useState(false);

  const { items, itemType, loadingItems } = useSelector(
    (state) => state.item
  );

  useEffect(() => {
    dispatch(loadItems());
  }, []);


  const handleItemClick = (id) => {
    const url = getUrl(itemType)
    history.push(`${url}/${id}/edit`);
  };

  if (loadingItems || !items) {
    return (
      <>
        <AppNavBar />
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="Loadin books..." />
        </div>
      </>
    );
  }

  return (
    <>
      <AppNavBar />
      <div
        style={{
          marginTop: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button
            type="default"
            style={{ width: "100px" }}
            onClick={() => setModal(true)}
          >
            <PlusOutlined />
            Add
          </Button>
        </div>
        <Row gutter={16}>
            {items.map((item) => (
              <Col
                key={item._id}
                span={5}
                onClick={() => handleItemClick(item._id)}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      src={`static/img/${item.img}`}
                      alt={item.name}
                    />
                  }
                >
                  <Card.Meta title={item.name} description={item.description} />
                </Card>
              </Col>
            ))}
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          ></div>
        

        <AddItem itemType={itemType} isOpen={isModalOpen} onClose={() => setModal(false)} />
      </div>
    </>
  );
};
