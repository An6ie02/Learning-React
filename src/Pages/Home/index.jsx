import { useState, useEffect } from "react"
import { apiUrl } from "../../api"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <Layout>
      React Home
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card key={item.id} props={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
