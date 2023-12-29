import MobileSettingsMenu from "@/app/ui/settings/menu";
import SettingsTabs from "@/app/ui/settings/tabs";
import { Container, Select, Tabs, Title } from "@mantine/core";
import React from "react";

const tabs = [
  "qBolt",
  "Downloads",
  "Connection",
  "Speed",
  "BitTorrent",
  "RSS",
  "Advanced",
];

export default function Layout() {
  return (
    <Container p="xs" m="0" size="100%">
      <Title order={2} p="md">
        Settings
      </Title>
      <SettingsTabs tabs={tabs} activeTab={"qBolt"} />
      <MobileSettingsMenu tabs={tabs} />
    </Container>
  );
}
