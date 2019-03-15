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



export default class Experience extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        iama :'',farea:'',role:'',
        industries:'',
         hidden: true ,
         value: 0,
         married:'',full:'', part:'',expt:'', next:'',company:'',yes:'',no:'',month:'', year:'',country:'',
         city:'',desc:'',skip:'',
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Experience Title').then(translated => {
      this.setState({ expt: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Company').then(translated => {
      this.setState({ company: translated });

   });
   translator.translate('Select Role').then(translated => {
      this.setState({ role: translated });

   });
   translator.translate('Select Month').then(translated => {
      this.setState({ month: translated });

   });
   translator.translate('Select Year').then(translated => {
      this.setState({year: translated });

   });
   translator.translate('Experience Description').then(translated => {
      this.setState({ desc: translated });

   });
   translator.translate('Country').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('City').then(translated => {
      this.setState({ city: translated });

   });

   translator.translate('Yes').then(translated => {
      this.setState({ yes: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('No').then(translated => {
      this.setState({ no: translated });
   });

     }

     back = () => {
   this.props.navigation.goBack()
  }


         buttonClickListenerNext=()=>{
           this.props.navigation.navigate('Skills')
         }
         buttonClickListenerSkip=()=>{
           this.props.navigation.navigate('Skills')
         }
   render() {
     var radio_props_one = [
       {label: this.state.yes, value: 0 },
       {label: this.state.no, value: 1 }
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
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Experience'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15,marginLeft:15, marginRight:15,fontFamily :'Poppins-Medium' }} text={'EXPERIENCE TITLE'}/>
      <TextInput style={{height:45,width:window.width-20,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.expt}placeholderTextColor={'black'}/>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'COMPANY'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.company}placeholderTextColor={'black'}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'row', justifyContent:'space-between',}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20 }} text={'COUNTRY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.country}placeholderTextColor={'black'}/>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20  }} text={'CITY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.city}placeholderTextColor={'black'}/>
      </View>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'FROM'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
      <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', marginLeft:15,}} placeholder={this.state.month}placeholderTextColor={'black'}/>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10,}} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
      <TextInput style={{marginLeft :5,height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', }} placeholder={this.state.year}placeholderTextColor={'black'}/>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      </View>

      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

            <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'TO'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.month}placeholderTextColor={'black'}/>
            <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
            </View>
            </View>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium',marginLeft:5 }} placeholder={this.state.year}placeholderTextColor={'black'}/>
            <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
            </View>
            </View>

            </View>

            <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15 ,marginRight:15,marginTop:20, fontFamily :'Poppins-Medium'}} text={'EXPERIENCE DESCRIPTION'}/>
        <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium' , marginLeft:15}} placeholder={this.state.desc}placeholderTextColor={'black'}/>
        </View>

        </View>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        </View>


      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'THIS NOTICE IS REQUIRED?'}/>
      <RadioForm style={{marginLeft:20, marginTop:12}}
        labelStyle={{paddingRight:20, marginTop:-3}}
          radio_props={radio_props_one}
          initial={0}
            buttonSize={9}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'grey'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <TouchableOpacity style={{alignSelf:'flex-end', width:100, height:35,marginRight:20, marginTop:20}}>
              <View style={{alignSelf:'flex-end', width:100, height:35,padding:8,borderRadius:4, backgroundColor:'#201344', flexDirection:'row'}}>
              <Image style={{width:15, height:15,resizeMode:'contain', marginTop:3}} source={require('./plus.png')}/>
              <PowerTranslator style={{color:'white', fontSize:13,marginLeft:5,fontFamily :'Poppins-Medium' }} text={'Add More'}/>
              </View>
              </TouchableOpacity>

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
              </View>
              <Text></Text>
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
