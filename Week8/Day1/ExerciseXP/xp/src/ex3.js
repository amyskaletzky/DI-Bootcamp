import React from "react";

const UserFavoriteColors = (props) => {
    const animalArr = props.userObj['favAnimals']
    return (
        animalArr.map((animal, index) => (
            <li key={index}>{animal}</li>
        ))
    )
}

export default UserFavoriteColors