"use server"
import { revalidatePath } from "next/cache";
import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";
import { User } from "@/types";
import { generateEmailBody, sendEmail } from "../nodemailer";
import mongoose from "mongoose";
import UserModel from "@/lib/models/user.model";
// export async function scrapeAndStoreProduct(productUrl: string) {
//     if(!productUrl) return ;

//     try {
//         connectToDB();
//         const scrapedProduct = await scrapeAmazonProduct(productUrl);

//         if(!scrapedProduct) return;

//         let product = scrapedProduct;

//         const existingProduct = await Product.findOne({ url: scrapedProduct.url });

//         if(existingProduct) {
//             const updatedPriceHistory: any = [
//                 ...existingProduct.priceHistory,
//                 { price: scrapedProduct.currentPrice }
//             ]

//             product = {
//                 ...scrapedProduct,
//                 priceHistory: updatedPriceHistory,
//                 lowestPrice: getLowestPrice(updatedPriceHistory),
//                 highestPrice: getHighestPrice(updatedPriceHistory),
//                 averagePrice: getAveragePrice(updatedPriceHistory)
//             }
//         }

//         const newProduct = await Product.findOneAndUpdate(
//             { url: scrapedProduct.url},
//             product,
//             { upsert: true, new: true}
//             );

//             revalidatePath(`/products/${newProduct._id}`);



        

//     } catch (error: any) {
//         throw new Error(`Failed to create/update product: ${error.message}`)

//     }

    
// }



export async function scrapeAndStoreProduct(productUrl: string, userId: string) {
  if (!productUrl) return;

  try {
    connectToDB();

    // Fetch the user
    const user = await UserModel.findById(userId);
    if (!user) throw new Error("User not found");

    // Check if the user is not premium and already has 5 products
    const userProducts = await Product.find({ userId });
    if (!user.isPremium && userProducts.length >= 5) {
      throw new Error("Free user limit reached");
    }

    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

    const product = {
      ...scrapedProduct,
      userId, // Associate the product with the logged-in user
    };

    const newProduct = await Product.findOneAndUpdate(
      { url: scrapedProduct.url, userId },
      product,
      { upsert: true, new: true }
    );

    revalidatePath(`/products/${newProduct._id}`);
  } catch (error: any) {
    console.error("Error scraping and storing product:", error);
    throw new Error(error.message);
  }
}


export async function getProductById(productId: string) {
    try {
      connectToDB();
  
      const product = await Product.findOne({ _id: productId });
  
      if(!product) return null;
  
      return product;
    } catch (error) {
      console.log(error);
    }
  }
  

  export async function getAllProducts(userId: string) {
    try {
      connectToDB();
  
      const products = await Product.find({ userId }); // if userId is a string (like email or UUID)
  
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
  
  
  export async function getSimilarProducts(productId: string) {
    try {
      connectToDB();
  
      const currentProduct = await Product.findById(productId);
  
      if(!currentProduct) return null;
  
      const similarProducts = await Product.find({
        _id: { $ne: productId },
      }).limit(3);
  
      return similarProducts;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function addUserEmailToProduct(productId: string, userEmail: string) {
    try {
      const product = await Product.findById(productId);
  
      if(!product) return;
  
      const userExists = product.users.some((user: User ) => user.email === userEmail);
  
      if(!userExists) {
        product.users.push({ email: userEmail });
  
        await product.save();
  
        const emailContent = await generateEmailBody(product, "WELCOME");
  
        await sendEmail(emailContent, [userEmail]);
      }
    } catch (error) {
      console.log(error);
    }
  }
 