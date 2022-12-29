import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BorderTopOutlined,
  BulbTwoTone,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme,  } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: "volleyball",
    icon: React.createElement(UserOutlined),
    label: "Volleyball"
  },
  {
    key: "movies",
    icon: React.createElement(UserOutlined),
    label: "Movies"
  },
  {
    key: "tech",
    icon: React.createElement(UserOutlined),
    label: "Tech"
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Title level={2}>Scribe Healer</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;