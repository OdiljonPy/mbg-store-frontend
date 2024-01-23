import React, {useState} from 'react';
import {Drawer} from "antd";

interface props {

}

const Categories = (props: props) => {
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)

    const onClose = () => setOpen(false)
    return (
        <>
            <button onClick={onOpen}>
                test
            </button>
            <Drawer open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                testst
            </Drawer>
        </>
    );
};

export default Categories;