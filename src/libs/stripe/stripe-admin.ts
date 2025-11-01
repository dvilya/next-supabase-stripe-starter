import Stripe from "stripe";

// Use a fallback so build won't crash if env var isn't loaded yet
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder_key";

if (stripeSecretKey === "sk_test_placeholder_key") {
  console.warn("⚠️ STRIPE_SECRET_KEY not found. Using placeholder for build-time safety.");
}

export const stripeAdmin = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "ResumeAI", // ← replace with your app name
    version: "0.1.0",
  },
});
