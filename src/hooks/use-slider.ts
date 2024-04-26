import {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
export function useSlider() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 320px)": {
                slides: {
                    perView: 2.2,
                    spacing: 10
                }
            },
            "(min-width: 576px)": {
                slides: {
                    perView: 2.4,
                    spacing: 16
                }
            },
            "(min-width: 768px)": {
                slides: {
                    perView: 2.8,
                    spacing: 24
                }
            },
            "(min-width: 992px)": {
                slides: {
                    perView: 3.5,
                    spacing: 24
                }
            },
            "(min-width: 1200px)": {
                slides: {
                    perView: 4,
                    spacing: 24
                }
            },
        },
        created() {
            setLoaded(true)
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })

    const onNext = () => instanceRef.current?.next()

    const onPrev = () => instanceRef.current?.prev()

    return {loaded, sliderRef, instanceRef, onNext, onPrev, currentSlide}
}