import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const ContactButtons = () => {
  return (
    <>
      <Space>
        <Button>
          <WhatsAppOutlined />
        </Button>
        <Button>
          <InstagramOutlined />
        </Button>
      </Space>
    </>
  );
};
export default ContactButtons;
