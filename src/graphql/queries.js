import { gql } from "apollo-boost";
// All queries stored in here
// @client implies we are querying on client side
export const GET_CURRENT_USER = gql`
  {
    currentUser @client {
      __typename
      id
      firstName
      lastName
      role
      isAdmin
      verified
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      firstName
      lastName
      role
      isAdmin
      verified
    }
  }
`;

export const GET_REGION = gql`
  query GetRegion($name: String!) {
    getRegion(name: $name, skip: 0) {
      id
      pincode
      region
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($name: String!) {
    getCountry(name: $name, skip: 0) {
      id
      countryCode
      countryName
    }
  }
`;

export const GET_HOSPITAL = gql`
  query GetHospital($name: String!) {
    getHospital(name: $name, skip: 0) {
      hospitalId
      name
    }
  }
`;

export const GET_ICD_CODE = gql`
  query GetIcdCode($commonName: String!) {
    icdcodes(commonName: $commonName) {
      id
      icdCode
      commonName
    }
  }
`;

export const GET_ICD_SUB_CODE = gql`
  query GetIcdSubCode($commonName: String!, $scientificName: String) {
    icdsubcodes(commonName: $commonName, scientificName: $scientificName) {
      id
      icdSubCode
      scientificName
    }
  }
`;
