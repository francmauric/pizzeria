import styles from './styles.module.scss'
import gatito from '../../public/images/imagenParallax/gatito.jpg'
import hoja from '../../public/images/imagenParallax/hoja.jpg'
import lobo from '../../public/images/imagenParallax/lobo.jpg'
import lobo2 from '../../public/images/imagenParallax/lobo2.jpg'
import monito from '../../public/images/imagenParallax/monito.jpg'
import chiquita from '../../public/images/imagenParallax/chiquita.jpg'
import programadora from '../../public/images/imagenParallax/programadora.jpg'
import Image from 'next/image'


export default function IndexParallax() {
    
    
    return (
        <div className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={monito}
                            fill
                            alt='image'
                            placeholder='blur'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}