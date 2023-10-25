import axios from "axios"

export const signUpHandler = async(name,  number, email, password)=> {
 try {
    const data =await axios.post("https://nomad-nest-backend.onrender.com/api/auth/register", {
      userName: name, number: number, email : email, password: password
    })
    console.log("signed up");
    console.log(data);
 } catch (error) {
    console.log(error);
 }
}
// https://nomad-nest-backend.onrender.com/api/auth/register