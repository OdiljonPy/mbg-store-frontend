import React from 'react';
import {GetServerSideProps} from "next";
import Head from "next/head";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

type Props = {};





const Id = (props: props) => {

    return (
        <>
            <Wrapper/>
        </>
    );
};

export default Id;





export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};

// export const getServerSideProps:GetServerSideProps = async () =>{
//     const router = useRouter()
//     const {info,loading} =  useSelector((state:RootState) => state.product_single)
//     const dispatch = useDispatch<AppDispatch>()
//
//     useEffect(() => {
//         dispatch(fetchProductSingle(router.query.id))
//     }, [router.query.id]);
//
//     return{
//         props:{
//             info
//         }
//     }
// }