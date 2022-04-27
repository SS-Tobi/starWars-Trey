import { useState, useEffect, useCallback } from "react";
import { StarWarsApi } from "../utils/api";
import { useStore } from "../contexts";
import * as CONSTANTS from "../contexts/constants/starWars";

export const useFilterPeople = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useStore();

  const filterPeople = useCallback(async (value) => {
    setIsLoading(true);

    try {
      const { data } = await StarWarsApi.get(`/?search=${value}`);
      dispatch({ type: CONSTANTS.SET_PEOPLE, people: data.results });
    } catch (err) {
      console.log("err: ", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    dispatch({ type: CONSTANTS.SET_LOADING, isLoading });
  }, [isLoading]);

  return { filterPeople };
};
