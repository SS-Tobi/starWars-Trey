import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { AutoComplete } from "../../components/AutoComplete";
import { useGetPeopleList } from "../../hooks/useGetPeopleList";
import { useStore } from "../../contexts";
import { useFilterPeople } from "../../hooks/useFilterPeople";

const DEBOUNCE_DELAY = 300; //We can use debounce to prevent unneeded http request so that send only one request after 300 millisecond of user's typing

const StarWars = () => {
  const { state } = useStore();
  const { isLoading, people } = state;
  const { getPeopleList } = useGetPeopleList();
  const { filterPeople } = useFilterPeople();

  const debouncedFilter = debounce((value) => {
    filterPeople(value);
  }, DEBOUNCE_DELAY);

  const handleChange = useCallback((value) => {
    debouncedFilter(value);
  }, []);

  useEffect(() => {
    getPeopleList();
  }, []);

  return (
    <div className="star-wars">
      <AutoComplete
        options={people}
        label="StarWars"
        optionLabel="name"
        noOptionsText="No results"
        isLoading={isLoading}
        handleChange={handleChange}
      />
    </div>
  );
};

export default StarWars;
