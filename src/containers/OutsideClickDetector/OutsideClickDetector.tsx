import React, { useEffect, useRef } from 'react';

interface OutsideClickDetectorProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

function OutsideClickDetector({ children, onOutsideClick }: OutsideClickDetectorProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('mousedown', handleOutsideClick);

    // Detach the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideClickDetector;
