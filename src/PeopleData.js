import React from "react";
import "./App.css";
import { peopleData } from "./data";

const PeopleData = () => {
    return (
        <div className="people-table">
            <h1>People Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Profession</th>
                        <th>Yearly Salary</th>
                        <th>Yearly Expenses</th>
                        <th>Credit Score</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person, index) => (
                        <tr key={index}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                            <td>{person.profession}</td>
                            <td>{person.yearlySalary}</td>
                            <td>{person.yearlyExpenses}</td>
                            <td>{person.creditScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { PeopleData };
