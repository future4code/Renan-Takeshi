import React, { useEffect, useState } from "react";
import axios from "axios";

function ChoosePerson() {
  const [profile, setProfile] = useState();

  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan/";
  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(url + "person");
      setProfile(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfileToChoose();
  }, []);

  const postChoosePerson = async (choice) => {
    try {
      const body = { id: profile.id, choice: choice };
      const response = await axios.post(url + "choose-person", body);
      console.log(response.data.isMatch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {profile && <img src={profile.photo} style={{ width: "200px" }} />}
      <button
        onClick={() => {
          postChoosePerson(false);
          getProfileToChoose();
        }}
      >
        Nope
      </button>
      <button
        onClick={() => {
          postChoosePerson(true);
          getProfileToChoose();
        }}
      >
        Yeah!
      </button>
    </div>
  );
}

export default ChoosePerson;
