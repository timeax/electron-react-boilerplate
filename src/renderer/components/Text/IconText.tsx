import React from 'react';
import { Link } from 'react-router-dom';

const IconText: React.FC<IconTextProps> = ({
   className = '',
   position = 'left',
   spacing = '4px',
   icon,
   text,
   href,
}) => {
   const Tag = href ? Link : 'div';
   //--- code here ---- //
   return (
      <Tag
         //@ts-ignore
         to={href}
         className={'flex ' + className}
      >
         <span
            //@ts-ignore
            selector="text-icon"
            className={position === 'left' ? '' : 'order-2'}
            style={{ ['margin' + position.capitalise()]: spacing }}
         >
            {icon}
         </span>
         <span
            //@ts-ignore
            selector="text"
         >
            {text}
         </span>
      </Tag>
   );
};

interface IconTextProps {
   icon: React.ReactNode;
   spacing?: string;
   position?: 'left' | 'right';
   text: string;
   href?: string;
   className?: string;
}

export default IconText;
