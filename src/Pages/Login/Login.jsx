import logo from "/logo.png"
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Login = () => {

    const { signIn, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLoaderData();
    const from = location?.state || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) =>{
        try{
            setLoading(true);
            await signIn (data.email, data.password)
            reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User logged in successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from);
        }
        catch(err){
            console.log(err.message)
            toast.error(err.message)
            setLoading(false)           
        }       
    }


    return (
        <div className="h-screen bg-[url('https://i.ibb.co/y66v0t2/photo-1448630360428-65456885c650-q-80-w-1467-auto-format-fit-crop-ixlib-rb-4-0.jpg')] bg-cover bg-no-repeat bg-gray-400 bg-blend-overlay flex flex-col md:flex-row-reverse items-center justify-center">
            <div className="bg-[url('https://i.ibb.co/y66v0t2/photo-1448630360428-65456885c650-q-80-w-1467-auto-format-fit-crop-ixlib-rb-4-0.jpg')] w-full md:w-5/6 h-full md:h-5/6 bg-cover bg-no-repeat bg-gray-800 bg-blend-overlay py-5 flex flex-col md:flex-row items-center justify-around">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-20 h-20 rounded-full bg-white p-2 " />
                    <h1 className="text-white text-6xl font-bold">Metro Homes</h1>
                </div>

                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit = {handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email"  placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-blue-600">Login</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    {/* <div className="flex justify-center space-x-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 hover:bg-blue-300">

                            <p className="flex items-center gap-2"> <FcGoogle size={20}/>
                                Login with Google</p>
                        </button>
                    </div> */}
                    <SocialLogin></SocialLogin>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to="/signup" className="underline text-blue-800">Sign up
                    </Link>
                         
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;