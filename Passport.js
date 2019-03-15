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



export default class Passport extends Component<Props> {

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
         issue:'',expiry:'',
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
   translator.translate('Expiry Date').then(translated => {
      this.setState({ expiry: translated });
   });
     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         this.props.navigation.navigate('Desired')
       }

   render() {
     var radio_props_one = [
       {label: this.state.ecr, value: 0 },
       {label: this.state.ecnr, value: 1 }
     ];
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
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Passport Details'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

            <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'PASSPORT NO.'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}
            placeholderTextColor={'black'}
             placeholder={this.state.number}/>
            </View>
            <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:10 }} text={'DATE OF ISSUE'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5 }}
      placeholderTextColor={'black'}
       placeholder={this.state.issue}/>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:10 }} text={'DATE OF EXPIRY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium' }}placeholderTextColor={'black'} placeholder={this.state.expiry}/>
      </View>

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      <View style={{flexDirection:'row', marginTop:12}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12,  marginLeft:5, marginTop:10 ,width:150}} text={'PASSPORT ISSUING COUNTRY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5 }} placeholderTextColor={'black'} placeholder={this.state.country}/>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'PLACE OF ISSUE'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',paddingLeft:10 }} placeholder={this.state.city} placeholderTextColor={'black'}/>
      </View>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:15 }} text={'ECR OR ECNR'}/>
      <RadioForm style={{marginLeft:5, marginTop:12}}
        labelStyle={{paddingRight:20}}
          radio_props={radio_props_one}
          initial={0}
            buttonSize={15}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'black', fontSize:12, marginLeft:15, marginTop:12 }} text={'UPLOAD PASSPORT'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
      <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doc.png')}/>
            <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./docc.png')}/>
                  <Image style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} source={require('./doccc.png')}/>
      </View>
      <View style={{marginTop:5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>
{this.state.next}
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
