import React from "react";
import Logo from "../../components/Logo";
import { Card } from "antd";

const { Meta } = Card;

const Events: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Logo page="Events With VUMS" />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Events;
