import { Container, Grid, Row } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./cards/ProductCard";
import { getCategories, getProducts } from "../helpers/content";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./Header";
import CategorySelector from "./CategorySelector";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ key: "", name: "Todos" }]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
    getCategories().then((res) => {
      let categoriesParsed = [];
      res.map((category) =>
        categoriesParsed.push({ key: category, name: category })
      );
      setCategories([{ key: "", name: "Todos" }, ...categoriesParsed]);
    });
  }, []);

  const fetchData = (setItems, items) => {
    getProducts(page).then((res) => {
      setItems([...items, ...res]);
      if (res.length < 12) {
        setHasMore(false);
      }
      setPage(page + 1);
    });
  };

  return (
    <>
      <Header
        title="Elegí el rubro y encontrá tus productos"
        user={props.user}
      />
      <CategorySelector categories={categories} />
      <Container >
      <InfiniteScroll
        dataLength={products.length} //This is important field to render the next data
        next={() => {
          fetchData(setProducts, products);
        }}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid.Container gap={2} css={{ mt: "20px" }}>
          {products.map((item) => {
            return (
              item.stock && (
                <>
                  <ProductCard item={item} key={item.code} />
                </>
              )
            );
          })}
        </Grid.Container>
      </InfiniteScroll>
      </Container>
    </>
  );
}
