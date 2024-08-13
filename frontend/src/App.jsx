import Landing from "./component/Landing.jsx"
import Login from "./component/Login.jsx"
import Navbar from "./component/Navbar.jsx"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getCurrentUser } from "./store/feature/Auth.js"
import { Outlet } from "react-router-dom"
import { getTeachers, listClassroom } from "./store/feature/User.js"
import { getStudents } from "./store/feature/User.js"
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getTeachers())
    dispatch(getStudents())
    dispatch(listClassroom())
  }, [dispatch]);
  return (
   <>
    <Outlet/>
   </>
  )
}

export default App
