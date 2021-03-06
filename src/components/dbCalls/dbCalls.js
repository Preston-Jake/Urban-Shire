

const db = "http://localhost:8088"
export const dbCalls = {
    post: (resource, data) => {
        return fetch(`${db}/${resource}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(
            e => e.json()
        )
    },
    getUserEmissions: (userId) => {
        return fetch(`${db}/emission_forms?q=${userId}`, {
            method: "GET"
        }).then(
            r => r.json()
        )
    },
    patch: (formId, data) => {
        return fetch(`${db}/emission_forms/${formId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(r => r.json())
    },
    getUserPlans: (userId) => {
        return fetch(`http://localhost:8088/user_action_plans?q=${userId}`, {
            method: "GET"
        }).then(
            r => r.json()
        )
    },
    patchUserPlans: (id, data) => {
        return fetch(`${db}/user_action_plans/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(r => r.json())
    },
    getActionPlans: () => {
        return fetch(`${db}/action_plans`, {
            method: "GET",
        }).then(r => r.json())
    }
}