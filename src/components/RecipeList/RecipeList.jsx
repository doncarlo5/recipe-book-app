import React from "react";
import "./RecipeList.css";
import OneRecipe from "../OneRecipe/OneRecipe";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function RecipeList({ handleDelete, recipes }) {
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <OneRecipe
            key={recipe.id}
            recipe={recipe}
            handleDelete={handleDelete}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default RecipeList;
