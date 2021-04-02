import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { Card } from "antd";
import "./events.css";
import axios from "axios";

const { Meta } = Card;

const Events: React.FC<Record<string, never>> = () => {
  const [eventData, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events").then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <div className="centeredCards">
      <Logo page="Events With VUMS" />

      {eventData.map((element: any) => {
        return (
          <Card
            hoverable
            key={element.title}
            style={{ width: "40%", marginBottom: "10px" }}
            cover={<img alt="test image" src={"test.jpg"} />}
          >
            <Meta title={element.title} description={element.body} />
          </Card>
        );
      })}
      <Card
        hoverable
        style={{ width: "40%", marginBottom: "10px" }}
        cover={<img alt="test image" src={"test.jpg"} />}
      >
        <Meta title={"This is a Test Card That Will Be Removed From Production"} description={"This is a simple test card for the purpose of demonstration for JEST testing in react. It will be removed!"} />
      </Card>
    </div>
  );
};

export default Events;
