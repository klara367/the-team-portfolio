import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Portfolio from "./pages/Portfolio"
import Error from "./pages/Error"
import ProjectDetails from "./pages/ProjectDetails"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portfolio />} />
        <Route path="/details/:name" element={<ProjectDetails />}/>
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  )
}

export default App