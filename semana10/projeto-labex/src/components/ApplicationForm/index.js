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
    await applyToTrip(tripId, form);
    resetForm();
  };

  return (
    <div>
      <TripDetailsCard
        trip={trips && trips.find((trip) => trip.id === tripId)}
      />
      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          onChange={handleInputChange}
          placeholder="Name"
          value={form.name}
          type="text"
        />
        <input
          name="age"
          onChange={handleInputChange}
          placeholder="Age"
          value={form.age}
          type="number"
          min="18"
        />
        <input
          name="profession"
          onChange={handleInputChange}
          placeholder="Profession"
          value={form.profession}
          type="text"
        />
        <input
          name="applicationText"
          onChange={handleInputChange}
          placeholder="Why me ?"
          value={form.applicationText}
          type="text"
        />
        <select defaultValue="0">
          <option key="0" value="0" disabled>Select a contry</option>
          {getNames().map(item=><option key={item} value={item}>{item}</option>)}
        </select>
        <button>Submit</button>
      </form>
      <button onClick={() => history.push("/trips/list")}>Back to list</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default ApplicationForm;
