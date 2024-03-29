import React , {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store"
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";

/* import Instamart from "./components/Instamart";  

On Demand loading

*/

const Instamart = lazy(() => import("./components/Instamart"));
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

  
  
  
  const AppLayout = () => {
    return (
      //wrapping whole app in provider to use react redux
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
       
    );
  };

  // call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
         path: "/restaurant/:resId",
        element: <RestaurantMenu />,
     },
     {
        path: "/cart",
        element: <Cart />,
     },
     {
      path     : "/instamart",
      element  : (<Suspense fallback={<Shimmer />}> <Instamart /></Suspense> )
    }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />); 
  // render RouterProvider and use router as props and pass value appRouter
  