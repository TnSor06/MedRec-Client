import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'

export default class Dashboard extends Component {
    render() {
        return (
            <Container fixed={false} maxWidth="xl" style={{ height: "100vh", position: "relative" }}>
                <Typography component="h1" variant="h3" style={{
                    textAlign: "center",
                    margin: "0",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    Welcome to MedRec
                </Typography>
            </Container>
        )
    }
}
