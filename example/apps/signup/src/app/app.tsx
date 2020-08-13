import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import axios from 'axios';
import { authSchema } from '@example/schema';

import './app.css';

interface IFormInputs {
  username: string;
  password: string;
}

function App() {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(authSchema) /** add validation here */,
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: IFormInputs) => {
    const res = await axios.post('/api', data);
    alert(JSON.stringify(res.data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>User Name</label>
        <input type="text" name="username" ref={register} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Password</label>
        <input type="text" name="password" ref={register} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default App;
