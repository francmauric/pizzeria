'use client'; 

import styles from './styles.module.scss'
import gatito from '../../public/images/imagenParallax/gatito.jpg'
import hoja from '../../public/images/imagenParallax/hoja.jpg'
import lobo from '../../public/images/imagenParallax/lobo.jpg'
import lobo2 from '../../public/images/imagenParallax/lobo2.jpg'
import monito from '../../public/images/imagenParallax/monito.jpg'
import chiquita from '../../public/images/imagenParallax/chiquita.jpg'
import programadora from '../../public/images/imagenParallax/programadora.jpg'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

export default function IndexParallax() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.el}>
                    <motion.div style={{scale: scale4}} className={styles.imageContainer}>
                        <Image 
                            src={monito}
                            fill
                            alt='image'
                            placeholder='blur'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}