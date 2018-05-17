function isLatLng(latlng) {
  return (
    Array.isArray(latlng) && 
    latlng.length === 2 && 
    isFinite(latlng[0]) && 
    isFinite(latlng[1])
  ) || (latlng.lat && latlng.lng);
}

export function geocode(address) {
  let url = 'https://nominatim.openstreetmap.org/?format=json'+
    '&addressdetails=1&q='+address+'&format=json&limit=1'; 
  return fetch(url).then( function(response) {
    return response.json();
  })
}

export function resolveLatLng(latlng) {
  return new Promise( function(resolve, reject) {
    if (typeof latlng === 'string') { // we need to resolve it to lat/lng
      geocode(latlng).then( function(json) {
        if (json[0]) {
          resolve([json[0].lat, json[0].lon]);
        } else {
          reject(`Invalid address, "${latlng}"`);
        }
      })
    } else if (isLatLng(latlng)) {
      resolve(latlng);
    } else {
      console.error('Invalid latlng', latlng);
      throw "Invalid latlng";
    }
  });
}