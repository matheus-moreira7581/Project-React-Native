import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container:{
        backgroundColor: colors.primary,
        height: '100%'
    },
    boxLogo: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerButton: {
        alignItems: 'center',
        marginRight: 20,
        justifyContent: 'center',
        backgroundColor: colors.purpleLight,
        height: '50%',
        width: 100,
        borderRadius: 8,

    },
    headerButtonText: {
        color: colors.secondary,
    },
    logo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: 70,
        height: 70,
        marginHorizontal: 10,
        marginTop: 10
    },
    TitleServices:{
        fontSize: 20,
        marginBottom: 30,
        marginTop: 40,
        color: colors.purpleLight,
        fontWeight: '300',
        marginLeft: 20
    },
    box: {
        height: 500,
        backgroundColor: '#121212',
        padding: 20
    },
    ContainerImage: {
        height: '60%',
        width: 250,
        backgroundColor: colors.secondary,
        borderRadius: 20
    },
    TextTitle: {
        textAlign: "left",
        color: colors.purpleLight,
        fontSize: 16,
        fontWeight: '200',
        marginTop: 20,
        marginBottom: 10,
    },
    TextDesc: {
        fontSize: 14,
        color: colors.purpleDark
    },
    ServicesContainer: {
        height: 550, 
        width: '100%', 
        justifyContent: 'center',
        backgroundColor: colors.secondary
    },
    HistoryContainer: {
        width: '100%', 
        height: 230, 
        justifyContent: 'center',
    },
    emptyHistoryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyHistoryTextDesc: {
        fontSize: 14,
        color: colors.purpleDark,
        textAlign: 'center',
        marginBottom: 10
    },
    ReloadBtn: {
        marginTop: 10,
        width: 120,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,
        color: colors.primary
    },
    ReloadTextBtn: {
        fontSize: 16,
        color: colors.primary,
        textAlign: 'center'
    },
    Close: {
        width: 30,
        height: 30,
        backgroundColor: '#c53030',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        top: 0
    },
    CloseText:{
        color: colors.primary
    },
    Types: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    TypesText: {
        width: '50%',
        fontSize: 20,
        color: colors.white
    },
    TypesDesc: {
        width: '50%',
        fontSize: 14,
        color: colors.secondary
    },
    Status: {
        textAlign: 'center',
        fontSize: 22,
        color: colors.white,
    },
    avaliationBtn: {
        alignItems: 'center',
        marginBottom: 20,
      
    },
    avaliationBtnTxt: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: colors.primary,
        borderBottomWidth: 3,
        borderBottomColor: colors.purpleDark,
       

    },
    blankView: {
        marginBottom: 46,
    }
})