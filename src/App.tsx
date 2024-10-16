import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import MainLayout from './layouts/main-layout/MainLayout';
import ErrorPage404 from './pages/error-page-404/ErrorPage404';
import CourseLibrary from './pages/temporary/course-library/CourseLibrary';
import CoursePage from './pages/temporary/course-page/CoursePage';
import Employees from './pages/temporary/employees/Employees';
import CheckingTasks from './pages/temporary/сhecking-tasks/CheckingTasks';
import CreatingCourses from './pages/temporary/creating-courses/CreatingCourses';
import Employee from './pages/temporary/employee/Employee';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage404 />}>
        <Route path='course-library/' element={<CourseLibrary />}></Route>
        <Route path='employees/' element={<Employees />}></Route>
        <Route path='employees/:employeeID' element={<Employee />}></Route>
        <Route path='checking-tasks/' element={<CheckingTasks />}></Route>
        <Route path='creating-courses/' element={<CreatingCourses />}></Route>
        <Route path='course-library/:courseID' element={<CoursePage />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
