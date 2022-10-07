import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function DarkModeToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={`w-10 h-6 p-1 rounded-3xl flex cursor-pointer bg-switchBlack lg:w-14 lg:h-8 lg:p2 ${isOn ? "justify-start" : "justify-end"}`} onClick={toggleSwitch}>
      <motion.div className={`w-4 h-4 absolute lg:w-6 lg:h-6 bg-background rounded-full border-1 lg:border-[2px] border-darkAccent`} layout transition={spring} />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
