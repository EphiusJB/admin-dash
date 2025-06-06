// src/components/IconLibrary.js
import {
    FiUser, FiUserPlus, FiLogIn, FiLogOut, FiLock, FiShoppingBag, FiEdit,
    FiBarChart2, FiBox, FiShoppingCart, FiTrash2, FiTruck, FiSettings,
    FiBell, FiHome, FiMenu, FiSearch, FiArrowLeft, FiHelpCircle, FiMessageSquare,
    FiTrendingUp, FiCheck
  } from 'react-icons/fi';
  
  import {
    AiOutlinePlusSquare, AiOutlineHeart, AiFillStar, AiOutlineStar, AiOutlineLineChart,
    AiOutlineFileText
  } from 'react-icons/ai';
  
  import {
    MdAdminPanelSettings, MdDashboard, MdVerifiedUser, MdAssignment, MdPayment,
    MdShoppingCartCheckout, MdContactPhone, MdReport, MdPeople, MdInsertChartOutlined
  } from 'react-icons/md';
  
  import { BsTags, BsCurrencyDollar, BsCheckLg } from 'react-icons/bs';
  import { BiStats } from 'react-icons/bi';
  import { RiLineChartLine } from 'react-icons/ri';
  
  export const Icons = {
    // Auth & User
    Login: FiLogIn,
    Logout: FiLogOut,
    Register: FiUserPlus,
    Profile: FiUser,
    Admin: MdAdminPanelSettings,
    Lock: FiLock,
  
    // Store & Seller
    Store: FiShoppingBag,
    AddProduct: AiOutlinePlusSquare,
    Edit: FiEdit,
    Analytics: FiBarChart2,
    Dashboard: MdDashboard,
    Approval: MdVerifiedUser,
  
    // Products & Mall
    Product: FiBox,
    Tags: BsTags,
    AddToCart: FiShoppingCart,
    RemoveFromCart: FiTrash2,
    Wishlist: AiOutlineHeart,
    StarFilled: AiFillStar,
    StarOutline: AiOutlineStar,
  
    // Orders & Checkout
    Orders: MdAssignment,
    Payment: MdPayment,
    Shipping: FiTruck,
    Checkout: MdShoppingCartCheckout,
  
    // Admin Dashboard
  SalesChart: AiOutlineLineChart,
  Revenue: BsCurrencyDollar,
  Settings: FiSettings,
  Notifications: FiBell,
  Reports: AiOutlineFileText,
  Users: MdPeople,
  Check: BsCheckLg,

    // Stats Icons
  StatsBarChart: FiBarChart2,
  StatsTrendingUp: FiTrendingUp,
  StatsInsertChart: MdInsertChartOutlined,
  StatsLineChart: AiOutlineLineChart,
  StatsBi: BiStats,
  StatsRemix: RiLineChartLine,

    // Navigation
    Home: FiHome,
    Menu: FiMenu,
    Search: FiSearch,
    Back: FiArrowLeft,
  
    // Support & Contact
    Help: FiHelpCircle,
    Contact: MdContactPhone,
    Message: FiMessageSquare
  };
  
  // Example usage (e.g., in Navbar.jsx):
  // import { Icons } from './IconLibrary';
  // <nav>
  //   <Icons.Home />
  //   <Icons.Search />
  //   <Icons.Profile />
  //   <Icons.ShoppingCart />
  // </nav>
  