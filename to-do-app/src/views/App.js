import './App.scss';
import Example from './Example/Example';
import ListTodo from './Example/Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Example/Navbar/Navbar';
import HomeComponent from './Example/Navbar/Home/Home';
import {
  Routes,
  createBrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<HomeComponent />}></Route>
            <Route path='/todo' element={<ListTodo />}></Route>
          </Route>
        </Routes>

      </header>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
    </div>
  );
}

export default App;
