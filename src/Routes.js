import React from 'react'
import { Box } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom';

import Layout from './Components/HOC/Layout'
import Login from './Components/LoginAndSignUp/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import RegisterPatient from './Components/LoginAndSignUp/RegisterPatient';
import RegisterMedicalPractitioner from './Components/LoginAndSignUp/RegisterMedicalPractitioner';

const Routes = (props) => {
    return (
        <Box component="div">
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/registerpatient" component={RegisterPatient} />
                    <Route exact path="/registermedicalpractitioner" component={RegisterMedicalPractitioner} />
                </Switch>
            </Layout>
        </Box>
    )
}

export default Routes
