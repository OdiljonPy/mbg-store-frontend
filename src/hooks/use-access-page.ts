import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useAuthCheck(check:boolean) {
    const router = useRouter();

    const noPermission = ['account','cart/delivery','cart/order-pickup','account/profile','account/orders','account/favorites','account/address_book']

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token && check) {
            router.push('/');
        }
    }, [router, check]);
}

export default useAuthCheck;
