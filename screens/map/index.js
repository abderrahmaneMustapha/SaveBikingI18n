import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from './config';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Dialog,
} from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import image from '../../assets/marker.png';

const MapScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const { t } = useTranslation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={12}
            centerCoordinate={[1.3380119810405802, 35.370991577499694]}
          />

          <MapboxGL.ShapeSource
            id="routeSource"
            shape={{
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    coordinates: [
                      [1.3173501266634275, 35.36720296802159],
                      [1.3200430486012067, 35.36424680297664],
                      [1.3213549849299966, 35.36255751720503],
                      [1.3222871502169937, 35.36120606313703],
                      [1.3228740691012888, 35.35996721036899],
                      [1.3238407590273482, 35.35833414813145],
                    ],
                    type: 'LineString',
                  },
                },
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    coordinates: [
                      [1.3071124700856274, 35.38444440043983],
                      [1.3088192734295205, 35.384335312088595],
                      [1.3098011758731332, 35.3837635018815],
                      [1.3108765928347168, 35.38288671835761],
                      [1.3116247089808155, 35.38197180365145],
                      [1.3125598541641068, 35.381133122722886],
                      [1.3144769017910676, 35.381056878569595],
                      [1.315271775197516, 35.38147622052021],
                      [1.315786105048801, 35.38300108196633],
                      [1.316066648603936, 35.384411553143565],
                      [1.316487463935914, 35.38494523850967],
                      [1.3172355800834339, 35.385059599200105],
                      [1.3177966671936758, 35.384716516642314],
                      [1.3181707252667252, 35.383496655730525],
                      [1.3197604720782294, 35.38414470913676],
                      [1.3231269947397664, 35.384907118243106],
                      [1.32499728510777, 35.38597447888688],
                      [1.3258389157731472, 35.387880444909044],
                      [1.3267273036975098, 35.38860470018864],
                      [1.3280365069538789, 35.38837598869759],
                      [1.3285975940640924, 35.38765173136434],
                      [1.3303701882655332, 35.385807969326095],
                      [1.3302314084103557, 35.385148775348895],
                      [1.328501389820616, 35.383318986869455],
                      [1.3278935454500527, 35.381565400630706],
                      [1.3282208462655092, 35.38091732650477],
                      [1.3296235640397924, 35.3801548796923],
                      [1.3300668326426148, 35.37999998976858],
                      [1.3312421324652064, 35.38094410682214],
                    ],
                    type: 'LineString',
                  },
                },
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    coordinates: [
                      [1.3202249900960794, 35.37295218040056],
                      [1.320446575840947, 35.373054192943115],
                      [1.3205810888328529, 35.372854771038845],
                      [1.322831124333021, 35.369584181494304],
                      [1.323931685174216, 35.36810838428285],
                      [1.324073319328761, 35.36794703670573],
                      [1.3265801523567973, 35.36896414511223],
                      [1.3266628477910274, 35.36895632608737],
                      [1.3273000400563717, 35.36794424286042],
                      [1.3279269829737643, 35.36683069779856],
                      [1.3291681226914136, 35.36775694795084],
                      [1.3295670604587144, 35.36739096745339],
                      [1.3299770847795855, 35.367621400589385],
                      [1.3301654720580132, 35.367291565833696],
                      [1.3300657376162235, 35.36718312671559],
                      [1.3303649419338797, 35.366360789274026],
                      [1.3303594011312612, 35.36552037260847],
                      [1.3313124191299437, 35.36547970706394],
                      [1.3313789087573866, 35.36551133582212],
                      [1.3317556833142135, 35.365592666858845],
                      [1.3317556833142135, 35.36562881396026],
                      [1.3312403886998823, 35.36646922949684],
                    ],
                    type: 'LineString',
                  },
                },
              ],
            }}
          >
            <MapboxGL.LineLayer
              sourceID="routeSource"
              style={{ lineColor: 'red', lineWidth: 3.2 }}
              id="roads"
            />
          </MapboxGL.ShapeSource>

          <MapboxGL.MarkerView
            key={'ayn-jnan'}
            id={'ayn-jnan'}
            title={t('Ayn Jnan')}
            coordinate={[1.315681676524889, 35.369123974476054]}
          >
            <Button icon={image} onPress={showModal} />
          </MapboxGL.MarkerView>

          <MapboxGL.MarkerView
            key={'chawchawa-horses-park'}
            id={'chawchawa-horses-park'}
            title={t('Chawchawa Horses Park')}
            coordinate={[1.3707519230941045, 35.39793961027115]}
          >
            <Button icon={image} onPress={showModal} />
          </MapboxGL.MarkerView>

          <MapboxGL.MarkerView
            key={'tiaret-park'}
            id={'tiaret-park'}
            title={t('Tiaret Park')}
            coordinate={[1.3070319451297792, 35.38560285583472]}
          >
            <Button icon={image} onPress={showModal} />
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
      </View>
      {visible && (
        <View style={{ minHeight: 100, alignContent: 'center' }}>
          <Text>{t('Name of this place')}</Text>
          <Text>{t('Description about this place')}</Text>
        </View>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
