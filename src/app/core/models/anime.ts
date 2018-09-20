import { Links } from './links';
import { Image } from './image';

export class Anime {
    data: {
        id: number,
        type: string,
        links: Links
        attributes: {
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            synopsis: string;
            coverImageTopOffset: number;
            titles: {
                en: string;
                en_jp: string;
                ja_jp: string;
            };
            canonicalTitle: string;
            abbreviatedTitles: Array<string>;
            averageRating: number;
            userCount: number;
            favoriteCount: number;
            startDate: Date;
            posterImage: Image;
            coverImage: Image;

        }
    };
}