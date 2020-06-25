import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { createTrip } from "../functions/axios";

const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [form, onChangeForm, resetForm] = useForm({
    name: "",
    planet: "",
    description: "",
    date: "",
    durationInDays: "",
  });
  const token = localStorage.getItem("token");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const status = await createTrip(form, token);
    // status && resetForm();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          required
          name="planet"
          title="Choose a planet from the list"
          value={form.planet}
          onChange={handleInputChange}
          placeholder="Planet"
        />
        <input
          required
          name="name"
          title="Name must have at least 5 characters"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Name"
          pattern="[a-zA-Z ]{5,}"
        />
        <input
          required
          name="date"
          title=""
          value={form.date}
          onChange={handleInputChange}
          placeholder="Date"
          type="date"
          min={new Date().toJSON().split("T")[0]}
        />
        <input
          required
          name="durationInDays"
          title="Duration must be at least 50 days"
          value={form.durationInDays}
          onChange={handleInputChange}
          placeholder="Duration"
          type="number"
          min="50"
        />
        <input
          required
          name="description"
          title="Description must have at least 30 characters"
          value={form.description}
          onChange={handleInputChange}
          placeholder="Description"
          pattern="[a-zA-Z ]{30,}"
        />
        <button>Create</button>
      </form>
      <button onClick={() => history.push("/trips/list")}>Back to list</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default CreateTripPage;
