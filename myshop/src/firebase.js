import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHOOaBl28RKmpWgCW_M2Cu1lqpVDyT-88",
    authDomain: "icecreamshop-99284.firebaseapp.com",
    databaseURL: "https://icecreamshop-99284-default-rtdb.firebaseio.com",
    projectId: "icecreamshop-99284",
    storageBucket: "icecreamshop-99284.appspot.com",
    messagingSenderId: "14926102951",
    appId: "1:14926102951:web:1bde3c1e001b7c23f03682",
    measurementId: "G-3NYBX1C37V"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const productsRef = db.ref();

console.log(productsRef);