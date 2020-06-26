import React from "react";
import { useHistory, useParams } from "react-router-dom";
import TripDetailsCard from "../TripDetailsCard";
import useRequestTrips from "../hooks/useRequestTrips";
import useForm from "../hooks/useForm";
import { applyToTrip } from "../functions/axios";
import { getNames } from "country-list";

const ApplicationForm = () => {
  const { tripId } = useParams();
  const trips = useRequestTrips();
  const history = useHistory();
  const [form, onChangeForm, resetForm] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const status = await applyToTrip(tripId, form);
    status && resetForm();
  };

  const renderedCountryOptions = getNames().map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));


  return (
    <div>
      <TripDetailsCard
        trip={trips && trips.find((trip) => trip.id === tripId)}
      />
      <form onSubmit={handleFormSubmit}>
        <input
          required
          name="name"
          pattern="[a-zA-Z ]{3,}"
          title="Name must have at least 3 characters"
          onChange={handleInputChange}
          placeholder="Name"
          value={form.name}
          type="text"
        />
        <input
          required
          name="age"
          onChange={handleInputChange}
          placeholder="Age"
          value={form.age}
          type="number"
          min="18"
        />
        <input
          required
          name="profession"
          pattern="[a-zA-Z ]{10,}"
          title="Proffesion must have at least 10 characters"
          onChange={handleInputChange}
          placeholder="Profession"
          value={form.profession}
          type="text"
        />
        <input
          required
          name="applicationText"
          pattern="[a-zA-Z ]{30,}"
          title="Text must have at least 30 characters"
          onChange={handleInputChange}
          placeholder="Why me ?"
          value={form.applicationText}
          type="text"
        />
        <select
          value={form.country}
          required
          name="country"
          onChange={handleInputChange}
        >
          <option key="0" value="" disabled>
            Select a country
          </option>
          {renderedCountryOptions}
        </select>
        <button>Submit</button>
      </form>
      <button onClick={() => history.push("/trips/list")}>Back to list</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default ApplicationForm;
