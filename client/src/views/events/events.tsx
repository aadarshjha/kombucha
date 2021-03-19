import React from "react";
import Logo from "../../components/Logo";
import { Card } from "antd";
import "./events.css";

const { Meta } = Card;

const eventData = [
  {
    title: "Event Title #1",
    body:
      "This is an example of an event. It will be a short para and you will be able to type some more stuff into the text.",
  },
  {
    title: "Event Title #2",
    body:
      "This is an example of an event. It will be a short para and you will be able to type some more stuff into the text.",
  },
  {
    title: "Event Title #3",
    body:
      "This is an example of an event. It will be a short para and you will be able to type some more stuff into the text.",
  },
  {
    title: "Event Title #4",
    body:
      "This is an example of an event. It will be a short para and you will be able to type some more stuff into the text.",
  },
];

const Events: React.FC<Record<string, never>> = () => {
  return (
    <div className="centeredCards">
      <Logo page="Events With VUMS" />

      {eventData.map((element) => {
        return (
          <Card
            hoverable
            key={element.title}
            style={{ width: "40%", marginBottom: "10px" }}
            cover={<img alt="test image" src="test.jpg" />}
          >
            <Meta title={element.title} description={element.body} />
          </Card>
        );
      })}
    </div>
  );
};

export default Events;
