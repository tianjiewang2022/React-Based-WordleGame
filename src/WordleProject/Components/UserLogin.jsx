import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(score + 1);
    };

    return (
        <UserContext.Provider value={{ username, setUsername, score, increaseScore }}>
            {children}
        </UserContext.Provider>
    );
};

