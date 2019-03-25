
// Fetch an image and readResponseAsBlob() and append to the DOM.

function validateResponse(response) {
  if (!response.ok) { // is response !(2xx) ?
    throw Error(`${response.status} ${response.statusText}`);
  }
  return response;
}

function logError(error) {
  console.log('There was an error: \n', error);
  displayErrors(error);
}

function displayErrors(error){
  var p = document.createElement('p');
  p.appendChild(document.createTextNode(`Error: ${error.message}`));
  var container = document.getElementById('image-container');  
  document.body.insertBefore(p, container);
}

function readResponseAsBlob(response) {
  return response.blob();
}

function showImage(responseAsBlob) {
  var container = document.getElementById('image-container');
  var imgElem = document.createElement('img');
  container.appendChild(imgElem);
  var imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}

function fetchImage(pathToResource) {
  fetch(pathToResource)
  .then(validateResponse)
  .then(readResponseAsBlob)
  .then(showImage)
  .catch(logError);
}

fetchImage('../img/spacex-bfr.jpg');

// Make a HEAD request to check the size of a resource.

function checkSize(response) {
  var size = response.headers.get('content-length');
  // Do stuff based on response size
  console.log(`found size is: ${size} bytes`);
}

function headRequest(pathToResource) {
  fetch(pathToResource, {
    method: 'HEAD'
  })
  .then(validateResponse)
  .then(checkSize)
  // ...
  .catch(logError);
}

headRequest('examples/words.txt');

