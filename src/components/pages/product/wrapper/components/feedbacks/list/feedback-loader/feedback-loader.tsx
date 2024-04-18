import css from "./feedback-loader.module.css"
import Skeleton from "react-loading-skeleton";
interface props{

}
const FeedbackLoader = ({}:props) =>{
    return(
        <div className={css.loader}>
            <div className={css.loader_header}>
                  <Skeleton count={1} width={300} height={25}/>
                    <div className={css.loader_date}>
                        <Skeleton count={1} width={200} height={20}/>
                    </div>
            </div>
            <div className={css.loader_body}>
                <Skeleton count={1} width={'93%'} height={15}/>
                <Skeleton count={1} width={'85%'} height={15}/>
                <Skeleton count={1} width={'70%'} height={15}/>
            </div>
            <div className={css.loader_image}>
                <Skeleton count={1} width={100} height={100} borderRadius={10}/>
                <Skeleton count={1} width={100} height={100} borderRadius={10}/>
                <Skeleton count={1} width={100} height={100} borderRadius={10}/>
            </div>
        </div>
    )
}

export  default FeedbackLoader