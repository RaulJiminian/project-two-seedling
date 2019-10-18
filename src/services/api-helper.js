import axios from 'axios';

export const fetchPlants = async function () {
  let response = await axios('https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?token=YlBLdzlEYlgwWlhiZG8zRXUreUlIUT09&common_name=daisy');
  return response;
}

//API Key: YlBLdzlEYlgwWlhiZG8zRXUreUlIUT09
//Endpoint to plant by common name below
//https://trefle.io/api/plants?token=YlBLdzlEYlgwWlhiZG8zRXUreUlIUT09&common_name=daisy
//interpolate name (daisy) above with user value

//pass id as parameter to full information:
//https://trefle.io/api/plants/149575?token=YlBLdzlEYlgwWlhiZG8zRXUreUlIUT09
//interpolate id (149575) above with previous API call