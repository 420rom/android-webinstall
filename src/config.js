export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0daa9a",
	BACKGROUND_COLOR: "#000000",
    SUPPORTED_DEVICES: [
        {
            name: "Google Pixel 7 Pro",
            model: "cheetah",
        },
    ],
    RELEASE_VARIANTS: {
        release: {
            description:
                "420rom Release Version with Google Services and Apps included, Recommended for most users.",
            suffix: " Release rom with Gapps",
        },
		beta: {
            description: "420rom Beta Version for testing only.",
            suffix: " Beta rom for testing only",
        },
    },
        alpha: {
            description: "420rom Alpha Version for testing only.",
            suffix: " Alpha rom for testing only",
        },
};
