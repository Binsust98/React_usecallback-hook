import React from 'react';
import { useContext } from 'react';
const themes = {
    light: {
      foreground: "#00000",
      background: "#eeeeee"
          },
    dark: {
      foreground: "#478262",
      background: "#ff1453"
          }  };
  
  const ThemeContext = React.createContext(themes.light); 
  function ToolbarApp() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>   
   );  
  }
  

function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
  
   const theme = useContext(ThemeContext);
   return (
     <button style={{ background: theme.background, color: theme.foreground, fontsize:theme.fontsize }}>
       HELLO!!!WELCOME TO REACT JS DEMO
     </button>
   );
  }
  
  export default ToolbarApp;
