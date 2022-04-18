import { createSlice } from '@reduxjs/toolkit'
import { selectUser } from '../utils/selectors'

const initialState = {
    firstName: null,
    lastName: null,
    userId: null,
    token: null,
    status: 'void',
    error: null,
    connected: false,
}

// thunk
/**
 *
 * @description thunk creator that handle the token retrieval after the log in
 * @param {string} username - username retrieve in the log In form
 * @param {string} password - password retrieve in the log In form
 */
export const getToken = (username, password) => {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status

        if (status === 'pending' || status === 'updating') {
            return
        }

        dispatch(actions.fetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: username,
                        password: password,
                    }),
                }
            )
            if (response.ok) {
                const data = await response.json()
                dispatch(actions.resolvedLogIn(data.body.token))
            } else {
                throw new Error('Veuillez vérifier vos identifiants')
            }
        } catch (error) {
            dispatch(actions.rejectedLogIn(error.message))
        }
    }
}

/**
 *
 * @description thunk creator that handle the recovery of the user's information
 * @param {string} token - token that get the user after the log in
 * @returns
 */
export const getProfile = (token) => {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status

        if (status === 'pending' || status === 'updating') {
            return
        }

        if (status === 'resolved') dispatch(actions.setStatus())

        dispatch(actions.fetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (response.ok) {
                const data = await response.json()
                const firstName = data.body.firstName
                const lastName = data.body.lastName
                const userId = data.body.id
                dispatch(actions.resolvedProfile(firstName, lastName, userId))
            } else {
                throw new Error("Erreur d'authentification !")
            }
        } catch (error) {
            dispatch(actions.rejectedProfile(error.message))
        }
    }
}

/**
 *
 * @description thunk creator that handle the modification of the user's lastname and firstname
 * @param {string} token - token that get the user after the log in
 * @param {string} firstName - firstName retrieve in the edit name form
 * @param {string} lastName - lastName retrieve in the edit name form
 */

export const editName = (token, firstName, lastName) => {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status

        if (status === 'pending' || status === 'updating') {
            return
        }

        if (status === 'resolved') dispatch(actions.setStatus())

        dispatch(actions.fetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                    }),
                }
            )
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                const firstName = data.body.firstName
                const lastName = data.body.lastName
                dispatch(actions.resolvedEditName(firstName, lastName))
            } else {
                throw new Error(
                    "Vous n'est pas autorisé à changer votre nom et/ou prénom !"
                )
            }
        } catch (error) {
            dispatch(actions.rejectedEditName(error.message))
        }
    }
}

// Slice
const { actions, reducer } = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetching: (draft) => {
            if (draft.status === 'void') {
                // on passe en pending
                draft.status = 'pending'
                return
            }
            // si le statut est rejected
            if (draft.status === 'rejected') {
                // on supprime l'erreur et on passe en pending
                draft.error = null
                draft.status = 'pending'
                return
            }
            // si le statut est resolved
            if (draft.status === 'resolved') {
                // on passe en updating (requête en cours mais des données sont déjà présentent)
                draft.status = 'updating'
                return
            }
            // sinon l'action est ignorée
            return
        },
        resolvedLogIn: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en resolved et on sauvegarde les données
                draft.token = action.payload
                draft.status = 'resolved'
                draft.connected = !draft.connected
                return draft
            }
            // sinon l'action est ignorée
            return
        },
        rejectedLogIn: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                draft.status = 'rejected'
                draft.error = action.payload
                draft.token = null
                return
            }
            // sinon l'action est ignorée
            return
        },
        logOut: (state) => {
            return initialState
        },
        fetchingProfile: () => {},
        resolvedProfile: {
            prepare: (firstName, lastName, userId) => ({
                payload: { firstName, lastName, userId },
            }),
            reducer: (draft, action) => {
                draft.firstName = action.payload.firstName
                draft.lastName = action.payload.lastName
                draft.userId = action.payload.userId
                draft.status = 'resolved'
            },
        },
        rejectedProfile: () => {},
        setStatus: (state) => {
            state.status = 'void'
        },
        resolvedEditName: {
            prepare: (firstName, lastName) => ({
                payload: { firstName, lastName },
            }),
            reducer: (draft, action) => {
                draft.firstName = action.payload.firstName
                draft.lastName = action.payload.lastName
                draft.userId = action.payload.userId
                draft.status = 'resolved'
            },
        },
        rejectedEditName: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                draft.status = 'rejected'
                draft.error = action.payload
                return
            }
            // sinon l'action est ignorée
            return
        },
    },
})

export const logOut = actions.logOut

// we export reducer as default export
export default reducer
