export interface Citation {
    id: number;
    citation: string;
    explication: string | null;
    auteur_id: {
        auteur: string | null;
        bio: string | null;
    } | null;
}
