import { ReactNode } from 'react';
import { Stack } from '@mantine/core';

import RentalCard from '../RentalCard';
import { Rental } from '../../services/rental-service';

interface RentalStackProps {
  children?: ReactNode;
  rentals: Rental[]
}

function RentalStack({ rentals }: RentalStackProps) {
  return (
    <Stack
      align="center"
      justify="center"
      gap="md"
    >
      {rentals.map((rental) => {
        return (
          <RentalCard
            key={rental.id}
            bathrooms={rental.bathrooms}
            bedrooms={rental.bedrooms}
            description={rental.description}
            id={rental.id}
            location={rental.location}
            price={rental.price}
            propertyType={rental.property_type}
            title={rental.title}
            imageSrc={rental.image}
          />
        );
      })}
    </Stack>
  );
}

export default RentalStack;
