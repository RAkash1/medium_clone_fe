import React, {useState, createContext, useContext } from 'react'

export const UserContext = createContext()
export function UserContextProvider({children}) {
    const [users, setUsers] = useState({})
    return (
        <UserContext.Provider value={{users,setUsers}}>
            {children}
        </UserContext.Provider>
    )
}
export const UserState = ()=>{return useContext(UserContext)}