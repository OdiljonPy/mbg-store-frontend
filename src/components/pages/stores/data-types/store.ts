export interface IStoreLetter {
    letter: string
    id: number
    stores: IStore[]
}

export interface IStore {
    id: number
    title: string
}