'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Typewriter({ texts, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // current text index
  const [subIndex, setSubIndex] = useState(0); // letter index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) setIndex(0); // loop back to start

    if (subIndex === texts[index]?.length + 1 && !deleting) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100); // typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  useEffect(() => {
    setDisplayedText(texts[index]?.substring(0, subIndex));
  }, [subIndex, index, texts]);

  return (
    <div className="flex items-center justify-center w-fit">
      <motion.h1
        className={`${className}`}
        aria-label={displayedText}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      </motion.h1>
    </div>
  );
}
