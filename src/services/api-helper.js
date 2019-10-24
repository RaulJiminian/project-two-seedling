import axios from 'axios';
// Powered by Rijksmuseum API pages (http://rijksmuseum.github.io/)

export const fetchPaintings = async function () {
  const random = Math.ceil(Math.random() * 200)
  let response = await axios(`https://www.rijksmuseum.nl/api/nl/collection?toppieces=true&imgonly=true&ps=10&p=${random}&format=jsonp&key=C4kVdX9f`);
  return response.data.ArtObjects;
}

export const fetchProfile = async function (id) {
  let response = await axios(`https://www.rijksmuseum.nl/api/en/collection/${id}?q=Q&key=C4kVdX9f&format=json`);
  return response.data.artObject;
}

//API Key: C4kVdX9f
//First Endpoint; interpolate page number; retrieve ObjectNumber (will pass as ID later), Title, image url, Principal or Maker
//https://www.rijksmuseum.nl/api/nl/collection?toppieces=true&imgonly=true&ps=50&p=3&format=jsonp&key=C4kVdX9f

//Second Endpoint: interpolate ID (NG-2005-24); will retrieve webImage (url), dating(presentingDate), label (title, makerLine, description), physicalMedium, materials, colors (hex), principalMakers[name, placeOfBirth, dateOfBirth, dateOfDeath), extra button on documentation, iconClassDescription
//https://www.rijksmuseum.nl/api/en/collection/NG-2005-24?q=Q&key=C4kVdX9f&format=json

//Third Endpoint: Interpolate q= (Andr%C3%A9-Charles%20Boulle) for search parameter
//https://www.rijksmuseum.nl/api/nl/collection?q=Andr%C3%A9-Charles%20Boulle&key=fpGQTuED&format=json