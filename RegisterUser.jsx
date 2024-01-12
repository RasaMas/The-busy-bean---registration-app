import { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                name, 
                surname,
                email, 
                age, 
                birthday,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    return (
      <div>
        <h2>Register User</h2>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <label>Surname:</label>
        <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)}/>
        <br />
        <label>Email:</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label>Age:</label>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
        <br />
        <label>Birthday:</label>
        <input type='text' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
        <br />
        <button onClick={handleRegister}>Register</button>
      </div> 
    );
};

export default RegisterUser;