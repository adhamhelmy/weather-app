// const { response } = require("express");

/* Global Variables */

//const zipcode = 72427;
const api = '17cfcd372447fbdd2d633f86a110024a&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='



document.getElementById('generate').addEventListener('click', ()=>{
    let zipcode = document.getElementById('zip').value;
    getWeather(baseURL,zipcode,api)
      .then((data) => {
      postData('/postData',{currentDate: newDate, temper: data.main.temp, contentOfFeelings: document.getElementById('feelings').value});
      }).then(() => {
      updateUI();
      });
      }
)
const getWeather = async (url,zip,api)=>{
    const res = await fetch(url + zip +',us&appid='+ api)
    try {
      const data = await res.json();
      console.log(data);
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
      } 
    
}
const postData = async (url,data)=>{
  console.log(data)
  const res2 = await fetch ('/postData', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
const updateUI = async () => {

  const request = await fetch('getData');
  try {
  const allData = await request.json();
  document.getElementById('date').innerHTML = allData.currentDate;
  document.getElementById('temp').innerHTML = allData.temper;
  document.getElementById('content').innerHTML = allData.contentOfFeelings;
  } catch (error) {
  console.log("error", error);
  }
}