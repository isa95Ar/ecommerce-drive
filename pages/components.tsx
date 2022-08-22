import ProductCard from '../components/cards/ProductCard'
import Layout from './layout'

export default function Components(props) {
    return (
        <Layout {...props}>
            <ProductCard />
        </Layout>
    )
}