import React, { FormEventHandler, useState } from 'react'
import toast from "react-hot-toast";
import TextField from '../../components/TextField';
import RadioButton from '../../components/RadioButton';
// import {useMutataion} from "@apollo/client"

type userStateType ={
name:string,
username:string,
password:string,
gender:string
}
const SignUp = () => {
  const [userData,setUserData] = useState<userStateType>({
    name: '',
    username:'',
    password:'',
    gender:''
  })
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value,type} = e.target
      if(type === 'radio'){
        setUserData({...userData,gender:value})
      }else{
        setUserData({...userData,[name]:value})
      }
      
  }
const handleSubmit = (e:any) =>{
  e.preventDefault();
  alert("hi")
  console.log('hihihihi',userData);
  
}  
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="flex rounded-lg overflow-hidden z-50 bg-gray-400">
        <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex ietms-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <TextField label='Name' name='name' type='text' id='name' value={userData.name} onChange={handleChange}/>
              <TextField label='Username' name='username' type='text' id='username' value={userData.username} onChange={handleChange}/>
              <TextField label='Password' name='password' type='password' id='password' value={userData.password} onChange={handleChange}/>
              <div className='flex gap-10'>
								<RadioButton
									id='male'
									label='Male'
									name='gender'
									value='male'
									onChange={handleChange}
									checked={userData.gender === "male"}
								/>
								<RadioButton
									id='female'
									label='Female'
									name='gender'
									value='female'
									onChange={handleChange}
									checked={userData.gender === "female"}
								/>
							</div>
              
            <button className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed' type='submit'>
              Submit
            </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp
