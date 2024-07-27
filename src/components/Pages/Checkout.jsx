import React, { useState } from "react";
import Banklogo from "../../assets/meezan.png";
import Nayapay from "../../assets/nayapay.png";

const Checkout = ({ cart, setCart }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Added state for error messages

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(
            cart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(
            cart.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Prepare the order details
        const orderDetails = `
*Order Details:*
${cart
                .map((item) => `- ${item.name}: PKR ${item.price} (x${item.quantity})\n`)
                .join("")}
*Total:* PKR ${total}

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Payment Method: ${formData.paymentMethod}
        `;

        // Add instruction to attach screenshot if Bank Transfer is selected
        const additionalMessage =
            formData.paymentMethod === "Bank Transfer"
                ? "\n\nPlease attach the screenshot of your payment in the WhatsApp message."
                : "";

        // Encode the order details
        const encodedOrder = encodeURIComponent(
            orderDetails.trim() + additionalMessage
        );

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/923253508178?text=${encodedOrder}`;

        // Open WhatsApp with the encoded URL
        window.open(whatsappUrl, "_blank");

        // Show success message
        setSuccessMessage(
            "Order placed successfully! Thank you for your purchase."
        );

        // Clear cart and form after submission (optional)
        setCart([]);
        setFormData({ name: "", phone: "", address: "", paymentMethod: "" });
        setShowForm(false);
    };

    const handleConfirmOrder = () => {
        if (cart.length === 0) {
            setErrorMessage(
                "Your cart is empty. Please add items to your cart before confirming the order."
            );
        } else {
            setErrorMessage("");
            setShowForm(true);
        }
    };

    return (
        <div className="container py-10 px-4 sm:px-6 lg:px-8">
            {successMessage && (
                <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 text-red-700 p-4 rounded mb-6 text-center">
                    {errorMessage}
                </div>
            )}
            {showForm ? (
                <form
                    onSubmit={handleFormSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-10 mx-auto max-w-lg"
                >
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Customer Information
                    </h2>
                    <div className="mb-4">
                        <label className="block text-base sm:text-lg font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base sm:text-lg font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base sm:text-lg font-medium mb-2">
                            Address
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base sm:text-lg font-medium mb-2">
                            Payment Method
                        </label>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    onChange={handleFormChange}
                                    className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                    required
                                />
                                Cash on Delivery
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Bank Transfer"
                                    onChange={handleFormChange}
                                    className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                    required
                                />
                                Bank Transfer
                            </label>
                        </div>
                    </div>
                    {formData.paymentMethod === "Bank Transfer" && (
                        <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-300">
                            <h3 className="text-lg font-semibold mb-4">Bank Details</h3>
                            <p className="text-md pb-5">
                                Send Screenshot of Payment in WhatsApp Chat.
                            </p>
                            <div className="space-y-4 md:space-y-6">
                                <div className="border p-4 rounded bg-white shadow-sm">
                                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                                        <img
                                            src={Banklogo}
                                            alt="Bank Logo"
                                            className="w-16 h-16 object-cover mb-4 md:mb-0"
                                        />
                                        <div className="text-center md:text-left">
                                            <p className="font-semibold">Bank: Meezan Bank Limited</p>
                                            <p>Account Name: MUHAMMAD ARSALAN AFTAB</p>
                                            <p>Account Number: 01310107190082</p>
                                            <p> IBAN: PK20MEZN0001310107190082</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border p-4 rounded bg-white shadow-sm">
                                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                                        <img
                                            src={Nayapay}
                                            alt="EasyPaisa Logo"
                                            className="w-16 h-16 object-cover mb-4 md:mb-0"
                                        />
                                        <div className="text-center md:text-left">
                                            <p className="font-semibold">Bank: NAYA PAY</p>
                                            <p>Account Name: MUHAMMAD ARSALAN AFTAB</p>
                                            <p>Account Number: 0325-3508178</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                        Submit Order
                    </button>
                </form>
            ) : (
                <>
                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-10 mx-auto max-w-3xl">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                            Your Cart
                        </h2>
                        {cart.length === 0 ? (
                            <div className="text-center text-gray-500 py-10">
                                <h3 className="text-lg sm:text-xl font-medium">
                                    Your cart is empty.
                                </h3>
                                <p className="mt-2">
                                    Add some items to your cart to proceed with checkout.
                                </p>
                            </div>
                        ) : (
                            <>
                                <ul className="divide-y divide-gray-200">
                                    {cart.map((item) => (
                                        <li
                                            key={item.id}
                                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4"
                                        >
                                            <img
                                                src={item.img} // Assuming img property exists in cart items
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded-lg border border-gray-300 shadow-sm"
                                            />
                                            <div className="flex-grow">
                                                <div className="text-lg font-semibold">
                                                    {item.name} - PKR {item.price}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    x {item.quantity}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-4 sm:mt-0">
                                                <button
                                                    onClick={() => increaseQuantity(item.id)}
                                                    className="bg-blue-500 text-white py-1 px-2 rounded-lg shadow-sm hover:bg-blue-600 transition duration-300"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="bg-yellow-500 text-white py-1 px-2 rounded-lg shadow-sm hover:bg-yellow-600 transition duration-300"
                                                >
                                                    -
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="bg-red-500 text-white py-1 px-2 rounded-lg shadow-sm hover:bg-red-600 transition duration-300"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <div className="mt-2 sm:mt-0 text-lg font-semibold">
                                                PKR {item.price * item.quantity}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-right">
                                    <h2 className="text-xl sm:text-2xl font-bold">
                                        Total: PKR {total}
                                    </h2>
                                </div>
                                <button
                                    onClick={handleConfirmOrder}
                                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                                >
                                    Confirm Order
                                </button>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
