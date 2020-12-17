export const storeLoadState = () => {
    try {
      const serializedState = localStorage.getItem("store");
      if (serializedState === null) {
        return undefined;
      } else {
        return JSON.parse(serializedState);
      }
    } catch (error) {
      return undefined;
    }
  };
  
 export const storeSaveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("store", serializedState);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  //access token is token for specify user data in web
 export const storeGetAccessToken = () => {
    const state = loadState();
    if (state === undefined) return state;
  
    return state?.user?.token;
  };




export const newState = (state) => JSON.parse(JSON.stringify(state))
