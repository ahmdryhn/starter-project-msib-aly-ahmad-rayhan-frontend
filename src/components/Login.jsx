import './Home.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className='relative'>
            <header className='relative'>
                <div className="container mx-auto flex items-center justify-between">
                <a href="">
                    <img src="/src/assets/img/logo.png" alt="" className="h-12 w-64 ml-12 mt-9"/>
                </a>
                <div className="flex items-center justify-end mr-32 mt-6 list-none font-poppins text-l font-semibold">
                    <li className='pr-8 hover:text-custom-teal'>
                    <a href="">REVIEW</a>
                    </li>
                    <li className='pr-8 hover:text-custom-teal'>
                    <a href="">CUSTOMER</a>
                    </li>
                    <li className='pr-8 hover:text-custom-teal'>
                    <a href="">SERVICES</a>
                    </li>
                    <li className='hover:text-custom-teal'>
                    <a href="">INFORMATION</a>
                    </li>
                </div>
                </div>
            </header>
        
            <div className='container mx-auto flex font-poppins'>
                <div className='w-1/2 ml-12 mt-16'>
                <h2 className='text-4xl font-black italic leading-snug width'>
                    WELCOME TO YOUR WEDDING PLANNING!</h2>
                    <div className='mt-8'>
                    <form action="">
                        <div>
                        <label htmlFor="Username or Email" className='block text-base font-semibold mb-2'>
                        Username or Email
                        </label>
                        <input type="text" className='appearance-none border border-black border-opacity-50 rounded px-3 h-14 width font-poppins' />
                        </div>
                        <div className='mt-8'>
                        <label htmlFor="Username or Email" className='block text-base font-semibold mb-2'>
                        Password
                        </label>
                        <input type="text" className='appearance-none border border-black border-opacity-50 rounded px-3 h-14 width font-poppins' />
                        </div>
                    </form>
                    </div>
        
                    <div className='mt-8'>
                    <a href="" className='text-base text-custom-teal hover:text-black font-extrabold underline'>Forgot Your Password?</a>
                    </div>
                    <div className='mt-2.5 text-base font-semibold'>Need an account?
                    <button  onClick ={() => navigate('/register')} className='text-base text-custom-teal font-extrabold underline hover:text-black'> Sign Up Now</button>
                    </div>
        
                    <a href="">
                    <div className="flex items-center justify-center px-3 bg-custom-teal hover:bg-black  h-14 width rounded mt-8 text-white text-xl font-semibold">
                        <button  onClick ={() => navigate('/profile')}>Log In</button></div>
                    </a>
        
                    <div className="flex items-center justify-center width mt-3">
                    <hr className="border-t border-gray-400 w-full my-8"/>
                        <span className="mx-4">or</span>
                    <hr className="border-t border-gray-400 w-full my-8"/>
                    </div>
        
                    <a href="">
                    <div className="flex items-center justify-center appearance-none border border-black hover:bg-custom-teal hover:border-none px-3 h-14 width rounded-full mt-3">
                        <div className='w-48 flex items-center justify-center font-medium text-base'>
                        <img src="/src/assets/img/google.png" alt="" className='pr-1.5'/>
                        Continue with Google</div>
                        </div>
                    </a>
                    <a href="">
                    <div className="flex items-center justify-center appearance-none border border-black hover:bg-custom-teal hover:border-none px-3 h-14 width rounded-full mt-3">
                        <div className='w-48 flex items-center justify-center font-medium text-base'>
                        <img src="/src/assets/img/twitter.png" alt="" className='pr-1.5'/>
                        Continue with Twitter</div>
                        </div>
                    </a>
                </div>  
        
                <div className='flex justify-end items-center w-1/2 h-screen'>
                <img src="src/assets/img/background.jpg" alt="" />
                </div>        
            </div>

            <footer className='absolute w-full py-3 mt-8 bg-white bg-opacity-50'>
                <div className="container mx-auto flex items-center justify-center">
                    <a href="" className='flex items-center justify-center'>
                        <img src="/src/assets/img/logo.png" alt="" className="h-5 ml-12"/>
                    </a>
                    <div className="flex items-center justify-center mt-2 list-none font-poppins text-sm font-light">
                        <li className='pr-8'><a href="" className='font-light'>©2024</a></li>
                        <li className='pr-8 hover:text-custom-teal'><a href="">User Agreemnent</a></li>
                        <li className='pr-8 hover:text-custom-teal'><a href="">Privacy Policy</a></li>
                        <li className='pr-8 hover:text-custom-teal'><a href="">Community Guidlines</a></li>
                        <li className='pr-8 hover:text-custom-teal'><a href="">Send Feedback</a></li>
                        <li className='pr-8 hover:text-custom-teal'><a href="">Language</a></li>
                    </div>
                </div>
                </footer>
            </div>
        </>
    )
}

export default Login

