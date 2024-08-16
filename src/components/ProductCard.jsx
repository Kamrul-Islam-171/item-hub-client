

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="w-full h-[300px]">
                    <img className="h-full w-full"
                        src={product?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex  gap-20 items-center">
                        <h2 className="card-title">{product?.name}</h2>
                        <p className="text-teal-500 text-lg">{product?.ratings}</p>
                    </div>
                    <p>{product?.description.substring(0, 50)}...</p>
                    <div className="card-actions justify-end text-teal-500 font-bold">
                        <p className="text-xl">${product?.price}</p>
                        <button className="btn bg-teal-500 text-white text-lg border-none hover:bg-teal-800">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;