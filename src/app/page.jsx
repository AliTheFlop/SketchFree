// RECREATE WHEN APP IS DONE

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Sketchfree.io</h1>
                    <div className="space-x-6">
                        <a
                            href="#features"
                            className="hover:text-[#f9b393] transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="hover:text-[#f9b393] transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="/login"
                            className="px-4 py-2 bg-[#f9b393] text-white rounded-lg hover:bg-[#d8906f] transition-colors"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Build Beautiful Websites
                        <span className="block text-[#f9b393]">
                            Without the Complexity
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        The simplicity of Carrd, the power of Webflow, and the
                        flexibility of WordPress — all in one modern platform.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="/signup"
                            className="px-8 py-4 bg-[#f9b393] text-white rounded-lg hover:bg-[#d8906f] transition-colors text-lg font-medium"
                        >
                            Start Building Free
                        </a>
                        <a
                            href="#demo"
                            className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg font-medium"
                        >
                            Watch Demo
                        </a>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Why Choose Sketchfree.io?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#f9b393] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of creators building with Sketchfree.io
                    </p>
                    <a
                        href="/signup"
                        className="inline-block px-8 py-4 bg-white text-[#f9b393] rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
                    >
                        Get Started for Free
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">Sketchfree.io</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Making web design accessible to everyone.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Templates
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#f9b393]"
                                    >
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Sketchfree.io. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const features = [
    {
        icon: "🎨",
        title: "True Drag & Drop Freedom",
        description:
            "Move elements freely and see your changes instantly. No restrictions, just creativity.",
    },
    {
        icon: "🚀",
        title: "Lightning Fast Sites",
        description:
            "Built on NextJS for optimal performance and SEO. Your sites load in milliseconds.",
    },
    {
        icon: "💻",
        title: "Host Anywhere",
        description:
            "Export your site and host it yourself, or let us handle the hosting for you.",
    },
];
