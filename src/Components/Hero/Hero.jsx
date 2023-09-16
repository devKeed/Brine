import React from "react";
import "./Hero.css";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-container">
      
      <div className="left-hero">
        <motion.h1
          initial={{y: "2rem", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
         className="hero-title">
          A New World of Payments <br />
          with Cryptocurrencies
        </motion.h1>

        <div className="hero-description">
          <div>Buy, store, exchange & earn crypto.</div>
          
          <div className="hero-description-2">Join 10 million+ people using Brine Wallet.</div>
        </div>

        <div className="hero-action">
          <input type="text" placeholder="Email address"/>
          <button>Create Account</button>
        </div>
      </div>


      <motion.div
        initial={{x: "7rem", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{
          duration: 2,
          type: "spring"
        }}
       className="right-hero">
          <div className="hero-image">
              <img src="public\images\iPhone 11 Hero.png" alt="hero image"/>
              <img src="public\images\Ellipse 1.png" alt="hero image under"/>
          </div>
      </motion.div>

  </div>
    </div>
  );
};

export default Hero;
