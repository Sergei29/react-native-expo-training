import { useState, useCallback } from "react";

import { fetchData } from "../lib";
import { BusinessSearchResponse, BusinessSummary } from "../types";

interface HookProps {
  onSuccess?: () => void;
}

interface State {
  data: BusinessSummary[];
  loading: boolean;
  error: null | string;
}

const initState: State = {
  data: [],
  loading: false,
  error: null,
};

const useBusinessSearch = ({
  onSuccess,
}: HookProps): [(term: string) => Promise<void>, State] => {
  const [results, setResults] = useState<State>(initState);

  const fetchResults = useCallback(async (searchTerm: string) => {
    if (!searchTerm) return;

    setResults({ ...initState, loading: true });

    const { data, error } = await fetchData<BusinessSearchResponse>("/search", {
      params: {
        term: searchTerm,
        location: "London",
        sort_by: "best_match",
        limit: 50,
      },
    });

    !error && onSuccess && onSuccess();

    setResults((current) => ({
      ...current,
      loading: false,
      error,
      data: data?.businesses || [],
    }));
  }, []);

  return [fetchResults, results];
};

export default useBusinessSearch;
