export interface Users {
    user_id: number;
    username: string;
    email: string;
    creation_date: string;
    is_active: boolean;
}

export interface Categories {
    category_id: number;
    name: string;
    creation_date?: string;
}

export interface Comments {
    comment_id: number;
    post_id: number;
    user_id: number | null;
    comment: string;
    creation_date?: string;
    is_confirmed: boolean | null;
}

export interface Posts {
    post_id: number;
    user_id: number;
    category_id: number;
    title: string;
    content: string;
    view_count: number;
    creation_date: string;
    is_published: boolean | null;
}