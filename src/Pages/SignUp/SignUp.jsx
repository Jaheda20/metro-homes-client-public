import { Link } from "react-router-dom";
import logo from '/logo.png'

const SignUp = () => {
    return (
        <div className="h-screen bg-[url('https://i.ibb.co/4MX0gPt/photo-1524026986132-000404263b59-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg')] bg-cover bg-no-repeat bg-gray-800 bg-blend-overlay flex flex-col md:flex-row-reverse items-center justify-center">
            <div className="bg-[url('https://i.ibb.co/4MX0gPt/photo-1524026986132-000404263b59-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg')] w-full md:w-5/6 h-full md:h-5/6 bg-cover bg-no-repeat  py-5 flex flex-col md:flex-row-reverse items-center justify-around">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-20 h-20 rounded-full bg-white p-2 " />
                    <h1 className="text-slate-800 text-6xl font-bold">Metro Homes</h1>
                </div>

                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <form className="space-y-6">
                    <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="image" className="block dark:text-gray-600">Image</label>
                            <input type="text" name="image" placeholder="Image URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email"  placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-blue-600">Sign up</button>
                    </form>


                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                        <Link to="/login" className="underline text-blue-800">Login
                        </Link>

                    </p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;