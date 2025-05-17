import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const navigate = useNavigate();

    const getUsers = async (pageNumber = 1) => {
        const config = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`, config);
            console.log(response);
            setUsers(response.data.data);
            setTotalPage(response.data.total_pages);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const handlePrev = () => {
        setPage((prev) => Math.max(prev-1, 1));
    }

    const handlePage = () => {
        setPage(i + 1);
    }

    const handleNext = () => {
        setPage((prev) => Math.min(prev+1, totalPage));
    }

    useEffect(() => {
        getUsers(page);
    }, [page]);

    return (
        <div className='text-sm text-white bg-gray-950 p-4'>
            <div className="flex justify-center">
                <div className="bg-gray-900 w-full h-20 flex justify-between items-center px-6 rounded-2xl">
                    <h1 className="text-2xl font-bold text-white">Homepage</h1>
                    <Link to={'/login'}>
                    <button onClick={handleLogout} className="bg-yellow-500 text-dark-blue rounded-lg h-10 w-20 hover:bg-yellow-600">
                    Logout
                    </button>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center bg-gray-900 mt-2 rounded-2xl'>
                <div className="w-full min-h-screen px-6 m-2">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl font-medium text-white my-6">List User</h1>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon={faSearch} className='border rounded-l-2xl p-3' />
                            <input type="text" placeholder='Search...' className='border w-60 lg:w-80 h-10 rounded-r-2xl p-4' />
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {users.length > 0 && users.map((user) => (
                        <div className='p-6 flex items-center space-x-4 rounded-xl shadow-xl bg-gray-800 transform transition duration-300 hover:scale-105 hover:border' key={user.id}>
                            <img className='rounded-full' src={user.avatar} alt="" />
                            <div className='ml-6'>
                                <p className='mb-1 font-medium'>{user.first_name} {user.last_name}</p>
                                <p className='mb-4'>{user.email}</p>
                                <Link to={`/detail/${user.id}`}>
                                    <button className='bg-slate-700 text-white rounded-md h-8 w-16 hover:bg-yellow-500 hover:font-medium cursor-pointer'>Detail</button>
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='my-6 space-x-1 flex justify-end'>
                        <button onClick={handlePrev} disabled={page === 1} className='px-3 py-1 rounded bg-gray-700 disabled:opacity-50'>Prev</button>
                        {[...Array(totalPage)].map((_, i) => (
                        <button key={i} onClick={handlePage} className={`px-3 py-1 rounded ${
                        page === i + 1 ? 'bg-yellow-500 text-white font-bold' : 'bg-gray-800 text-white'
                        }`}>{i+1}</button>
                        ))}
                        <button onClick={handleNext} disabled={page === totalPage} className='px-3 py-1 rounded bg-gray-700 disabled:opacity-50'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
