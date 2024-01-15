import {useKeenSlider} from "keen-slider/react";


const animation = {duration: 10000, easing: (t: number) => t}

export function usePartnersSlider() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        breakpoints: {
            "(min-width: 320px)": {
                slides: {
                    perView: 1.4,
                }
            },
            "(min-width: 576px)": {
                slides: {
                    perView: 2.5,
                    spacing: 24
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
                }
            },
            "(min-width: 1200px)": {
                slides: {
                    perView: 4,
                    spacing: 24
                }
            },
        },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })


    return sliderRef

}