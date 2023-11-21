

// import React, { useContext } from 'react';
// import { Sidebar } from 'flowbite-react';
// import { BiBuoy } from 'react-icons/bi';
// import { HiOutlineArrowSmRight, HiChartPie, HiOutlineChartPie, HiOutlineInbox, HiOutlineShoppingBag, HiOutlineTable, HiOutlineUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';

// import { Link, useLocation } from 'react-router-dom';
// import { FaBlog } from 'react-icons/fa6';
// import '../home/BannerCard.css'



// const USidebar = () => {
  
//   const location = useLocation();

//   return (
//     <Sidebar aria-label="Sidebar with content separator example" className="bg-gradient-to-b from-blue-300 to-blue-600 h-screen">
//       <div className="flex flex-col items-center p-8">
//         <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' id='main'><FaBlog className='inline-block'  />InventIQ</Link>
//         <br/>
//         {/* <img src={profile.png} alt="userIMG" className="w-20 h-20 rounded-lg mb-2" /> */}
//         <h4 className="text-blue-900 text-center mb-2 " style={{fontWeight: 'bold', fontSize:'25px'}}>Hello User</h4>
//         <h4 className='text-white' style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}></h4>
//       </div>

//       <Sidebar.Items className="text-white">
//         <Sidebar.ItemGroup>
          
          
//           <Sidebar.Item href="/user/dashboard/products" icon={HiOutlineInbox} active={location.pathname === '/admin/dashboard/manage'}>
//              Products
//           </Sidebar.Item>
        
//           <Sidebar.Item href="/user/dashboard/viewproducts" icon={HiOutlineShoppingBag} active={location.pathname === '/admin/dashboard/view-products'}>
//             Available Products
//           </Sidebar.Item>
//           <Sidebar.Item href="/login" icon={HiOutlineArrowSmRight} active={location.pathname === '/sign-in'}>
//             Sign In
//           </Sidebar.Item>
//           <Sidebar.Item href="/signout" icon={HiOutlineTable} active={location.pathname === '/logout'}>
//             Log out
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>

//       </Sidebar.Items>
//     </Sidebar>
//   );
// };
// export  default USidebar;




import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiOutlineArrowSmRight, HiOutlineInbox, HiOutlineShoppingBag, HiOutlineTable } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa6';
import '../home/BannerCard.css'

const USidebar = () => {
  const location = useLocation();

  return (
    <Sidebar aria-label="Sidebar" style={{ background: 'linear-gradient(to bottom, #4a96e3, #255db3)', height: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Link to="/" id='main' style={{ color: '#fff', textDecoration: 'none', fontSize: '22px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FaBlog style={{ fontSize: '26px' }} />
          InventIQ
        </Link>
        <br/>
        <h4 style={{ color: '#fff', fontSize: '20px' }}>Hello User</h4>
      </div>

      <Sidebar.Items style={{ marginTop: '40px' }}>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/user/dashboard/products" icon={HiOutlineInbox} active={location.pathname === '/user/dashboard/products'}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/user/dashboard/viewproducts" icon={HiOutlineShoppingBag} active={location.pathname === '/user/dashboard/viewproducts'}>
            In Stock
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiOutlineArrowSmRight} active={location.pathname === '/login'}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/signout" icon={HiOutlineTable} active={location.pathname === '/signout'}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default USidebar;
