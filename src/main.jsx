import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1700px] mx-auto'>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
    </div>
  </React.StrictMode>,
)
