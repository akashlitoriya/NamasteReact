export async function getRestaurantData(url){
    let datas =  null;
    await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.')
    })
    .then(data => datas = data);
    const json = JSON.parse(datas.contents);
    
    return json;
}