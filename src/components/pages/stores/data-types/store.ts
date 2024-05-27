export interface IStoreLetter {
	letter: string;
	stores: IStore[];
}

export interface IStore {
	id: number;
	brand_name: string;
}
