import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchRecordContainer from "./search-record/search-record.container";
import CreateRecordContainer from "./create-record/create-record.container";
import ViewRecordContainer from "./view-record/view-record.container";
import { CurrentUserContext } from "../../providers/currentUser.provider";

const PatientRecordContainer = (props) => {
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
        component={SearchRecordContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/create`}
        component={CreateRecordContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/view/:record`}
        component={ViewRecordContainer}
      ></Route>
    </Switch>
  );
};

export default PatientRecordContainer;
