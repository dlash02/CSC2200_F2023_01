import {Button, Col, Row} from "react-bootstrap";
import { useState } from 'react';
const Home = () => {
    const superHeros = [
        { 'Hulk' : { Age: 135, Power: "Smash"}},
        { 'Spiderman' : { Age: 17, Power: "Webs"}},
        { 'IronMan' : { Age: 45, Power: "The Suit"}}
    ]
    let heroRow = superHeros[0];
    console.log( `heroRow:${heroRow}`);
    console.log( heroRow );
    let heroName = Object.keys( heroRow);
    console.log( `heroName:${heroName}`);

    heroName = Object.keys( superHeros[0]);
    console.log( 'Name');
    console.log( heroRow[heroName].Age );

    const [name, setName] = useState( heroName ); // can be any data type
    const [age, setAge] = useState( heroRow[heroName].Age ); // can be any data type
    const handleClickPart2 = ( inName) => {
            console.log( inName );
            const row = superHeros.find( heroObj => {
                return Object.keys(heroObj)[0] === inName ;
            })
            console.log( row );
            let theKey = Object.keys(row)[0];
            console.log( theKey);
            setName ( theKey );
            setAge( row[theKey].Age );
    }
    return (
        <nav className="home">
            <h1> Welcome Home Human</h1>
            <Row>
                <Col sm={3}>
                </Col>
                <Col sm={4}>
                <p> {name} is {age} years old </p>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Button variant="primary" onClick={() => handleClickPart2("IronMan")} > Ironman </Button>
                </Col>
                <Col sm={4}>
                    <Button variant="primary" onClick={() => handleClickPart2("Spiderman")} > Spiderman </Button>
                </Col>
                <Col sm={4}>
                <Button variant="primary" onClick={() => handleClickPart2("Hulk")} > Hulk </Button>
            </Col>
        </Row>
        </nav>
    );
}
export default Home;