import React, { useState, ChangeEvent, FormEvent } from 'react' ;
import axios from 'axios' ;

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post({
                email,
                password,
            });

            const {access_token } = response.data;

            localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNzQxMzk1Ni
            wianRpIjoiNjU0NDQ2ODgtODQzMC00MDc2LTlkNjItYTU1OWVlZjk5NmY0IiwidHlwZSI6ImFjY2
            VzcyIsInN1YiI6eyJfaWQiOiJVMDAwMDAwMDAwMDAxIiwiX3R5cGUiOjEsIl9jaGFubmVsIjoid2
            
            ViIn0sIm5iZiI6MTcxNzQxMzk1NiwiZXhwIjoxNzE3NDE0ODU2fQ.LDr-
            JtQ37OfzOZ2lqH5sIFC3BE6JFRgFgoUaYkMO6nI', access_token);
            localStorage.setItem('email', email);

            alert('Login successful!');
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input 
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </label>
                <br  />
                <label>
                    Password:
                    <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                
                </label>
                <br  />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{color: 'red' }}>{error}</p>}
            </div>
    );
};

export default Login;