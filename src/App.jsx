
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: app for Vision Coding Academy
 */
console.log("hi")
import { Router } from "./router"
import { RouterProvider } from "react-router-dom"

function App() {
  const router = Router()

  return (
    <div >
      <RouterProvider router={router} />
    </ div>
  )
}

export default App
