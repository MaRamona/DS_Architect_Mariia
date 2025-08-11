import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bgGlobal: {
                levelOne: string;
                levelTwo: string;
                levelThree: string;
            };

            bgInteractive: {
                error: {
                    primary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                };
                
                brand: {
                    primary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                };

                success: {
                    primary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        click: string;
                        disabled: string;
                    };
                };

            bgStatic: {
                error: {
                    primary: string;
                    secondary: string;
                    disabled: string;
                };
            };

        
            };
            text: {
            primary: string;
            }
        };
    };
    // typography: {};
    // spacing: {};
    // borderRadius: {}
}

