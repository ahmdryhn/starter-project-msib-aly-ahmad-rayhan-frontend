import './Home.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate
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

                <div className="container mx-auto flex items-center justify-center font-poppins">
                    <div className="border rounded-xl shadow-xl width-form mt-16">
                        <div className="ml-10 mt-8">
                            <h4 className="text-4xl font-semibold text-custom-teal">Sign Up</h4>
                            <p className="mt-2.5">Lets Start your planning now!</p>
                            <form action="">
                                <input type="text" placeholder="Username" className="h-12 input-form mt-8 pl-3 f border border-black border-opacity-25 rounded" />
                                <input type="email" placeholder="Email" className="h-12 input-form mt-6 pl-3 f border border-black border-opacity-25 rounded" />
                                <input type="tel" placeholder="Phone Number" className="h-12 input-form mt-6 pl-3 f border border-black border-opacity-25 rounded" />
                                <input type="password" placeholder="Password" className="h-12 input-form mt-6 pl-3 f border border-black border-opacity-25 rounded" />
                                <input type="password" placeholder="Confirm Password" className="h-12 input-form mt-6 pl-3 f border border-black border-opacity-25 rounded" />
                                <a href="" className="flex items-center justify-center px-3 bg-custom-teal hover:bg-black  h-14 input-form rounded-full mt-8 text-white text-xl font-semibold">
                                    Register
                                </a>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='mt-8 flex items-center justify-center text-base font-semibold'>Already have an account? 
                        <button onClick ={() => navigate('/home')} className='text-base text-custom-teal font-extrabold underline hover:text-black'> LogIn Now</button>
                    </div>

                <footer className='absolute w-full py-3 mt-8'>
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

export default Signup

