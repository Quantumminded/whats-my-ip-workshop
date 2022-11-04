const getUserInfo = async () => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fkoGYDggzaRcwG50mgtDpG6iOt9Ac&ipAddress=8.8.8.8`)
    const json = await res.json();

    console.log(json);
    const ip = await json.ip;
    const country = await json.location.country;
    const city = await json.location.city;
    const lat = await json.location.lat;
    const lng = await json.location.lng;
    const timezone = await json.location.timezone;

    const userLocation = {
        ip: ip,
        country: country,
        city: city,
        lat: lat,
        lng: lng,
        timezone: timezone
    }

    return userLocation;
}

export { getUserInfo }
//Data from the API
// {
// 	"ip": "8.8.8.8",
// 	"location": {
// 		"country": "US",
// 		"region": "California",
// 		"city": "Mountain View",
// 		"lat": 37.38605,
// 		"lng": -122.08385,
// 		"postalCode": "94035",
// 		"timezone": "-07:00",
// 		"geonameId": 5375480
// 	},
// 	"domains": [
// 		"str3sser.net",
// 		"concours-emploi.ma",
// 		"cooperhomeau.duckdns.org",
// 		"000xs.net",
// 		"003hash.vip"
// 	],
// 	"as": {
// 		"asn": 15169,
// 		"name": "GOOGLE",
// 		"route": "8.8.8.0\/24",
// 		"domain": "https:\/\/about.google\/intl\/en\/",
// 		"type": "Content"
// 	},
// 	"isp": "Google LLC"
// }