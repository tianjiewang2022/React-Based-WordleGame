import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const useUserContext = () => {
    return useContext(UserContext);
};

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [score, setScore] = useState(0);

    // const increaseScore = (username) => {
    //     setUsers((prevUsers) => {
    //         const updatedUsers = { ...prevUsers };
    //         updatedUsers[username] = {
    //             score: (updatedUsers[username]?.score || 0) + 1,
    //         };
    //         return updatedUsers;
    //     });
    // };

    const useUserContext = () => {
        const context = useContext(UserContext);
        if (!context) {
            throw new Error('useUserContext must be used within a UserProvider');
        }
        return context;
    }

    return (
        <UserContext.Provider value={{ username, setUsername, score, setScore }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserProvider, useUserContext };

