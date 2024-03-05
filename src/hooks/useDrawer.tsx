import { useState, useEffect, useRef, RefObject } from 'react';

const useDrawer = (): {
  isOpen: boolean;
  toggleDrawer: () => void;
  drawerRef: RefObject<HTMLDivElement>;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleDrawer, drawerRef };
};

export default useDrawer;
