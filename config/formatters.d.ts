declare const _default: {
    files: string[];
    languageOptions: {
        parser: typeof import("eslint-parser-plain/index");
    };
    plugins: {
        format: {
            parserPlain: typeof import("eslint-parser-plain/index");
            rules: {
                prettier: {
                    meta: {
                        type: "layout";
                        docs: {
                            description: string;
                            category: string;
                        };
                        fixable: "whitespace";
                        schema: {
                            type: "object";
                            properties: {
                                parser: {
                                    type: "string";
                                    required: true;
                                };
                            };
                            additionalProperties: true;
                        }[];
                        messages: {
                            insert: string;
                            delete: string;
                            replace: string;
                        };
                    };
                    create(context: import("eslint").Rule.RuleContext): {
                        Program(): void;
                    };
                };
                dprint: {
                    meta: {
                        type: "layout";
                        docs: {
                            description: string;
                            category: string;
                        };
                        fixable: "whitespace";
                        schema: {
                            type: "object";
                            properties: {
                                language: {
                                    type: "string";
                                    required: true;
                                };
                                languageOptions: {
                                    type: "object";
                                };
                            };
                            additionalProperties: true;
                        }[];
                        messages: {
                            insert: string;
                            delete: string;
                            replace: string;
                        };
                    };
                    create(context: import("eslint").Rule.RuleContext): {
                        Program(): void;
                    };
                };
            };
        };
    };
    rules: {
        'format/prettier': ["error", {
            parser: string;
            tabWidth: number;
        }];
    };
}[];
export default _default;
