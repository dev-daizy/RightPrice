// "use client";

// import { Check, Star, Zap, Bell, Shield, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

// const plans = [
//   {
//     name: "Free Plan",
//     price: "₹0",
//     period: "/month",
//     description: "Perfect for getting started",
//     features: [
//       { text: "Track up to 5 products", icon: <Zap className="w-4 h-4" /> },
//       { text: "Basic email notifications", icon: <Bell className="w-4 h-4" /> },
//       { text: "No payment required", icon: <Shield className="w-4 h-4" /> },
//     ],
//     buttonText: "Get Started",
//     buttonVariant: "default" as const,
//     popular: false,
//   },
//   {
//     name: "Premium Plan",
//     price: "₹99",
//     period: "/month",
//     priceAlt: "$1.99/month",
//     description: "For serious savers and deal hunters",
//     features: [
//       { text: "Track unlimited products", icon: <Zap className="w-4 h-4" /> },
//       { text: "Priority notifications", icon: <Bell className="w-4 h-4" /> },
//       { text: "Advanced analytics", icon: <Star className="w-4 h-4" /> },
//       { text: "Price history charts", icon: <Star className="w-4 h-4" /> },
//       { text: "Export data", icon: <Shield className="w-4 h-4" /> },
//     ],
//     buttonText: "Buy Premium",
//     buttonVariant: "default" as const,
//     popular: true,
//   },
// ];

// const Pricing = () => {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 rounded-t-3xl shadow-lg overflow-hidden">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Unlock Full Power of{" "}
//             <span className="text-red-600">Right</span>
//             <span className="text-yellow-500">Price</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Choose the plan that fits your savings strategy.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className={`relative transition-all duration-300 hover:shadow-xl ${
//                 plan.popular
//                   ? "border-2 border-blue-500 shadow-lg scale-105"
//                   : "border border-gray-200 hover:border-blue-200"
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-full">
//                     Most Popular
//                   </div>
//                 </div>
//               )}

//               <CardHeader className="text-center pb-6">
//                 <CardTitle className="text-2xl font-bold text-gray-900">
//                   {plan.name}
//                 </CardTitle>
//                 <div className="mt-4">
//                   <div className="flex items-baseline justify-center">
//                     <span className="text-4xl md:text-5xl font-bold text-gray-900">
//                       {plan.price}
//                     </span>
//                     <span className="text-gray-500 ml-1">{plan.period}</span>
//                   </div>
//                   {plan.priceAlt && (
//                     <p className="text-sm text-gray-500 mt-1">
//                       {plan.priceAlt}
//                     </p>
//                   )}
//                 </div>
//                 <p className="text-gray-600 mt-2">{plan.description}</p>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <ul className="space-y-3">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="flex items-center space-x-3"
//                     >
//                       <div className="flex-shrink-0">
//                         <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                           <Check className="w-3 h-3 text-green-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-blue-600">{feature.icon}</span>
//                         <span className="text-gray-700">{feature.text}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   variant={plan.buttonVariant}
//                   size="lg"
//                   onClick={() =>
//                     plan.name === "Free Plan"
//                       ? router.push("/")
//                       : router.push("/premium")
//                   }
//                   className={`w-full mt-6 rounded-3xl bg-gradient-to-r from-red-500 to-yellow-400 text-white hover:from-red-600 hover:to-yellow-500`}
//                 >
//                   {plan.buttonText}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Trust indicators */}
//         <div className="text-center mt-16">
//           <p className="text-gray-500 mb-4">
//             Trusted by thousands of smart shoppers
//           </p>
//           <div className="flex justify-center items-center space-x-8 text-gray-400">
//             <div className="flex items-center space-x-1">
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <span className="ml-2 text-sm">4.9/5 rating</span>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Questions? We've got answers.
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
//             Get in touch with our team if you need help choosing the right plan
//             for your needs.
//           </p>
//             <a
//               href="https://x.com/dev_daizy"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400 transition mt-4"
//             >
//               <Twitter className="w-6 h-6" />
//             </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
"use client";

import { useRouter } from "next/navigation";
import { Twitter, Star , Instagram } from "lucide-react";
import { useSession } from "next-auth/react";
// import Instagram from "next-auth/providers/instagram";

// Extend the session user type to include 'id'
declare module "next-auth" {
  interface User {
    id?: string;
  }
  interface Session {
    user?: User;
  }
}

export default function PricingPage() {
const { data: session } = useSession();
  const router = useRouter();

  const userId = session?.user?.id;
   const handlePayment = async () => {
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 99 }), // ₹199
    });

    const data = await res.json();

    interface RazorpayOptions {
      key: string | undefined;
      amount: number;
      currency: string;
      name: string;
      description: string;
      order_id: string;
      handler: (response: RazorpayResponse) => Promise<void>;
      theme: {
        color: string;
      };
    }

    interface RazorpayResponse {
      razorpay_payment_id: string;
      razorpay_order_id?: string;
      razorpay_signature?: string;
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "RightPrice Premium",
      description: "Unlimited product tracking",
      order_id: data.id,
      handler: async function (response: RazorpayResponse) {
  await fetch("/api/user/upgrade", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }), // ⬅️ pass userId here
  });

  alert("Payment Successful! You are now a Pro user.");
  router.push("/");
}
,
      theme: {
        color: "#f43f5e", // red-pink
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  };


  return (
    <div className="min-h-90hv bg-gradient-to-br from-yellow-50 to-blue-100 py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Unlock Full Power of{" "}
          <span className="text-red-600">Right</span>
          <span className="text-yellow-400">Price</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your savings strategy.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">Free Plan</h2>
          <p className="text-center mt-2 text-gray-600">Perfect for getting started</p>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold text-gray-900">₹0</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li>✔ Track up to 5 products</li>
            <li>✔ Basic email notifications</li>
            <li>✔ No payment required</li>
          </ul>
          <button
            onClick={() => router.push("/")}
            className="w-full mt-32 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
          >
            Start for Free
          </button>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-white border-2 border-blue-500 rounded-xl shadow-lg p-6 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-full">
              Most Popular
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mt-2">Premium Plan</h2>
          <p className="text-center mt-2 text-gray-600">For serious savers and deal hunters</p>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold text-gray-900">₹99</span>
            <span className="text-gray-500">/month</span>
            <p className="text-sm text-gray-500 mt-1">$1.99/month</p>
          </div>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li>✔ Track unlimited products</li>
            <li>✔ Priority notifications</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Price history charts</li>
            <li>✔ Export data</li>
          </ul>
          <button
            // onClick={() => router.push("/")}
            onClick={handlePayment}
            className="w-full mt-7 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
          >
            Buy Premium
          </button>
        </div>
      </div>

      {/* Trust Section */}
      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4  md:text-xl">Trusted by thousands of smart shoppers</p>
        <div className="flex justify-center items-center space-x-2 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-gray-500">4.9/5 rating</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4  md:text-2xl">
          Questions? We've got answers.
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto flex justify-center items-center gap-2 md:text-xl">
          Get in touch with our team if you need help choosing the right plan
          for your needs.
        
        </p>
        <div className="flex justify-center mt-4">
            <a
            href="https://x.com/dev_daizy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
            <a
            href="https://instagram.com/dev_daizy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            <Instagram className="w-6 h-6 ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
