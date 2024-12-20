"use client";

import { Button, Segmented, Divider, message } from "antd";
import Theme from "./Theme";
import { useTheme, useThemeMode } from "antd-style";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const options = [
  { label: "亮色", value: "light" },
  { label: "暗色", value: "dark" },
];

export default function Home() {
  const theme = useTheme();
  const { appearance, setAppearance } = useThemeMode();

  const items: MenuItem[] = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
    {
      key: "alipay",
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];

  return (
    <div style={{ background: theme.colorBgLayout, height: "100vh" }}>
      <div>
        <Segmented
          onChange={(v) => setAppearance(v as any)}
          options={options}
        />
      </div>
      <Divider />
      <div>
        <Button
          onClick={() => {
            message.info("test");
          }}
        >
          按钮
        </Button>
      </div>
      <Menu mode="horizontal" items={items} />
    </div>
  );
}
