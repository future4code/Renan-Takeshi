import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { createTrip } from "../functions/axios";
import Header from "../Header";
import Footer from "../Footer";
import { destinations } from "./destinations";
import { FormContainer, Select, Create, Input } from "./styles";
import { Body, Main, Button } from "../styles/common";

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const status = await createTrip(form);
    status && resetForm();
  };

  const renderedDestinations = destinations.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <Body>
      <Header />
      <Main>
        <hr />
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <Select
              value={form.planet}
              required
              name="planet"
              onChange={handleInputChange}
            >
              <option key="0" value="" disabled>
                Select a destination
              </option>
              {renderedDestinations}
            </Select>
            <Input
              required
              name="name"
              title="Name must have at least 5 characters"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Name"
              pattern="[a-zA-Z ]{5,}"
            />
            <Input
              required
              name="date"
              title=""
              value={form.date}
              onChange={handleInputChange}
              placeholder="Date"
              type="date"
              min={new Date().toJSON().split("T")[0]}
            />
            <Input
              required
              name="durationInDays"
              title="Duration must be at least 50 days"
              value={form.durationInDays}
              onChange={handleInputChange}
              placeholder="Duration"
              type="number"
              min="50"
            />
            <Input
              required
              name="description"
              title="Description must have at least 30 characters"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Description"
              pattern="[a-zA-Z ]{30,}"
            />
            <Create>Create</Create>
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

export default CreateTripPage;
