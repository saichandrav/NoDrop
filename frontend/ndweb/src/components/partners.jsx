import { Link } from "react-router-dom";
import bisleri from "../assets/image.avif";
import tata from "../assets/tatawater.jpg";
import aquamine from "../assets/aquamine.jpeg";

const Partners = () => {
    const products = [
        {
            title: "Bisleri",
            brandId: "bisleri",
            image: bisleri,
            description: "Pure, clean, and mineral-balanced water delivered fresh to your doorstep.",
            price: "Starting from 15₹",
        },
        {
            title: "Tata Water",
            brandId: "tata",
            image: tata,
            description: "Compact size for small families or offices. Same purity in every drop.",
            price: "Starting from 12₹",
        },
        {
            title: "aquamine",
            brandId: "aquamine",
            image: aquamine,
            description: "Hot and cold water dispenser – perfect for home or workplace convenience.",
            price: "Starting from 20₹",
        },
    ];

    return (
        <div className="mt-20" id="partners">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Our partnered Products
            </h2>

            <div className="flex flex-wrap justify-center ">
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                    >
                        <div className="p-6 border border-neutral-700 rounded-lg shadow-md hover:shadow-blue-500/60 transition-shadow duration-300 max-w-sm text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl mb-6 shadow-md"
                            />

                            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-neutral-400 mb-4">{item.description}</p>
                            <p className="text-xl font-bold mb-6 text-red-500">
                                {item.price}
                            </p>
                            <Link
                                to={`/products/${item.brandId}`}
                                className="inline-block w-full py-3 px-5 border border-blue-500 text-blue-300 rounded-lg hover:bg-linear-to-r from-blue-400 to-blue-800 hover:text-white transition duration-200"
                            >
                                view products
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
