import './Profile.css'

const Navbar = () => {
    return (
        <>
        <header className='relative'>
                <div className="container mx-auto flex items-center justify-between">
                    <a href="">
                    <img src="/src/assets/img/logo.png" alt="" className="h-12 w-64 ml-12 mt-9"/>
                    </a>
                    <div className="relative">
                        <img src="/src/assets/img/search-alt.png" alt="" className="absolute mt-12 ml-4 w-5"/>
                        <input type="text" placeholder="Search" className="w-96 h-11 pl-10 mt-9 rounded-full border border-black border-opacity-25"/>
                    </div>
                    <div className="flex items-center justify-end mr-12 mt-6 list-none font-poppins text-l font-semibold">
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