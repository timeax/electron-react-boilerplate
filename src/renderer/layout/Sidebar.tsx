import Text from '@components/Text';
import React from 'react';
import routes from '../routes';
import IconText from '@components/Text/IconText';
import styles from '@styles/layout/sidebar.module.scss';
const Sidebar: React.FC<SidebarProps> = () => {
   //--- code here ---- //
   return (
      <div className="flex flex-col">
         {routes.map((item) => {
            return (
               <div key={item.id} className="">
                  <IconText
                     className={styles.routes}
                     href={item.href}
                     icon={item.icon}
                     text={item.name}
                  />
               </div>
            );
         })}
      </div>
   );
};

interface SidebarProps {}

export default Sidebar;
