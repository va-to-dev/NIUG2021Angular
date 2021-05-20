export class ConfigSettings {
    [key: string]: any;
}

export type IMISProperty = {
    $type: string,
    Name: string,
    Value: string
};

export interface HandlerResponse {
    code: number;
    type: string;
    message: string;
    data: any;
}