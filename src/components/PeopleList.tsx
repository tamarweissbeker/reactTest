import React from 'react';
import {People} from "../DataApi/people.interface";
interface PeopleListProps {
    peoples: People[] | []
}
const PeopleList: React.FunctionComponent<PeopleListProps> = ({ peoples }) => {
    function diff_years(dateString) {
        const dateOfBirth = new Date(dateString); // Convert dateString to Date object
        const today = new Date();
        let diff = (today.getTime() - dateOfBirth.getTime()) / 1000;
        diff /= 60 * 60 * 24 * 365.25;
        return Math.abs(Math.round(diff));
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
                {peoples.map((people) => {
                    return (
                        <tr key={people.id}>
                            <td>{people.first_name} {people.last_name}</td>
                            <td>{diff_years(people.date_of_birth)}</td>
                            <td>{people.country} {people.city}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default PeopleList;
