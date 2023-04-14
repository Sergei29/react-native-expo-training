import { useState, useEffect } from "react";

import { BusinessDetails } from "../types";
import { fetchData } from "../lib";

interface State {
  data: BusinessDetails | null;
  loading: boolean;
  error: null | string;
}

const initState: State = {
  data: null,
  loading: false,
  error: null,
};

interface HookProps {
  id: string;
}

const useBusinessDetails = ({ id }: HookProps) => {
  const [state, setState] = useState<State>(initState);

  useEffect(() => {
    if (!id) return;
    let isMounted = true;

    const getBusinessById = async () => {
      setState(() => ({ ...initState, loading: true }));
      const { data = null, error } = await fetchData<BusinessDetails>(`/${id}`);
      if (isMounted) {
        setState((current) => ({ ...current, loading: false, data, error }));
      }
    };

    getBusinessById();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return state;
};

export default useBusinessDetails;
