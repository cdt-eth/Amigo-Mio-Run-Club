import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

// using global context to log in/out user anywhere in the app
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false, // false until user credentials has been validated
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //   login event listener
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();

      console.log("login event");
    });

    // event listener for logging out
    // we reset the user to null, the default state
    // log out the message for clarity
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    // init netlify identity connection
    netlifyIdentity.init();

    // unregister event listener if DOM remounts
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);
  // fire function once because of []
  // we just need once to verify user

  const login = () => {
    // opens modal with signup/login form
    netlifyIdentity.open();
  };

  // run native logout functionality
  const logout = () => {
    netlifyIdentity.logout();
  };

  const loginInfo = {
    // user: user,
    // login: login,
    // logout: logout,
    user,
    login,
    logout,
    // since both property & value pairs are the same, we don't have to repeat the name
  };

  return (
    <AuthContext.Provider value={loginInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

// create context with default state
// create Provider function to keep track of passed-in values
//          then pass anywhere via the "returhned" AuthContext.Provider
//          our {children} is everything it wraps in "_appjs" which is:
//                  <Layout>
//                      <Component {...pageProps} />;
//                  </Layout >
//          our component will now receive the value via useContext
