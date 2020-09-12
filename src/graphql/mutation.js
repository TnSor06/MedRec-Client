import { gql } from "apollo-boost";

export const REGISTER_PATIENT = gql`
  mutation registerPatient(
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $dob: String!
    $sex: Gender!
    $email: String!
    $principleLanguage: String!
    $motherName: String!
    $aadharNo: String!
    $password: String!
    $address: String!
    $bloodGroup: String!
    $religion: String!
    $maritalStatus: MaritalStatus!
    $primaryLanguage: String!
    $birthPlace: String!
    $pincode: String!
    $country: String!
    $occupation: String!
    $contact1: String!
    $contact2: String!
    $socioEcoStatus: String!
    $immunizationHistory: String!
  ) {
    registerPatient(
      data: {
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        dob: $dob
        sex: $sex
        email: $email
        principleLanguage: $principleLanguage
        motherName: $motherName
        aadharNo: $aadharNo
        password: $password
        address: $address
        bloodGroup: $bloodGroup
        religion: $religion
        maritalStatus: $maritalStatus
        primaryLanguage: $primaryLanguage
        birthPlace: $birthPlace
        pincode: $pincode
        country: $country
        occupation: $occupation
        contact1: $contact1
        contact2: $contact2
        socioEcoStatus: $socioEcoStatus
        immunizationHistory: $immunizationHistory
        PMH: "-"
        DHx: "-"
      }
    )
  }
`;

export const REGISTER_MEDICAL_PRACTITIONER = gql`
  mutation registerMedicalPractitioner(
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $dob: String!
    $sex: Gender!
    $email: String!
    $password: String!
    $address: String!
    $clinicAddress: String!
    $degree: String!
    $field: String!
    $hospital: String!
  ) {
    registerMedicalPractitioner(
      data: {
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        dob: $dob
        sex: $sex
        email: $email
        password: $password
        address: $address
        clinicAddress: $clinicAddress
        degree: $degree
        field: $field
        hospital: $hospital
      }
    )
  }
`;

export const REGISTER_DATABASE_ADMIN = gql`
  mutation registerDatabaseAdmin(
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $dob: String!
    $sex: Gender!
    $email: String!
    $password: String!
    $address: String!
    $country: String!
    $contact: String!
    $hospital: String!
  ) {
    registerDatabaseAdmin(
      data: {
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        dob: $dob
        sex: $sex
        email: $email
        password: $password
        address: $address
        country: $country
        contact: $contact
        hospital: $hospital
      }
    )
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        firstName
        lastName
        role
        isAdmin
        verified
      }
    }
  }
`;

export const ADD_CURRENT_USER = gql`
  mutation AddCurrentUser($user: User!) {
    addCurrentUser(user: $user) @client
  }
`;
