import { Burger, Button, Group, Menu, Text, Title } from "@mantine/core";
import { IconBolt, IconCaretDown, IconCheck } from "@tabler/icons-react";
import Server from "@/app/lib/types/server";
import ThemeToggle from "@/app/ui/themeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TopBar = ({
  toggleMobile,
  toggleDesktop,
  mobileOpened,
  desktopOpened,
}: {
  toggleMobile: () => void;
  toggleDesktop: () => void;
  mobileOpened: boolean;
  desktopOpened: boolean;
}) => {
  const router = useRouter();

  const connected = false;

  return (
    <Group h="100%" px="md" gap="sm" justify="space-between">
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
        <Group justify="center">
          <Button
            leftSection={<IconBolt />}
            variant="default"
            color="dark"
            // radius="xl"
            px="xs"
            component={Link}
            href="/"
          >
            <Text fw={700} size="lg">
              qBolt
            </Text>
          </Button>
          <Menu position="bottom-start">
            <Menu.Target>
              <Button
                variant="subtle"
                color={connected ? "green" : "red"}
                px="xs"
                rightSection={<IconCaretDown />}
              >
                <Title order={5}>
                  {/* {isActiveServerError ? (
                    <Text c="red" fw="bold">
                      Error
                    </Text>
                  ) : isActiveServerPending ? (
                    "Loading..."
                  ) : activeServer ? (
                    activeServer.name
                  ) : (
                    "Disconnected"
                  )} */}
                  Disconnected
                </Title>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Servers</Menu.Label>
              {/* {isPending ? <Text>Loading...</Text> : null}
              {isError ? (
                <Text c="red" fw="bold">
                  Error loading servers: {error.message}
                </Text>
              ) : null}
              {servers?.map((s: Server) =>
                activeServer && s.id === activeServer.id ? (
                  <Menu.Item key={s.id} rightSection={<IconCheck key={s.id} />}>
                    {s.name}
                  </Menu.Item>
                ) : (
                  <Menu.Item key={s.id} onClick={() => setActiveServer(s)}>
                    {s.name}
                  </Menu.Item>
                )
              )} */}
              <Menu.Item>Server?</Menu.Item>
              <Menu.Label>Actions</Menu.Label>
              <Menu.Item>Log Out</Menu.Item>
              <Menu.Item onClick={() => router.push("/servers")}>
                Manage Servers
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
      <ThemeToggle />
    </Group>
  );
};

export default TopBar;
