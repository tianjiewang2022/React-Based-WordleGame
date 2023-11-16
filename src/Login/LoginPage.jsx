import { useState } from 'react';
import { useUserContext } from './useContext';
import { Link } from 'react-router-dom';




const LoginPage = () => {
    const { setUsername } = useUserContext();
    const [inputUsername, setInputUsername] = useState('');
    const [error, setError] = useState('');
    const [goback, setGoback] = useState(false);

    const handleLogin = () => {
        if (inputUsername.trim() === '') {
            setError('Invalid username');
        } else {
            setUsername(inputUsername);
            setInputUsername('');
            setError('');
            setGoback(true);
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <label>
                Username:
                <input
                    type="text"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                />
            </label>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* Use Link component for navigation */}
            {goback && (
                <Link to="/">Back to HomePage</Link>
            )}
        </div>
    );

};

export default LoginPage;
