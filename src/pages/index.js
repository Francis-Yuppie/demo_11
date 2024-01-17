import Layout from "@/layout/Layout"
import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Products from "@/components/home/Products"
import Marketting from "@/components/home/Marketting"
import AddCart from "@/components/home/cart"


const index = () => {
  return (
    <Layout>
      <Hero />
      {/* <FeaturedProducts /> */}
      <Products />
      <Marketting />
      <AddCart />
    </Layout>
  )
}

export default index