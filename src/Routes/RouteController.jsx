import { Suspense } from 'react';
import Spinner from '../components/Spinner/Spinner';
import { AdminLayout } from '../Layout/Admin/AdminLayout';
import { Outlet } from 'react-router-dom';

export function RouteController() {    
    return <Suspense fallback={<Spinner position="full" />}>
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    </Suspense>
}
