import { Button, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function MobileSettingsMenu({ tabs }: { tabs: string[] }) {
  const router = useRouter();

  return (
    <Stack hiddenFrom="md">
      {tabs.map((tab) => (
        <Button
          fullWidth
          rightSection={<IconArrowRight />}
          key={tab}
          onClick={() => router.push(`/dashboard/settings/${tab}`)}
        />
      ))}
    </Stack>
  );
}
