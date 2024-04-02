const constants = {
    logo: 'http://127.0.0.1:8001/src/assets/logo.png',
    theme: {
        classes: {
            themeBtnPrimary: 'theme-btn-primary',
            themeBtnOutlinePrimary: 'theme-btn-outline-primary',
            themeBgGradientPrimary: 'theme-bg-gradient-primary',
            highlightTextPrimary: 'highlight-text-primary',

            themeBtnSecondary: 'theme-btn-secondary',
            themeBtnOutlineSecondary: 'theme-btn-outline-secondary',
            themeBgGradientSecondary: 'theme-bg-gradient-secondary',
            highlightTextSecondary: 'highlight-text-secondary',
        }
    }
}

const theme = constants.theme;

export const themeClass = theme.classes;
export default constants;