import './Style.css'

const Footer = () => {
    return (
        <>
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
        </>
    )
}

export default Footer;