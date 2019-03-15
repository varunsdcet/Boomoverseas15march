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
import Popover from 'react-native-popover-view';
var arrayholders = [];
var arrayholder = [];
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Skills extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        oneline:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',
         single:'',next:'',selectskill:'Select Skill',sexp:'Select Experience',
         moviesList: [],
         isVisible: false,
         isVisibles: false,
         moviesLists:[],
         languageid:'',
         llid :'',

      }
    }
    _renderItems = ({item,index}) => {
  var commonHtml = `${item.job_experience}`;
      return (
  <TouchableOpacity onPress={() =>  this.resPresss(item)}>
   <View style = {{height :40 ,width :300,borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   marginBottom: 0.4,}}>
{GLOBAL.language == "en" && (  <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{commonHtml} </Text>)}

{GLOBAL.language != "en" && (  <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={commonHtml} />)}

       </View>

  </TouchableOpacity>


      )
    }

    _renderItem = ({item,index}) => {

      return (
  <TouchableOpacity onPress={() =>  this.resPress(item)}>
   <View style = {{height :40 ,width :300,borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   marginBottom: 0.4,}}>
{GLOBAL.language == "en" && (<Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.job_skill} </Text>)}

{GLOBAL.language != "en" && (<PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.job_skill} />)}


       </View>

  </TouchableOpacity>


      )
    }
    showLoading() {
        this.setState({loading: true})
     }

     hideLoading() {
        this.setState({loading: false})
     }
    resPress = (item) => {
  this.closePopover();
      this.closePopovers();
      //this.state.selectskill
      this.setState({selectskill :item.job_skill})
  this.setState({languageid:item.job_skill_id})
   //alert(this.state.inccode)
  }
  resPresss = (item) => {

    this.closePopover();
        this.closePopovers();
    this.setState({sexp :item.job_experience})
   this.setState({llid:item.job_experience_id});
  //alert(this.state.inccode)
  }
    showPopovers() {
        this.setState({isVisibles: true});
      }

      closePopovers() {
        this.setState({isVisibles: false});
      }
    showPopover() {
        this.setState({isVisible: true});
      }


      add() {
        if (this.state.languageid == ''){
                 alert('Please Select Language')
           }
          else if (this.state.llid == '') {
     alert('Please enter Language Level')
   }


                   else {
                 this.showLoading()
                 const url = GLOBAL.BASE_URL + 'add_skill';

               fetch(url, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({

                   job_experience_id : this.state.llid,
                      job_skill_id : this.state.languageid,
                         user_id : GLOBAL.user_id,
                          _token : GLOBAL.token,



           }),
         }).then((response) => response.json())
             .then((responseJson) => {

            alert(JSON.stringify(responseJson))
  this.setState({ language_level_id: '' });
  this.setState({ language_id: '' });

  const translator = TranslatorFactory.createTranslator();
translator.translate('Select Skill').then(translated => {
  this.setState({ selectskill: translated });

});

translator.translate('Select Experience').then(translated => {
  this.setState({ sexp: translated });

});

         this.hideLoading()



             })
             .catch((error) => {
                 this.hideLoading()
               console.error(error);
             });
             }

        }

      closePopover() {
        this.setState({isVisible: false});
      }

      SearchFilterFunctions(text){
          const newData = arrayholders.filter(function(item){
                 const itemData = item.job_experience.toUpperCase()
                 const textData = text.toUpperCase()
                 return itemData.indexOf(textData) > -1
             })
             this.setState({
                 moviesLists: newData,
                 text: text


             })

         }

      SearchFilterFunction(text){
          const newData = arrayholder.filter(function(item){
                 const itemData = item.job_skill.toUpperCase()
                 const textData = text.toUpperCase()
                 return itemData.indexOf(textData) > -1
             })
             this.setState({
                 moviesList: newData,
                 text: text


             })

         }

      getMoviesFromApiAsync = () => {


      var url= GLOBAL.BASE_URL + 'get_job_skills';

      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {


      //alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
      this.setState({ moviesList: responseJson.data})
      arrayholder =  responseJson.data;
      }else{
      alert('Unable to process your request Please try again')
      }


      })
      .catch((error) => {


      console.error(error);
      this.hideLoading();
       alert('Unable to process your request Please try again after some time')

      });





      var url= GLOBAL.BASE_URL + 'get_job_experiences';

      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {


      //alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
      this.setState({ moviesLists: responseJson.data})
      arrayholders =  responseJson.data;
      }else{
      alert('Unable to process your request Please try again')
      }


      })
      .catch((error) => {


      console.error(error);
      this.hideLoading();
       alert('Unable to process your request Please try again after some time')

      });




      }
    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Select Skill').then(translated => {
      this.setState({ selectskill: translated });

   });
     this.getMoviesFromApiAsync()
   translator.translate('Select Experience').then(translated => {
      this.setState({ sexp: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Register Now').then(translated => {


      this.setState({ register: translated });

      //Do something with the translated text
   });

     }

     back = () => {
   this.props.navigation.goBack()
  }

         buttonClickListenerNext=()=>{
           this.props.navigation.navigate('Langu')
         }
         buttonClickListenerSkip=()=>{
           this.props.navigation.navigate('Langu')
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
                       {GLOBAL.language == "en" && (
                       <Text style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} >{'Skills'} </Text>
 )}
 {GLOBAL.language != "en" && (
 <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Skills'} />
)}
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <TouchableOpacity
                onPress={() => this.showPopover()}
              >
      <View>
         {GLOBAL.language == "en" && (
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:15 }} text={'JOB SKILL'}/>
)}
{GLOBAL.language != "en" && (
<Text style={{color:'grey', fontSize:12, marginLeft:15, marginTop:15 }}>{'JOB SKILL'}</Text>
)}
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.selectskill}
      placeholderTextColor={'black'}
        editable = {false}
     />
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity
                onPress={() => this.showPopovers()}
              >
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

