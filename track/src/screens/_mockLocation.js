
import * as Location from "expo-location";
const tenMeeterWithDegrees = 0.0001;
const getLocation = (increment) => {
  return {
    timesstamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 97.4977 + increment * tenMeeterWithDegrees,
      latitude: 27.2046 + increment * tenMeeterWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
