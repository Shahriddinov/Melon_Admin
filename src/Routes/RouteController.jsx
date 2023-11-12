import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
// Admin
// import AdminLayout from '../components/Admin/AdminLayout/AdminLayout';
import { AdminLayout } from '../Layout/Admin/AdminLayout';
import { AddTeacher } from '../components/Admin/AdminLayout/adminTeacher/AddTeacher/AddTeacher';
import { AdminTeacher } from '../components/Admin/AdminLayout/adminTeacher/AdminTeacher';
// Teacher
import { TeacherLayout } from '../Layout/Teacher/TeacherLayout';
import { TeacherChat } from '../Pages/Teachers/TeacherChat';
import { TeacherProfile } from '../Pages/Teachers/TeacherProfile';

// Center
import { CenterLayout } from '../Layout/Center/CenterLayout';
import { AddLearnCenter } from '../components/Admin/AdminLayout/LearnCenter/AddLearnCenter/AddLearnCenter';
import { LearnCenter } from '../components/Admin/AdminLayout/LearnCenter/LearnCenter';
import { AllUser } from '../components/Admin/AdminLayout/AllUser/AllUser';
import { CenterProfile } from '../Pages/Center/CenterProfile';
import { CenterChat } from '../Pages/Center/CenterChat';
import { ApprovedUser } from '../Pages/Admin/ApprovedUser/ApprovedUser';

export default function RouteController() {
    const { token } = useSelector(state => state.authSlice);
    const data = token && JSON.parse(atob(token.split('.')[1])); 

    if (data?.role === 1) {
        return <Suspense fallback={<Spinner position="full" />}>
            <Routes>
                {/* admin */}
                <Route index path="/admin/*" element={<AdminLayout>
                    <AdminTeacher />
                </AdminLayout>} />
                <Route path="teacher/add" element={<AdminLayout>
                    <AddTeacher />
                </AdminLayout>}/>

                {/* center */}
                <Route path="learnCenter" element={<AdminLayout>
                    <LearnCenter />
                </AdminLayout>} />
                <Route path="learnCenter/add" element={<AdminLayout>
                    <AddLearnCenter />
                </AdminLayout>} />

                {/* allUser */}
                <Route path="allUser" element={<AdminLayout>
                    <AllUser />
                </AdminLayout>} />
                <Route path="approveduser" element={<AdminLayout>
                    <ApprovedUser />
                </AdminLayout>} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>

        </Suspense>
    } if (data?.role === 3) {
        return <Suspense fallback={<Spinner position="full" />}>
            <Routes>
                <Route path="profile/*" element={<TeacherLayout>
                    <TeacherProfile />
                </TeacherLayout>} />
                <Route path="chat" element={<TeacherLayout>
                    <TeacherChat />
                </TeacherLayout>} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </Suspense>
    } if (data?.role === 4) {
        return <Suspense fallback={<Spinner position="full" />}>
            <Routes>
                <Route path="/center" element={<CenterLayout>
                    <CenterProfile />
                </CenterLayout>} />
                <Route path="chat" element={<CenterLayout>
                    <CenterChat />
                </CenterLayout>} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </Suspense>
    } else {
        <h1>Not Found !</h1>
    }
}
