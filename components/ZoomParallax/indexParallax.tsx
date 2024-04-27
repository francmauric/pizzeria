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
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: monito,
            scale: scale4
        },
        {
            src: gatito,
            scale: scale5
        },
        {
            src: hoja,
            scale: scale6
        },
        {
            src: lobo,
            scale: scale5
        },
        {
            src: lobo2,
            scale: scale6
        },
        {
            src: chiquita,
            scale: scale8
        },
        {
            src: programadora,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) =>{
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={src}
                            fill
                            alt='image'
                            placeholder='blur'
                        />
                </div>
                    </motion.div>

                    })
                }
            </div>
        </div>
    )
}