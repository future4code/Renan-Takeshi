import React from "react";

function MatchesScreen(props) {
  const { matches } = props;

  return (
    <div>
      {matches.map((item) => (
        <div key={item.id}>
          <img
            alt={`Imagem de ${item.name}`}
            src={item.photo}
            style={{ width: "100px", height: "100px" }}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MatchesScreen;
