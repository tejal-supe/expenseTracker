import React, { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";
import TextField from "../../components/TextField";
import RadioButton from "../../components/RadioButton";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { signUpMutation } from "../../graphql/mutations/userMutation";

type userStateType = {
  name: string;
  username: string;
  password: string;
  gender: string;
};
const SignUp = () => {
  const [userData, setUserData] = useState<userStateType>({
    name: "",
    username: "",
    password: "",
    gender: "",
  });
  const [signUp, { loading, error }] = useMutation(signUpMutation);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setUserData({ ...userData, gender: value });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };
  //8248444698
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signUp({
        variables: {
          input: userData,
        },
      });
    } catch (error:any) {
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex rounded-lg overflow-hidden z-50 bg-gray-400">
        <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex ietms-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                type="text"
                id="name"
                value={userData.name}
                onChange={handleChange}
              />
              <TextField
                label="Username"
                name="username"
                type="text"
                id="username"
                value={userData.username}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
              />
              <div className="flex gap-10">
                <RadioButton
                  id="male"
                  label="Male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={userData.gender === "male"}
                />
                <RadioButton
                  id="female"
                  label="Female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={userData.gender === "female"}
                />
              </div>

              <button
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading...." : "Sign Up"}
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/signin" className="text-black hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
