let landmark = [
  {
    name: "swapnil",
    coordinates: [18.48842, 73.813704],
    area: "karve_nagar",
    landmark: "Karve Nagar- Hingane Home Colony Corner (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.6607, 73.732099],
    area: "Kiwale ",
    landmark: "Kiwale - Mukai Chowk (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.602724, 73.796233],
    area: "Rahatani ",
    landmark: "Rahatani - LIC office Rahatni Chowk (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.485969, 73.796651],
    area: "Warje ",
    landmark: "Warje - Vinayak Hospital (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.485187, 73.799754],
    area: "Warje Left ",
    landmark: "Warje Left - Mai Mangeshkar Hospital (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.58777, 73.74097],
    area: "Hinjewadi ",
    landmark: "Hinjewadi - Andhra Mess (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.453501, 73.827658],
    area: "Narhe ",
    landmark: "Narhe - Navale Bridge - Zeal College(L)",
  },
  {
    name: "swapnil",
    coordinates: [18.608349, 73.75079],
    area: "Tathawade ",
    landmark: "Tathawade - INDIRA CHOWK SHANI MANDIR (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.459443, 73.825255],
    area: "Vadgaon ",
    landmark: "Vadgaon Budruk- Hotel Deccan Pavilion(L)",
  },
  {
    name: "swapnil",
    coordinates: [18.602724, 73.796233],
    area: "Karve ",
    landmark: "Karve Nagar- Karve Nagar Chowk (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.595954, 73.740522],
    area: "Hinjewadi ",
    landmark: "Hinjewadi - hinjewadi-dange chowk road (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.489099, 73.814366],
    area: "Rahatani ",
    landmark: "Rahatani - LIC office Rahatni Chowk (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.547833, 73.791048],
    area: "Baner ",
    landmark: "Baner - Pashan Link Road (S)",
  },
  {
    name: "swapnil",
    coordinates: [18.4879002, 73.829],
    area: "Sinhgad Road ",
    landmark: "Sinhgad Road - Rajaram Briedge Venkys Corner (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.540762, 73.935112],
    area: "Kharadi ",
    landmark: "Kharadi - Kharadi Corporation Bank (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.5848, 73.8222],
    area: "Pimple Gurav",
    landmark: "Pimple Gurav - Ramkrishna Mangal Karyalaya (M)",
  },
  {
    name: "swapnil",
    coordinates: [18.5651002, 73.9182],
    area: "Viman nagar",
    landmark: "Viman nagar - Hotel Shri Krishna court (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.5848, 73.8222],
    area: "Pimple Gurav",
    landmark: "Pimple Gurav - Ramkrishna Mangal Karyalaya (M)",
  },
  {
    name: "swapnil",
    coordinates: [18.5296, 73.829798],
    area: "Sb Road",
    landmark: "Sb Road - Sb Road - Dominos Pizza (M)",
  },
  {
    name: "swapnil",
    coordinates: [18.5511002, 73.9372],
    area: "Kharadi ",
    landmark: "Kharadi - Kharadi Bye Pass Opp Reliance Fresh Mart (L)",
  },
  {
    name: "swapnil",
    coordinates: [18.6548004, 73.8031],
    area: "Chikhli ",
    landmark: "Chikhli - HDFC Corner (M)",
  },
  {
    name: "swapnil",
    coordinates: [18.611475, 73.768808],
    area: "Thergoan ",
    landmark: "Thergoan - Gavane Hospital (S)",
  },
];

//style mapbox://styles/mapbox/streets-v9      "mapbox://styles/mapbox/outdoors-v11"      "mapbox://styles/mapbox/satellite-v9"
// "mapbox://styles/mapbox/standard"
let sty = "mapbox://styles/mapbox/outdoors-v9";
const map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1IjoibWF5dXJ3YWtpa2FyIiwiYSI6ImNsNmdjdGxwbjBiNGMzY282bWh0dng2c2kifQ.y-m4-zQKOeOOnDG5I1u6ng",
  style: sty,
  center: [73.84411956982794, 18.531337495512236],
  zoom: 10,
  minZoom: 5,
  maxZoom: 14,
  crossSourceCollisions: false,
  failIfMajorPerformanceCaveat: false,
  attributionControl: false,
  preserveDrawingBuffer: true,
  hash: false,
  minPitch: 0,
  maxPitch: 60,
  container: "map",
});
const marker = new mapboxgl.Marker({
  draggable: false,
  color: "#000000",
});

// try to change to mapa
landmark.forEach((element) => {
  new mapboxgl.Marker({
    color: "#3333ff",
  })
    .setLngLat([element.coordinates[1], element.coordinates[0]])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `<div><label>Area:</label><h1>${element.area}</h1><label>Landmark:</label><h1>${element.landmark}</h1></div>`
      )
    )
    .addTo(map);
});

let count = 1;
function myFunctionOnClick_Search() {
  code = document.getElementById("GeoCode").value;
  let GeoCode = code.split(",");
  const [l, o] = GeoCode;
  console.log(l, o);
  ////// add marker user  position
  new mapboxgl.Marker({
    color: "red",
  })
    .setLngLat([o, l])
    .setPopup(new mapboxgl.Popup().setHTML(`<div><p>User location </p></div>`))
    .addTo(map);

  //   / fly the location
  map.flyTo({
    center: [o, l],
    zoom: 13,
    speed: 0.9,
    curve: 1,
    easing(t) {
      return t;
    },
  });

  // map.on("load", function () {
  map.addSource(`source_circle_500+${count}`, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [o, l],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: `circle500+${count}`,
    type: "circle",
    source: `source_circle_500+${count}`,
    paint: {
      "circle-radius": {
        stops: [
          [2, 1],
          [15.3, 1024],
        ],
        base: 2,
      },
      "circle-color": "blue",
      "circle-opacity": 0.2,
    },
  });
  //   });
  count++;
}
function Create_URL_fun() {
  code = document.getElementById("Create_URL").value;
  if (code == "") {
    alert("Please enter the address!");
    return false;
  } else {
    let GeoCode = code.split(",");
    const [l, o] = GeoCode;
    console.log(l, o);
    document.getElementById(
      "Create_URL"
    ).value = `https://www.google.com/maps/search/?api=1&query=${l},${o}`;
    navigator.clipboard.writeText(
      `https://www.google.com/maps/search/?api=1&query=${l},${o}`
    );
    alert("URL are Copied");
  }
}
