
function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function logError(error) {
  console.log('There was an error: \n', error);
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
