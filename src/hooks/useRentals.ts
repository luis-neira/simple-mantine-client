import { useState, useEffect } from "react";
import makeRentalService, { Rental } from "../services/rental-service";

const useRentals = ({ type } = { type: "" }) => {
  const [rentals, setRentals] = useState<Array<Rental>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    setRentals([]);

    const rentalService = makeRentalService();
    const { request, cancel, signal } = rentalService.getAll({ type });

    request
      .then((data) => {
        setRentals(data);
      })
      .catch((err) => {
        if (!signal.aborted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      cancel();
    };
  }, [type]);

  return {
    rentals,
    isLoading,
    error,
  };
};

export default useRentals;
