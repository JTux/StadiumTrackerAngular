export interface StadiumCreate {
	StadiumName: string;
	CityName: string;
	StateName: string;
}

export interface StadiumDetail {
	StadiumID: number;
	StadiumName: string;
	CityName: string;
	StateName: string;
	UserIsOwner: boolean;
}

export interface StadiumEdit {
	StadiumID: number;
	StadiumName: string;
	CityName: string;
	StateName: string;
}