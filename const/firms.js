const url = (link, size = 32) => `
https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${link}&size=${size}"
`

const firms = [
    {
        name: "backblaze",
        radio: null,
        min: 7,
        max: null,
        imgSrc: url("backblaze.com"),
        storagePrice: 0.01,
        transferPrice: 0.005
    },
    {
        name: "bunny",
        radio: [{ "HDD": 0.01 }, { "SSD": 0.02 }],
        min: null,
        max: 10,
        imgSrc: url("bunny.net"),
        storagePrice: null,
        transferPrice: 0.01
    },
    {
        name: "scaleway",
        radio: [{ "Multi": 0.06 }, { "Single": 0.03 }],
        min: null,
        max: null,
        imgSrc: url("scaleway.com"),
        storagePrice: null,
        transferPrice: 0.02
    },
    {
        name: "vultr",
        radio: null,
        min: 5,
        max: null,
        imgSrc: url("vultr.com"),
        storagePrice: 0.01,
        transferPrice: 0.01
    },
]

export default firms