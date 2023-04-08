import { yelpApi } from "./axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, delay);
  });

interface RetryArgs<D> {
  fetcherFn: () => Promise<D>;
  interval?: number;
  retries?: number;
  count?: number;
}
const backOffAndRetry = async <D = any>({
  fetcherFn,
  interval = 1000,
  retries = 3,
  count = 0,
}: RetryArgs<D>): Promise<D> => {
  try {
    const response = await fetcherFn();
    return response;
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    await wait(interval * 2 ** count);
    return backOffAndRetry({
      fetcherFn,
      retries: retries - 1,
      count: count + 1,
    });
  }
};

export const fetchData = async <D = any>(
  url: string,
  config?: AxiosRequestConfig
) => {
  try {
    const { data } = await backOffAndRetry<AxiosResponse<D, any>>({
      fetcherFn: () => yelpApi.get<D>(url, config),
    });
    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Request failed",
    };
  }
};
