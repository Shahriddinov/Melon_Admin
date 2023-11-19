import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const useLocation = () => {
    const navigate = useNavigate('');
    const { token } = useSelector((state) => state.authSlice);
    useEffect(() => {
        if (token) {
            navigate('/admin', { replace: true })
        } else {
            navigate('/', { replace: true })
        }
    }, [token])
}
