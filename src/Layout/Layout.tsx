import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
        <Header />
        <main className="flex-1 overflow-auto bg-[#f5f7fb]">
          <Outlet />
        </main>
         <Footer />
    </div>
  )
}

export default Layout
