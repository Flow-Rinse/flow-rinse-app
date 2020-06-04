

export async function getGeolocation(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            if(position){
                console.log('position -> ', position);

                resolve({ lat: position.coords.latitude, lon: position.coords.longitude })
            } else {
                reject(null)
            }
        });
    })
}
