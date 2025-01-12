import React, { useState, useEffect } from 'react';

// Import images and icons
import Cart from '../assets/icons/cart.svg';
import PlusSign from '../assets/icons/plus.svg';
import Shirt from '../assets/images/cardThumbnails/shirt.png';
import Shoe from '../assets/images/cardThumbnails/shoe.png';
import Watch from '../assets/images/cardThumbnails/watch.png';
import CheckdShirt from '../assets/images/cardThumbnails/checkdShirt.png';
import HeadPhones from '../assets/images/cardThumbnails/headphones.png';
import Saree from '../assets/images/cardThumbnails/saree.png';
import Anarkali from '../assets/images/cardThumbnails/Anarkali.png';
import Bag from '../assets/images/cardThumbnails/Bag.png';
import Crocs from '../assets/images/cardThumbnails/crocs.png';
import Chains from '../assets/images/cardThumbnails/chains.png';
import Dumbell from '../assets/images/cardThumbnails/dumbell.png';
import Bicycle from '../assets/images/cardThumbnails/bicycle.png';
import Perfume from '../assets/images/cardThumbnails/perfume.png';
import Makeup from '../assets/images/cardThumbnails/makeup.png';

const ProductCards = () => {
    const products = [
        { image: Shirt, productName: 'T-Shirt', description: 'Here goes some information about the product.', price: 149 },
        { image: Shoe, productName: 'Shoe', description: 'Here goes some information about the product.', price: 200 },
        { image: Watch, productName: 'Watch', description: 'Here goes some information about the product.', price: 400 },
        { image: CheckdShirt, productName: 'Checked Shirt', description: 'Here goes some information about the product.', price: 600 },
        { image: HeadPhones, productName: 'Headphones', description: 'Here goes some information about the product.', price: 850 },
        { image: Saree, productName: 'Saree', description: 'Here goes some information about the product.', price: 350 },
        { image: Anarkali, productName: 'Anarkali', description: 'Here goes some information about the product.', price: 550 },
        { image: Bag, productName: 'Bag', description: 'Here goes some information about the product.', price: 490 },
        { image: Crocs, productName: 'Crocs', description: 'Here goes some information about the product.', price: 770 },
        { image: Chains, productName: 'Chains', description: 'Here goes some information about the product.', price: 299 },
        { image: Dumbell, productName: 'Dumbell', description: 'Here goes some information about the product.', price: 590 },
        { image: Bicycle, productName: 'Bicycle', description: 'Here goes some information about the product.', price: 3999 },
        { image: Perfume, productName: 'Makeup', description: 'Here goes some information about the product.', price: 199 },
        { image: Makeup, productName: 'Crocs', description: 'Here goes some information about the product.', price: 249 }
    ];

    const [productCards, setProductCards] = useState(products);
    const [loading, setLoading] = useState(true);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Sort products and simulate loading
        setTimeout(() => {
            setProductCards([...productCards.sort((a, b) => a.price - b.price)]);
            setLoading(false);
        }, 2000);

        // Scroll listener
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sortProductsByPrice = (e) => {
        const value = e.target.value;
        const sorted = [...productCards].sort((a, b) =>
            value === 'LowToHigh' ? a.price - b.price : b.price - a.price
        );
        setProductCards(sorted);
    };

    const handleAddToCart = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Animate the cart icon
        button.classList.add('cart-animate');
        setTimeout(() => button.classList.remove('cart-animate'), 400);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[rgb(45,0,90)] via-[rgb(60,0,90)] to-[rgb(108,0,108)]">
                <div className="spinner border-t-4 border-b-4 border-white w-12 h-12 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-8 text-black bg-gradient-to-r from-[rgb(45,0,90)] via-[rgb(60,0,90)] to-[rgb(108,0,108)] relative">
            <div className="flex flex-col items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[rgb(45,0,90)] via-[rgb(60,0,90)] to-[rgb(108,0,108)] bg-clip-text text-transparent text-border">
                    Products
                </h1>
                <div className="flex flex-col sm:flex-row items-center sm:gap-1 gap-1">
                    <span className="text-lg font-medium text-gray-500">Price :</span>
                    <select
                        className="select select-bordered select-sm bg-transparent text-gray-300 sm:w-auto w-48 h-10 sm:font-medium"
                        onChange={sortProductsByPrice}
                    >
                        <option value="LowToHigh" className="text-black">Low To High</option>
                        <option value="HighToLow" className="text-black">High To Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {productCards.map((product, index) => (
                    <div key={index} className="rounded-lg shadow-lg p-1 bg-transparent hover:shadow-2xl group">

                        <div className="rounded-lg bg-transparent p-4 flex flex-col items-center text-center">
                            <img
                                src={product.image}
                                alt={product.productName}
                                className="w-32 h-32 object-contain mb-4 transition-transform group-hover:scale-150"
                            />
                            <h3 className="text-xl font-bold text-green-400 mb-2">{product.productName}</h3>
                            <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-lg font-semibold text-gray-300">
                                    <span className="text-green-400">$</span> {product.price}
                                </p>
                                <button
                                    className="btn btn-primary btn-sm flex items-center gap-1 relative overflow-hidden"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                    <img src={Cart} alt="Add" className="w-8 h-8 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {showScrollButton && (
                <button
                    className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full  text-white bg-transparent hover:bg-[rgb(108,0,108)] hover:text-white hover:border shadow-xl transition-all duration-300"
                    onClick={scrollToTop}
                >
                    <span className="text-3xl">⇧</span>
                </button>



            )}
        </div>
    );
};

export default ProductCards;



