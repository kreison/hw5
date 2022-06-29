import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormPage from "./pages/formPage/FormPage";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route index element={<FormPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>

        </Routes>

      </BrowserRouter>
  );
}

export default App;
