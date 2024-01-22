export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 7",
            model: "panther",
        },
        {
            name: "Pixel 7 Pro",
            model: "cheetah",
        },
    ],
    RELEASE_VARIANTS: {
        stable: {
            description: "Stable release.",
            suffix: "",
        },
        beta: {
            description: "Beta release.",
            suffix: "",
        },
        alpha: {
            description: "Alpha release.",
            suffix: "",
        },
    ],
};
