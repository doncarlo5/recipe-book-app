import React from "react";
import "./RecipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";
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
          key={recipe.id}
          variants={cardVariants}
          initial="initial"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <RecipeCard recipe={recipe} handleDelete={handleDelete} />
        </motion.div>
      ))}
    </div>
  );
}

export default RecipeList;
