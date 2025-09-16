import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Preloader from  './components/Preloader'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import ProductList from './pages/product/ProductList'
import ProductForm from './pages/product/ProductForm'
import OrderList from './pages/order/OrderList'

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Preloader/>
        <Navbar/>
        <Sidebar/>
        {/* 페이지 전환될 영역 */}
        <div className="content-wrapper">
          <section className="content">
            <Routes>
              {/* 상품관련 */}
              <Route path="/product/list" element={<ProductList/>}/>
              <Route path="/product/registform" element={<ProductForm/>}/>

              {/* 주문관련 */}
              <Route path="/order/list" element={<OrderList/>}/>

            </Routes>  
          </section>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
