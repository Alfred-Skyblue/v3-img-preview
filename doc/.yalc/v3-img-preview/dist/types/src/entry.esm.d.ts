import { App, Plugin } from 'vue';
import component from "./v3-img-preview.vue";
import { IV3ImgPreviewProps } from "./types";
declare type InstallableComponent = typeof component & {
    install: Exclude<Plugin['install'], undefined>;
};
export declare function v3ImgPreviewFn(options: string): App;
export declare function v3ImgPreviewFn(options: string[]): App;
export declare function v3ImgPreviewFn(options: IV3ImgPreviewProps): App;
declare const _default: InstallableComponent;
export default _default;
