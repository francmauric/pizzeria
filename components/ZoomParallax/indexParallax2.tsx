'use client'; 

import styles from './styles.module.scss'
import spaguetti2 from '../../public/images/imagenParallaxPastas/secondo/branzino_alla_griglia.jpeg'
import spaguetti from '../../public/images/imagenParallaxPastas/secondo/gamberoni-alla-griglia.jpeg'
import gnocchi from '../../public/images/imagenParallaxPastas/secondo/grigliata-di-carne.jpg'
import ravioli from '../../public/images/imagenParallaxPastas/secondo/orata-alla-griglia.jpeg'
import monito from '../../public/images/imagenParallaxPastas/monito.jpg'
import risotto from '../../public/images/imagenParallaxPastas/secondo/Panatura-Cotoletta-Milanese-L.jpg'
import spaguetti3 from '../../public/images/imagenParallaxPastas/secondo/Scaloppine.jpeg'
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
            src: spaguetti2,
            scale: scale5
        },
        {
            src: spaguetti,
            scale: scale6
        },
        {
            src: gnocchi,
            scale: scale5
        },
        {
            src: ravioli,
            scale: scale6
        },
        {
            src: risotto,
            scale: scale8
        },
        {
            src: spaguetti3,
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
                <h2 className="p-2 text-xl">Secondi</h2>
              <ol className='text-sm'>
                <li>Grigliata mista</li>
                <li>Branzino alla griglia</li>
                <li>Orata alla griglia</li>
                <li>Gamberoni alla griglia</li>
                <li>Milanese</li>
                <li>Scaloppina a scelta</li>
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