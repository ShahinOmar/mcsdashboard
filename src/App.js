import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, {useState, useEffect, useContext, createElement} from 'react';
//import routes from "./routes";

import {DevicesContextProvider} from './DevicesContext'



function App() {
  const [convertedRoutes, setConvertedRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [routers, setRouters]= useState([]);
  const [routes, setRoutes] = useState([]);
  

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch('http://localhost:4000/');
        setRoutes(await response.json());
        if (!Array.isArray(routes)) {
          throw new Error('Invalid routes data');
        }

        const childrenRoutes = routes[0].children;
        // Convert string element values to React component names
        function convertElementValues(children) {
          return children.map(child => {
            const { element, ...rest } = child;
            const Component = React.lazy(() => import(`./pages/${element}.js`));
        
            return {
              ...rest,
              element: React.createElement(Component)
            };
          });
        }
        
        // Assuming your original array is stored in a variable called 'data'
        const convertedChildren = convertElementValues(childrenRoutes);
        routes[0].element = React.createElement(React.lazy(() => import(`./pages/${routes[0].element}.js`)));
        routes[0].children = convertedChildren;
        setRouters(routes);
        console.log("Routers: ", routers);
        setIsLoading(false);
        } catch (error) {
        console.error('Error fetching routes:', error);
        setError('Error fetching routes. Please try again.');
        setIsLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  useEffect(()=>{
    setRouters(routes);
  }, [routes])

  
  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state while fetching routes
  }

  if (error) {
    return <div>{error}</div>; // Render an error message if there was an error fetching routes
  }

  const router = createBrowserRouter(routers);
  return (
    <DevicesContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </DevicesContextProvider>
  );
}


export default App;
