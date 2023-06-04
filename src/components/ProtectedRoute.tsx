import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import Auth from './Auth';

const ProtectedRoute = ({ children, screen }: any) => {
    const { user } = useAuth();

    if (!user) {
        console.log(screen);
        // user is not authenticated
        if (screen == 'signup') return <Auth screen="signup" />;
        else if (screen == 'forgotpassword') return <Auth screen="forgotpassword" />;
        return <Auth screen="login" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
