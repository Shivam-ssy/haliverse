import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom'
import Landing from './component/Landing.jsx'
import Login from './component/Login.jsx'
import AdminDashBoard from './component/dashboard/AdminDashBoard.jsx'
import CreateUser from "./component/DashboardElement/CreateUser.jsx";
import ListStudent from "./component/DashboardElement/ListStudent";
import ListTeachers from "./component/DashboardElement/ListTeachers";
import CreateClassroom from "./component/DashboardElement/CreateClassroom";
import ListClassroom from "./component/DashboardElement/ListClassroom";
import AddStudent from "./component/DashboardElement/AddStudent";
import CurrentUser from './component/DashboardElement/CurrentUser.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route index path="/" element={<Landing/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard" element={<AdminDashBoard/>}/>
        <Route
          index
          path="/dashboard/current-user"
          element={
            <AdminDashBoard>
              <CurrentUser />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/create-student"
          element={
            <AdminDashBoard>
              <CreateUser />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/list-student"
          element={
            <AdminDashBoard>
              <ListStudent />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/create-teacher"
          element={
            <AdminDashBoard>
              <CreateUser />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/list-teacher"
          element={
            <AdminDashBoard>
              <ListTeachers />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/create-classroom"
          element={
            <AdminDashBoard>
              <CreateClassroom />
            </AdminDashBoard>
          }
        />
        <Route
          path="/dashboard/list-classroom"
          element={
            <AdminDashBoard>
              <ListClassroom />
            </AdminDashBoard>
          }
        />
        
        <Route
          path="/dashboard/add-classroom"
          element={
            <AdminDashBoard>
              <AddStudent />
            </AdminDashBoard>
          }
        />
      </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>
)
