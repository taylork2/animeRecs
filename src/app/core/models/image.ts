export class Image {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
    meta: {
        dimension: {
            tiny: {
                width: number;
                height: number;
            };
            small: {
                width: number;
                height: number;
            };
            large: {
                width: number;
                height: number;
            }
        }
    }
}