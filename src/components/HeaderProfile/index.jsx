import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Thunk
import { editName } from '../../features/user'
// Selectors
import {
    selectUserLastName,
    selectUserFirstName,
    selectToken,
    selectStatus,
} from '../../utils/selectors'
// CSS
import './HeaderProfile.scss'

/**
 * @description Component that show the welcome message on profile page
 * @returns { HTMLElement }
 */

const HeaderProfile = () => {
    const userFirstName = useSelector(selectUserFirstName)
    const userLastName = useSelector(selectUserLastName)
    const status = useSelector(selectStatus)
    const [isEditForm, setForm] = useState(false)
    const token = useSelector(selectToken) || localStorage.getItem('token')
    const dispatch = useDispatch()

    /**
     * @description handle the modifications made by user on his firstname and lastname
     * @param {object} event to get informations about the action
     */
    const save = (event) => {
        event.preventDefault()
        const firstName = document.querySelector('#firstName').value
        const lastName = document.querySelector('#lastName').value
        dispatch(editName(token, firstName, lastName))

        if (status === 'resolved') {
            setForm(false)
        }
    }

    return (
        <div className="headerProfile">
            <h1 className="headerProfile__title">
                Welcome back <br />
                {!isEditForm ? userFirstName + ' ' + userLastName + '!' : ''}
            </h1>
            {isEditForm ? (
                <form method="POST" className="headerProfile__editForm">
                    <div className="headerProfile__editForm-inputs">
                        <div className="headerProfile__editForm-formGroup">
                            <label htmlFor="firstName" className="sr-only">
                                firstname
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                defaultValue={userFirstName}
                            />
                        </div>
                        <div className="headerProfile__editForm-formGroup">
                            <label htmlFor="lastName" className="sr-only">
                                lastname
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                defaultValue={userLastName}
                            />
                        </div>
                    </div>
                    <div className="headerProfile__editForm-buttons">
                        <button
                            type="submit"
                            className="headerProfile__editForm-save"
                            onClick={save}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="headerProfile__editForm-cancel"
                            onClick={() => setForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <button
                    className="headerProfile__edit-button"
                    onClick={() => setForm(true)}
                >
                    Edit Name
                </button>
            )}
        </div>
    )
}

export default HeaderProfile
