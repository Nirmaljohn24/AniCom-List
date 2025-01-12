import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAdded, setIsAdded] = useState([false, false, false]); // Array to store the state for each card
    const [floatingIcon, setFloatingIcon] = useState(null); // Track the floating icon

    const handleAddToCart = (index, event) => {
        const newIsAdded = [...isAdded];
        newIsAdded[index] = true;
        setIsAdded(newIsAdded);

        // Get the position of the button
        const button = event.target.getBoundingClientRect();
        const cartIcon = document.querySelector(".cart-icon").getBoundingClientRect();

        // Create a floating icon
        const floating = document.createElement("div");
        floating.className = "floating-icon";
        floating.style.position = "absolute";
        floating.style.left = `${button.left}px`;
        floating.style.top = `${button.top}px`;
        document.body.appendChild(floating);

        // Trigger the animation
        setFloatingIcon(floating);
        setTimeout(() => {
            floating.style.transform = `translate(${cartIcon.left - button.left}px, ${cartIcon.top - button.top}px)`;
            floating.style.transition = "transform 0.8s ease-in-out";
        }, 0);

        // Cleanup the floating icon after animation
        setTimeout(() => {
            document.body.removeChild(floating);
            setFloatingIcon(null);
        }, 800);

        // Reset the animation state
        setTimeout(() => {
            newIsAdded[index] = false;
            setIsAdded(newIsAdded);
        }, 1000);
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000); // Simulates loading delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container">
                <div className="flex justify-evenly items-center my-4">
                    <h1 className="text-3xl font-bold">Products</h1>

                    <div className="cart-icon text-primary">
                        <FiShoppingCart size={32} />
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <span className="font-semibold text-xs sm:text-sm">Price Range:</span>
                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                            <label className="flex items-center space-x-2 text-xs sm:text-sm">
                                <input type="checkbox" className="checkbox checkbox-xs sm:checkbox-sm" />
                                <span>Below ₹500</span>
                            </label>
                            <label className="flex items-center space-x-2 text-xs sm:text-sm">
                                <input type="checkbox" className="checkbox checkbox-xs sm:checkbox-sm" />
                                <span>₹500 - ₹1000</span>
                            </label>
                            <label className="flex items-center space-x-2 text-xs sm:text-sm">
                                <input type="checkbox" className="checkbox checkbox-xs sm:checkbox-sm" />
                                <span>Above ₹1000</span>
                            </label>
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap gap-4">
                    {[0, 1, 2].map((_, index) => (
                        <div key={index} className="card glass w-96 transition-shadow hover:shadow-2xl">
                            {isLoading ? (
                                <div className="animate-pulse">
                                    <div className="bg-gray-300 h-48 w-full rounded"></div>
                                    <div className="p-4">
                                        <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
                                        <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
                                        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="car!"
                                            className="rounded"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life hack</h2>
                                        <p>How to park your car at your garage?</p>
                                        <div className="card-actions justify-end relative">
                                            <button
                                                className="btn btn-primary"
                                                onClick={(event) => handleAddToCart(index, event)}
                                            >
                                                Add to Cart
                                            </button>
                                            <div
                                                className={`absolute right-0 top-0 text-primary transform ${isAdded[index] ? "animate-bounce" : ""
                                                    }`}
                                            >
                                                <FiShoppingCart size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles for the floating animation */}
            <style jsx>{`
                .floating-icon {
                    width: 24px;
                    height: 24px;
                    background: #3498db;
                    border-radius: 50%;
                    z-index: 1000;
                }
            `}</style>
        </>
    );
};

export default Products;


