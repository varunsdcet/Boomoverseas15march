import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import CheckBox from 'react-native-checkbox';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Upload extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        saddress:'',
        country:'',state:'',city:'',code:'',caddress:'',same:'',
        iama :'',
         hidden: true ,
         value: 0,
         ecr:'',
         ecnr:'',next:'',number:'',
         issue:'',expiry:'',submit:'',
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Street Address').then(translated => {
      this.setState({ saddress: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('COUNTRY').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('STATE').then(translated => {
      this.setState({ state: translated });

   });
   translator.translate('CITY').then(translated => {
      this.setState({ city: translated });

   });
   translator.translate('ECR').then(translated => {
      this.setState({ ecr: translated });

   });
   translator.translate('ECNR').then(translated => {
      this.setState({ ecnr: translated });

   });

   translator.translate('Passport No.').then(translated => {
      this.setState({ number: translated });
   });
   translator.translate('Issue Date').then(translated => {
      this.setState({ issue: translated });
   });
   translator.translate('Submit').then(translated => {
      this.setState({ submit: translated });
   });
     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         this.props.navigation.navigate('DrawerNavigator')
     }

   render() {
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:8}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Upload Documents'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'PASSPORT SIZE PHOTO'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
      <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doc.png')}/>
            <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./docc.png')}/>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'PHOTO ID PROOF'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>

      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'TRADE CENTER CERTIFICATE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'EXPERIENCE CERTIFICATE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'INTERNATIONAL DRIVING LICENCE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>
{this.state.submit}
</Button>
<Text></Text>
      </View>
       </KeyboardAwareScrollView>
            </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },


  appBar: {
    backgroundColor:'#261650',
    height: APPBAR_HEIGHT,



  },
  content: {
    flex: 1
  },
});
