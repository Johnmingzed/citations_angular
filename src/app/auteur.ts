export interface Auteur {
    auteur: string | null;
    bio: string | null;
    citations: [
        {
            id: number;
            citation: string;
            explication: string | null;
        }
    ] | null;
}
