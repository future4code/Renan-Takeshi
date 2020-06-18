import React from "react";

function MatchesScreen(props) {
  const {matches} = props


  return (
    <div>
      {matches.map((item) => (
        <img key={item.id} alt={`Imagem de ${item.name}`} src={item.photo} style={{ width: "200px" }} />
      ))}
    </div>
  );
}

export default MatchesScreen;
