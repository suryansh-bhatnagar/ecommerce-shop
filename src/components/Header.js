import React ,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {

  const {isOpen , setIsOpen} = useContext(SidebarContext);

  return <header className='bg-pink-200'>
    <div>
      header
    </div>
    <div className='cursor-pointer'  onClick={()=>setIsOpen(!isOpen)}>
      <BsBag className='text-2xl'/>
    </div>
  </header>;
};

export default Header;
