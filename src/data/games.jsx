export const games = [
  {
    id: 1,
    name: "PUBG Mobile",
    code: "PUBG",
    startingPrice: 80,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 2,
    name: "Free Fire",
    code: "FF",
    startingPrice: 40,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 3,
    name: "Call of Duty",
    code: "COD",
    startingPrice: 100,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 1,
    name: "PUBG Mobile",
    code: "PUBG",
    startingPrice: 80,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
  },
   {
    id: 2,
    name: "Free Fire",
    code: "FF",
    startingPrice: 40,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
  },
];



export const products = [
  {
    id: 1,
    game: "PUBG Mobile",
    name: "60 UC",
    amount: "60 UC",
    price: 80,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 2,
    game: "PUBG Mobile",
    name: "325 UC",
    amount: "325 UC",
    price: 390,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 3,
    game: "PUBG Mobile",
    name: "660 UC",
    amount: "660 UC",
    price: 780,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 4,
    game: "Free Fire",
    name: "100 Diamonds",
    amount: "100 💎",
    price: 85,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 5,
    game: "Free Fire",
    name: "310 Diamonds",
    amount: "310 💎",
    price: 245,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 6,
    game: "Free Fire",
    name: "520 Diamonds",
    amount: "520 💎",
    price: 390,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 7,
    game: "Call of Duty",
    name: "80 CP",
    amount: "80 CP",
    price: 100,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 8,
    game: "Call of Duty",
    name: "420 CP",
    amount: "420 CP",
    price: 450,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 9,
    game: "Valorant",
    name: "475 VP",
    amount: "475 VP",
    price: 420,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=600&q=85",
  },
];



//Support pages Data
import {
    ShieldCheck,
    CreditCard,
    ShoppingBag,
    Gamepad2
} from "lucide-react";
export const faqs = [
    {
        icon: ShoppingBag,
        title: "How do I place an order?",
        description:
            "Choose your game, select a top-up package, enter your Gamer ID, and complete the payment.",
    },
    {
        icon: CreditCard,
        title: "My payment was completed but order is pending",
        description:
            "Sometimes payment verification takes a few moments. Check your order history before contacting support.",
    },
    {
        icon: ShieldCheck,
        title: "Is my payment secure?",
        description:
            "Yes. We use secure payment processing and never store your complete payment information.",
    },
    {
        icon: Gamepad2,
        title: "Where can I find my Gamer ID?",
        description:
            "Open your game profile. Your Gamer ID is usually displayed directly below your username.",
    },
];

export const quickLinks = [
    {
        title: "Order Issues",
        description: "Payment, pending or failed orders",
        icon: ShoppingBag,
    },
    {
        title: "Payment Support",
        description: "Problems with your transaction",
        icon: CreditCard,
    },
    {
        title: "Account Help",
        description: "Login and account problems",
        icon: ShieldCheck,
    },
    {
        title: "Game Support",
        description: "Top-up and Gamer ID issues",
        icon: Gamepad2,
    },
];