{GLOBAL.language == "en" && (
      <Text style={{color:'grey', fontSize:12, marginTop:20, marginLeft:15 }} >{'JOB EXPERIENCE'}</Text>
)}
{GLOBAL.language != "en" && (
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:20, marginLeft:15 }} text={'JOB EXPERIENCE'}/>
)}
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.sexp}
      placeholderTextColor={'black'}
      editable = {false}
     />
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>

      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
  </TouchableOpacity>
<TouchableOpacity style={{alignSelf:'flex-end', width:100, height:35,marginRight:20, marginTop:20}}
  onPress={() => this.add()}
>
      <View style={{alignSelf:'flex-end', width:100, height:35,padding:8,borderRadius:4, backgroundColor:'#201344', flexDirection:'row'}}>
      <Image style={{width:15, height:15,resizeMode:'contain', marginTop:3}} source={require('./plus.png')}/>

{GLOBAL.language == "en" && (

      <Text style={{color:'white', fontSize:12,marginLeft:7,marginTop:2,fontFamily :'Poppins-Medium' }} >{'Add More'}</Text>

)}
{GLOBAL.language != "en" && (

      <PowerTranslator style={{color:'white', fontSize:12,marginLeft:7,marginTop:2,fontFamily :'Poppins-Medium' }} text={'Add More'}/>

)}
      </View>
      </TouchableOpacity>

      <Popover
        isVisible={this.state.isVisible}

        onClose={() => this.closePopover()}>
       <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
        Please Select Skill
       </Text>

       <TextInput
    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
    onChangeText={(text) => this.SearchFilterFunction(text)}
    value={this.state.text}
    multiline={false}

    underlineColorAndroid='transparent'
    placeholder="Search"
    />
        <FlatList style= {{marginTop :10,width:300,height:300}}
             data={this.state.moviesList}
             numColumns={1}
             keyExtractor={this._keyExtractor}
             renderItem={this._renderItem}
           />




      </Popover>

      <Popover
        isVisible={this.state.isVisibles}

        onClose={() => this.closePopovers()}>
       <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
        Please Select Experience
       </Text>

       <TextInput
    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
    onChangeText={(text) => this.SearchFilterFunctions(text)}
    value={this.state.text}
    multiline={false}

    underlineColorAndroid='transparent'
    placeholder="Search "
    />
        <FlatList style= {{marginTop :10,width:300,height:300}}
             data={this.state.moviesLists}
             numColumns={1}
             keyExtractor={this._keyExtractor}
             renderItem={this._renderItems}
           />




      </Popover>
      </View>
       </KeyboardAwareScrollView>
       <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:50}}>
{GLOBAL.language != "en" && (
       <Button
       containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:12, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

       style={{fontSize: 14, color: 'white'}}
       onPress={this.buttonClickListenerNext}
       >
       {this.state.next}
       </Button>
     )}


     {GLOBAL.language == "en" && (
            <Button
            containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:12, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

            style={{fontSize: 14, color: 'white'}}
            onPress={this.buttonClickListenerNext}
            >
            {'NEXT'}
            </Button>
          )}
          {GLOBAL.language != "en" && (
       <Button
       containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:12, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

       style={{fontSize: 14, color: 'white'}}
       onPress={this.buttonClickListenerSkip}
       >
       {this.state.skip}
       </Button>
     )}
     {GLOBAL.language == "en" && (
  <Button
  containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:12, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

  style={{fontSize: 14, color: 'white'}}
  onPress={this.buttonClickListenerSkip}
  >
  {'SKIP'}
  </Button>
)}
       </View>
       <Text></Text>

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
