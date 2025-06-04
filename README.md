
# 💸 RightPrice — E-commerce Price Tracker

**🔗 Live:** [right-price.vercel.app](https://right-price.vercel.app/)
**📁 GitHub:** [github.com/dev-daizy/RightPrice](https://github.com/dev-daizy/RightPrice)

---

## 🧠 Project Summary

**RightPrice** is a full-stack web app that tracks the price history of products from e-commerce websites (like Amazon) and notifies users when prices drop. It was built as a final year college project, but designed like a real-world SaaS product.

The core idea: users paste a product link, and the app fetches, stores, and displays the price history, with email alerts when a price drop is detected.

---

## ⚙️ Tech Stack

| Layer        | Technology                       |
| ------------ | -------------------------------- |
| Frontend     | **Next.js**, Tailwind CSS        |
| Backend      | Node.js (API routes in Next.js)  |
| Database     | **MongoDB Atlas**                |
| Scraping     | **BrightData** proxies + Cheerio |
| Auth         | **NextAuth.js** (Google login)   |
| Email Alerts | **Nodemailer**                   |
| Payments     | **Razorpay** (test mode)         |
| Hosting      | **Vercel**                       |

---

## 🔐 Key Features

* ✅ **Google Authentication**
* 🔍 **Track Prices**: Paste Amazon product URLs
* 📈 **Price History**: Shows current, minimum, and maximum prices
* 📧 **Email Alerts**: Get notified when prices drop
* 🚫 **Product Limit**: Max 5 tracked products per free user
* 💳 **Premium Plan (WIP)**: Unlock unlimited tracking via Razorpay
* 🔒 **Private Data**: Users can only view/manage their own tracked products

---

## 🧪 Challenges Faced

* Managing scraping reliability with BrightData and rate limits
* Implementing user-specific data handling with MongoDB
* UI feedback issues when redirecting after crossing product limits
* Balancing real-world features vs. academic expectations

---

## 💬 Reflection

> This project taught me how to build and ship a real, user-facing product — not just for grades, but to solve a real-world pain point.
> Even though it was underappreciated during evaluation, it gave me hands-on experience with full-stack development, user auth, and payment integration — things that *actually matter* when building real products.
