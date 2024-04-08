import Dashboard from '@screens/Dashboard';
import { RxDashboard } from 'react-icons/rx';

export interface Route {
   name: string;
   id: string;
   href: string;
   icon: React.ReactNode;
   component: React.ReactNode;
   nested?: Routes;
}

export type Routes = Array<Route>;

const routes: Routes = [
   {
      name: 'Analytics',
      id: 'analysis',
      href: '/',
      component: <Dashboard />,
      icon: <RxDashboard />,
   },
];

export default routes;
