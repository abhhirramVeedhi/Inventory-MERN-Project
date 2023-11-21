import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiOutlineArrowSmRight, HiChartPie, HiOutlineChartPie, HiOutlineInbox, HiOutlineShoppingBag, HiOutlineTable, HiOutlineUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
// import userImg from '../assets/profile.png';
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa6';
import AdminProduct from './AdminProducts';
import '../home/BannerCard.css'


export const SideBar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example" className="bg-gradient-to-b from-blue-300 to-blue-600 h-screen">
      <div className="flex flex-col items-center p-8">
        <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' id='main'><FaBlog className='inline-block'  />InventIQ</Link>
        <br/>
        {/* <img src={profile.png} alt="userIMG" className="w-20 h-20 rounded-lg mb-2" /> */}
        <h4 className="text-blue-900 text-center mb-2 " style={{fontWeight: 'bold', fontSize:'25px'}}>Hello</h4>
        <h4 className='text-white' style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}>{user?.displayName || 'Admin'}</h4>
      </div>

      <Sidebar.Items className="text-white">
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} active={location.pathname === '/admin/dashboard/upload'}>
            Upload Products
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiOutlineInbox} active={location.pathname === '/admin/dashboard/manage'}>
            Manage Product
          </Sidebar.Item>
          
          <Sidebar.Item href="/admin/dashboard/view-products" icon={HiOutlineShoppingBag} active={location.pathname === '/admin/dashboard/view-products'}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiOutlineArrowSmRight} active={location.pathname === '/login`'}>
            Login 
          </Sidebar.Item>
          <Sidebar.Item href="/signout" icon={HiOutlineTable} active={location.pathname === '/logout'}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
 
  );
};
