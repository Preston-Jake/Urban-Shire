import * as firebase from 'firebase/app';
import 'firebase/auth';
import { dbCalls } from '../dbCalls/dbCalls';

const url = 'http://localhost:8088/users';

const setUserInLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const initUserPlan = (user) => {
    const userPlansObj = {
        userId: user.id,
        user_plans: []
    }
    return dbCalls.post("user_action_plans", userPlansObj)
}

// user will have username, email, and password
export const register = (user) => {
    return registerWithFirebase(user.email, user.password)
        .then(firebaseId => {
            user.password = null;
            user.id = firebaseId;
            initUserPlan(user)
            return saveUserToJsonServer(user)
        })
        .then(newUserFromJsonServer => {
            setUserInLocalStorage(newUserFromJsonServer);
            return newUserFromJsonServer;
        })
        .catch(error => {
            alert('There was a problem registering you. Please try again');
        })
}

export const login = (email, password) => {
    return loginWithFirebase(email, password)
        .then(firebaseId => getUser(firebaseId))
        .then(userFromJsonServer => {
            setUserInLocalStorage(userFromJsonServer);
            return userFromJsonServer;
        })
        .catch(() => {
            alert('Problem logging in');
        });
}

export const saveUserToJsonServer = (user) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(newUser => {
            setUserInLocalStorage(newUser);
            return newUser;
        });
}


export const getUser = (userId) => {
    return fetch(`${url}/${userId}`)
        .then(res => res.json());
}

export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');

    if (!user) return null;

    return JSON.parse(user);
}

export const logout = () => {
    localStorage.removeItem('user');
}

export const registerWithFirebase = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
            return data.user.uid;
        });
}

export const loginWithFirebase = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => {
            return data.user.uid;
        });
}

