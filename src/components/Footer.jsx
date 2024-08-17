import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaPrint, FaSkype, FaTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";



// import home from '../../../public/home1.png'
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthProvider from "../../Provider/AuthProvider";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
const Footer = () => {

    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    
    return (
        <div className="bg-gray-950 mt-10">
            <div className="container mx-auto pb-3 ">
                <div className='text-white pt-20 text-center lg:text-start  grid gap-5 lg:grid-cols-4 md:grid-cols-2 '>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <img src={'/item-logo.png'} className=' w-[40px] h-[30px] ' alt="" />
                            <h1 className='text-gray-100 text-2xl font-bold'>Item<span className="text-primary-color">Hub</span></h1>
                        </div>
                        <p className='text-gray-400 '>Welcome to our all-in-one platform.</p>
                    </div>
                    <div className="lg:ml-10">
                        <h1 className="text-gray-100 text-lg">Quick Links</h1>
                        <p className="text-gray-400">About Us</p>
                        <p className="text-gray-400">Terms and Condition</p>
                        <p className="text-gray-400">Contact Us</p>
                    </div>
                    <div>
                        <h1 className="text-gray-100 text-lg">Contact Us</h1>
                        <div className="text-gray-400">
                            <div className="flex items-center gap-2 justify-center lg:justify-start ">
                                <span><IoLocationOutline /></span>
                                <p>Gulshan, Dhaka - 1212</p>
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span><FiPhone /></span>
                                <p>(305) 555-4446</p>
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span><FaPrint /></span>
                                <p>(305) 555-4446</p>
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span ><MdMailOutline /></span>
                                <p>assetflow@gmil.com</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <form>
                            <h6 className="footer-title ">Newsletter</h6>
                            <fieldset className="form-control w-80 mx-auto">
                                <label className="label">
                                    <span className="label-text text-gray-400">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                    <button className="btn bg-primary-color text-white join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <hr className="w-full mt-3" />
                <div className="text-white gap-3 mt-3 flex flex-col items-center">
                    <h1 className=" text-xl text-gray-400 font-medium">Follow Us On</h1>
                    <div className="flex  gap-4 text-3xl">
                        <span><FaFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><FaTwitter /></span>
                        <span><FaSkype /></span>
                        <span><FaLinkedin /></span>
                    </div>
                </div>
                <hr className="w-full mt-3" />

                <div className="text-center text-gray-600 mt-3 ">
                    <p>&#169; 2022, Copy Right By Solverwp. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;