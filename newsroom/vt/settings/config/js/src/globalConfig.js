/**
 * @typedef MenuItem
 * @prop {string} [label]
 * @prop {string} [target]
 * @prop {string} [url]
 * @prop {MenuItem[]} [submenuItems]
 */

/**
 * @typedef GlobalConfig
 * 
 // backtotop
    * @prop {boolean} backToTopButtonEnabled
 * 
    // header
 * @prop {boolean} VTHeaderEnabled
 * @prop {string} headerClass
 * @prop {string} footerClass
 * @prop {string} headerLogoImageURL
 * @prop {boolean} fixedHeader
 * @prop {'start' | 'end'} menuPosition
 * @prop {boolean} maintenanceMode
 * @prop {boolean} showLanguageSwitcher
 * @prop {boolean} showSearchBar
 * @prop {boolean} useFlagContainerForLanguageSwitcher - Update links using the flags container
 * @prop {{ cc: string, label?: string, url: string }[]} customLanguages - List of languages in languageSwitch
    
    // footer
 * @prop {boolean} VTFooterEnabled
 * @prop {string} footerLogoImageURL
 * @prop {{ id: string, span?: {small?: number, medium?: number, large?: number }, subitemsFlow?: 'column' | 'row', items: string[], isAccordion?: boolean }[]} footerSections
 * @prop {{ thresholdWidth?: number, allowMultipleOpen?: boolean }} footerAccordion 
 */

/**
 * @typedef {Object} ItemTranslation - Represents a custom translation.
 * @prop {string} page - The page where the translation is applied. Use '*' to mean all pages.
 * @prop {'innerText' | 'value' | 'placeholder'} type - The type of element to translate.
 * @prop {string} elementIdentifier - The CSS selector identifying the element to translate.
 * @prop {string} newText - The new text to be used as the translation.
 */

/**
 * @typedef {ItemTranslation[]} CustomTranslations - An array of custom translations.


 * @typedef General
 * @prop {string} newsroomTitle
 * @prop {string} websiteURL
 * @prop {string} newsroomURL
 * @prop {string} archive
 * @prop {string} back
 * @prop {string} copyright
 * @prop {string} close
 * @prop {string} medialib
 * @prop {string} more
 * @prop {string} search
 * @prop {string} subscribe
 * @prop {string} viewmore


 */

/** @type {GlobalConfig} */
globalThis.config = {
    ...globalThis.config,

    // backtotop settings
    backToTopButtonEnabled: false,

    // header settings
    VTHeaderEnabled: true,
    headerClass: '.pp-header',
    fixedHeader: false,
    headerLogoImageURL: 'https://content.presspage.com/templates/50/2499/491969/pp-logo__dark.svg',
    menuPosition: 'end',
    maintenanceMode: false,
    showLanguageSwitcher: false,
    showSearchBar: true,
    useFlagContainerForLanguageSwitcher: false,
    customLanguages: [
        // { label: 'English', cc: 'en', url: '#' },
    ],

    // footer settings
    VTFooterEnabled: true,
    footerClass: '.pp-footer',
    footerLogoImageURL: 'https://content.presspage.com/templates/50/2499/491969/pp-logo__dark.svg',

    footerAccordion: {
        thresholdWidth: 767,
        allowMultipleOpen: false,
    },

    footerSections: [
        // "span" property specifies how many columns out of a total of 12 in a grid system a particular section should occupy - options: small, medium, large. Small has a default value of 12
        // "subitemsFlow" property specifies how the items in a particular section should be displayed - options: column, row
        // items property specifies which items should be included in a particular section, they are IDs of the items defined in the /locale/[language]/js/src/footer.js
        // isAccordion property specifies if the section should be an accordion under a certain window width

        {
            id: 'logo-section',
            span: { medium: 4, large: 6 },
            items: ['footer-logo-container'],
        },
        {
            id: 'quick-section',
            span: { medium: 3, large: 3 },
            subitemsFlow: 'column',
            items: ['quick-links'],
            isAccordion: true,
        },
        {
            id: 'social-section',
            span: { medium: 3, large: 3 },
            items: ['social-icons'],
        },
        {
            id: 'copyright-section',
            subitemsFlow: 'row',
            items: ['copyright'],
        },
    ],
};
