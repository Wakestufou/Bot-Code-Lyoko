export type guildData = {
    Guild: {
        id: string;
        modules: {
            code_lyoko: boolean;
            code: boolean;
        };
        user_blacklist: string[];
    };
};

export type moduleData = {
    get: [string];
    response: [string];
};
