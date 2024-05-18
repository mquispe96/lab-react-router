import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, type }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      {type === 'all' && <section className="pets-list">
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}

          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
      </section>}

      {type === 'cats' && <section className="pets-list">
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}
      </section>}
      
      {type === 'dogs' && <section className="pets-list">
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
      </section>}
    </section>
  );
};

export default PetsList;
