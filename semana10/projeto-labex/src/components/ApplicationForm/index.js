import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useRequestTrips from "../hooks/useRequestTrips";
import useForm from "../hooks/useForm";
import Header from "../Header";
import Footer from "../Footer";
import TripDetailsCard from "../TripDetailsCard";
import { applyToTrip } from "../functions/axios";
import { getNames } from "country-list";
import { FormContainer, Select, Submit } from "./styles";
import { Body, Main, Button, Input } from "../styles/common";

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

  const trip = trips && trips.find((trip) => trip.id === tripId);

  return (
    <Body>
      <Header />
      <Main>
        <TripDetailsCard trip={trip} />
        <hr />
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <Input
              required
              name="name"
              pattern="[a-zA-Z ]{3,}"
              title="Name must have at least 3 characters"
              onChange={handleInputChange}
              placeholder="Name"
              value={form.name}
              type="text"
            />
            <Input
              required
              name="age"
              onChange={handleInputChange}
              placeholder="Age"
              value={form.age}
              type="number"
              min="18"
            />
            <Input
              required
              name="profession"
              pattern="[a-zA-Z ]{10,}"
              title="Proffesion must have at least 10 characters"
              onChange={handleInputChange}
              placeholder="Profession"
              value={form.profession}
              type="text"
            />
            <Input
              required
              name="applicationText"
              pattern="[a-zA-Z ]{30,}"
              title="Text must have at least 30 characters"
              onChange={handleInputChange}
              placeholder="Why me ?"
              value={form.applicationText}
              type="text"
            />
            <Select
              value={form.country}
              required
              name="country"
              onChange={handleInputChange}
            >
              <option key="0" value="" disabled>
                Select a country
              </option>
              {renderedCountryOptions}
            </Select>
            <Submit>Submit</Submit>
          </FormContainer>
        </form>
        <hr />
        <Button onClick={() => history.push("/trips/list")}>
          Back to list
        </Button>
        <Button onClick={() => history.push("/")}>Go to Home</Button>
      </Main>
      <Footer />
    </Body>
  );
};

export default ApplicationForm;
