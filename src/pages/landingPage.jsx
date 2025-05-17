import ProfileImage from "../assets/img_profile.jpg"
import { FaUsers, FaIdBadge, FaMobileAlt, FaLock, FaReact, FaLink, FaFile  } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

const LandingPage = () => {
    return (
        <>
        <div className="text-sm">
            <div className="bg-gray-900 h-16 flex justify-center items-center gap-10 md:gap-20 text-white">
                <button className="hover:text-yellow-500 cursor-pointer">Home</button>
                <button className="hover:text-yellow-500 cursor-pointer">Features</button>
                <button className="hover:text-yellow-500 cursor-pointer">Tools</button>
                <button className="hover:text-yellow-500 cursor-pointer">Contact</button>
            </div>

            <div className="bg-gray-900 text-white">
                {/* <div className="flex justify-center">
                    <img src={ProfileImage} alt="" className="h-40 rounded-full mt-6 p-4" />
                </div> */}
                <p className="text-white">Hi! I'm Vina Amandari</p>
                <p>Front-End Developer Enthusiast</p>
                <p>Welcome to my project showcase - built with React, Tailwind, and API integration.</p>
                <button>View Project</button>
                <button>View on GitHub</button>
            </div>
            
            <div>
                Features
                <div>
                    <FaLock />
                    <h3>Login & Register</h3>
                    <p>Users can sign in or create an account through a simple form. Integrated with Reqres API for login simulation.</p>
                </div>
                <div>
                    <FaUsers />
                    <h3>User List from API</h3>
                    <p>Dynamic employee list fetched from Reqres API, displayed in responsive grid format.</p>
                </div>
                <div>
                    <FaIdBadge />
                    <h3>Users Details</h3>
                    <p></p>
                </div>
                <div>
                    <FaMobileAlt />
                    <h3>Responsive Design</h3>
                    <p>Fully responsive layout with Tailwind CSS for a clean and modern look across devices.</p>
                </div>
            </div>

            <div>
                <h1>Built With</h1>
                <div>
                    <FaReact></FaReact>
                    <p>React Js</p>
                </div>
                <div>
                    <SiTailwindcss />
                    <p>Tailwind CSS</p>
                </div>
                <div>
                    <FaLink />
                    <p>Reqres API</p>
                </div>
                <div>
                    <FaFile />
                    <p>Dummy Data</p>
                </div>
            </div>

            <div>
                <h1>Contact</h1>
                <p>Email: <a href="mailto:vinamandari1@email.com" class="text-blue-600 hover:underline">vinamandari1@email.com</a></p>
                <p>Instagram: <a href="https://instagram.com/vinaamandari" target="_blank" class="text-blue-600 hover:underline">@vinaamandari</a></p>
                <p>GitHub: <a href="https://github.com/Vinn09" target="_blank" class="text-blue-600 hover:underline">github.com/Vinn09</a></p>
                <div>
                    <p>LinkedIn : </p>
                </div>
                <div>
                    <p>GitHub : </p>
                </div>
                <div>
                    <p>Instagram : </p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default LandingPage;
