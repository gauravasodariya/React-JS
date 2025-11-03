import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "dark" ? "#1f2937" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  const buttonStyle = {
    backgroundColor:"#2563eb",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    marginTop: "20px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const headingStyle = {
    margin: "10px 0",
    fontSize: "24px",
  };


  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Dark Light Mode Website</h2>
      <button onClick={handleToggleTheme} style={buttonStyle}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
