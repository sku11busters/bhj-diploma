function createRequest({ url, data, method, callback }) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  let queryUrl = url;
  const formData = new FormData();

  if (method === 'GET' && data) {
    queryUrl += '?' + new URLSearchParams(data).toString();
  } else {
    for (const key in data) {
      formData.append(key, data[key]);
    }
  }

  xhr.open(method, queryUrl);

  xhr.onload = function() {
    callback(null, xhr.response);
  };

  xhr.onerror = function() {
    callback(new Error('Network Error'), null);
  };

  xhr.send(method === 'GET' ? null : formData);
}

