import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./style.css";

const ContactButtons = () => {
  return (
    <>
      <Space>
        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/5585992528922"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buttonContact">
            <WhatsAppOutlined />
          </button>
        </a>

        {/* Botão do Instagram */}
        <a
          href="https://www.instagram.com/chicaformiga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buttonContact">
            <InstagramOutlined />
          </button>
        </a>
      </Space>
    </>
  );
};

export default ContactButtons;
