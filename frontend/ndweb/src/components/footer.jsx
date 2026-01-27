

const Footer = () => {
    const resourcesLinks = [
        { href: "#", text: "How It Works" },
        { href: "#", text: "Subscription Plans" },
        { href: "#", text: "Customer Support" },
        { href: "#", text: "FAQs" },
        { href: "#", text: "Delivery Tracking" },
    ];

    const platformLinks = [
        { href: "#", text: "Order Water Cans" },
        { href: "#", text: "Refill & Reuse Policy" },
        { href: "#", text: "App Download" },
        { href: "#", text: "Pricing & Offers" },
        { href: "#", text: "Sustainability Mission" },
    ];

    const communityLinks = [
        { href: "#", text: "Partner With Us" },
        { href: "#", text: "Join Our Delivery Team" },
        { href: "#", text: "Customer Stories" },
        { href: "#", text: "Events & Giveaways" },
        { href: "#", text: "Careers" },
    ];
    return (
        <footer className="mt-16 border-t py-10 px-3.5 border-neutral-700 bg-neutral-800" id="footer">
            <div className="container mx-auto px-6 sm:px-6 lg:px-20 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                {/* Resources */}
                <div className="mt-2">
                    <h3 className="text-md font-semibold mb-4 text-[#878787]">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Platform */}
                <div className="mt-2">
                    <h3 className="text-md font-semibold mb-4 text-[#878787]">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community */}
                <div className="mt-2">
                    <h3 className="text-md font-semibold mb-4 text-[#878787]">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="mt-2">
                    <h3 className="text-md font-semibold mb-4 text-[#878787]">Contact</h3>
                    <ul className="space-y-2 text-neutral-300">
                        <li>
                            <span className="block hover:text-white transition-colors">
                                📍 Guntur, Andhra Pradesh, India
                            </span>
                        </li>
                        <li>
                            <a
                                href="mailto:support@nodrop.com"
                                className="hover:text-white transition-colors block"
                            >
                                ✉️ support@nodrop.com
                            </a>
                        </li>
                        <li>
                            <div className="flex items-start space-x-3">
                                <span className="">☎️</span>
                                <div className="flex flex-col">
                                    <a href="tel:+917569321052" className="hover:text-white transition-colors block">
                                        +91 75693 21052
                                    </a>
                                    <a href="tel:+918688533105" className="hover:text-white transition-colors block">
                                        +91 86885 33105
                                    </a>
                                    <a href="tel:+919391842486" className="hover:text-white transition-colors block">
                                        +91 93918 42486
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom note */}
            <div className="text-center text-sm text-neutral-500 mt-10 border-neutral-800 pt-7">
                © {new Date().getFullYear()} NoDrop.in All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;