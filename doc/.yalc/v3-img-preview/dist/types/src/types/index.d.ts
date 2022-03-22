export interface IV3ImgPreviewProps {
    url?: string;
    keyboard?: boolean;
    images?: string[];
    escClose?: boolean;
    showCloseBtn?: boolean;
    showToolbar?: boolean;
    showArrowBtn?: boolean;
    index: number;
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $v3ImgPreviewFn: (options: IV3ImgPreviewProps | string | string[]) => App;
    }
}
