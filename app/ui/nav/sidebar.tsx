import { ActionIcon, Flex, Skeleton, Stack, Tooltip } from "@mantine/core";
import { IconRss, IconSearch, IconSettings } from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Stack justify="space-between" h="100%">
      <Stack justify="flex-start" gap="xs">
        Sidebar
        <Skeleton h={200} mt="sm" animate={false} />
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </Stack>
      <Flex justify="space-between" p="md">
        <Tooltip label="RSS">
          <ActionIcon
            variant="default"
            radius="xl"
            size="xl"
            aria-label="RSS"
            style={{ marginTop: "" }}
          >
            <IconRss />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Search">
          <ActionIcon
            variant="default"
            radius="xl"
            size="xl"
            aria-label="Search"
            style={{ marginTop: "" }}
          >
            <IconSearch />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Settings">
          <ActionIcon
            variant="default"
            radius="xl"
            size="xl"
            aria-label="Settings"
            component={Link}
            href="/dashboard/settings"
            style={{ marginTop: "" }}
          >
            <IconSettings />
          </ActionIcon>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default Sidebar;
