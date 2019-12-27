import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { connect } from 'react-redux'
import { fetchHospital } from '../../Store/Action/fetchAction';

import { FormFields, Validator } from "../Utils/Misc"

function getSteps() {
    return ['User Info', 'Medical Practitioner Details'];
}

class RegisterMedicalPractitioner extends React.Component {
    state = {
        activeStep: 0,
        formError: false,
        formSuccess: '',
        formData: {
            firstName: {
                element: 'input',
                value: '',
                config: {
                    name: 'firstname_input',
                    type: 'text',
                    label: 'First Name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            middleName: {
                element: 'input',
                value: '',
                config: {
                    name: 'middlename_input',
                    type: 'text',
                    label: 'Middle Name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            lastName: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    label: 'Last Name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            dob: {
                element: 'input',
                value: '',
                config: {
                    name: 'dob_input',
                    type: 'date',
                    label: 'Date of Birth'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: "true"
            },
            sex: {
                element: 'select',
                value: '',
                config: {
                    name: 'select_gender',
                    type: 'select',
                    label: 'Gender',
                    options: [
                        { key: 'Male', value: 'Male' },
                        { key: 'Female', value: 'Female' },
                        { key: 'Transgender', value: 'Transgender' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    label: 'Email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    label: 'Password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            repassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'repassword_input',
                    type: 'password',
                    label: 'Password Check'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            address: {
                element: 'input',
                value: '',
                config: {
                    name: 'address_input',
                    type: 'text',
                    label: 'Address'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            clinicAddress: {
                element: 'input',
                value: '',
                config: {
                    name: 'clinicAddress_input',
                    type: 'text',
                    label: 'Clinic Address'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            degree: {
                element: 'input',
                value: '',
                config: {
                    name: 'degree_input',
                    type: 'text',
                    label: 'Degree'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            field: {
                element: 'input',
                value: '',
                config: {
                    name: 'field_input',
                    type: 'text',
                    label: 'Field'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            hospital: {
                element: 'fetch',
                value: '',
                config: {
                    name: 'hospital_input',
                    type: 'text',
                    label: 'Hospital',
                    options: [],
                    optionsError: null
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
        }
    }
    componentDidUpdate(prevProps) {

        if (this.props.fetchHospitalDetails !== prevProps.fetchHospitalDetails) {
            const newFormData = {
                ...this.state.formData
            }
            newFormData.hospital.config.options = this.props.fetchHospitalDetails !== null ? this.props.fetchHospitalDetails.getHospital : null
            this.setState(
                {
                    ...this.state,
                    formData: newFormData
                }
            )
        }
        if (this.props.fetchHospitalError !== prevProps.fetchHospitalError) {
            const newFormData = {
                ...this.state.formData
            }
            newFormData.hospital.config.optionsError = this.props.fetchHospitalError !== null ? this.props.fetchHospitalError : null
            this.setState(
                {
                    ...this.state,
                    formData: newFormData
                }
            )
        }

    }
    fetchForm = (element, fetchFn) => {
        const newFormData = {
            ...this.state.formData
        }
        const newElement = {
            ...newFormData[element.id]
        }
        newElement.value = element.event.target.value
        fetchFn(newElement.value)
        let validData = Validator(newElement)
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormData[element.id] = newElement
        this.setState(
            {
                ...this.state,
                formError: false,
                formData: newFormData
            }
        )
    }

    updateForm = (element) => {
        const newFormData = {
            ...this.state.formData
        }
        const newElement = {
            ...newFormData[element.id]
        }
        newElement.value = element.event.target.value

        let validData = Validator(newElement)
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormData[element.id] = newElement
        this.setState(
            {
                ...this.state,
                formError: false,
                formData: newFormData
            }
        )
    }
    submitForm = (event) => {
        // Loops thorugh all fromdata element and then goes to them server as key value pair not all data
        event.preventDefault()
        let dataToSubmit = {}
        let formValidCheck = true
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
            formValidCheck = this.state.formData[key].valid && formValidCheck
        }
        if (formValidCheck) {
            // props.logIn(dataToSubmit)
            console.log(dataToSubmit)
        }
        else {
            this.setState({
                ...this.state,
                formError: true
            })
        }
    }

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                const UserInfo = (
                    <Container component="main" maxWidth="xl">
                        <CssBaseline />
                        <div style={{ width: "100%" }}>
                            <Typography component="h1" variant="h5" >
                                User Info
                            </Typography>
                            <form onSubmit={(event) => this.submitForm(event)}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={4}>
                                        <FormFields
                                            id={'firstName'}
                                            formdata={this.state.formData.firstName}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormFields
                                            id={'middleName'}
                                            formdata={this.state.formData.middleName}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormFields
                                            id={'lastName'}
                                            formdata={this.state.formData.lastName}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <FormFields
                                            id={'dob'}
                                            formdata={this.state.formData.dob}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <FormFields
                                            id={'sex'}
                                            formdata={this.state.formData.sex}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'email'}
                                            formdata={this.state.formData.email}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'password'}
                                            formdata={this.state.formData.password}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'repassword'}
                                            formdata={this.state.formData.repassword}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'address'}
                                            formdata={this.state.formData.address}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>

                                </Grid>
                            </form>
                        </div>
                    </Container>)
                return UserInfo;
            case 1:
                const MPInfo = (
                    <Container component="main" maxWidth="xl">
                        <CssBaseline />
                        <div style={{ width: "100%" }}>
                            <Typography component="h1" variant="h5" >
                                Medical Details
                            </Typography>
                            <form onSubmit={(event) => this.submitForm(event)}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={3}>
                                        <FormFields
                                            id={'clinicAddress'}
                                            formdata={this.state.formData.clinicAddress}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'degree'}
                                            formdata={this.state.formData.degree}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormFields
                                            id={'field'}
                                            formdata={this.state.formData.field}
                                            onChangeForm={(element) => this.updateForm(element)}
                                        ></FormFields>
                                    </Grid>
                                    <Grid item xs={12} style={{
                                        height: "300px"
                                    }}>
                                        <FormFields
                                            id={'hospital'}
                                            formdata={this.state.formData.hospital}
                                            onChangeForm={(element) => this.fetchForm(element, this.props.fetchHospital)}
                                            onSelectValue={(value) => {
                                                const newFormData = {
                                                    ...this.state.formData
                                                }
                                                newFormData.country.value = value
                                                this.setState({
                                                    ...this.state,
                                                    newFormData
                                                })
                                            }}
                                            keyWords={["hospitalId", "name"]}
                                        ></FormFields>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>)
                return MPInfo;
            default:
                return 'Unknown step';
        }
    }


    handleNext = () => {
        let prevActiveStep = this.state.activeStep
        let newActiveStep = prevActiveStep + 1
        this.setState({
            ...this.state,
            activeStep: newActiveStep
        })

    };

    handleBack = () => {
        let prevActiveStep = this.state.activeStep
        let newActiveStep = prevActiveStep - 1
        this.setState({
            ...this.state,
            activeStep: newActiveStep
        })
    };

    handleReset = () => {
        let newActiveStep = 0
        this.setState({
            ...this.state,
            activeStep: newActiveStep
        })
    };
    render() {
        const steps = getSteps()
        return (
            <div style={{
                marginBottom: "20px"
            }}>
                <Stepper activeStep={this.state.activeStep} alternativeLabel>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div style={{
                    width: "100%",
                    margin: "20px auto"
                }}>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography >All steps completed</Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <div>{this.getStepContent(this.state.activeStep)}</div>
                                {
                                    this.state.formError ?
                                        <Box component="div" style={{
                                            textAlign: "center",
                                            fontSize: "16px",
                                            color: "#fc0505",
                                            margin: "10px 0",
                                            width: "100%"
                                        }}>
                                            Something is wrong
                                        </Box> : null
                                }
                                <div style={{
                                    width: "100%",
                                    textAlign: "center",
                                    marginTop: "40px"
                                }}>
                                    <Button
                                        disabled={this.state.activeStep === 0}
                                        onClick={this.handleBack}
                                        style={{
                                            margin: "0 10px"
                                        }}
                                    >
                                        Back
              </Button>
                                    <Button
                                        type={this.state.activeStep === steps.length - 1 ? 'submit' : ''}
                                        variant="contained"
                                        color="primary"
                                        onClick={(event) => {
                                            this.state.activeStep === steps.length - 1 ? this.submitForm(event) : this.handleNext()
                                        }}
                                        style={{
                                            margin: "0 10px"
                                        }}>
                                        {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetchHospitalDetails: state.fetch.fetchHospitalDetails,
        fetchHospitalError: state.fetch.fetchHospitalError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHospital: data => {
            dispatch(fetchHospital(data))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterMedicalPractitioner)