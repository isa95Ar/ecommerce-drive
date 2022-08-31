import { Grid, Container, Row, Col, Pagination } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./cards/ProductCard";
import { getCategories, getProducts } from "../helpers/content";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./Header";
import CategorySelector from "./CategorySelector";
import { useCart } from "../src/hooks/CartHook";

export default function Products(props) {
  const cart = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ key: "", name: "Todos" }]);
  const [category, setCategory] = useState({ key: "", name: "Todos" });
  const [totalPages, setTotalPages] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const addProductToCart = (product, qty) => {
    cart.addProduct(product, qty);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
      setTotalPages(res.totalPages);
    });
    getCategories().then((res) => {
      let categoriesParsed = [];
      res.map((category) =>
        categoriesParsed.push({ key: category.slug, name: category.name })
      );
      setCategories([{ key: "", name: "Todos" }, ...categoriesParsed]);
    });
  }, []);

  const fetchData = (page, category) => {
    getProducts(page, category.key).then((res) => {
      setTotalPages(res.totalPages);
      setProducts(res.products);  
    })
  }

  useEffect(() => {
    fetchData(1, category);
  }, [category]);

  return (
    <>
      <Header
        title="Elegí el rubro y encontrá tus productos"
        user={props.user}
        cart={cart.Cart}
      />
      <Container>
        <Row>
          <CategorySelector
            categories={categories}
            setCategory={(val) => setCategory(val)}
            category={category}
          />
        </Row>
          <Row >
            <Grid.Container gap={2} css={{padding:0}}>
              {products.map((item) => (
                <Grid  xs={12} sm={12} md={6} lg={4} xl={4} key={item.code}>
                  <ProductCard
                    addProduct={(product, qty) =>
                      addProductToCart(product, qty)
                    }
                    item={item}
                    key={item.code}
                  />
                </Grid>
              ))}
              <Grid justify="center" md={12} lg={12} xl={12} xs={12} sm={12}>
              <Pagination initialPage={1} total={totalPages} onChange={(page) => fetchData(page, category)} color="warning"/></Grid>
            </Grid.Container>
          </Row>
      </Container>
    </>
  );
}
