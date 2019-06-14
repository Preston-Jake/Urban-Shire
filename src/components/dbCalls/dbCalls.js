const db = "http://localhost:8088"
export const dbCalls = {
    post: (resource, data) => {
        return fetch(`${db}/${resource}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    },
    getUserEmissions: (userId) => {
        return fetch(`${db}/emission_forms?q=${userId}`, {
            method: "GET"
        }).then(
            r => r.json()
        )
    }
}