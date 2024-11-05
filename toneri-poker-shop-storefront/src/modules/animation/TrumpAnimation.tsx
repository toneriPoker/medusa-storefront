'use client'

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export default function TrumpAnimation() {
  const { scrollY } =useScroll();
  const top = useTransform(scrollY, [0, 600], [32, 200]); // 0から500のスクロールで0から300pxに移動
  const rotate = useTransform(scrollY, [0, 500], [65, 90]); // 0から500のスクロールで0度から180度回転
  return (
    <motion.div 
      style={{
        position: 'absolute',
        top: top,
        right: '0',
        backgroundColor: 'white',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        height: '250px',
        width: '177px', 
        transformOrigin: 'top right', 
        zIndex: '-10',
        rotate: rotate
        
      }}
    >
    <Image width={100} height={100} src="/images/trump.png" alt="trump_image" className="h-full w-full"/>
  </motion.div>
  )
}