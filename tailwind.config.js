module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: process.env.NODE_ENV === "production",
        content: ["./public/**/*.html", "./src/**/*.js"],
    },
    theme: {
        fontFamily: {
            default: ["Rubik", "sans-serif"],
        },
        extend: {
            colors: {
                veryDarkGray: "hsl(0, 0%, 17%)",
                darkGray: "hsl(0, 0%, 59%)",
            },
            fontSize: {
                default: "18px",
            },
            height: {
                20: "20vh",
                30: "30vh",
                40: "40vh",
                60: "60vh",
            },
            width: {
                90: "90%",
            },
            backgroundImage: (theme) => ({
                pattern: "url(../images/pattern-bg.png)",
            }),
            minHeight: {
                ten: "10rem",
            },
        },
    },
    variants: {
        borderWidth: ["responsive", "first"],
    },
    plugins: [],
};
