// Set boolean value in local storage
export const setLoggedIn = (isLoggedIn) => {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  };
  
  // Get boolean value from local storage
  export const login = () => {
    const storedValue = window.localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : null;
  }
 
   export default { setLoggedIn, login };