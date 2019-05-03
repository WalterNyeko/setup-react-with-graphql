import gql from 'graphql-tag';

const GET_USER_INFO = gql`
   query {
       me {
       id
       mobileNumber
       email
       }
   }
`;

export { GET_USER_INFO as default };