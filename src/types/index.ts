export * from "./api";

import { BusinessSummary } from "./";

export interface BusinessSummaryFormated
  extends Pick<
    BusinessSummary,
    "id" | "alias" | "name" | "image_url" | "review_count" | "rating" | "price"
  > {
  range: "cheap" | "medium" | "expensive" | null;
}

export type RootStackParamList = {
  Search: undefined;
  ResultShow: { id: string };
};
