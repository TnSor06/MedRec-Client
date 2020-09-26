import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchCaseContainer from "./search-case/search-case.container";
import CreateCaseContainer from "./create-case/create-case.container";
import ViewCaseContainer from "./view-case/view-case.container";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import PatientRecordContainer from "../patient-record/patient-record.container";

const PatientCaseContainer = (props) => {
  const { match } = props;
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        component={SearchCaseContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/create`}
        component={CreateCaseContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/view/:case`}
        component={ViewCaseContainer}
      ></Route>
      <Route
        path={`${match.path}/view/:case/patient-record`}
        component={PatientRecordContainer}
      ></Route>
    </Switch>
  );
};

export default PatientCaseContainer;
