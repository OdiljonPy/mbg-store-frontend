import React from 'react';
import {useTranslations} from 'next-intl';
import {ConfigProvider, Dropdown, MenuProps} from "antd";
import css from './catalog-select.module.css'
import {raleway} from "@/constants/fonts/fonts";
import CatalogTop from "@/layout/components/header/main-header/components/catalog-top/catalog-top";
import food from '@/../public/images/icons/cooked-food.svg'
import veg from '@/../public/images/icons/fruits-and-veg.svg'
import milk from '@/../public/images/icons/milk.svg'
import meat from '@/../public/images/icons/meat.svg'
import {ICategoryItem} from "@/layout/components/header/main-header/data-types/category";
import CatalogItem from "@/layout/components/header/main-header/components/catalog-item/catalog-item";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import CatalogIcon from "@/components/shared/catalog-icon/catalog-icon";

interface props {

}


const catalogItem: ICategoryItem[] = [
    {
        id: 2,
        title: 'Готовая еда',
        img: <CatalogIcon><ResponsiveImage src={food} alt={''}/></CatalogIcon>
    },
    {
        id: 3,
        title: 'Овощи и фрукты',
        img: <CatalogIcon><ResponsiveImage src={veg} alt={''}/></CatalogIcon>
    },
    {
        id: 4,
        title: 'Молочный прилавок',
        img: <CatalogIcon><ResponsiveImage src={milk} alt={''}/></CatalogIcon>
    },
    {
        id: 5,
        title: 'Мясо и птица',
        img: <CatalogIcon><ResponsiveImage src={meat} alt={''}/></CatalogIcon>
    }
]


const CatalogSelect = (props: props) => {
    const t = useTranslations()

    const items: MenuProps['items'] = [
        {
            label: <CatalogTop item={{title: 'Все категории', id: 1}}/>,
            key: '1',
        },
        ...catalogItem.map((item) => (
            {
                label: <CatalogItem item={item} key={item.id}/>,
                key: item.id,
                icon: item.img
            }
        ))
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Dropdown: {
                        paddingBlock: 8
                    }
                },
                token: {
                    controlItemBgHover: '#F1FAF4'

                }
            }}
        >
            <Dropdown menu={{items}} trigger={['click']} overlayClassName={css.dropdown}>
                <button className={`${css.btn} ${raleway.className}`}>
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.5 0.125H14.5C13.9377 0.12482 13.3814 0.239953 12.8654 0.463284C12.3494 0.686615 11.8847 1.0134 11.5 1.42344C11.1153 1.0134 10.6506 0.686615 10.1346 0.463284C9.61858 0.239953 9.06226 0.12482 8.5 0.125H2.5C2.00272 0.125 1.52581 0.322544 1.17417 0.674175C0.822544 1.02581 0.625 1.50272 0.625 2V14C0.625 14.4973 0.822544 14.9742 1.17417 15.3258C1.52581 15.6775 2.00272 15.875 2.5 15.875H8.5C8.99728 15.875 9.47419 16.0725 9.82582 16.4242C10.1775 16.7758 10.375 17.2527 10.375 17.75C10.375 18.0484 10.4935 18.3345 10.7045 18.5455C10.9155 18.7565 11.2016 18.875 11.5 18.875C11.7984 18.875 12.0845 18.7565 12.2955 18.5455C12.5065 18.3345 12.625 18.0484 12.625 17.75C12.625 17.2527 12.8225 16.7758 13.1742 16.4242C13.5258 16.0725 14.0027 15.875 14.5 15.875H20.5C20.9973 15.875 21.4742 15.6775 21.8258 15.3258C22.1775 14.9742 22.375 14.4973 22.375 14V2C22.375 1.50272 22.1775 1.02581 21.8258 0.674175C21.4742 0.322544 20.9973 0.125 20.5 0.125ZM8.5 13.625H2.875V2.375H8.5C8.99728 2.375 9.47419 2.57254 9.82582 2.92418C10.1775 3.27581 10.375 3.75272 10.375 4.25V14.0759C9.79467 13.7789 9.15194 13.6243 8.5 13.625ZM20.125 13.625H14.5C13.8479 13.6246 13.2051 13.7798 12.625 14.0778V4.25C12.625 3.75272 12.8225 3.27581 13.1742 2.92418C13.5258 2.57254 14.0027 2.375 14.5 2.375H20.125V13.625Z"
                            fill="white"/>
                    </svg>
                    <span className={css.text}>
                       {t('catalog')}
                    </span>
                </button>
            </Dropdown>
        </ConfigProvider>
    );
};

export default CatalogSelect;