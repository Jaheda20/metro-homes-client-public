import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleGoogleLogin = async () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User logged in successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from)
                    })
            })
    }


    return (
        <div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 hover:bg-blue-300">
                    <p className="flex items-center gap-2"> <FcGoogle size={20} />
                        Login with Google</p>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;