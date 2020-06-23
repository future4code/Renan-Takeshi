import React from "react";
import {useHistory} from "react-router-dom"
const ListTripsPage = () => {
  const history = useHistory()

  return <div>TripsList
    <button onClick={()=>{history.push('/trips/details')}}>go to details</button>
    <button onClick={()=>{history.push('/application-form')}}>go to form</button>
    <button onClick={()=>{history.push('/trips/create')}}>go to create</button>
  </div>;
};

export default ListTripsPage;
