import { Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import { Home } from "../components/Home"
import { PrivateRoute } from "./PrivateRoute"
import CareersContainer from "../pages/careers/administrator/CareersContainer"
import UsersContainer from "../pages/users/UsersContainer"
import UserProfile from "../pages/profile/UserProfile"
import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import UserSubjects from "../pages/profile/UserSubjects"
import NotFound from "../components/NotFound"
import ResetPage from "../auth/pages/ResetPage"
import CareersPublic from "../pages/careers/public/CareersPublic"
import CareerPublic from "../pages/careers/public/CareerPublic"
import NewStudents from "../pages/new-students/NewStudents"
import UserDetailContainer from "../pages/users/UserDetailContainer"
import Guide from "../pages/guide/Guide"
import CareerDetailContainer from "../pages/careers/administrator/CareerDetailContainer"
import SubjectsContainer from "../pages/subjects/SubjectsContainer"

const AppRouter = () => {

  const { user, logged } = useContext( AuthContext );

  console.log(logged)

  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/password_reset" element={<ResetPage />}/>
        <Route path="/careers" element={<CareersPublic />} />
        <Route path="/new-students" element={<NewStudents />} />
        <Route path="/careers/:slug" element={<CareerPublic />}>
        </Route>
        <Route path="/app/*" element=
          {
            <PrivateRoute>
              <Routes>
                <Route path="/guide" element={<Guide user={ user }/>} />
                <Route path="/profile" element={<UserProfile user={ user }/>} />
                <Route path="/subjects" element={<SubjectsContainer />} />
                {/* <Route path="/subjects" element={<UserSubjects />} /> */}
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/users/:id" element={<UserDetailContainer />} />
                <Route path="/careers" element={<CareersContainer />} />
                <Route path="/careers/:id" element={<CareerDetailContainer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRouter