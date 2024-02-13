export interface IFilters {
    category?: string
    prices?: string
    stores?: string[]
    sales?: string[]
    onSales?: boolean
    rating?: string
    withFeedback?: boolean
    delivery?: string[]
    hasDelivery?: boolean
    accessibility?: string[]
}



export type CheckboxFields =  'stores' | 'sales' | 'delivery' | 'accessibility'

export type BoolFields = 'onSales' | 'withFeedback' | 'hasDelivery'