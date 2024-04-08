import { IProduct, IStore } from "@/data-types/products/common";
import { IBasketSlices } from "@/data-types/slices/basket";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:IBasketSlices = {
    products : [] as IProduct[],
    store_list: [] as IStore[],
    totalCountProduct : 0,
    all_prices:0,
    discount_price:0,
    cost_price:0
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
            const index = state.products.findIndex(product => product.id === payload.product.id);
            if (index !== -1) {
                state.products[index].count += payload.quantity;
            } else {
                state.products.push({count:payload.quantity,...payload.product});
            }
            state.totalCountProduct = state.products.length

            // for  store list
            const storeList = state.store_list.findIndex(store=> store.id === payload.product.store.id)
            if(storeList === -1){
                state.store_list.push(payload.product.store)
            }
        },

        setProducts: (state, { payload }: PayloadAction<{product: IProduct; quantity: number}[]>) =>{
            const stores = new Set()
            
            state.products = payload.map((product) => {

                stores.add(product.product.store.id)
            
                return {
                    count: product.quantity,
                    ...product.product
                }
            })
            
            state.totalCountProduct = state.products.length
        },
        
        removeProduct : (state, {payload}:{payload:number}) =>{
            // for store list
            const activeProduct = state.products.find((product)=> product.id == payload)
            const checkInclude = state.store_list.filter((store)=> store.id === activeProduct?.store.id)
            // console.log(state.products,"state products")
            // console.log(payload,"payload")
            // console.log(checkInclude,"check product")
            // console.log(activeProduct,"active product")
            if(checkInclude.length === 1){
                state.store_list = state.store_list.filter((store)=> store.id !== activeProduct?.store.id)
            }

            // for products
            state.products = state.products.filter(product => product.id !== payload);

            // for total product length
            state.totalCountProduct = state.products.length
        },

        calcPrices:((state)=>{
            state.all_prices = state.products.reduce((acc,product)=> acc + product.price*(product.count ? product.count : 1),0)

            state.discount_price = state.products.reduce((acc,product)=> acc + (product.discount ? product.discount_price ? product.discount_price : 0 : 0)*(product.count ? product.count : 1) ,0)

            state.cost_price = state.all_prices - state.discount_price
        }),

    }
})

export const {addProduct , removeProduct,calcPrices, setProducts} = basketSlices.actions
export default basketSlices.reducer