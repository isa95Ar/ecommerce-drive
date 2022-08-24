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
      if (res.length < 12) {
        setHasMore(false);
      }
      setPage(page + 1);
    });
  };
  return (
    <>
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
        <Grid.Container gap={2}>
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
    </>
  );
}
