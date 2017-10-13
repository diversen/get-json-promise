function getJSONPromise(url) {

    var promise = new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();

        request.open('get', url, true);
        request.responseType = 'text';
        request.onload = function () {
            if (request.status === 200) {
                try {
                    JSON.parse(request.responseText);
                } catch (error) {
                    reject('JSON could not be parsed. File ' + url +  'Error ' + error);
                }

                resolve(JSON.parse(request.responseText));
            } else {
                reject('JSON could not be loaded ' + url);
            }
        };
        request.send();
    });

    return promise;
}

module.exports = getJSONPromise;
