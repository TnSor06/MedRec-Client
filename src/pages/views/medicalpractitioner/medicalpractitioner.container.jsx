import React, { useContext } from "react";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect, Route } from "react-router-dom";
import MeMedicalPractitionerContainer from "./memedicalpractitioner.container";
import ViewMedicalPractitionerContainer from "./viewmedicalpractitioner.container";

const MedicalPractitionerContainer = (props) => {
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
        component={MeMedicalPractitionerContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/:id`}
        component={ViewMedicalPractitionerContainer}
      ></Route>
    </div>
  );
};

export default MedicalPractitionerContainer;
