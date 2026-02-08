async function getData() {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const result  = await response.json();
    const data = Object.entries(result);

    console.log(data)
    
}
// https://api.spacexdata.com/v4/launches
