import {GetStaticProps} from "next";


const NotFound = () => {
    return (
        <section>
            Not Found
        </section>
    );
};

export default NotFound;

export const getStaticProps = async ({locale}) => {


    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};