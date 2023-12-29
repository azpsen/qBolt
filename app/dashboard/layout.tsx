"use client";

import { AppShell } from "@mantine/core";
import TopBar from "../ui/nav/topbar";
import Sidebar from "../ui/nav/sidebar";
import { useDisclosure } from "@mantine/hooks";

export default function layout({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const headerHeight = 60;
  const sidebarWidth = 300;

  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{
        width: sidebarWidth,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      transitionDuration={0}
    >
      <AppShell.Header>
        <TopBar
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
          mobileOpened={mobileOpened}
          desktopOpened={desktopOpened}
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
