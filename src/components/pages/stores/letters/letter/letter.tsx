import React from 'react';
import css from './letter.module.css'
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

interface props {
    letter: string
}

const Letter = ({letter}: props) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const lett: string | null = searchParams.get('letter')

    return (
        <Link href={{
            pathname,
            query: {
                letter: letter
            }
        }} className={`${css.letter} ${lett === letter ? css.selected : ''}`}>
            {letter.toUpperCase()}
        </Link>
    );
};

export default Letter;