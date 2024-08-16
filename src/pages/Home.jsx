import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ScaleLoader } from "react-spinners";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";


const Home = () => {
    const axiosPublic = useAxiosPublic();

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerpage = 10;
    const numberOfPages = Math.ceil(count / itemsPerpage);
    const pages = [];

    for (let x = 1; x <= numberOfPages; x++) pages.push(x);
    // console.log(pages)


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['all-products'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/products`);
            return data
        }
    })

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setCurrentPage(newPage)

        // refetch()
    }

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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
                <div className="flex justify-center items-center mt-5">
                    <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="btn mr-2"><GrCaretPrevious /></button>
                    {/* <p>{currentPage}</p> */}
                    <span className="flex gap-4">
                        {
                            pages?.map((pageNo) => <button onClick={() => {
                                setCurrentPage(pageNo)
                                setPage(pageNo)
                            }} key={pageNo} className={`btn px-5 border-0 ${currentPage === pageNo ? 'bg-secondary-color text-white' : 'text-black'}   `}>{pageNo}</button>)
                        }
                    </span>
                    <button onClick={() => handlePageChange(page + 1)} disabled={currentPage === pages.length} className="btn ml-2"><GrCaretNext /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;