import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const UserGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg border-2 border-black p-8">
          {/* Title */}
          <h1 className="text-center text-3xl font-bold text-black mb-8">
            SJD WEBSITE USER GUIDE
          </h1>
          
          {/* Logo */}
          <div className="text-center mb-12">
            <img 
              src="/src/assets/images/SJD_logo.png" 
              alt="SJD Logo" 
              className="mx-auto max-w-2xl max-h-96 object-contain"
            />
          </div>
          
          {/* Section 1 */}
          <div className="mb-8">
            <div className="bg-yellow-300 p-4 font-bold text-lg mb-4">
              1. GENERAL WEBSITE OVERVIEW
            </div>
            
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Website Name:</strong> SJD Gold & Diamonds</li>
              <li><strong>Main Admin URL:</strong> https://admin.sjdgnd.com</li>
              <li><strong>Purpose:</strong> E-commerce platform for jewelry sales and management</li>
            </ul>
          </div>
          
          {/* Section 2 */}
          <div className="mb-8">
            <div className="bg-yellow-300 p-4 font-bold text-lg mb-4">
              2. LOGIN & CREDENTIALS for Admin
            </div>
            
            <table className="w-full border-collapse border border-black mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-3 text-left font-bold">Field</th>
                  <th className="border border-black p-3 text-left font-bold">Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-3">Admin Login URL</td>
                  <td className="border border-black p-3">https://admin.sjdgnd.com/login</td>
                </tr>
                <tr>
                  <td className="border border-black p-3">Username Format</td>
                  <td className="border border-black p-3"></td>
                </tr>
                <tr>
                  <td className="border border-black p-3">Temporary Password</td>
                  <td className="border border-black p-3"></td>
                </tr>
              </tbody>
            </table>
            
            <p className="font-bold mb-4">Login Steps:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Navigate to the admin login URL</li>
              <li>Enter your username and password</li>
              <li>Click the login button to access the dashboard</li>
            </ol>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" 
                  alt="Login Page Screenshot" 
                  className="w-full border-2 border-black mb-2"
                />
                <p className="text-sm text-gray-600">
                  <span className="text-red-600 font-bold">✓</span> Username field<br/>
                  <span className="text-red-600 font-bold">✓</span> Password field
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=400&fit=crop" 
                  alt="Woman wearing jewelry" 
                  className="w-full border-2 border-black"
                />
              </div>
            </div>
          </div>
          
          {/* Section 3 */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop" 
              alt="Admin Dashboard Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-6">
              Dashboard showing sidebar with "Dashboard", "Sales", etc., and stats cards (e.g., 817, 12509)
            </p>
            
            <div className="bg-yellow-300 p-4 font-bold text-lg mb-4">
              3. ADMIN MODULES & HOW TO USE THEM
            </div>
            
            <div className="bg-cyan-300 p-4 font-bold text-lg mb-4">
              3.1. Categories & Subcategories
            </div>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-bold">
                Note: Every Data is fetched from software directly so you will have to create everything on software and control the display settings from website dashboard.
              </p>
            </div>
            
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li><strong>Display Category:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li>Go to: Categories &gt; Categories</li>
                </ul>
              </li>
            </ul>
          </div>
          
          {/* Section 3.1 Continued */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Categories Table Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Categories table with columns like Name, Order Level, Icon, etc., with red highlights on some toggles
            </p>
            <p className="mb-4">You can adjust the display settings for these categories.</p>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Category Edit Form Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="mb-4">You can also edit the category by changing its Ordering Number, Icon image and cover image etc.</p>
            
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Display Subcategory:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li>Select Subcategory from Categories</li>
                </ul>
              </li>
            </ul>
          </div>
          
          {/* Section 3.1 Subcategories */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Subcategories Table Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Subcategories table, similar to categories
            </p>
            
            <div className="bg-yellow-300 p-4 font-bold mb-4">
              <ul className="list-disc ml-6">
                <li><strong>Edit/Delete Categories</strong>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Pick desire category &gt; Edit or Delete</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Category Edit Form with Sub Category" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Category edit form with red highlight on "Sub Category"
            </p>
            
            <div className="text-right text-sm font-bold">
              Page 5 of 28
            </div>
          </div>
          
          {/* Section 3.2 */}
          <div className="mb-8">
            <div className="bg-cyan-300 p-4 font-bold text-lg mb-4">
              3.2. Items / Products Management
            </div>
            
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Go to: Products &gt; All Products</li>
              <li>You can adjust the settings for particular item either making an item New Arrival or not.</li>
              <li>Published means you will want those items to be displayed on website.</li>
            </ul>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Products Table Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Products table with red highlight on sidebar "All Products"
            </p>
            
            <div className="bg-yellow-300 p-4 font-bold mb-4">
              You can edit that product to see what information of specific item is displayed on website (This can be modified from CSV file -JM).
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Product Edit Form Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600">
              Product edit form with red arrow pointing to fields
            </p>
          </div>
          
          {/* Section 3.3 */}
          <div className="mb-8">
            <div className="bg-cyan-300 p-4 font-bold text-lg mb-4">
              3.3. Sales Information
            </div>
            
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Navigate: Sales &gt; All Orders</li>
            </ul>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Orders Table Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">Orders table</p>
            
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li><strong>View:</strong> Order Code, No of products, Customer Name, Amount, delivery Status, Payment Status, Customer</li>
              <li><strong>Export:</strong> PDF</li>
              <li><strong>Filter:</strong> Date range, payment status and delivery status.</li>
            </ul>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Filtered Orders Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600">
              Filtered orders with orange highlight on filter dropdown
            </p>
          </div>
          
          {/* Section 3.4 */}
          <div className="mb-8">
            <div className="bg-cyan-300 p-4 font-bold text-lg mb-4">
              3.4. Customer List
            </div>
            
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Navigate: Customers &gt; Customer list</li>
              <li><strong>View:</strong> Name, Email, Phone.</li>
              <li><strong>Actions:</strong> Verify the customer, Block the account and delete the account.</li>
            </ul>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-bold">
                Note: Approve the customer from the approved status toggle button
              </p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Customer List Table Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600">
              Customer list table with red highlight on sidebar "Customer list"
            </p>
            
            <div className="text-right text-sm font-bold">
              Page 10 of 28
            </div>
          </div>
          
          {/* Section 3.5 */}
          <div className="mb-8">
            <div className="bg-cyan-300 p-4 font-bold text-lg mb-4">
              3.5. Flyers & Feed Sheets
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Flyer Upload Form Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Flyer upload form with red arrows to "Name" and "Flyer image/PDF"
            </p>
            
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Upload PDF/Images of flyer and set the name for that particular flyer</li>
            </ul>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Flyers List Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Flyers list with red arrow to sidebar "Flyer Dots"
            </p>
            
            <p className="mb-6">
              Once you upload the flyer you will see the list of flyers here. Now you have to add dots (description/data of that specific item used in flyer). Click on Flyer Dots.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Flyer Dot Addition Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Flyer dot addition with red arrow to "Add Dot" and flyer image (yellow ring highlighted with red dot)
            </p>
            
            <p className="mb-4">
              Click on the item where you want to add dot, in my case I have clicked on left side 
              <span className="inline-block w-5 h-5 bg-yellow-400 border-2 border-red-500 rounded-full mx-1"></span>
              (highlighted with red dot) once I clicked then description of item popped up you will have to copy complete description from JM Software 
              <span className="bg-yellow-300 px-2 py-1 font-bold">(since this data is directly synchronized from software and paste it here).</span>
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Pasted Description Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Screenshot with pasted description and red arrow to "Add Dot"
            </p>
            
            <p className="mb-6">Description is pasted and clicked on add dots. Now save the flyer.</p>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Flyer View Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Flyer view with red arrow to "View Feed"
            </p>
            
            <div className="bg-pink-300 p-4 font-bold mb-4">
              Integration process for customers
            </div>
            
            <div className="bg-green-300 p-4 font-bold mb-4">
              <ul className="list-disc ml-6">
                <li><strong>Via Feed Sheet:</strong></li>
              </ul>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop" 
              alt="Feed Sheet Page Screenshot" 
              className="w-full border-2 border-black mb-4"
            />
            <p className="text-sm text-gray-600">
              Feed sheet page with red arrow to sidebar "Feed Sheet" and orange button
            </p>
            
            <p className="mt-4">
              When you will click on feed sheet label you will see the window like above shared image, there will be a updated link for downloading a feed sheet dataset. This will include every necessary data related to our products. If you want to add more data in the file
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserGuide;

