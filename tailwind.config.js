const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xs': '364px',
            ...defaultTheme.screens,
            '3xl': '1792px',
        },
        fontFamily: {
            'cursive': 'Ranchers'
        },
        extend: {
            fontFamily: {
                sans: 'Nunito'
            },
            maxHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("tailwindcss-hyphens")
    ],
}
