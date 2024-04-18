import './Home.css'

const User = () => {
    return (
        <>
            <div className='relative font-poppins'>
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
            <div className="p-12">
                <div className=" w1 h1">
                    <div className="relative">
                        <img src="/src/assets/img/banner.jpg" alt="" className="h-64 mx-auto rounded-lg cursor-pointer" />
                        <div className="bg-black hover:bg-white rounded-full bg-opacity-50 hover:bg-opacity-25 w-12 h-12 absolute top-5 right-5 flex items-center justify-center">
                            <a href="">
                                <img src="/src/assets/img/settings.png" alt="" className="w-7 flex justify-center item-center" />   
                            </a>
                        </div>
                        <div className="w-64 h-11 bg-custom-teal hover:bg-black absolute bottom-5 right-5 flex items-center justify-center rounded-full ">
                            <a href="" className="text-base font-semibold text-white">
                                + CREATE YOUR PLANNING
                            </a>
                        </div>
                        <div className="w-96 h1 absolute top-0 z-index bg-custom-teal rounded-xl"></div>
                    </div>

                    <div className="text-white">
                        <div className="absolute top-72 left-28">
                            <img src="/src/assets/img/profile.JPG" alt="" className="rounded-full h-60 w-60 cursor-pointer"/>
                        </div>
                        <div className="bg-black hover:bg-white rounded-full bg-opacity-50 hover:bg-opacity-25 w-12 h-12 absolute wc flex items-center justify-center">
                            <a href="">
                                <img src="/src/assets/img/camera.png" alt="" className="w-7 flex justify-center item-center" />   
                            </a>
                        </div>
                        <div className="relative">
                                <h1 className="absolute top-44 left-24 text-2xl font-semibold cursor-pointer hover:text-black">Ahmad Rayhan</h1>
                                <p className="absolute wm cursor-pointer hover:text-black">Mahasiswa/Pelajar</p>
                            <div className="list-none w-72 ml-16 absolute top-72 ">
                                <h1 className="font-semibold cursor-pointer hover:text-black">About</h1>
                                <li className="mt-7 font-medium flex cursor-pointer hover:text-black">
                                    <img src="/src/assets/img/person.png" alt="" className="mr-3"/>
                                    Male
                                </li>
                                <li className="mt-7 font-medium flex ucrsor-pointer hover:text-black">
                                    <img src="/src/assets/img/cake.png" alt="" className="mr-3"/>
                                    Born Feb 35, 2002
                                </li>
                                <li className="mt-7 font-medium flex cursor-pointer hover:text-black">
                                <img src="/src/assets/img/location.png" alt="" className="mr-3"/>
                                    Mulyerejo, Surabaya
                                    </li>
                                <li className="mt-7 font-medium flex cursor-pointer hover:text-black">
                                <img src="/src/assets/img/Message.png" alt="" className="mr-3"/>
                                    ahmad@proton.me
                                    </li>
                                <li className="mt-7 font-medium flex cursor-pointer hover:text-black">
                                <img src="/src/assets/img/call.png" alt="" className="mr-3"/>
                                    08211537894
                                    </li>
                            </div>
                            <div className="w-64 h-12 bg-white hover:bg-black absolute we left-16 flex items-center justify-center rounded-full ">
                                <a href="" className="text-base font-semibold text-custom-teal hover:text-white">
                                    Edit Profil
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-end">
                        <div className="wh">
                            <div className="flex h-10 mt-10 w-full justify-end ">
                                <div className="flex items-center">
                                    <div className="mr-40 p-1">
                                        <h1 className="flex font-bold text-3xl">FIND
                                        <p className="ml-1 font-light"> YOUR WEDDING</p>
                                        </h1>
                                    </div>
                                    <div className="list-none flex items-end font-medium">
                                        <a href="">
                                            <li className="mr-14 pb-1 hover:border-b-4 border-custom-teal">Place</li>
                                        </a>
                                        <a href="">
                                            <li className="mr-14 pb-1 hover:border-b-4 border-custom-teal">Theme</li>
                                        </a>
                                        <a href="">
                                            <li className="mr-14 pb-1 hover:border-b-4 border-custom-teal">Buffet</li>
                                        </a>
                                        <a href="">
                                            <li className="mr-14 pb-1 hover:border-b-4 border-custom-teal">Decoration</li>
                                        </a>
                                        <a href="">
                                            <li className="pb-1 hover:border-b-4 border-custom-teal">Package</li>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="wh1 mt-8 ml-16 ">
                                <div className="w-full h-full flex justify-between">
                                    <div className="h-full w2 bg-custom-teal rounded-xl">
                                        <div>
                                            <img src="/src/assets/img/beach.jpg" alt="" className="h-72 w-full rounded-t-xl"/>
                                        </div>
                                        <div className="flex items-center justify-center mt-8">
                                            <div className="w-96 h-64 text-white">
                                                <div className="flex justify-between">
                                                    <h1 className="text-3xl font-bold">Marina Bay</h1>
                                                    <p className="flex items-center font-bold text-2xl">
                                                        <img src="/src/assets/img/Star.png" alt="" className="mr-2 w-4 h-4 "/>4,8
                                                    </p>
                                                </div>
                                                <p className="mt-3 text-justify">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ab labore impedit 
                                                    nemo quas dignissimos quis aliquid quos iste aut recusandae sunt et voluptate, accusantium 
                                                    corporis, maiores laborum saepe atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                    Quod, fuga praesentium modi ipsa rerum pariatur aliquam ut accusantium soluta est voluptas 
                                                    quaerat reiciendis. Placeat iste quam tempore, aperiam amet delectus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-full w2 bg-custom-teal rounded-xl">
                                        <div>
                                            <img src="/src/assets/img/hotel.jpg" alt="" className="h-72 w-full rounded-t-xl"/>
                                        </div>
                                        <div className="flex items-center justify-center mt-8">
                                            <div className="w-96 h-64 text-white">
                                                <div className="flex justify-between">
                                                    <h1 className="text-3xl font-bold">Nirwana Hotel</h1>
                                                    <p className="flex items-center font-bold text-2xl">
                                                        <img src="/src/assets/img/Star.png" alt="" className="mr-2 w-4 h-4 "/>4,7
                                                    </p>
                                                </div>
                                                <p className="mt-3 text-justify">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ab labore impedit 
                                                    nemo quas dignissimos quis aliquid quos iste aut recusandae sunt et voluptate, accusantium 
                                                    corporis, maiores laborum saepe atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                    Quod, fuga praesentium modi ipsa rerum pariatur aliquam ut accusantium soluta est voluptas 
                                                    quaerat reiciendis. Placeat iste quam tempore.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='absolute w-full py-3 pb-10'>
                <div className="container mx-auto flex items-center justify-center">
                    <a href="" className='flex items-center justify-center'>
                        <img src="/src/assets/img/logo.png" alt="" className="h-5 ml-12"/>
                    </a>
                    <div className="flex items-center justify-center mr-32 mt-2 list-none font-poppins text-sm font-light">
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

export default User

