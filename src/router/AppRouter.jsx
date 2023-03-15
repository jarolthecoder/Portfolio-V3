import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
  )
}
