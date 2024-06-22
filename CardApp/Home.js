import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView} from "react-native";

const transactionsData= [
    {
        id: '1',
        title: 'Apple Store',
        category: 'Entertainment',
        amount: '-$5,99',
        logo: require('./assets/apple.png'),
        fontcolor: '#1e1e2d'
    },
    {
        id: '2',
        title: 'Spotify',
        category: 'Music',
        amount: '-$12,99',
        logo: require('./assets/spotify.png'),
        fontcolor: '#1e1e2d'
    },
    {
        id: '3',
        title: 'Money Transfer',
        category: 'Transaction',
        amount: '$300',
        logo: require('./assets/moneyTransfer.png'),
        fontcolor: '#0066ff'
    },
    {
        id: '4',
        title: 'Grocery',
        category: 'Shopping',
        amount: '-$88',
        logo: require('./assets/grocery.png'),
        fontcolor: '#1e1e2d'
    }
]
const Transaction = ({title, category, amount, logo, fontcolor}) => {
    return(
        <View style={{marginBottom: 35, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.iconCircle}>
                <Image source={logo} style={{marginStart: 20}}/>
            </TouchableOpacity>

        <View style={styles.transactionRowAlign}>
            <View style={{marginStart: 20, flexDirection: 'column', marginTop: 7}}>
                    <Text style={{fontWeight: 'bold', fontSize: 23}}>{title}</Text>
                    <Text style={{color: '#7e848d'}}>{category}</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 13,  color: fontcolor}}>
                        {amount}
                    </Text>
                </View>
        </View>
            
        </View>
    )
}


export default function Home() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={require('./assets/profile.png')} style={{height: 60, width: 60}}/>
            <View style={{marginLeft: 20}}>
                <Text style={{fontWeight: "bold", marginBottom: 10, color: '#7e848d', fontSize: 15}}>Welcome back,</Text>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Melvin King</Text>
            </View>
            <View style={{marginLeft: 90, marginTop:2}}>
                <TouchableOpacity style={styles.iconCircle}>
                    <Image source={require('./assets/search.png')} style={{height: 30, marginHorizontal: 18}}/>
                </TouchableOpacity>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Image source={require('./assets/Card.png')} style={{height: 220, width: 350, borderRadius: 25, marginTop:20, marginBottom: 40}}/>
        </View>

        <View style={styles.rowAlign}>
            <View style={styles.colAlign}>
                <TouchableOpacity style={styles.iconCircle}>
                    <Image source={require('./assets/send.png')} style={{marginHorizontal: 20}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginHorizontal: 7, marginTop: 7}}>Sent</Text>
            </View>
            <View style={styles.colAlign}>
                <TouchableOpacity style={styles.iconCircle}>
                    <Image source={require('./assets/recieve.png')} style={{marginHorizontal: 20}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: 7}}>Receive</Text>
            </View>
            <View style={styles.colAlign}>
                <TouchableOpacity style={styles.iconCircle}>
                    <Image source={require('./assets/loan.png')} style={{marginHorizontal: 16}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginHorizontal: 7, marginTop: 7}}>Loan</Text>
            </View>
            <View style={styles.colAlign}>
                <TouchableOpacity style={styles.iconCircle}>
                    <Image source={require('./assets/topUp.png')} style={{marginHorizontal: 16}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: 7}}>Topup</Text>
            </View>
        </View>

        <View style={[styles.rowAlign, {marginTop: 35, marginBottom: 15}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Transaction</Text>
            <Text style={{fontSize: 18, color: '#0066ff', fontWeight: 'bold'}}>Sell All</Text>
        </View>

        <View>
        <FlatList
            data={transactionsData}
            vertical
            renderItem={({item}) => (
                <Transaction
                    title={item.title}
                    category={item.category}
                    amount={item.amount}
                    logo={item.logo}
                    fontcolor={item.fontcolor}
                />
            )}
        />
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 70,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    iconCircle: {
        height: 55,
        width: 55,
        borderRadius: 30,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
    },
    rowAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colAlign: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    transactionRowAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '84%',
    }
});