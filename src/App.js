import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";

import "./App.scss";
import LoginContainer from "./pages/login/login.container";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import { ME } from "./graphql/queries";
import { Spinner } from "./components/spinner/spinner.component";
import { ADD_CURRENT_USER } from "./graphql/mutation";
import { CurrentUserContext } from "./providers/currentUser.provider";
import Logout from "./components/logout/logout.component";
import RegisterContainer from "./pages/register/register.container";
import Footer from "./components/footer/footer.component";
import UpdateContainer from "./pages/update/update.container";
import { USER_DATA } from "./constants";
import SearchContainer from "./pages/search/search.container";
import PatientContainer from "./pages/views/patient/patient.container";
import MedicalPractitionerContainer from "./pages/views/medicalpractitioner/medicalpractitioner.container";
import DatabaseAdminContainer from "./pages/views/databaseadmin/databaseadmin.container";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import InsuranceContainer from "./pages/views/insurance/insurance.container";
import InsuranceModifyContainer from "./pages/views/insurance/insurance-modify.container";
import CareProviderContainer from "./pages/views/care-provider/care-provider.container";
import CareProviderModifyContainer from "./pages/views/care-provider/care-provider-modify.container";

const App = (props) => {
  const { me, addCurrentUser } = props;
  const { setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    if (!me.loading && !me.error) {
      const data = me.me;
      addCurrentUser({
        variables: {
          user: data,
        },
      });
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      setCurrentUser(data);
    }
  }, [me, addCurrentUser, setCurrentUser]);
  return me.loading ? (
    <Spinner></Spinner>
  ) : (
    <div className="is-light">
      <ErrorBoundary>
        <Header error={me.error ? me.error : null}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route exact path="/search" component={SearchContainer}></Route>
          <Route exact path="/insurance" component={InsuranceContainer}></Route>
          <Route
            exact
            path="/insurance/modify"
            component={InsuranceModifyContainer}
          ></Route>
          <Route
            exact
            path="/care-provider"
            component={CareProviderContainer}
          ></Route>
          <Route
            exact
            path="/care-provider/modify"
            component={CareProviderModifyContainer}
          ></Route>
          <Route path="/register" component={RegisterContainer}></Route>
          <Route path="/update" component={UpdateContainer}></Route>
          <Route path="/patient" component={PatientContainer}></Route>
          <Route
            path="/databaseadmin"
            component={DatabaseAdminContainer}
          ></Route>
          <Route
            path="/medicalpractitioner"
            component={MedicalPractitionerContainer}
          ></Route>
          <Route
            path="*"
            render={() => {
              return (
                <div className="homepage-wrapper">
                  <section className="hero is-large is-light is-bold">
                    <div className="hero-body">
                      <div className="container has-text-centered">
                        <h1 className="subtitle">Error 404 : No Match Found</h1>
                      </div>
                    </div>
                  </section>
                </div>
              );
            }}
          ></Route>
        </Switch>
        <Footer></Footer>
      </ErrorBoundary>
    </div>
  );
};

export default compose(
  graphql(ME, { name: "me" }),
  graphql(ADD_CURRENT_USER, { name: "addCurrentUser" })
)(App);
