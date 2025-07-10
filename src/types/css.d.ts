declare global {
    interface CSS {
        paintWorklet: {
        addModule: (moduleURL: string) => Promise<void>;
        };
    }
}

export {};