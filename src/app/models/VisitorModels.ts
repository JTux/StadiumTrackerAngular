export interface VisitorCreate {
	FirstName: string;
	LastName: string;
}

export interface VisitorDetail {
	VisitorID: number;
	FullName: string;
	VisitCount: number;
	FirstName: string;
	LastName: string;
}

export interface VisitorEdit {
	VisitorID: number;
	FirstName: string;
	LastName: string;
}