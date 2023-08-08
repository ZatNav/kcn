import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/counter.module.css";

const FunFactCounter = ({ endNumber }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let currentCount = 0;
          const interval = setInterval(() => {
            currentCount = Math.min(currentCount + 1, endNumber);
            setCount(currentCount);
            if (currentCount === endNumber) {
              clearInterval(interval);
            }
          }, 10); // You can adjust the interval (in milliseconds) to change the counting speed
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed (0.5 means 50% of the element should be in view to trigger)
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [endNumber]);

  return (
    <div className={styles.funFactCounter} ref={counterRef}>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default FunFactCounter;
