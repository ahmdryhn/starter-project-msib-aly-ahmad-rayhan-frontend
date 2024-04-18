import Navbar from "../components/Navbar"
import Login from "../components/home/Login"
import Background from "../components/home/Background"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div className="relative font-poppins ">
            <Navbar />
            <div className="flex">
                <Login />
                <Background />
            </div>
            <Footer />
        </div>
    ) 
}

export default Home