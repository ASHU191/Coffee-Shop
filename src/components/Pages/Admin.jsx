// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // For unique IDs

// const AdminPage = ({ products, setProducts }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     img: '',
//     price: '',
//     category: 'all'
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({ ...prev, img: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newProduct = {
//       id: uuidv4(),
//       name: formData.name,
//       img: formData.img,
//       price: parseFloat(formData.price),
//       category: formData.category
//     };

//     setProducts((prev) => ({
//       ...prev,
//       [formData.category]: [...(prev[formData.category] || []), newProduct],
//       all: [...(prev.all || []), newProduct]
//     }));

//     setFormData({
//       name: '',
//       img: '',
//       price: '',
//       category: 'all'
//     });
//   };
//   // In AdminPage
// console.log('Products:', products);
// console.log('SetProducts:', setProducts);


//   return (
//     <div className="py-10 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image</label>
//             <input
//               type="file"
//               id="img"
//               name="img"
//               onChange={handleFileChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               accept="image/*"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (PKR)</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               required
//             >
//               <option value="all">All</option>
//               <option value="espresso">Espresso</option>
//               <option value="americano">Americano</option>
//               <option value="cappuccino">Cappuccino</option>
//               <option value="cold-coffee">Cold Coffee</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
