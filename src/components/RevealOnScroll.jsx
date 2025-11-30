import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const RevealOnScroll = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" }); // 75px පෙනුනම Animation පටන් ගන්න
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // පටන් ගද්දි පහළින් සහ නොපෙනී තියෙනවා
          visible: { opacity: 1, y: 0 }, // පෙනෙනකොට උඩට ඇවිත් මතු වෙනවා
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }} // වේගය (0.8s)
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;