(function() {
  var $fh = require('feedhenry-titanium');
  var uiwindow = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
  }),
  view = Ti.UI.createView();
  
  
  //label using localization-ready strings from <app dir>/i18n/en/strings.xml
  var label_title = Ti.UI.createLabel({
    top: 30,
    font: { fontSize:18 },
    text:'FeedHenry Quickstart - Titanium',
    height:'auto',
    width:'auto'
  }),
  label_welcome = Ti.UI.createLabel({
    top: 70,
    font: { fontSize:12 },
    text:'This is a basic Titanium app integrated with a cloud app.\n' + 
    'Use the button below to send your name to the cloud, and display the response.',
    height:'auto',
    width:'90%'
  }),
  textField = Ti.UI.createTextField({
    hintText : 'Enter Your Name Here',
    width: '80%',
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 170
  }),
  button = Titanium.UI.createButton({
    title: 'Say Hello From The Cloud',
    width:'90%',
    top: 220
  }),
  output= Ti.UI.createLabel({
    top: 260,
    font: { fontSize:10 },
    height:100,
    textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
    width:'100%'
  });
  
  
  view.add(label_title);
  view.add(label_welcome);
  view.add(textField);
  view.add(button);
  view.add(output);
  
  button.addEventListener('click',function(e){
  	var textFieldValue = textField.getValue();
  	output.setText('Loading...');
    $fh.cloud({
      path: 'hello',
      data: { 
      	hello : textFieldValue 
      }
    }, function succ(res){
      output.setText(JSON.stringify(res));
      console.log(arguments);
    }, function err(msg, err){
      console.log(arguments);
      output.setText(msg);
    });
  });
  uiwindow.add(view);
  uiwindow.open();
})();
