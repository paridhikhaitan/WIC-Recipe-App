import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Recipe.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                    // ingredient.txt
                ))}

            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt=""></img>
            {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <ListGroup variant="flush">
    {ingredients.map(ingredient => (
                    <ListGroup.Item>{ingredient.text}</ListGroup.Item>
                ))}
    </ListGroup>
  </Card.Body>
</Card> */}
            
        </div>
    );
}

export default Recipe; 