import { createContext, useContext, useEffect, useState } from 'react' 
import { auth } from '../Service/firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,   
    GoogleAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth'

export const AuthContext = createContext({
    currentUser: null, 
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    signInWithGoogle: () => Promise,
    signInWithTwitter: () => Promise,
    signInWithGitHub: () => Promise,
})

export const useAuth = () => useContext(AuthContext)


export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setAppIsReady(true)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signInWithGoogle() {
        const provider_google = new GoogleAuthProvider()
        return signInWithPopup(auth, provider_google)
    }

    function signInWithTwitter() {
        const provider_twitter = new TwitterAuthProvider()
        return signInWithPopup(auth, provider_twitter)
    }

    function signInWithGitHub() {
        const provider_github = new GithubAuthProvider()
        return signInWithPopup(auth, provider_github)
    }
 

    function logout() {
        return signOut(auth)
    }
 

    const value = {
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        signInWithTwitter,
        signInWithGitHub,
        appIsReady,
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

