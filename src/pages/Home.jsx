import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ScaleLoader } from "react-spinners";
import ProductCard from "../components/ProductCard";


const Home = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['all-products'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/products`);
            return data
        }
    })

    if (isLoading) {
        <div>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader color="#7851a9" />
            </div>
        </div>
    }
    return (
        <div className="mt-[100px] container mx-auto">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;