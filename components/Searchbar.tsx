
"use client";

import React, { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrapeAndStoreProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    return (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    );
  } catch (error) {
    return false;
  }
};

const Searchbar = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  // 🔁 Fetch user's product count AND premium status
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const countRes = await fetch(`/api/products/count?userId=${userId}`);
        const countData = await countRes.json();
        setProductCount(countData.count);

        const userRes = await fetch(`/api/user/premium-status?userId=${userId}`);
        const userData = await userRes.json();
        setIsPremium(userData.isPremium);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);
    if (!isValidLink) return alert("Please enter a valid Amazon product link");

    if (!isPremium && productCount >= 5) {
      router.push("/pricing");
      return;
    }

    try {
      setIsLoading(true);

      await scrapeAndStoreProduct(searchPrompt, userId);

      setProductCount((prev) => prev + 1);
      setSearchPrompt("");
    } catch (error: any) {
      const errorMessage = error?.message || "";
      console.error("Error adding product:", errorMessage);

      if (errorMessage.includes("Free user limit")) {
        setProductCount(5);
        // router.push("/pricing");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const showBuyPremium = !isPremium && productCount >= 5;

  return (
    <form className="flex flex-wrap gap-4 mt-8" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link here"
        className="searchbar-input"
        disabled={showBuyPremium}
      />

      {showBuyPremium ? (
        <button
          type="button"
          className="searchbar-btn bg-yellow-500 hover:bg-yellow-600 text-white"
          onClick={() => router.push("/pricing")}
        >
          Buy Premium 🚀
        </button>
      ) : (
        <button
          type="submit"
          className="searchbar-btn"
          disabled={searchPrompt === ""}
        >
          {isLoading ? (
            "Searching..."
          ) : (
            <>
              <span className="hidden lg:inline-block">Search</span>
              <Image
                src="/assets/icons/searchwhite.png"
                width={20}
                height={20}
                alt="search"
                className="lg:hidden"
              />
            </>
          )}
        </button>
      )}

      {showBuyPremium && (
        <p className="text-red-500 w-full mt-2">
          You can only add up to 5 products. Upgrade to Premium to track unlimited items.
        </p>
      )}
    </form>
  );
};

export default Searchbar;
