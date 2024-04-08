import WinControls from '@widgets/Controls';
import React, { FC, PropsWithChildren } from 'react';
import styles from '@styles/layout.module.scss';
import Text from '@components/Text';
import { GiCrownedHeart } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Layout: React.FC<LayoutProps> = ({ children }) => {
   //--- code here ---- //
   return (
      <div className="flex h-full">
         <WinControls />
         <div className={styles.main}>
            <div className={styles.sidebar}>
               <Header className="flex items-center justify-center">
                  <Text variant="other" className={styles.sidebarLogo}>
                     <GiCrownedHeart />
                     <>P</>
                  </Text>
               </Header>
               <Sidebar />
            </div>
            <div className={styles.midcontent}>
               <Header>
                  <></>
               </Header>
               {children}
            </div>
         </div>
      </div>
   );
};

const Header: FC<PropsWithChildren & { className?: string }> = ({
   children,
   className = '',
}) => {
   return <div className={styles.header + ' ' + className}>{children}</div>;
};

interface LayoutProps extends PropsWithChildren {}

export default Layout;
