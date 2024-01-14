import {Inter, Raleway} from "next/font/google";


const inter = Inter({
    subsets: ["latin", "cyrillic"],
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
});

const raleway = Raleway({
    subsets: ["latin", "cyrillic"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export {raleway, inter}