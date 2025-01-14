//get geo location
export async function getLocation() {
    console.log('Getting Geolocation...');
    if(navigator.geolocation) {
        return new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }),
                reject => reject(error)
            )
        });
    }
}