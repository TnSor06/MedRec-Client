import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Register from "./register.component";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import RegisterPatientContainer from "./patient/register-patient.container";
import RegisterMedicalPractitionerContainer from "./medical-practitioner/register-medical-practitioner.container";
import RegisterDatabaseAdminContainer from "./database-admin/register-database-admin.container";

const RegisterContainer = (props) => {
  const { match } = props;
  const { currentUser } = useContext(CurrentUserContext);
  if (currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <Route exact path={`${match.path}`} component={Register}></Route>
      <Route
        exact
        path={`${match.path}/patient`}
        component={RegisterPatientContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/medical-practitioner`}
        component={RegisterMedicalPractitionerContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/database-admin`}
        component={RegisterDatabaseAdminContainer}
      ></Route>
    </div>
  );
};

export default RegisterContainer;
