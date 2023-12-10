import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import PeopleList from './components/PeopleList';
import {People} from "./DataApi/people.interface";
import {getCountries, getPeople} from './DataApi';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [peoples, setPeoples] = useState<People[] | []>([]);

    useEffect(() => {
        async function fetchPeople() {
            try {
                const results = await getPeople({search: searchQuery});
                setPeoples(results.searchResults);
            } catch (error) {
            }
        }
        fetchPeople();

    }, [searchQuery]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                // @ts-ignore
                const countries = await getCountries();
            } catch (error) {
            }
        }

        fetchCountries();
    }, []);

    return (
        <div>
            <h1>People Search</h1>
            <Search setSearchQuery={setSearchQuery}/>
            <PeopleList peoples={peoples}/>
        </div>
    );
};

export default App;
