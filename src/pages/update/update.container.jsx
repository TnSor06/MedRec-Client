import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import Update from "./update.component";
import ChangePasswordContainer from "../../components/change-password/change-password.container";
import DetailsContainer from "./details/details.container";
import PatientHealthContainer from "./patient-health/patient-health.container";
import PatientDetailsContainer from "./patient-details/patient-details.container";

const UpdateContainer = (props) => {
  const { match } = props;
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <Route exact path={`${match.path}`} component={Update}></Route>
      <Route
        exact
        path={`${match.path}/password`}
        component={ChangePasswordContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/details`}
        component={DetailsContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/patient-health`}
        component={PatientHealthContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/patient-details`}
        component={PatientDetailsContainer}
      ></Route>
    </div>
  );
};

export default UpdateContainer;
