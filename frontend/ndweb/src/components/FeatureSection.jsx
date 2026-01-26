import { MonitorSmartphone } from "lucide-react";
import { HandCoins } from "lucide-react";
import { MapPin } from "lucide-react";
import { Tag } from "lucide-react";
import { Truck  } from "lucide-react";
import { LockKeyhole  } from "lucide-react";


const FeatureSection = () => {

  const features = [
    {
      icon: <MonitorSmartphone />,
      text: "Download the App",
      description:
        "Get the No Drop app from the App Store or Play Store and start your hydration journey",
    },
    {
      icon: <MapPin />,
      text: "Set Your Location",
      description:
        "Pin your delivery spot precisely using our smart integrated map for faster delivery",
    },
    {
      icon: <Tag />,
      text: "Choose Your Brand",
      description:
        "Pick from a variety of trusted water brands available in your area.",
    },
    {
      icon: <HandCoins />,
      text: "Set Quantity",
      description:
        "Select how many cans or bottles you need — one-time or on subscription.",
    },
    {
      icon: <LockKeyhole />,
      text: "Secure Payment",
      description:
        "Pay instantly and safely using your favorite method within the app.",
    },
    {
      icon: <Truck />,
      text: "Order Placed — Sit Back & Relax",
      description:
        "Your water will be delivered fresh and on time, every single time.",
    },
  ];
  return (
    <div className="relative mt-20 min-h-200">
      <div className="text-center">
        <span className=" text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          process made simple
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          order through{" "}
          <span className="bg-linear-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            app
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
