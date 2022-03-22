import { PropType } from 'vue';
declare type imgState = 'loading' | 'error' | 'success';
declare const _default: import("vue").DefineComponent<{
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    url: {
        type: StringConstructor;
        default: undefined;
    };
    escClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    showCloseBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    on_unmount_v3_ima_preview_app: {
        type: FunctionConstructor;
    };
}, {
    handleClose: () => void;
    toggleImg: (flag: boolean) => void;
    initImgSize: () => void;
    dragStyle: import("vue").ComputedRef<string>;
    handleScale: (num: number, flag?: boolean) => void;
    handleRotate: (flag: boolean) => void;
    visibleArrowBtn: import("vue").ComputedRef<boolean>;
    imgScale: import("vue").Ref<number>;
    imgRotate: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    imgState: import("vue").Ref<imgState>;
    src: import("vue").Ref<string>;
    imgIndex: import("vue").Ref<number>;
    vImagesWrap: import("vue").Ref<HTMLElement | null>;
    imgContainer: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    url: {
        type: StringConstructor;
        default: undefined;
    };
    escClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    showCloseBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    on_unmount_v3_ima_preview_app: {
        type: FunctionConstructor;
    };
}>>, {
    showToolbar: boolean;
    showArrowBtn: boolean;
    keyboard: boolean;
    url: string;
    escClose: boolean;
    images: string[];
    showCloseBtn: boolean;
    index: number;
}>;
export default _default;
