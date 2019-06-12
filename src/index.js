import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase/app';
import AppView from './components/AppViews';


var firebaseConfig = {
    apiKey: "AIzaSyBB-PmM9eSANpqCYYPZnpZa18ciuzZlo7A",
    authDomain: "urbanshire-23e88.firebaseapp.com",
    databaseURL: "https://urbanshire-23e88.firebaseio.com",
    projectId: "urbanshire-23e88",
    storageBucket: "urbanshire-23e88.appspot.com",
    messagingSenderId: "298846801691",
    appId: "1:298846801691:web:af2f1e9e2e109ac8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<AppView />, document.getElementById('root'));
