import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Button from './components/Button'
import Input from './components/Input'
import Counter from './components/Counter'
import TextArea from './components/TextArea'
import Select from './components/Select'
import Array from './components/Array'
import ObjectArray from './components/ObjectArray'
import Cities from './components/Cities'
import MainPage from './MainPage'
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      {/* Menu bar */}
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter ([
  {
      path: "/",
      element:<Layout/>,
      children:[
          {
              path:"/",
              element:<MainPage/>
          },
          {
            path: "/counter",
            element:<Counter/>
          },
          {
            path: "/listGroup",
            element:<ListGroup/>
          },
          {
            path: "/cities",
            element:<Cities/>
          }
      ]
  }
])

function App(){
  return (
    <div className="app">
      <div className="container">
          <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App
