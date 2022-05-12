/*

TASK: modify this component to...

- send a request to "https://ih-crud-api.herokuapp.com/characters/1"
- display the details

Bonus: 
- how can we make the component generic

*/

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function CharacterDetails(props){

//useEffect(code, dependencyArr)

const [details, setDetails] = useState({});

//let details;  not gonna work bc variable will get lost
// INSTEAD we need stateful, not global var

    const {characterId} = useParams();

    useEffect( () => {
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
        .then( response => {
            //console.log(response.data)
             //details = response.data;
             setDetails(response.data);
        })
        .catch( e => console.log("error getting char details", e))
    }, [characterId])

    
    //console.log(props)
    return (
        <>
            <h1>Character details....</h1>

            Name: {details.name} <br />
            Occupation: {details.occupation} <br />
            Weapon: {details.weapon} <br />
            Debt: {details.debt ? "Yes" : "No"} <br />
        </>
    );
}

export default CharacterDetails;