
import {
    MapContainer,
    TileLayer,
    Polygon
  } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import { statesData } from './data';
  const center = [40.63463151377654, -97.89969605983609];

const Location = () => {
    return (
       <div className='mt-14'>
        <div className='text-center py-6'>
            <h1 className='text-4xl font-bold'>Find Our Location With map</h1>
        </div>
        <div>
        <MapContainer
        center={center}
        zoom={10}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=Mcu0KFlhADUpzaQu7V8X"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {
          statesData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
  
            return (<Polygon key={''}
              pathOptions={{
                
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: 'white',
                
            }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#BD0026",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  })
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: 'white',
                    fillColor: '#FD8D3C'
                  });
                },
                click: () => {
  
                }
              }}
            />)
          })
        }
      </MapContainer>
        </div>
       </div>
    );
};

export default Location;