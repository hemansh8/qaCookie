(function () {
    window.URLSearchParams =
        window.URLSearchParams ||
        function (string) {
            this.searchString = string;
            this.has = function (paramKey) {
                var hasParam = false;
                var allParamArray = this.searchString
                    .replace(/^\?/, '')
                    .split('&');
                for (var i = 0; i < allParamArray.length; i++) {
                    if (paramKey === allParamArray[i].split('=')[0]) {
                        hasParam = true;
                        break;
                    }
                }
                return hasParam;
            };
            this.get = function (paramKey) {
                var results = new RegExp(
                    '[\\?&]' + paramKey + '=([^&#]*)'
                ).exec(this.searchString);
                if (!this.has(paramKey) && results === null) {
                    return null;
                } else {
                    return results ? decodeURIComponent(results[1]) : '';
                }
            };
        };
    function getDomain() {
        var dom = window.location.hostname.split('.');
        if (dom.length > 2) {
            dom.shift();
        }
        return dom.join('.');
    }
    function init() {
        var params = new URLSearchParams(window.location.search);
        var cookieDomain = getDomain();
        var cookieName = '';
        var cookieValue = 'true';
        if (params.has('qaCookie')) {
            cookieName = params.get('qaCookie');
            // cookie value is either true or the value of the qaValue parameter if it exists
            if (params.has('qaValue')) {
                cookieValue = params.get('qaValue');
            }
            document.cookie =
                cookieName +
                '=' +
                cookieValue +
                '; path=/; domain=.' +
                cookieDomain +
                '';
        }
    }
    init();
})();
