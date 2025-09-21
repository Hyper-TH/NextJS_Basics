export default async function ProductDetails({ 
    params,
}: { 
    params: Promise<{ productId: string }>; 
}) {
  const productId = (await params).productId;
  return (
    <h1>Details about product {productId}</h1>
  );
}

/*
The type of params, is a promise 
that results into an object containing the dynamic
segment as key value pairs.

We can use async await to result the promise 
and access the dynamic segments as needed.
*/