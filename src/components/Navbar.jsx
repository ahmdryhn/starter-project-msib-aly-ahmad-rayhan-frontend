import './Style.css'

const Navbar = () => {
    return (
        <>
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
        </>
    )
}

export default Navbar;