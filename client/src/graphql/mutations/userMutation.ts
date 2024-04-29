import { gql } from "@apollo/client";

export const signUpMutation = gql`
    mutation signUp($input:SignUpInput!){
        signUp(input:$input){
            _id
            name
            username
        }
    }
`   