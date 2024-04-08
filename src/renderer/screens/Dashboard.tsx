import Text from '@components/Text';
import React from 'react';

const Dashboard: React.FC<DashboardProps> = () => {
   //--- code here ---- //
   return (
      <>
         <Text className='bg-primary-600 flex'>Dashboard</Text>
      </>
   );
}

interface DashboardProps {

}

export default Dashboard
