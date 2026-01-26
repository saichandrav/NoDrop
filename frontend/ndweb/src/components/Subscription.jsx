import { CheckCircle2 } from "lucide-react";

const Pricing = () => {

    const pricingOptions = [
        {
            title: "WEEKLY",
            price: "350",
            duration: "week",
            features: [
                "7 Water Cans (20L each)",
                "Free doorstep delivery",
                "Flexible delivery schedule",
                "24/7 customer support",
            ],
        },
        {
            title: "MONTHLY",
            price: "1450",
            duration: "month",
            features: [
                "30 Water Cans (20L each)",
                "Priority delivery",
                "Subscription pause/resume",
                "Free empty can pickup",
            ],
        },
        {
            title: "3 MONTHS",
            price: "4000",
            duration: "3 months",
            features: [
                "90 Water Cans (20L each)",
                "Discounted rate (save ₹1,150)",
                "Dedicated account manager",
                "Free delivery & maintenance",
            ],
        },
    ];
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide " id="suscription">
                SUBSCRIPTION
            </h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl hover:shadow-[0_10px_30px_rgba(255,165,0,0.35)] transition-shadow duration-200">
                            <p className="text-4xl mb-8 bg-linear-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="bg-linear-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                        (Most Popular)
                                    </span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/{option.duration}</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-linear-to-r from-orange-500 to-orange-800 border border-orange-400 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
