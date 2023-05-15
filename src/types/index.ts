export type TAnyObj = {
    [key: string]: any
}

export type TAnyObjWithID = {
    id: number
    [key: string]: any
}

export interface IPost {
    userId?: number;
    id: number;
    title?: string;
    body?: string;
}

export interface IChecklistItemProps {
    text: string
    active: boolean
    error: string
}