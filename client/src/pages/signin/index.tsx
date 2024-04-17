import React, { useState } from 'react'
import TextField from '../../components/TextField'

type LoginState ={
    username:string,
    password:string
}
const SignIn = () => {
    const [login,setLogin] = useState<LoginState>({username:'',password:''})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value})

    }
    const handleSubmit = (e:React.SyntheticEvent) =>{
            e.preventDefault()
            console.log(login,'login');
            
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="flex rounded-lg overflow-hidden z-50 bg-gray-300">
            <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-3 text-black text-center">Login</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <TextField label='Username' name='username' type='text' value={login.username} onChange={handleChange} id='username'/>
                        <TextField label='Password' name='password' id='password' value={login.password} onChange={handleChange}  type='password'/>

                        <button type="submit" className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300
										disabled:opacity-50 disabled:cursor-not-allowed'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn