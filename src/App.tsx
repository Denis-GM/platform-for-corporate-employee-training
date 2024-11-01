import { 
    BrowserRouter,
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider, 
    Routes
} from 'react-router-dom';
import MainLayout from './layouts/main-layout/MainLayout';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import CourseLibrary from './pages/temporary/course-library/CourseLibrary';
import CoursePage from './pages/temporary/course-page/CoursePage';
import Employees from './pages/temporary/employees/Employees';
import CheckingTasks from './pages/temporary/сhecking-tasks/CheckingTasks';
import CreatingCourses from './pages/temporary/creating-courses/CreatingCourses';
import Employee from './pages/temporary/employee/Employee';
import CheckingTask from './pages/temporary/checking-task/CheckingTask';
import AboutSection from './pages/temporary/course-page/components/AboutSection/AboutSection';
import EmployeesSection from './pages/temporary/course-page/components/EmployeesSection/EmployeesSection';
import SettingsSection from './pages/temporary/course-page/components/SettingsSection/SettingsSection';

import CourseLibraryClient from './pages/CourseLibraryClient/CourseLibraryClient';
import ClientLayout from './layouts/ClientLayout/ClientLayout';


function App() {

    return (
        <BrowserRouter>
            <Routes>

                {/* Employee */}
                <Route path="/" element={<ClientLayout />}>
                    <Route path='library/' element={<CourseLibraryClient />}>
                        <Route path=':courseID' element={<CoursePage />}>
                            <Route path='about'  element={<AboutSection />}></Route>
                            <Route path='employees' element={<EmployeesSection />}></Route>
                            <Route path='settings' element={<SettingsSection />}></Route>
                        </Route>
                    </Route>
                    <Route path='my-courses/' element={<CourseLibraryClient />}></Route>
                    <Route path='profile/' element={<CourseLibraryClient />}></Route>
                    <Route path='notifications/' element={<CourseLibraryClient />}></Route>
                </Route>

                {/* Administrator */}
                <Route path="/admin" element={<MainLayout />} errorElement={<ErrorPage404 />}>
                    <Route path='course-library/' element={<CourseLibrary />}></Route>
                    <Route path='course-library/:courseID' element={<CoursePage />}>
                        <Route path='about'  element={<AboutSection />}></Route>
                        <Route path='employees' element={<EmployeesSection />}></Route>
                        <Route path='settings' element={<SettingsSection />}></Route>
                    </Route>

                    <Route path='employees/' element={<Employees />}></Route>
                    <Route path='employees/:employeeID' element={<Employee />}></Route>

                    <Route path='checking-tasks/' element={<CheckingTasks />}></Route>
                    <Route path='checking-tasks/:checkingTaskID' element={<CheckingTask />}></Route>

                    <Route path='creating-courses/' element={<CreatingCourses />}></Route>
                    <Route path='course-library/:courseID' element={<CoursePage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
