import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {RootState, store} from "@/store";

export function middleware (request:NextRequest){
    const {pathname} = request.nextUrl
    const state:RootState = store.getState()
    const interdiction = ['/product/:id','/basket']

    if(pathname.startsWith('/cart/delivery') || pathname.startsWith('/account')){
        if (!state.login.isLoggedIn) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.rewrite(url);
        }
    }

    return NextResponse.next();
}
