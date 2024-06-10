import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { shopData } from "../data.js";
import Products from "../components/VendorShop/Products.js";
import Restaurants from "@/components/VendorRestaurant/Restaurants.js";
import Loader from "@/components/Loader.js";

import NotFound from "@/components/NotFound.js";
import ProductsClothing from "@/components/VendorClothing/Productsclothing.js";
const Vendor = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [currentSlug, setCurrentSlug] = useState(null);
  const [shopCategory, setShopCategory] = useState(null);
  const [shopName, setShopName] = useState(null);

  useEffect(() => {
    if (router.isReady && slug) {
      setCurrentSlug(slug);
      const shop = shopData.find((shop) => shop.shopSlug === slug);

      if (shop) {
        setShopCategory(shop.shopCategory);
        setShopName(shop.shopName);
      }
    }
  }, [router.isReady, slug]);

  if (!router.isReady) {
    // Optionally render a loading state while the router is not ready
    return <Loader />;
  }

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      {/* Render different components based on the shop category */}
      {shopCategory === "Restaurant" ? (
        <Restaurants shopName={shopName} />
      ) : shopCategory === "ProductsCommerce" ? (
        <Products shopName={shopName} />
      ) : shopCategory === "Clothing" ? (
        <ProductsClothing shopName={shopName} />
      ) : (
        <NotFound slug={currentSlug} />
      )}
    </div>
  );
};

export default Vendor;
