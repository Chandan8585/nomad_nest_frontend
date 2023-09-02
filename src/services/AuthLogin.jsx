import axios from "axios";

export const LoginHandler = async (number, password) => {
  try {
    const response = await axios.post(
      "https://nomad-nest-backend.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );

    if (response.status === 200) {
      const { accessToken, userName } = response.data;
      // Store the access token and manage user authentication here
      console.log("Logged in");
      console.log({ accessToken, userName });
      // Redirect the user to the authenticated area or update UI
    } else {
      // Handle unexpected status codes or error scenarios
      console.log("Unexpected response status:", response.status);
      // Show an error message to the user
    }
  } catch (error) {
    // Handle network errors or request failure
    console.error("An error occurred during login:", error.message);
    // Show an error message to the user
  }
};



// import axios from "axios"

// export const LoginHandler = async(number, password)=> {
//     try {
//         const {data : {accessToken, userName}} = await axios.post("https://nomad-nest-backend.onrender.com/api/auth/login", {
//             number: number, password: password
//           })
//           console.log("Logged IN");

//           console.log({accessToken, userName});


//     } catch (error) {
//         console.log("unable to login")
//     }
    
// }
// confirmPassword
// : 
// "Pa$$w0rd!"
// email
// : 
// "rinagygoco@mailinator.com"
// mobile
// : 
// "9818216834"
// name
// : 
// "Expedita esse et no"
// password
// : 
// "Pa$$w0rd!"


// confirmPassword
// : 
// "Pa$$w0rd!"
// email
// : 
// "byzak@mailinator.com"
// mobile
// : 
// "9818216834"
// name
// : 
// "Lorem voluptatem cil"
// password
// : 
// "Pa$$w0rd!"