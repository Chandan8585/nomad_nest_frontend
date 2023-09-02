import axios from "axios"

export const signUpHandler = async(username, number, email, password)=> {
 try {
    const data =await axios.post("https://nomad-nest-backend.onrender.com/api/auth/register", {
        username: username, number: number, email : email, password: password
    })
    console.log(data);
 } catch (error) {
    console.log(error);
 }
}