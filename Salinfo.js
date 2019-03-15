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



export default class Salinfo extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {

        slang:'',slanglevel:'',salary:'',period:'',
        currency:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',
         single:'',next:'',selectskill:'',sexp:'',

      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Select Currency').then(translated => {
      this.setState({ currency: translated });

   });
   translator.translate('Current Salary').then(translated => {
      this.setState({ salary: translated });

   });
   translator.translate('Select Period').then(translated => {
      this.setState({period: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Expected Salary').then(translated => {


      this.setState({ sexp: translated });

      //Do something with the translated text
   });

     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListenerNext=()=>{
         this.props.navigation.navigate('Education')
       }
       buttonClickListenerSkip=()=>{
         this.props.navigation.navigate('Education')
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
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Salary Information'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:15, marginLeft:15, marginTop:15,fontFamily :'Poppins-Medium' }} text={'CURRENT SALARY DETAILS'}/>

      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:5, marginLeft:5,fontFamily :'Poppins-Medium' }} text={'SALARY CURRENCY'}/>
      <View style={{flexDirection:'row'}}>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft:5, marginTop:5 }} placeholderTextColor={'black'} placeholder={this.state.currency}/>
      <Image style={{marginLeft:-30,width:20, height:20, resizeMode:'contain',marginTop:15 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column', marginLeft:20}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:5,fontFamily :'Poppins-Medium' }} text={'AMOUNT'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:5, marginTop:5 }} placeholder={this.state.salary}placeholderTextColor={'black'}/>
      </View>

      </View>

      </View>
      <View style={{marginTop:-10,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:12,fontFamily :'Poppins-Medium',marginLeft:15, marginTop:20 }} text={'SALARY PERIOD'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium',marginLeft:15}} placeholderTextColor={'black'}placeholder={this.state.period}/>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:15,fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20 }} text={'EXPECTED SALARY DETAILS'}/>
      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:10,fontFamily :'Poppins-Medium' }} text={'SALARY CURRENCY'}/>
      <View style={{flexDirection:'row'}}>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:5 }}placeholderTextColor={'black'} placeholder={this.state.currency}/>
      <Image style={{marginLeft:-30,width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column', marginLeft:20}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium',marginLeft:5, marginTop:10, }} text={'AMOUNT'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft:5 }} placeholder={this.state.sexp}placeholderTextColor={'black'}/>
      </View>

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      </View>

            <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15,fontFamily :'Poppins-Medium', marginTop:20 }} text={'SALARY PERIOD'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.period}placeholderTextColor={'black'}/>
            <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
            </View>

            <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:50}}>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerNext}
>
{this.state.next}
</Button>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerSkip}
>
{this.state.skip}
</Button>
</View>
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
