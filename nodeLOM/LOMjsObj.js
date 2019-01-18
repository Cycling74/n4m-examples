// file for the JS max object

outlets = 2;

// post(LiveAPI("live_set").info)

// call and set 

function call(path, order){
	
	outlet(0, [path, order])

	LiveAPI(path).call(order)

	// nothing to return- unidirectional
	
}

function set(path, prop, value){

	outlet(0, path, prop, value)

	LiveAPI(path).set(prop, value)

	// target syntax: 
	// var liveObject = new LiveAPI("live_set");
	// liveObject.set("tempo", 80);

	// nothing to return - unidirectional

}

// get

function get(path, prop){

	outlet(0, path, prop)

	outlet( 1, 'got' , path, prop, LiveAPI(path).get(prop) );

	// LiveAPI("live_set master_track mixer_device volume").get("value")

}

// count

function count(path, prop){

	outlet(0, path, prop)

	outlet(1, 'got', path, prop, LiveAPI(path).getcount(prop))

}


// observer 

observeCB = function(valChange){
		post('observer CB: ', this.path, valChange)
		outlet(1, 'observed', this.path, valChange) 
										// the cb argument is the property 
										// and the changed value

}	

var obs1 = new LiveAPI(observeCB);
var obs2 = new LiveAPI(observeCB);
var obs3 = new LiveAPI(observeCB);
var obs4 = new LiveAPI(observeCB);
var obs5 = new LiveAPI(observeCB);
var obs6 = new LiveAPI(observeCB);
var obs7 = new LiveAPI(observeCB);
var obs8 = new LiveAPI(observeCB);
var obs9 = new LiveAPI(observeCB);
var obs10 = new LiveAPI(observeCB);
var obs11 = new LiveAPI(observeCB);
var obs12 = new LiveAPI(observeCB);
var obs13 = new LiveAPI(observeCB);
var obs14 = new LiveAPI(observeCB);
var obs15 = new LiveAPI(observeCB);
var obs16 = new LiveAPI(observeCB);
var obs17 = new LiveAPI(observeCB);
var obs18 = new LiveAPI(observeCB);
var obs19 = new LiveAPI(observeCB);
var obs20 = new LiveAPI(observeCB);

var obsArr = [obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, 
obs11, obs12, obs13, obs14, obs15, obs16, obs17, obs18, obs19, obs20];


function obsSet(observer, INpath, INproperty){
	post(observer, INpath, INproperty)
	

	if (observer === 'reset'){

		obsReset()

	}
	else{
		obsArr[observer].path = INpath; // "live_set master_track mixer_device volume";
		obsArr[observer].property = INproperty; // "value";
		obsArr[observer].mode = 1; // prevents assignment from changing if the order of the tracks changes
	}
	
}

// reset the observers to a value that will never 
// change- otherwise the callback in the LOM.js lib
// will throw errors 

function obsReset(){

	for (var i = 0; i < obsArr.length; i++){

		obsSet(i, "live_set", "root_note")
	}

}
