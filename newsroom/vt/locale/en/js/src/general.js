globalThis.translations = globalThis.translations || {};

/** @type {General} */
globalThis.translations.general = {
    archive: 'Archief',
    back: 'Terug',
    newsroomTitle: 'PressPage Newsroom Test',
    websiteURL: './',
    newsroomURL: './',
    close: 'Sluiten',
    medialib: 'Beeldbank',
    more: 'Meer',
    search: 'Zoeken',
    subscribe: 'Abonneren',
    viewmore: 'Lees meer',
};
globalThis.translations.general = {
    ...globalThis.translations.general,
    // this is because we need the search translation to be already declared to consume it the following line
    copyright: `© ${new Date().getFullYear()}.`,
};
