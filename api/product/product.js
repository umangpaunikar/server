const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json([
    {
      categoryName: "Mens Footwear",
      products: [
        {
          name: "Red Chief",
          img: "https://rukminim1.flixcart.com/image/150/150/jpsnma80/shoe/z/p/z/rc3429-10-red-chief-rust-original-imafbye7g3nssxjj.jpeg?q=70",
          shortDes: "Casual Shoes & Sandals",
        },
        {
          name: "Woodland, Red Tape & more",
          img: "https://rukminim1.flixcart.com/image/150/150/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70",
          shortDes: "Shoes, Sandals & more",
        },
        {
          name: "Best Selling Footwear",
          img: "https://rukminim1.flixcart.com/image/150/150/kjn6qvk0-0/shoe/d/c/v/ck2669-001nike-12-nike-black-white-smoke-grey-original-imafz5vwe5t53z3t.jpeg?q=70",
          shortDes: "Casual Shoes & Sandals",
        },
        {
          name: "Nike, ADIDAS, Puma.",
          img: "https://rukminim1.flixcart.com/image/150/150/kjhgzgw0-0/shoe/4/0/c/cj0291-100nike-10-nike-white-black-flash-crimson-oracle-aqua-original-imafzfg4srdt4s5y.jpeg?q=70",
          shortDes: "Casual Shoes & Sandals",
        },
        {
          name: "Nike, ADIDAS, Puma.",
          img: "https://rukminim1.flixcart.com/image/150/150/kjhgzgw0-0/shoe/4/0/c/cj0291-100nike-10-nike-white-black-flash-crimson-oracle-aqua-original-imafzfg4srdt4s5y.jpeg?q=70",
          shortDes: "Casual Shoes & Sandals",
        },
        {
          name: "Nike, ADIDAS, Puma.",
          img: "https://rukminim1.flixcart.com/image/150/150/kjhgzgw0-0/shoe/4/0/c/cj0291-100nike-10-nike-white-black-flash-crimson-oracle-aqua-original-imafzfg4srdt4s5y.jpeg?q=70",
          shortDes: "Casual Shoes & Sandals",
        },
      ],
    },
    {
      categoryName: "Headphones & Speakers",
      products: [
        {
          name: "Headphones",
          img: "https://rukminim1.flixcart.com/image/150/150/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70",
          shortDes: "New Launches",
        },
        {
          name: "True wireless Earbuds",
          img: "https://rukminim1.flixcart.com/image/150/150/krayqa80/headphone/l/i/r/rma2010-realme-original-imag54eybt7meu7r.jpeg?q=70",
          shortDes: "New Launches",
        },
        {
          name: "Bluetooth Speakers",
          img: "https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70",
          shortDes: "New Launches",
        },
        {
          name: "Headphones Over Ear",
          img: "https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70",
          shortDes: "New Launches",
        },
        {
          name: "Headphones Over Ear",
          img: "https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70",
          shortDes: "New Launches",
        },
        {
          name: "Headphones Over Ear",
          img: "https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70",
          shortDes: "New Launches",
        },
      ],
    },
  ]);
});

module.exports = routes;
