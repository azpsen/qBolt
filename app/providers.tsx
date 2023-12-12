import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}
