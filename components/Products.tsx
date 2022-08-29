import { Grid } from "@nextui-org/react";
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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const addProductToCart = (product, qty) => {
    cart.addProduct(product, qty);
  };

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

  const fetchData = (
    setItems,
    items,
    sendCategory = null,
    initialPage = false
  ) => {
    getProducts(page, initialPage, sendCategory?.key).then((res) => {
      !initialPage ? setItems([...items, ...res]) : setItems(res);
      if (res.length < 24) {
        setHasMore(false);
      }
      setPage(page + 1);
    });
  };
  useEffect(() => {
    setPage(0);
    fetchData(setProducts, products, category, true);
  }, [category]);

  return (
    <>
      <Header
        title="Elegí el rubro y encontrá tus productos"
        user={props.user}
      />
      <Grid.Container gap={2}>
        <Grid md={2} lg={1} xl={2}></Grid>
        <Grid md={10} lg={1} xl={10} css={{ flexFlow: "wrap" }}>
          <CategorySelector
            categories={categories}
            setCategory={(val) => setCategory(val)}
            category={category}
          />
        </Grid>
      </Grid.Container>

      <InfiniteScroll
        className="infinite-scroll"
        dataLength={products.length} //This is important field to render the next data
        next={() => {
          fetchData(setProducts, products);
        }}
        hasMore={hasMore}
        loader={<h6>Loading...</h6>}
      >
        <Grid.Container gap={2}>
          <Grid md={2} lg={1} xl={2}></Grid>
          <Grid md={8} lg={10} xl={8} css={{ flexFlow: "wrap" }}>
            {products.map((item) => {
              return (
                item.stock && (
                  <>
                    <Grid xs={12} sm={12} md={6} lg={4} xl={4} key={item.code}>
                      <ProductCard
                        addProduct={(product, qty) =>
                          addProductToCart(product, qty)
                        }
                        item={item}
                        key={item.code}
                      />
                    </Grid>
                  </>
                )
              );
            })}
          </Grid>
          <Grid md={2} lg={1} xl={2}></Grid>
        </Grid.Container>
      </InfiniteScroll>
    </>
  );
}
