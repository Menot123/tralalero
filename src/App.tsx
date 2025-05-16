import React from 'react'
// import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UserHeader from './components/Header/UserHeader'
import UserFooter from './components/Footer/UserFooter'
import AdminHeader from './components/Header/AdminHeader'
import AdminFooter from './components/Footer/AdminFooter'
import NotFound from './components/NotFound/NotFound'

import Home from './pages/Home'

const UserLayout: React.FC = () => (
  <div>
    <UserHeader />
    <Outlet />
    <UserFooter />
  </div>
);

const AdminLayout: React.FC = () => (
  <div>
    <AdminHeader />
    <Outlet />
    <AdminFooter />
  </div>
);

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  // const originalPath = import.meta.env.VITE_ORIGINAL_PATH as string

  return (
      <Routes>
        <Route path={""} element={<UserLayout />}>
          <Route index element={<h1>Dashboardss</h1>} />
          <Route path={"settings"} element={<Home />} />
          <Route path={"logout"} element={<h1>Log Out</h1>} />
        </Route>
        <Route path={"admin"} element={<AdminLayout />}>
          <Route index element={<h1>Admin Home</h1>} />
          <Route path={"settings"} element={<h1>Admin Settings</h1>} />
          <Route path={"users"} element={<h1>Admin Manage Users</h1>} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
  )
}

export default App
