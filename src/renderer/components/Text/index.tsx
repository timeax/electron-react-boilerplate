import React, { PropsWithChildren } from 'react';
import styles from '@styles/components/text.module.scss';

const Text: React.FC<TextProps> = ({
   children,
   variant = 'text',
   color = 'text-grey',
   bgColor = '',
   className = '',
}) => {
   const Tag = getTag(variant);
   //--- code here ---- //
   return (
      <Tag
         className={
            styles['main'] +
            ' ' +
            styles[variant] +
            ' ' +
            className +
            ' ' +
            color +
            ' ' +
            bgColor +
            ' ' +
            (bgColor ? styles.highlight : '')
         }
      >
         {children}
      </Tag>
   );
};

function getTag(name: Variant) {
   switch (name) {
      case 'title':
      case 'subtitle':
      case 'text':
      case 'header':
      case 'subheader':
      case 'small':
      case 'other':
         return 'span';
      case 'label':
         return 'label';
   }
}

interface TextProps extends PropsWithChildren {
   variant?: Variant;
   className?: string;
   color?: TextColor;
   bgColor?: BgColor;
}

type Variant =
   | 'title'
   | 'subtitle'
   | 'text'
   | 'header'
   | 'subheader'
   | 'small'
   | 'label'
   | 'other';
export default Text;
