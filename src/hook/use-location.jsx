import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const useLocation = () => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.authSlice);
    const data = token && JSON.parse(atob(token.split('.')[1])); 
    console.log(data);

    useEffect(()=> {
        if(token){
            if (data?.role === 1) {
                navigate('/admin', {replace: true})
            }if (data?.role === 3) {
                navigate('/profile', {replace: true})
            }if (data?.role === 4) {
                navigate('/center', {replace: true})
            }
        }else {
            navigate('/', {replace: true})
        }
    },[token])
}
