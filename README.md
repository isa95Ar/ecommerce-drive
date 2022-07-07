# Al Margen E-Commerce

Este E-commerce usa la api de google para traer productos de un excel y los mete en un redis.

## Link para instalarse redis.
https://redis.io/docs/stack/get-started/install/linux/

(Con windows si o si hay que ponerse el wsl2)


## Para ejecutar el proyecto hay que tener typescript y ts-node

``` 
npm install -g typescript 
npm install -g ts-node
```

## Pasos para correr

```
npm i
ts-node commands/UpateProducts.ts //Para traer los productos del excel
npm run dev
```

