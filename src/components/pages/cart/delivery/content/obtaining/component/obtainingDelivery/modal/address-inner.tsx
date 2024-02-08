import css from "./form-modal.module.css"
import {raleway} from "@/constants/fonts/fonts";
import AddressDetect from "@/layout/components/header/top-header/components/address-detect/address-detect";
import {GeolocationControl, Map, ZoomControl} from "@pbe/react-yandex-maps";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import useDebounce from "@/hooks/use-debounce";
import {UseFormReturn} from "react-hook-form";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import FormError from "@/components/shared/form-error/form-error";
import Loader from "@/components/shared/loader/loader";
import {ConfigProvider, Spin ,Checkbox} from "antd";

const mapOptions: any = {
    modules: ["geocode", "geolocation", "SuggestView", "suggest"],
    defaultOptions: {suppressMapOpenBlock: true},
    width: 600,
    height: 400,
};

const geolocationOptions: any = {
    defaultOptions: {maxWidth: 128},
    defaultData: {content: "Determine"},
};

const initialState: any = {
    center: [41.373433, 69.268657],
    zoom: 12,
};
// interface IMethods{
//     address:string,
//     name:string,
// }
interface props {
    methods: UseFormReturn<IAddressForm>
}

const AddressInner = ({methods}: props) => {
    const {setValue, formState: {errors}, register} = methods
    const t = useTranslations()
    const [state, setState] = useState<any>({...initialState});
    const [mapConstructor, setMapConstructor] = useState<any>(null);
    const debouncedValue = useDebounce(state, 500)
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

    useEffect(() => {
        setValue('address', state.title)
    }, [debouncedValue])

    const mapRef = useRef<any>(null)

    const handleBoundsChange = (e: any) => {
        const newCoords = mapRef.current.getCenter();
        mapConstructor?.geocode(newCoords).then((res: any) => {
            const nearest = res.geoObjects.get(0);
            const foundAddress = nearest.properties.get("text");
            const [centerX, centerY] = nearest.geometry.getCoordinates();
            const [initialCenterX, initialCenterY] = initialState.center;
            if (centerX !== initialCenterX && centerY !== initialCenterY) {
                setState((prevState: any) => ({...prevState, title: foundAddress, center: newCoords}));
            }
        });
    };


    const {onChange, onBlur, ref, name} = register('address', {
        required: {
            value: true,
            message: t('errors.required')
        },
    })

    const onDetectLocation = () => {
        setConfirmLoading(true)
        mapConstructor.geolocation.get({
            provider: 'browser',
            mapStateAutoApply: true
        }).then((response: any) => {
            setState((prev: any) => ({
                ...prev,
                center: response.geoObjects.position
            }))
            setConfirmLoading(false)
        })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // mapConstructor.suggest(e.target.value).then(function (items:any[]) {
        //     console.log(items)
        // }).catch((e: any) => {
        //     console.log(e)
        // });
        onChange(e)
    }

    function handleClick(e:any){
        console.log(state,"click ")
    }


    return (
        <>
            <div className={`${css.form} ${raleway.className}`}>
                <div className={css.fields}>
                    <h3 className={`${css.title}`}>
                        {t('address.add_delivery')}
                    </h3>
                    <div className={css.item}>
                        <div>
                            <label className={css.label}>
                                {t('address.name')}
                            </label>
                            <input
                                   placeholder={t('address.enter_name')} className={`${css.input} `}/>
                            {/*<FormError error={errors.name?.message}/>*/}
                        </div>

                        <div className={css.itemInner}>
                            <label className={css.label}>
                                {t('address.title')}
                            </label>
                            <AddressDetect onDetect={onDetectLocation}/>
                        </div>
                        <input ref={ref} onBlur={onBlur} onChange={onChangeHandler} name={name}
                               placeholder={t('address.placeholder')} className={`${css.input} `}/>
                        <FormError error={errors.address?.message}/>

                    {/*    form input */}
                        <div className={css.input_group}>
                            <div>
                                <label className={css.label}>
                                    {t('address.entrance')}
                                </label>
                                <input
                                    placeholder={t('address.entrance')} className={`${css.input} `}/>
                            </div> <div>
                                <label className={css.label}>
                                    {t('address.floor')}
                                </label>
                                <input
                                    placeholder={t('address.floor')} className={`${css.input} `}/>
                            </div> <div>
                                <label className={css.label}>
                                    {t('address.apartment')}
                                </label>
                                <input
                                    placeholder={t('address.apartment')} className={`${css.input} `}/>
                            </div>
                        </div>
                        <div className={css.checkbox}>
                            <ConfigProvider
                                theme={{
                                    components: {

                                        Checkbox: {
                                            colorPrimary: '#2E9D58',
                                            controlInteractiveSize:16,
                                            lineWidth:2
                                        },
                                    },
                                }}
                            >
                                <Checkbox><span className={css.checkbox_text}>{t('address.make_address')} </span></Checkbox>
                            </ConfigProvider>
                        </div>
                    </div>
                    <div className={css.loader}>
                        <ConfigProvider theme={{
                            token: {
                                colorPrimary: '#39B969'
                            }
                        }}>
                            <Spin spinning={confirmLoading}/>
                        </ConfigProvider>
                    </div>
                </div>
                <button  onClick={handleClick} className={`${css.btn_send} ${raleway.className}`}>
                    {t('approve')}
                </button>
            </div>
            <div className={css.form_responsive}>
                <div className={css.address_resp}>
                    <div className={css.itemInner}>
                        <label className={css.label}>
                            {t('address.title')}
                        </label>
                        <AddressDetect onDetect={onDetectLocation}/>
                    </div>
                    <input ref={ref} onBlur={onBlur} onChange={onChangeHandler} name={name}
                           placeholder={t('address.placeholder')} className={`${css.input} `}/>
                    <FormError error={errors.address?.message}/>
                </div>
            </div>
            <Map
                {...mapOptions}
                state={debouncedValue}
                className={css.map}
                onLoad={setMapConstructor}
                instanceRef={mapRef}
                onBoundsChange={handleBoundsChange}
            >
                <svg className={css.pin} width="42" height="68" viewBox="0 0 42 68" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M21 0C32.598 0 42 9.40202 42 21C42 31.9234 33.6599 40.8989 23 41.906V64C23 65.1046 22.1046 66 21 66C19.8954 66 19 65.1046 19 64V41.906C8.34014 40.8989 0 31.9234 0 21C0 9.40202 9.40202 0 21 0Z"
                          fill="#F65751"/>
                    <path
                        d="M28 21C28 17.134 24.866 14 21 14C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28C24.866 28 28 24.866 28 21Z"
                        fill="white"/>
                    <path opacity="0.3"
                          d="M21 68C23.7614 68 26 66.8807 26 65.5C26 64.1193 23.7614 63 21 63C18.2386 63 16 64.1193 16 65.5C16 66.8807 18.2386 68 21 68Z"
                          fill="#F65751"/>
                </svg>
                <ZoomControl/>
            </Map>
        </>
    );
};

export default AddressInner;