import { Stack, Group, Text, Badge, Box, Card, Image } from '@mantine/core';
import { ReactNode } from 'react';

export interface RentalCardProps {
  children?: ReactNode;
  id: string;
  title: string;
  location: string;
  price: number;
  propertyType: string;
  description: string;
  bathrooms: number;
  bedrooms: number;
  imageSrc: string;
}

function RentalCard(props: RentalCardProps) {
  const rental = props;
  
  return (
    <Card
      key={rental.id}
      withBorder
      padding="lg"
      radius="md"
      shadow="sm"
      w={500}
    >
      <Card.Section>
        <Image
          src={rental.imageSrc}
          alt="Rental image"
          height={200}
        />
      </Card.Section>

      {/* Header */}
      <Stack gap="xs" mb="md" mt="sm">
        <Group justify="space-between">
          <Text fw={500}>{rental.title}</Text>
          <Text fw={700} size="sm">{rental.location}</Text>
        </Group>

        <Group justify="space-between">
          <Group gap="xs">
            <Text fw={500} size="sm">Price</Text>
            <Text size="sm" c="dimmed">${rental.price}</Text>
          </Group>
          <Badge>{rental.propertyType}</Badge>
        </Group>
      </Stack>

      {/* Description */}
      <Text size="sm" mb="md" c="dimmed">
        {rental.description}
      </Text>

      {/* Footer */}
      <Card.Section withBorder inheritPadding py="xs">
        <Group>
          <Box>
            <Text size="xs" c="dimmed">
              Bathrooms
            </Text>
            <Text fw={500} size="sm">
              {rental.bathrooms}
            </Text>
          </Box>

          <Box>
            <Text size="xs" c="dimmed">
              Bedrooms
            </Text>
            <Text fw={500} size="sm">
              {rental.bedrooms}
            </Text>
          </Box>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default RentalCard;
