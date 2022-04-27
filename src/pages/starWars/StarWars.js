import React, { useEffect, useCallback } from 'react';
import { AutoComplete } from '../../components/AutoComplete';
import { useGetPeopleList } from '../../hooks/useGetPeopleList';
import { useStore } from '../../contexts';
import { useFilterPeople } from '../../hooks/useFilterPeople';

const StarWars = () => {

    const { state } = useStore();
    const { isLoading, people } = state;
    const { getPeopleList } = useGetPeopleList();
    const { filterPeople } = useFilterPeople();

    const handleChange = useCallback((value) => {
        console.log("handleChange: ", value)
        filterPeople(value)
    }, [])

    useEffect(() => {
        getPeopleList();
    }, [])

    return (
        <div className="star-wars">
            <AutoComplete options={people} handleChange={handleChange} />
        </div>
    )
}

export default StarWars;
