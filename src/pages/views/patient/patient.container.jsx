import React, { useContext } from "react";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect, Route } from "react-router-dom";
import MePatientContainer from "./mePatient.container";
import ViewPatientContainer from "./viewPatient.container";

const PatientContainer = (props) => {
  const { match } = props;
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={MePatientContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/:id`}
        component={ViewPatientContainer}
      ></Route>
    </div>
  );
};

export default PatientContainer;
