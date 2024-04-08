import React, { useEffect, useState } from 'react';
import { HiMiniMinus } from 'react-icons/hi2';
import { FaWindowMaximize } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';
import { VscChromeMaximize } from 'react-icons/vsc';
import styles from '@styles/controls.module.scss';

const WinControls: React.FC<WinControlsProps> = () => {
   const [max, setMax] = useState(false);

   async function getWinStats() {
      const value = await api.fetch('win/maximized');
      ///-------
      setMax(value);
   }

   useEffect(() => {
      getWinStats();
   }, []);

   async function toggleMax() {
      const value = await api.post('win/controls', 'maximize');
      if (typeof value === 'boolean') setMax(value);
   }

   function minimise() {
      api.post('win/controls', 'minimize');
   }

   function close() {
      api.post('win/controls', 'close');
   }

   //--- code here ---- //
   return (
      <div className={styles.main + ' flex absolute'}>
         <div
            className={styles.button + ' ' + styles.minimize}
            onClick={minimise}
         >
            <HiMiniMinus />
         </div>
         <div
            onClick={toggleMax}
            className={styles.button + ' ' + styles.maximize}
         >
            {max ? <FaWindowMaximize /> : <VscChromeMaximize />}
         </div>
         <div onClick={close} className={styles.button + ' ' + styles.close}>
            <IoCloseOutline />
         </div>
      </div>
   );
};

interface WinControlsProps {}

export default WinControls;
