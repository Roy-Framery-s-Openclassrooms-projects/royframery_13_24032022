const userState = (state) => state.user

export const selectUser = (state) => userState(state)

export const selectStatus = (state) => userState(state).status

export const selectError = (state) => userState(state).error

export const selectToken = (state) => userState(state).token

export const selectConnected = (state) => userState(state).connected

export const selectUserFirstName = (state) => userState(state).firstName

export const selectUserLastName = (state) => userState(state).lastName
