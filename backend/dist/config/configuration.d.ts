export interface Configuration {
    nodeEnv: string;
    port: number;
    database: {
        url: string;
    };
}
declare const _default: () => Configuration;
export default _default;
