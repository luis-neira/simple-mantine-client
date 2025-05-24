import fetchClient from "./fetch-client";

export interface Rental {
  id: string;
  title: string;
  location: string;
  price: number;
  property_type: string;
  description: string;
  bathrooms: number;
  bedrooms: number;
  image: string;
}

class RentalService {
  _endpoint: string;
  _client: typeof fetchClient;

  constructor(endpoint: string) {
    this._endpoint = endpoint;
    this._client = fetchClient;
  }

  getAll({ type } = { type: "" }) {
    const controller = new AbortController();

    const path = type ? `${this._endpoint}?type=${type}` : this._endpoint;

    const request: Promise<Rental[]> = this._client(path, {
      method: "GET",
      signal: controller.signal,
    }).then((res) => res.json());

    return {
      request,
      cancel: () => controller.abort(),
      signal: controller.signal,
    };
  }

  getTenants(rentalId: string) {
    const controller = new AbortController();

    const path = `${this._endpoint}/${rentalId}/tenants`;

    const request = this._client(path, {
      method: "GET",
      signal: controller.signal,
    }).then((res) => res.json());

    return {
      request,
      cancel: () => controller.abort(),
      signal: controller.signal,
    };
  }
}

const makeRentalService = () => new RentalService("rentals");

export default makeRentalService;
