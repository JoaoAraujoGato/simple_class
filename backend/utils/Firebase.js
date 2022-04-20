const firebase = require('firebase/compat/app');
require('firebase/compat/auth');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, password){
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        
        return result.user.uid;
    },

    async login(email, password){
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        return result.user.uid;
    }
}