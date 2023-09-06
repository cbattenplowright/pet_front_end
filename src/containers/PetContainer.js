import { useState, useEffect } from "react";

const PetContainer = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const jsonData = await response.json();
        setPets(jsonData);
    };

    useEffect(() => {
        fetchPets();
    }, []);

    return <></>;
};

export default PetContainer;
