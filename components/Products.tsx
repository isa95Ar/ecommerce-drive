import { Grid } from "@nextui-org/react";
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
          categoriesParsed.push({ key: category.slug, name: category.name })
      );
      setCategories([{ key: "", name: "Todos" }, ...categoriesParsed]);
    });
  }, []);

  const fetchData = (setItems, items) => {
    getProducts(page).then((res) => {
      setItems([...items, ...res]);
      if (res.length < 24) {
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

      <InfiniteScroll
        dataLength={products.length} //This is important field to render the next data
        next={() => {
          fetchData(setProducts, products);
        }}
        hasMore={hasMore}
        loader={<h6>Loading...</h6>}
      >
        <Grid.Container gap={2}>
          <Grid md={2} lg={2}></Grid>
          <Grid md={8} lg={8} css={{ flexFlow: "wrap" }}>
            {products.map((item) => {
              return (
                item.stock && (
                  <>
                    <Grid xs={12} sm={12} md={4} lg={4} xl={4} key={item.code}>
                      <ProductCard item={item} key={item.code} />
                    </Grid>
                  </>
                )
              );
            })}
          </Grid>
          <Grid md={2} lg={2}></Grid>
        </Grid.Container>
      </InfiniteScroll>
    </>
  );
}
