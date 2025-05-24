import { AppShell, Burger, Text, Loader, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import useRentals from '../../hooks/useRentals';
import RentalStack from '../RentalStack';

function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const { rentals, isLoading } = useRentals();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Text size="xl">Logo</Text>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Text size="xl">Navbar</Text>
      </AppShell.Navbar>

      <AppShell.Main style={{ display: "flex", flexDirection: "column" }}>
        <Text size="xl">Main</Text>
        {isLoading && <Stack justify="center" h={100} flex={1}>
          <Loader type="bars" mx="auto" />
        </Stack>}
        <RentalStack rentals={rentals} />
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
