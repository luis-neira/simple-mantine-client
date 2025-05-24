const baseURL = "http://localhost:3000";

class HTTPError extends Error {
  status: number | undefined;
  response: Response | undefined;
  constructor(msg: string) {
    super(msg);
    this.name = "HTTPError";
  }
}

export default (endpoint: string, opts: RequestInit) => {
  const url = baseURL + "/" + endpoint;

  return fetch(url, opts).then((res) => {
    if (!res.ok) {
      const err = new HTTPError(res.statusText);
      err.status = res.status;
      err.response = res;
      throw err;
    }

    return res;
  });
};
