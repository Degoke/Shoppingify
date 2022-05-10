import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      _id
      email
      name
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export const AUTHENTICATE_QUERY = gql`
  query authenticate {
    auhenticate {
      _id
      name
      email
      kyc {
        emailVerificationCode {
          code
          expiresIn
        }
        isEmailVerified
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout
  }
`;
