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



export default class Desired extends Component<Props> {

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
         married:'',full:'', part:'',
         single:'',next:'',temporary:'', permanent:'', both:'',
         country:'', state:'',city:''
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Industries').then(translated => {
      this.setState({ industries: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Select Functional Area').then(translated => {
      this.setState({ farea: translated });

   });
   translator.translate('Select Role').then(translated => {
      this.setState({ role: translated });

   });
   translator.translate('Permanent').then(translated => {
      this.setState({ permanent: translated });

   });
   translator.translate('Temporary').then(translated => {
      this.setState({ temporary: translated });

   });
   translator.translate('Both').then(translated => {
      this.setState({ both: translated });

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

   translator.translate('Part Time').then(translated => {
      this.setState({ part: translated });

   });
   translator.translate('Full Time').then(translated => {
      this.setState({ full: translated });
   });

     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         this.props.navigation.navigate('Salinfo')
       }

   render() {
     var radio_props_one = [
       {label: this.state.permanent, value: 0 },
       {label: this.state.temporary, value: 1 },
       {label: this.state.both, value: 2 }
     ];
     var radio_props_two = [
       {label: this.state.full, value: 0 },
       {label: this.state.part, value: 1 },
       {label: this.state.both, value: 1 }
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
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Desired Job'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15, marginLeft:15 }} text={'DESIRED INDUSTRIES'}/>
      <TextInput style={{height:45,width:window.width-20,marginLeft:15,fontFamily :'Poppins-Medium' }} placeholderTextColor={'black'} placeholder={this.state.industries}/>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'FUNCTIONAL AREA'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}placeholderTextColor={'black'} placeholder={this.state.farea}/>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'ROLE'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}placeholderTextColor={'black'} placeholder={this.state.role}/>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'DESIRED JOB TYPE'}/>
      <RadioForm style={{marginLeft:15, marginTop:12}}
        labelStyle={{paddingRight:20}}
          radio_props={radio_props_one}
          initial={0}
            buttonSize={8}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'EMPLOYMENT TYPE'}/>
        <RadioForm style={{marginLeft:15, marginTop:12}}
          labelStyle={{paddingRight:20}}
            radio_props={radio_props_two}
            initial={0}
              buttonSize={8}
            formHorizontal={true}
            buttonColor={'#201344'}
            labelHorizontal={true}
            animation={true}
            labelColor={'black'}
            selectedButtonColor={'#201344'}
            onPress={(value) => {this.setState({value:value})}}
          />
          <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20 }} text={'PREFERRED JOB LOCATION'}/>
        <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5}} text={'COUNTRY'}/>
        <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5 }} placeholder={this.state.country}placeholderTextColor={'black'}/>
        </View>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:5}} text={'STATE'}/>
        <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5 }} placeholder={this.state.state}placeholderTextColor={'black'}/>
        </View>

        </View>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:20 }} text={'CITY'}/>
        <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5}} placeholder={this.state.city}placeholderTextColor={'black'}/>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

        </View>
        </View>
        </View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

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
