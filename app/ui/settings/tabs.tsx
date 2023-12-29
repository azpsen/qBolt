import { Tabs } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SettingsTabs({
  activeTab,
  tabs,
}: {
  activeTab: string;
  tabs: string[];
}) {
  // const router = useRouter();

  return (
    <Tabs
      // variant="pills"
      variant="outline"
      visibleFrom="md"
      value={activeTab}
      // onChange={(value: string | null) =>
      //   router.push(`/dashboard/settings/${value}`)
      // }
    >
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab
            component={Link}
            href={`/dashboard/settings/${tab}`}
            key={tab}
            value={tab}
          >
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
