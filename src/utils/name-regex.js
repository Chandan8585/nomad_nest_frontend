export const validateName = (name)=> {
    const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}