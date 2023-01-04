import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import L from 'leaflet';
import 'leaflet.tilelayer.colorfilter';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import AppContext from 'context/Context';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import { markers } from 'data/dashboard/projectManagement';

const exampleCode = `
function LayerComponent() {
  const map = useMap();
  const { config } = useContext(AppContext);
  const { isDark } = config;
  const filter = isDark
    ? [
        'invert:98%',
        'grayscale:69%',
        'bright:89%',
        'contrast:111%',
        'hue:205deg',
        'saturate:1000%'
      ]
    : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];

  useEffect(() => {
    map.invalidateSize();
  }, [config]);

  useEffect(() => {
    if (map) {
      L.tileLayer
        .colorFilter(
          'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
          {
            attribution: null,
            transparent: true,
            filter: filter
          }
        )
        .addTo(map);
    }
  }, [isDark]);

  return (
    <>
      <TileLayer
        attribution={null}
        url={'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'}
      />
      <MarkerClusterGroup chunkedLoading={true} spiderfyOnMaxZoom={false}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.long]}
            icon={L.icon({
              iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII='
            })}
          >
            <Popup>
              <h6 className="mb-1">{marker.name}</h6>
              <p className="m-0 text-500">
                {marker.street} {marker.location}
              </p>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </>
  );
}

function LeafletMap() {
  const position = [10.737, 0];
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <div dir="ltr">
      <MapContainer
        zoom={isRTL ? 1.8 : 1.5}
        minZoom={isRTL ? 1.8 : 1.3}
        zoomSnap={0.5}
        center={position}
        radius={200}
        style={{ height: '300px', width: '100%' }}
      >
        <LayerComponent />
      </MapContainer>
    </div>
  );
}
render(<LeafletMap/>)
`;

const LeafletMapExample = () => {
  return (
    <>
      <PageHeader
        title="React Leaflet"
        description={`Falcon uses <code> React-Leaflet </code> that provides an abstraction of <strong>Leaflet</strong> as <strong>React components</strong>. For the beautiful animated marker Clustering functionality for leaflet map we use <a href="https://github.com/changey/react-leaflet-markercluster" target="_blank">@changey/react-leaflet-markercluster</a> and we apply CSS color filter on map tiles by <a href="https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter" target="_blank">Leaflet.TileLayer.ColorFilter</a> .  It has all the mapping features most developers ever need`}
        className="mb-3"
      >
        <Button
          href="https://react-leaflet.js.org/"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          React Leaflet Documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Example" />
        <FalconComponentCard.Body
          code={exampleCode}
          language="jsx"
          noInline
          scope={{
            L,
            MapContainer,
            TileLayer,
            Marker,
            Popup,
            useMap,
            MarkerClusterGroup,
            markers,
            AppContext
          }}
        />
      </FalconComponentCard>
    </>
  );
};

export default LeafletMapExample;
