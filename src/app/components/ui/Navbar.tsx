"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for a leaf object
interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    if (isHovered) {
      const newLeaves: Leaf[] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 180,
        y: Math.random() * 230,
        rotation: Math.random() * 360,
      }));
      setLeaves(newLeaves);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.nav className="fixed top-0 right-0 p-4 z-50">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          <motion.div
            className={`rounded-lg p-6 shadow-lg flex flex-col items-center space-y-4 overflow-hidden ${
              isHovered ? "bg-blue-900" : "bg-orange-400"
            }`}
            initial={false}
            animate={{
              width: isHovered ? "200px" : "80px",
              height: isHovered ? "250px" : "80px",
              borderRadius: isHovered ? "0.5rem" : "9999px",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Sun Icon (visible when not hovered) */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-yellow-300 rounded-full" />
            </motion.div>

            {/* Moon and Cloud (visible when hovered) */}
            <motion.div
              className="relative mb-4 w-full h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5, delay: isHovered ? 0.2 : 0 }}
            >
              <img
                src="/images/moon-icon.png"
                alt="Full Moon"
                className="absolute top-4 left-10 h-22"
              />
              <motion.img
                src="/images/cloud-icon.png"
                alt="Cloud"
                className="absolute top-0 h-12"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Rustling Leaves */}
            {isHovered && leaves.map((leaf) => (
              <motion.div
                key={leaf.id}
                className="absolute w-4 h-4 text-green-700"
                initial={{ x: leaf.x, y: leaf.y, rotate: leaf.rotation, opacity: 0 }}
                animate={{
                  x: leaf.x + Math.random() * 20 - 10,
                  y: leaf.y + Math.random() * 20 - 10,
                  rotate: leaf.rotation + Math.random() * 60 - 30,
                  opacity: [0, 0.7, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                🍂
              </motion.div>
            ))}

            {/* Links */}
            <motion.ul
              className="flex flex-col items-center space-y-2 text-white mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.3 : 0 }}
            >
              {["Home", "About", "Info", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/components/${item.toLowerCase()}`}>
                    <motion.span
                      className="font-serif text-lg tracking-wide relative group"
                      whileHover={{ scale: 1.2, color: "#f3ac76" }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                      <motion.span
                        className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full"
                        transition={{ duration: 0.2 }}
                      />
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;