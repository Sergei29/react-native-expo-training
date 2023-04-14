import { AxiosRequestConfig, AxiosResponse } from "axios";

import { BusinessSummary, BusinessSummaryFormated } from "../types";
import { yelpApi } from "./axios";

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

const getPriceRange = (price?: string): "cheap" | "medium" | "expensive" => {
  const length = price?.length || 0;
  if (length < 2) return "cheap";
  if (length === 2) return "medium";
  return "expensive";
};

export const formatBusinessList = (
  bizListFromApi: BusinessSummary[]
): BusinessSummaryFormated[] =>
  bizListFromApi.length > 0
    ? bizListFromApi.map(
        ({ id, alias, name, image_url, review_count, rating, price }) => ({
          id,
          alias,
          name,
          image_url,
          review_count,
          rating,
          price,
          range: getPriceRange(price),
        })
      )
    : [];
