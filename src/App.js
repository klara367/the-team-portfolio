import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Portfolio from "./pages/Portfolio"
import Error from "./pages/Error"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portfolio />} />
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  )
}

export default App