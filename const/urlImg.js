const url = (link, size = 32) => `
https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${link}&size=${size}"
`
export default url