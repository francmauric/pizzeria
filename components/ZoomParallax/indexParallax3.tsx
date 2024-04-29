'use client'; 

import styles from './styles.module.scss'
import cremaCaramel from '../../public/images/imagenParallaxPastas/dessert/crema-caramel.jpg'
import cremaCatalana from '../../public/images/imagenParallaxPastas/dessert/crema-catalana.jpg'
import millefoglie from '../../public/images/imagenParallaxPastas/dessert/millefoglie-con-crema-768x1152.jpg'
import panna from '../../public/images/imagenParallaxPastas/dessert/panna-cotta.jpeg'
import monito from '../../public/images/imagenParallaxPastas/monito.jpg'
import tiramisu from '../../public/images/imagenParallaxPastas/dessert/tiramisu.jpg'
import torta from '../../public/images/imagenParallaxPastas/dessert/torta-alla-fruta.jpeg'
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
            src: cremaCaramel,
            scale: scale5
        },
        {
            src: cremaCatalana,
            scale: scale6
        },
        {
            src: millefoglie,
            scale: scale5
        },
        {
            src: panna,
            scale: scale6
        },
        {
            src: tiramisu,
            scale: scale8
        },
        {
            src: torta,
            scale: scale9
        }
    ]

    return (
        <div>
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) =>{
                        if (index === 0) {
                            return (
            <motion.div className={styles.el1} key={index} style={ {scale }}>
                <div className={styles.imageContainer1}>
                <h2 className="p-2 text-xl">Dessert</h2>
              <ol className='text-sm'>
                    <li>Creme Caramel</li>
                    <li>Tiramisu</li>
                    <li>Panna cotta</li>
                    <li>Millefoglie con Crema, Panna e Fragole</li>
                    <li>Torta alla Frutta</li>
                    <li>Crema Catalana</li>
              </ol>
            </div>

              
              
            </motion.div>

                            );
                        } else {

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
                        }

                    })
                }
            </div>
        </div>
        </div>
    )
}