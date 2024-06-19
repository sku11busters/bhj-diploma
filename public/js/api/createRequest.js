const createRequest = ({ url, data, method, callback }) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  try{
      xhr.open(method, url);
      xhr.send(data);
  } catch(error){
      console.log(error);
  }
  xhr.onload = function(){
     callback(null, xhr.response);
  }      
}
  