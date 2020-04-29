import { gql } from 'apollo-boost';

export const getArtists = gql`
  query Artist($tattoo: Boolean, $piercing: Boolean, $offset: Int, $limit: Int){
    artists(tattoo: $tattoo, piercing: $piercing, offset: $offset, limit: $limit) {
      id
      name
      about
      tattoo
      piercing
    }
  }
`;

export const getStyles = gql`
  query {
    styles {
      id
      name
    }
  }
`;

export const updateArtist = gql`
  mutation updateArtist(
    $id: ID!
    $email: String
    $name: String
    $about: String
    $tattoo: Boolean
    $piercing: Boolean
  ) {
    update(
      id: $id,
      email: $email,
      name: $name,
      about: $about,
      tattoo: $tattoo,
      piercing: $piercing
    ) {
      artist {
        id
        email
      }
    }
  }
`

// AUTH CALLS
export const registerArtist = gql`
  mutation registerArtist(
    $email: String!,
    $password: String!,
    $passwordConfirmation: String!,
    $tattoo: Boolean!,
    $piercing: Boolean!
  ) {
    registration(
      email: $email,
      password: $password,
      passwordConfirmation: $passwordConfirmation,
      tattoo: $tattoo
      piercing: $piercing
    ) {
      id
      authenticationToken
    }
  }
`;

export const loginArtist = gql`
  mutation loginArtist(
    $email: String!,
    $password: String!
  ) {
    login(
      email: $email,
      password: $password
    ) {
      id
      authenticationToken
    }
  }
`

export const logoutArtist = gql`
  mutation {
    logout {
      loggedOut
    }
  }
`

export const getArtist = gql`
  query {
    getCurrentArtist {
      id
      email
      name
      about
      tattoo
      piercing
      authenticationTokenCreatedAt
    }

  }
`;
