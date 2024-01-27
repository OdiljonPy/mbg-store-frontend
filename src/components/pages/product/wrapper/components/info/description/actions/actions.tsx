import React from 'react';
import css from './actions.module.css'
import AddToCard from "@/components/pages/product/wrapper/components/info/description/actions/add-to-card/add-to-card";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";

interface props {

}

const Actions = (props: props) => {
    return (
        <div className={css.actions}>
            <AddToCard/>
            <AddToFav id={1}/>
        </div>
    );
};

export default Actions;