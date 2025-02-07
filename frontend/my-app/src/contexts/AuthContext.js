import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  function signup(email, password){
    return createUserWithEmailAndPassword(auth, email,password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
    })
    return unsubscribe
  }, [])

   const value = {
        currentUser,
        signup
  }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
