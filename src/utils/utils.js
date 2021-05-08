export const buildURLQuery = function (params) {
    return Object.entries(params)
        .map(pair => pair.map(encodeURIComponent).join('='))
        .join('&');
}