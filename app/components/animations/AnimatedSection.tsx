'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Animation = 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in' | 'scale-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  threshold?: number;
}

const variants: Record<Animation, Variants> = {
  'slide-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-in-left': {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-in-right': {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimatedSection({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
  threshold = 0.15,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
}
