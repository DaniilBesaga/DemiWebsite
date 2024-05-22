export interface IWorkItem {
    work_id: number;
    work_name: string;
    release_date: Date;
    img_url: string;
    trailer_url: string;
    story: string;
}

export interface NewsItem {
    id: number;
    name: string; 
    postDate?: Date;
    imgUrl?: string; 
    description?: string; 
}

export interface IWorkItemPreview {
    id: number;
    name: string;
    releaseDate?: Date;
    imgUrl: string;
}