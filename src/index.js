import { createRoot } from "react-dom/client"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tab="home"/>
    </BrowserRouter>
  </React.StrictMode>
)