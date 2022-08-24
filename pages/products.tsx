import { Grid, Row } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import { getProducts } from "../helpers/content";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
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
      <Grid md={12} lg={12} xl={12}
        className="header-products"
      >
        <span>Elegí el rubro y encontrá tus productos</span>
      </Grid>
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
