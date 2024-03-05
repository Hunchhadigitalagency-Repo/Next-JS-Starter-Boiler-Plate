// useCheckToken.js

import { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const useCheckToken = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);
  const { token: reduxtoken } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  //   const checkToken = useCallback(async () => {
  //     try {
  //       const response = await apicaller.get("/user/check-token/", {
  //         headers: {
  //           Authorization: `TOKEN ${reduxtoken}`,
  //         },
  //       });

  //       // Assuming the API responds with a success status

  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       dispatch(setToken(""));
  //     } finally {
  //       // Set loading to false once the API call is complete
  //       setLoading(false);
  //     }
  //   }, [reduxtoken, dispatch]);
  //   useEffect(() => {
  //     // Call the function to check the token
  //     checkToken();
  //   }, [checkToken]); // The empty dependency array ensures the effect runs only once on mount

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return { isAuthenticated, loading };
};

export default useCheckToken;
