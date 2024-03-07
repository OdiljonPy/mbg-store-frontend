import React from 'react';
import css from './faq.module.css'
import HeadingLine from "@/components/pages/about/heading-line/heading-line";
import CustomCollapse from "@/components/pages/about/faq/custom-collapse/custom-collapse";
import {faqs} from "@/constants/faq/faq";
import ChatTrigger from "@/components/pages/about/faq/chat-trigger/chat-trigger";

interface Props {

}

const Faq = (props: Props) => {
    return (
        <section className={css.faq}>
            <div className={'container'}>
                <HeadingLine title={'about.faq'}/>
                <div className={css.wrapper}>
                    <div className={css.questions}>
                        {faqs.map((question) => (
                            <CustomCollapse item={question} key={question.id}/>
                        ))}
                    </div>
                    <ChatTrigger/>
                </div>
            </div>
        </section>
    );
};

export default Faq;