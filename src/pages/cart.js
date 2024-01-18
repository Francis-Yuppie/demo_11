import Layout from "@/layout/Layout"
import Cart from "@/components/home/cart"
import CartLayout from "@/layout/cartlayout/layout"
const cart = () => {
  return (
    <Layout>
        <div className="container pb-5 mb-2 mb-md-4">
            <Cart />
            <CartLayout />
        </div>
    </Layout>
  )
}

export default cart