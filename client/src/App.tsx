import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ThemeProvider from "./provider/ThemeProvider";
import { SnackbarProvider } from "./provider/SnackbarProvider";
import { UserProvider } from "./users/providers/UserProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter
      // Routes זוהי קומפוננטה שתנתב לדף המתאים לפי הלוגיקה הרשומה בקומפוננט BrowserRouter
      >
        <ThemeProvider
        // מבלי לעבור דרך סבא לאבא לילד וכו  isDark, toggleDarkMode עוטף את עץ הקומפוננטות בכדי שיוכלו להשתמש בכל האפליקציה במידע של
        >
          <SnackbarProvider // snack-עוטף את עץ הקומפוננטות כדי שיוכלו להשתמש במידע של ה
          >
            <UserProvider // user, setUser, token, setToken עוטף את עץ הקומפוננטות כדי שיוכלו להשתמש בכל האפליקציה במידע של
            >
              <Layout
              // footer ולמטה header אחראית על הצגת הקומפוננטה המבוקשת כשלמעלה מופיע
              >
                <Router
                // קומפוננטה שמנהלת את התצוגה של הדפים
                />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
