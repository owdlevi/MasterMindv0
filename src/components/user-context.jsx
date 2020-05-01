import * as React from 'react'

// interface UserContext {
//   user?: firebase.User;
//   initialising?: boolean;
// }

export const userContext = React.createContext({
  user: undefined,
  initialising: undefined
})
