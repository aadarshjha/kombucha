import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { Card } from "antd";
import "./events.css";
import axios from "axios";
import { BACKEND_URL } from "../../api";

const { Meta } = Card;

const Events: React.FC<Record<string, never>> = () => {
  const [eventData, setEvents] = useState([]);

  // fetches mongoDB data from the backend.
  useEffect(() => {
    // localhost is the server which we use in development
    // we will use heroku services in deployment.
    axios.get(`${BACKEND_URL}/events`).then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    // returns, dynamically, all the events formatted as cards.
    <div className="centeredCards">
      <Logo page="Events With VUMS" />

      {/* a map function will take all the fetched data and created Card objects */}
      {eventData.map((element: any) => {
        return (
          // Card objects will represent the data through a unique UI.
          <Card
            hoverable
            key={element.title}
            style={{ width: "40%", marginBottom: "10px" }}
            cover={
              <div className="cropped">
                <img
                  alt="event image"
                  src={element.image}
                  className="cardImage"
                />
              </div>
            }
          >
            <Meta title={element.title} description={element.body} />
          </Card>
        );
      })}
      {/* A constant card that exists for testing purposes, will be removed in production. */}
      <Card
        hoverable
        style={{ width: "40%", marginBottom: "10px" }}
        cover={<img alt="test image" src={"test.jpg"} />}
      >
        <Meta
          // these are all test titles and test decriptions.
          title={"This is a Test Card That Will Be Removed From Production"}
          description={
            "This is a simple test card for the purpose of demonstration for JEST testing in react. It will be removed!"
          }
        />
      </Card>
    </div>
  );
};

export default Events;
