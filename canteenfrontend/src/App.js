import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRoutes from "./pages/AllRouter";

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import MyCartPage from "./pages/Cart";
// import AdminPage from "./pages/admin";
// import AdminMenu from "./pages/AdminMenu";

// function App() {
//   return (
//     <div>
//       <Login />
//       {/* <Dashboard /> */}
//       {/* <MyCartPage/> */}
//       {/* <AdminPage /> */}
//       {/* <AdminMenu /> */}
//     </div>
//   );
// }

// export default App;
