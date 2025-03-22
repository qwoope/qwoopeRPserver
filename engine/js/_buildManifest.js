self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "engine/pages/index.js"],
        "/_error": ["engine/pages/_error.js"],
        "/change_news": [s, "engine/pages/change_news.js"],
        "/maps": [s, "engine/pages/maps.js.js"],
        "/policy": [s, "engine/pages/_policy.js"],
        "/profile": [s, "engine/pages/profile.js"],
        "/shop": [s, "engine/pages/shop.js"],
        "/terms": [s, "engine/pages/_terms.js"],
        sortedPages: ["/", "/_app", "/_error", "/change_news", "/maps", "/policy", "/profile", "/shop", "/terms"]
    }
}("static/css/d02d3479203bfc6f.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();