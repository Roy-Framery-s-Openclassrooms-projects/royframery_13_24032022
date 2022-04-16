export const getToken = async (username, password) => {
    const body = {
        email: username,
        password: password,
    }

    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        )
        if (response.ok) {
            const data = await response.json()
            return data.body.token
        }
        if (response.status === 400) {
            throw new Error('Veuillez vérifier vos identifiants !')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
