type ITypesData = {
    id: number;
    data: string[];
}

export interface ITypesComponentProps {
    id?: number;
    name?: string;
    error?: boolean;
    data: ITypesData | null;
    date: number | string | null;
    date1: "jeden" | "dwa";
}

export interface ITypesComponentProps1 {
    oldData?: ITypesComponentProps
}
