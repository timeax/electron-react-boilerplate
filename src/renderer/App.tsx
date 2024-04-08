import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Layout from './layout';
import routes from './routes';

export default function App() {
   return (
      <Router>
         <Layout>
            <main>
               <div className="container">
                  <Routes>
                     {routes.map((route) => {
                        if (route.nested) {
                        } else
                           return (
                              <Route
                                 key={route.id}
                                 path={route.href}
                                 element={route.component}
                              />
                           );
                     })}
                  </Routes>
               </div>
            </main>
         </Layout>
      </Router>
   );
}
