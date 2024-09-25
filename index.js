import axios from 'axios';
async function fetch(){
    const response =  await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=8847bddf')
    console.log(response);
}
fetch();