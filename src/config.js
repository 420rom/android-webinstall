export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0daa9a",
	BACKGROUND_COLOR: "#000000",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 6",
            model: "oriole",
        },
        {
            name: "Pixel 6 Pro",
            model: "raven",
        },
    ],
    RELEASE_VARIANTS: {
        Release: {
            description:
                "420rom Release Version without Google Services and Apps, Recommended for most users.",
            suffix: "release",
        },
		ReleaseGapps: {
            description:
                "420rom Release Version with Google Services and Apps included, Recommended for most users.",
            suffix: "releasegapps",
        },
        Beta: {
            description: "420rom Pre-Release Beta Version for testing only.",
            suffix: "beta",
        },
		Alpha: {
            description: "420rom Early Experimental Alpha Version for testing only.",
            suffix: "alpha",
        },
    },
    DONATION_LINKS: [
        {
            title: "Recurring donation",
            description:
                "Please consider making a recurring donation on Patreon for benefits such as early access to updates, exclusive behind-the-scenes development news, and priority support. This allows us to support the project sustainably in the future.",
            highlight: true,
            url: "https://patreon.com/kdrag0n",
            icon: "patreon",
        },
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/kdrag0ndonate",
            icon: "paypal",
        },
    ],
};
