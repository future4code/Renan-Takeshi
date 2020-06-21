import React from "react";

function ProfileScreen(props) {
  const { profile, choosePerson } = props;
  return profile ? (
    <div key={profile.id}>
      <img
        alt={`Imagem de ${profile.name}`}
        src={profile.photo}
        style={{ width: "200px", height: "200px", display: "block" }}
      />
      <p><strong>{profile.name}</strong></p>
      <p>{profile.bio}</p>
      <button
        onClick={() => {
          choosePerson(profile.id, false);
        }}
      >
        Nope
      </button>
      <button
        onClick={() => {
          choosePerson(profile.id, true);
        }}
      >
        Yeah!
      </button>
    </div>
  ) : null;
}

export default ProfileScreen;
