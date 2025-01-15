import { api } from "../../api/api";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
const Session_checker =({children}) =>{
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const test = async() =>{
        const response = await api.get('/user/session-checker');
        return response.data.user_id;
    }
    useEffect(() => {
        const verify = async () => {
            const result = await test();
            if (!result) {
                navigate('/login');
                setIsAuthenticated(false)
            }
            else {
                setIsAuthenticated(true)
            }

        };
        verify();
    }, []);

    return isAuthenticated ? children : null;

}
export default Session_checker;