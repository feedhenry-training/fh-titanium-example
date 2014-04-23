//FirstView Component Constructor
var $fh = require('feedhenry');

function FirstView() {
  
  //create object instance, a parasitic subclass of Observable
  var self = Ti.UI.createView();
  
  //label using localization-ready strings from <app dir>/i18n/en/strings.xml
  var label_title = Ti.UI.createLabel({
    top: 0,
    font: { fontSize:28 },
    text:'FeedHenry Titanium',
    height:'auto',
    width:'auto'
  }),
  label_welcome = Ti.UI.createLabel({
    top: 40,
    text:'Welcome to the FeedHenry Titanium API Tester App\n' + 
    'Use the buttons below to test various types of $fh.act API calls.',
    height:'auto',
    width:'auto'
  }),
  label_echo = Ti.UI.createLabel({
    top: 190,
    text:'Echo',
    color:'blue',
    height:'auto',
    width:'auto'
  }),
  label_timeout = Ti.UI.createLabel({
    top: 220,
    text:"Timeout",
    color:'blue',
    height:'auto',
    width:'auto'
  }),
  label_error = Ti.UI.createLabel({
    text:"Error",
    color:'blue',
    height:'auto',
    top: 250,
    width:'auto'
  }),
  label_nonjs = Ti.UI.createLabel({
    text:"NonJS",
    color:'blue',
    height:'auto',
    top: 280,
    width:'auto'
  }); 
  self.add(label_title);
  self.add(label_welcome);
  self.add(label_echo);
  self.add(label_timeout);
  self.add(label_error);
  self.add(label_nonjs);
  
  //Add behavior for UI
  label_echo.addEventListener('click', function(e) {
    $fh.act({
      act : 'echo',
      req : { echo : 'hi world!' }
      
    }, function succ(res){
    	alert(res.echo);
      //alert(JSON.stringify(res));
    }, function err(err){
      alert('err');
      //alert(JSON.stringify(err));
    });
  });
  
  label_timeout.addEventListener('click', function(e){
  	$fh.act({
      act : 'timeout'
    }, function succ(res){
      console.log(res);
      alert(JSON.stringify(res));
      console.log(arguments);
    }, function err(err){
      alert(JSON.stringify(err));
      console.log(arguments);
    });
  });
  
  label_error.addEventListener('click', function(e) {
    $fh.act({
      act : 'errors',
      req : { echo : 'hi world!' }
      
    }, function succ(res){
      alert(JSON.stringify(res));
      console.log(arguments);
    }, function err(err){
      alert(JSON.stringify(err));
      console.log(arguments);
    });
  });
  
  label_nonjs.addEventListener('click', function(e) {
    $fh.act({
      act : 'nonjs',
      req : { echo : 'hi world!' }
    }, function succ(res){
      alert(JSON.stringify(res));
    }, function err(err){
      alert(JSON.stringify(err));
    });
  });
  
  return self;
}

module.exports = FirstView;
