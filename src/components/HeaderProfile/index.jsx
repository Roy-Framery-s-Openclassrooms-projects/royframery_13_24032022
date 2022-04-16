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

const HeaderProfile = () => {
    const userFirstName = useSelector(selectUserFirstName)
    const userLastName = useSelector(selectUserLastName)
    const status = useSelector(selectStatus)
    const [isEditForm, setForm] = useState(false)
    const [firstName, setFirstName] = useState(userFirstName)
    const [lastName, setLastName] = useState(userLastName)
    const token = useSelector(selectToken) || localStorage.getItem('token')
    const dispatch = useDispatch()

    const save = (e) => {
        e.preventDefault()
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
                                placeholder={userFirstName}
                                onChange={(e) =>
                                    setFirstName(e.target.value.trim())
                                }
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
                                placeholder={userLastName}
                                onChange={(e) =>
                                    setLastName(e.target.value.trim())
                                }
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
