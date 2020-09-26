import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import CreateSharedCaseContainer from "./create-shared-case/create-shared-case.container";
import SearchSharedCaseContainer from "./search-shared-case/search-shared-case.container";

const SharedCaseContainer = (props) => {
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
        component={SearchSharedCaseContainer}
      ></Route>
      <Route
        exact
        path={`${match.path}/:case/create`}
        component={CreateSharedCaseContainer}
      ></Route>
    </Switch>
  );
};

export default SharedCaseContainer;
