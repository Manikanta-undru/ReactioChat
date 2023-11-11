import { useEffect, useRef, useState } from 'react';

import { HiEllipsisVertical } from 'react-icons/hi2';
import ProfilePic from '../ProfilePic';
import user2 from '../../assets/img/pexels-carol-wd-3454298.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="text-gray-500 border-b border-b-200 p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <ProfilePic imageUrl={user2} size={40} />
          <div className="ml-3">
            <span className="text-sm font-semibold text-gray-600">Steve Roberts</span>
            <span className="block text-xs font-semibold text-green-500">online</span>
          </div>
        </div>
        <div className="flex items-center" ref={menuRef}>
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 text-lg"
            onClick={handleMenuClick}
          >
            <HiEllipsisVertical />
          </button>
          {isMenuOpen && (
            <div className="absolute right-5 top-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              {/* Your menu items go here */}
              <div className="p-2 text-xs">Menu Item 1</div>
              <div className="p-2 text-xs">Menu Item 2</div>
              {/* Add more menu items as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
