import { AppShell, Burger, Box, Text, Loader } from '@mantine/core';
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

      <AppShell.Main>
        <Text size="xl">Main</Text>
        <Box p={16}>
          {isLoading && <Loader type="bars" mx="auto" />}
          <RentalStack rentals={rentals} />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
