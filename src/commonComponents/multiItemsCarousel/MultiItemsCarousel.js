import style from '../../../styles/multiItemsCarousel.module.css'
import Carousel from 'react-multi-carousel';
import useMultiItemsCarousel from './useMultiItemsCarousel'
import Image from 'next/image'

const MultiItemsCarousel = (props) => {
    const { responsive, CustomButtonGroup, settings } = useMultiItemsCarousel()
    const { imagesSrc, } = props


    return (
        <Carousel responsive={responsive} {...settings} rrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />} >
            {
                imagesSrc?.map((item, index) => {
                    return <div key={index} className={style.imageContainer}>
                        <Image draggable={false} src={item.src} alt='img1'
                            layout='fill' objectFit='cover' className={style.imageItem}
                        />
                    </div>
                })
            }
        </Carousel>
    );
}

export default MultiItemsCarousel
