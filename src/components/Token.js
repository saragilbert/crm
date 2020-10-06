var myHeaders = new Headers();
myHeaders.append("Content-Type", "xml/json");
myHeaders.append("Cookie", ".AspNet.Cookies=Y9ikmBCZP1ivYNsZ5Fh6npop5XSqoCgEytUOcj4r497JoGpELEO2Mzlo2tY1hukJ950z4vskL6nK9gRsEHw9wk0YF_NUmNyywGAuglUTDgUgdwnK4oxBIfMd3gbXifvK0Dp2VQhbxWxCGgVzcVg66ab4afetBVaZoRWNUZlNfbqdmWEgYprzLV0r98pbTUu3TpTeQw8cMsSINZhHt3qy-LZbeD8I5aEWjYyrL9rC56N9y7n7i9vAc0ecVKdZ24z4pga-ji4bDQ8brke9TZlsB2ULo3lehNEj7Ev6wPyWbqRFrzAh6dKEkZik33zoxI60eSjnLVc4snkSIR0tLhoWpnWOsPQV2YOcgUDG9cfLj_A");

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "password");
urlencoded.append("username", "webropol-test");
urlencoded.append("password", "hello@123");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://staging-rest.webropol.com/Token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));