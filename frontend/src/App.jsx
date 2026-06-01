import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import HomePage from './pages/home/HomePage.jsx';
import CheckIn from './pages/checkin/CheckIn.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import ChatPage from './pages/chat/chat.jsx';
import Resources from './pages/resources/resources.jsx';
import Footer from './components/Footer/footer.jsx';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      {
        path: '/',element: <HomePage />,
      },
      {
        path: '/check-in', element: <CheckIn />,
      },
      {
        path: '/dashboard',element: <Dashboard />,
      },
      { 
        path: '/chat',element: <ChatPage /> 
      },
      { 
        path: '/resources',element: <Resources /> 
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;