import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ScaleLoader } from "react-spinners";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";



const Home = () => {
    const axiosPublic = useAxiosPublic();

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, SetSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const itemsPerpage = 10;
    const numberOfPages = Math.ceil(count / itemsPerpage);
    const pages = [];



    for (let x = 1; x <= numberOfPages; x++) pages.push(x);
    // console.log(pages)

    // const {data , isLoading : loading} = useQuery({
    //    queryKey : ['doc-count'], 
    //    queryFn: async () => {
    //     const {data} = await axiosPublic.get(`/docCount`);
    //     // setCount(data);
    //     return data;
    //    }
    // })

    useEffect(() => {
        axiosPublic.get(`/docCount?search=${search}`)
            .then(data => setCount(data.data.length))
    }, [search])


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['all-products', page, limit, search, selectedOption],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/products?page=${page}&limit=${limit}&search=${search}&sorting=${selectedOption}`);
            // setCount(data.length);
            return data
        }
    })

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setCurrentPage(newPage)

        // refetch()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.search.value)
        SetSearch(e.target.search.value);
    }

    const handleSelectChange = e => {
        setSelectedOption(e.target.value)
    }
    

    console.log(selectedOption)

    if (isLoading) {
        <div>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader color="#7851a9" />
            </div>
        </div>
    }
    return (
        <div className="mt-[100px] container mx-auto">

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row  items-center justify-center gap-5">
                    <div>
                        <input name="search" className="w-full py-3 px-5 border-teal-300 border outline-none" type="text" placeholder="Search by product name" />
                    </div>
                    <button className="btn bg-teal-500 border-none text-white text-lg hover:bg-teal-800">Go <FaArrowRightLong /></button>
                </form>
            </div>

            <div className=" flex flex-col items-center gap-5 mt-10">
                <p className="text-xl font-semibold">Sort by product Price</p>
                <select onChange={handleSelectChange} value={selectedOption} className="py-3 px-5 bg-teal-500 text-white ">
                    <option value="">Select an option</option>
                    <option value="low">Low to High</option>
                    <option value="High">High to Low</option>
                    <option value="newest">New Product</option>
                    

                </select>
            </div>


            <div className="pt-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen">
                    {
                        products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
                <div className="flex justify-center items-center mt-5">
                    <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="btn mr-2"><GrCaretPrevious /></button>
                    {/* <p>{currentPage}</p> */}
                    <span className="flex gap-4 ">
                        {
                            pages?.map((pageNo) => <button onClick={() => {
                                setCurrentPage(pageNo)
                                setPage(pageNo)
                            }} key={pageNo} className={`btn px-5 border-0 ${currentPage === pageNo ? 'bg-primary-color  text-white' : 'text-black'}   `}>{pageNo}</button>)
                        }
                    </span>
                    <button onClick={() => handlePageChange(page + 1)} disabled={currentPage === pages.length} className="btn ml-2"><GrCaretNext /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;