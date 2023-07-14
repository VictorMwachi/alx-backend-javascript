export default getFullResponseFromAPI(success) {
  if(success) {
    return new Promise({status: 200, body: 'Success'});
  }
  else {
    return new Promise('The fake API is not working currently');
  }
}
