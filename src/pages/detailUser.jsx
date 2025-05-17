import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";



const DetailUser = () => {
    const {id} = useParams();
    const [usersDetail, setUsersDetail] = useState([]);

    const getDetailUsers = async () => {
        const config = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`, config);
            console.log(response.data);
            setUsersDetail(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetailUsers();
    }, [id]);

    return (
        <div className="min-h-screen text-sm bg-gray-100 pb-4">
            <div className="p-4">
                <div className="bg-gray-900 text-gray-500 p-4 pl-6 rounded-2xl">
                    <div className="flex gap-2 mb-2">
                        <Link to={'/'}>
                        <button className="flex items-center gap-4 hover:text-yellow-500">
                            Homepage
                        </button>
                        </Link>
                        <span>{'/'}</span>
                        <Link to={'/detail'}>
                        <button className="flex items-center gap-4 hover:text-yellow-500">
                            Details
                        </button>
                        </Link>
                    </div>
                    <h1 className="text-2xl text-white font-bold">User Detail</h1>
                </div>
            </div>
            

            <div className="mx-4 mt-1 flex flex-col lg:flex-row rounded-2xl bg-white">
                <div className="p-6 lg:w-1/3 w-full space-y-5 lg:border-r border-gray-300">
                    <div className="flex items-center gap-6">
                        <img className="rounded-xl w-28" src={usersDetail.avatar} alt="" />
                            <div>
                                <p className=" text-gray-900 font-medium text-xl">{usersDetail.first_name} {usersDetail.last_name}</p>
                                <p className="text-gray-500">{usersDetail.email}</p>
                            </div> 
                    </div>
                    <div className="mt-4 space-y-3">
                        <h3 className="font-medium text-gray-900">About</h3>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faPhone} />
                            <p><span className="text-gray-500">Phone:</span> (1-833-897-0012)</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faGlobe} />
                            <p><span className="text-gray-500">Website:</span> http://www.name-support.com</p>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faLocationDot} />
                            <p><span className="text-gray-500">Address:</span> 390 Market Street, Suite 200</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faCity} />
                            <p><span className="text-gray-500">City state:</span> San Fransisco CA</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faSignsPost} />
                            <p><span className="text-gray-500">Postcode:</span> 94102</p>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900">Employee details</h3>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faCalendarDays} />
                            <p><span className="text-gray-500">Date of birth:</span> Sep 26, 1988</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faUser} />
                            <p><span className="text-gray-500">Nation ID:</span> GER10654</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faBriefcase} />
                            <p><span className="text-gray-500">Tittle:</span> Front-End Developer</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon className="text-gray-500" icon={faCalendar} />
                            <p><span className="text-gray-500">Hire date:</span> Jan 05, 2023</p>
                        </div>
                    </div>
                </div >

                <div className="lg:w-2/3 w-full p-6">
                    <div className="mb-4">
                        <h1 className="font-medium text-white bg-gray-900 rounded-t-xl p-3">JOB INFORMATION</h1>
                        <table className=" w-full">
                            <tr className="bg-gray-100">
                                <td className="text-gray-500 p-2 font-medium ">Department</td>
                                <td className="text-gray-500 p-2 font-medium ">Division</td>
                                <td className="text-gray-500 p-2 font-medium ">Role</td>
                                <td className="text-gray-500 p-2 font-medium ">Hire Date</td>
                                <td className="text-gray-500 p-2 font-medium ">Location</td>
                            </tr>
                            <tbody>
                                <tr className="border border-gray-200">
                                    <td className="p-2">Creative</td>
                                    <td className="p-2">Product Design</td>
                                    <td className="p-2">UI Designer</td>
                                    <td className="p-2">May 13, 2024</td>
                                    <td className="p-2">Metro DC</td>
                                </tr>
                                <tr className="border border-gray-200">
                                    <td className="p-2">R&D</td>
                                    <td className="p-2">Innovation Lab</td>
                                    <td className="p-2">Researcher</td>
                                    <td className="p-2">Jul 07, 2023</td>
                                    <td className="p-2">SF, CA</td>
                                </tr>
                                <tr className="border border-gray-200">
                                    <td className="p-2">Finance & Accounts</td>
                                    <td className="p-2">Audit & Tax</td>
                                    <td className="p-2">Auditor</td>
                                    <td className="p-2">Sep 13, 2022</td>
                                    <td className="p-2">Chicago, IL</td>
                                </tr>
                                <tr className="border border-gray-200">
                                    <td className="p-2">Engineering</td>
                                    <td className="p-2">Platform Team</td>
                                    <td className="p-2">Frontend Dev</td>
                                    <td className="p-2">Jun 08, 2023</td>
                                    <td className="p-2">Miami, FL</td>
                                </tr>
                                <tr className="border border-gray-200">
                                    <td className="p-2">Marketing</td>
                                    <td className="p-2">Leadership</td>
                                    <td className="p-2">SEO Lead</td>
                                    <td className="p-2">Feb 09, 2022</td>
                                    <td className="p-2">Bergen, NJ</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-medium text-white bg-gray-900 rounded-t-xl p-3">ACHIEVEMENTS</h2>
                        <table className="w-full">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="text-gray-500 p-2 font-medium ">Title</th>
                                <th className="text-gray-500 p-2 font-medium ">Description</th>
                                <th className="text-gray-500 p-2 font-medium ">Date Achieved</th>
                                <th className="text-gray-500 p-2 font-medium ">Awarded By</th>
                            </tr>
                            </thead>
                            <tbody >
                            <tr className="border border-gray-200">
                                <td className="p-2">Employee of the Month</td>
                                <td className="p-2">Recognized for outstanding performance.</td>
                                <td className="p-2">Apr 2024</td>
                                <td className="p-2">HR Department</td>
                            </tr>
                            <tr className="border border-gray-200">
                                <td className="p-2">5 Years Service Award</td>
                                <td className="p-2">Dedicated service for 5 consecutive years.</td>
                                <td className="p-2">Jan 2023</td>
                                <td className="p-2">Company CEO</td>
                            </tr>
                            <tr className="border border-gray-200">
                                <td className="p-2">Best Innovation Idea</td>
                                <td className="p-2">Contributed to product redesign strategy.</td>
                                <td className="p-2">Aug 2023</td>
                                <td className="p-2">R&D Division</td>
                            </tr>
                            <tr className="border border-gray-200">
                                <td className="p-2">Top Sales Performer Q1</td>
                                <td className="p-2">Highest sales in first quarter.</td>
                                <td className="p-2">Mar 2024</td>
                                <td className="p-2">Sales Manager</td>
                            </tr>
                            <tr className="border border-gray-200">
                                <td className="p-2">Leadership Excellence Award</td>
                                <td className="p-2">Exceptional leadership in team project.</td>
                                <td className="p-2">Oct 2022</td>
                                <td className="p-2">Executive Team</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailUser