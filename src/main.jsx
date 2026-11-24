import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/login/login.css'
import Login from './components/login/login.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Table from "./components/table/table.jsx"
import Flipkart from "./component/flipkart/flipkart.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Table/>
    <Flipkart/>
  </StrictMode>
)
