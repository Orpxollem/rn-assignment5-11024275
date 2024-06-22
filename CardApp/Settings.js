import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings </Text>

        <ScrollView>
            <View style={{marginTop: 80}}>
                <TouchableOpacity>
                <View style={styles.colALign}>
                    <View style={styles.rowAlign}>
                        <Text style={{fontSize: 25}}>Language</Text>
                        <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                    </View>
                    <View style={styles.divisor} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.colALign}>
                    <View style={styles.rowAlign}>
                        <Text style={{fontSize: 25}}>My Profile</Text>
                        <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                    </View>
                    <View style={styles.divisor} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.colALign}>
                    <View style={styles.rowAlign}>
                        <Text style={{fontSize: 25}}>Contact Us</Text>
                        <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                    </View>
                    <View style={styles.divisor} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.colALign}>
                    <View style={styles.rowAlign}>
                        <Text style={{fontSize: 25}}>Change  Password</Text>
                        <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                    </View>
                    <View style={styles.divisor} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.colALign}>
                    <View style={styles.rowAlign}>
                        <Text style={{fontSize: 25}}>Privacy Policy</Text>
                        <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                    </View>
                    <View style={styles.divisor} />
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.rowAlign, {marginTop: 40}]}>
                <Text style={{fontWeight: 'bold', fontSize:24}}>
                    Theme
                </Text>
                <Switch/>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  colALign: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  divisor: {
    flex: 1,
    height: 2,
    backgroundColor: '#AFB0B6',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  iconStyle: {
    color: '#7e848d',
    marginTop: 10,
  },
});
