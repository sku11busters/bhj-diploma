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
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(null, xhr.response);
    } else {
      callback(new Error('Error: ' + xhr.statusText), null);
    }
  };

  xhr.onerror = function() {
    callback(new Error('Network Error'), null);
  };

  if (method === 'GET') {
    xhr.send();
  } else {
    xhr.send(formData);
  }
}
