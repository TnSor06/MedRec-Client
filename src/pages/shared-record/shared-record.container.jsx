import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import CreateSharedRecordContainer from "./create-shared-record/create-shared-record.container";
import SearchSharedRecordContainer from "./search-shared-record/search-shared-record.container";

const SharedRecordContainer = (props) => {
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
        component={SearchSharedRecordContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/:record/create`}
        component={CreateSharedRecordContainer}
      ></Route>
    </Switch>
  );
};

export default SharedRecordContainer;
