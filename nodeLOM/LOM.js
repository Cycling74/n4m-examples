/*

external library communicating with the node max
object via web sockets

*/

const LOM = {

  path: 'live_set',

  getList : {}, // cache for get requests returned from Live

  observeList : {},

  currentTempo: null,

  currentTrackTime: null,

  status : function(x){
    this.listener(x)
  },

  listener : ()=>{}, // reset this for scraping loading message 

  // global methods

  outlet: function(data){ 

    this.socket.emit('fromClient', data)

  },

  call: function(path, order) {
    this.outlet(['call', path, order]);
  },

  Set: function(path, prop, value) {
    this.outlet(['set', path, prop, value]);
  },

  Get: function(path, prop, cb) {

    this.getList[path+prop] = cb;

    this.outlet(['get', path, prop]);
  },

  count: function(prop, cb, path) {

    if(path){
      this.getList[path+prop] = cb;

      this.outlet(['count', path, prop]);
    }
    else{
      this.getList[this.path+prop] = cb;

      this.outlet(['count', this.path, prop]);
    }
  },

  observe: function(obs, path, prop, cb){

    let entry = path + prop;
    entry = entry.split(' ').join('')

    this.observeList[entry] = cb;

    this.outlet(['obsSet', obs, path, prop]); 

  },

  // transport 

  play: function() {

    this.call(this.path, 'start_playing');
  },

  stop: function() {
    this.call(this.path, 'stop_playing');
  },

  clear: function() {
    this.call(this.path, 'stop_all_clips')
  },

  resume: function() {
    this.call(this.path, 'continue_playing');
  },

  bquant: {
    set: function(value) {
      LOM.Set('live_set', 'clip_trigger_quantization', value);
    },
  },

  tempo: {
    set: function(value) {
      LOM.Set('live_set', 'tempo', value);
    }, // LiveAPI("live_set").set("tempo", 80);
  },

  get: function(value, cb){
    LOM.Get(this.path, value, cb)
  },

};


LOM.track = function(num) {

  let trackPath = this.path + ' tracks ' + num;
  let trackProp;

  // https://medium.com/@jamischarles/how-to-chain-functions-in-javascript-6644d44793fd

  let obj = {

    fire() {
      LOM.call(trackPath, 'fire');
    },

    stop() {
      LOM.call(trackPath, 'stop_all_clips');
    },

    solo() {
      this.path += ' tracks ' + num;

      LOM.Set(trackPath, 'solo', true);

    },

    unsolo() {
      this.path += ' tracks ' + num;

      LOM.Set(trackPath, 'solo', false);
    },

    mute() {
      this.path += ' tracks ' + num;

      LOM.Set(trackPath, 'mute', true);
    },

    unmute() {
      this.path += ' tracks ' + num;

      LOM.Set(trackPath, 'mute', false);
    },

    vol(num){
      LOM.Set(trackPath + " mixer_device volume", "value", num * .0087)
      
      return this
    },

    pan(num){
      LOM.Set(trackPath + " mixer_device panning", "value", num)
      
      return this
    },

    clip(clipNum) {
      trackPath += ' clip_slots ' + clipNum;
      return this; 

    }, // "live_set tracks 0 clip_slots 0"

    dev(num) {
      trackPath += ' devices ' + num
      return this
    },

    knob(num) {
      trackPath += ' parameters ' + num
      return this

    },

    on() {
      trackPath += ' parameters 0 ' 

      LOM.Set(trackPath, 'value', 1)

    },

    off() {
      trackPath += ' parameters 0 ' 

      LOM.Set(trackPath, 'value', 0)
    },

    send(sendNum){
      trackPath += ' mixer_device sends ' + sendNum;
      return this; 
    },

    set(val){
      LOM.Set(trackPath, 'value', val)
    },

    get(value, cb){

      if(trackPath.includes("clip_slots")){
        trackPath += " clip "
      }
      
      LOM.Get(trackPath, value, cb)
    },

    count(value, cb){
      LOM.Get(trackPath, value, cb)
    }

  };

  return obj; 
};


LOM.scene = function(num) {

  let trackPath = this.path + ' scenes ' + num;

  let obj = {
  
    fire() {
      LOM.call(trackPath, 'fire');
    },

    get(value,cb) {
      LOM.Get(trackPath,value, cb)
    },
  
  };

  return obj;
};

 
LOM.connect = function(){

    const io = require('socket.io-client');

    socket = io.connect('http://localhost:8080'); 

    socket.on('fromServer', function(data){ 

      if (data.type === 'openMessage'){

        console.log(data.value) // "conncted to live..."
        // LOM.observeList = {live_settempo: ()=>{}}

        LOM.observe('reset', 'this', 'resetsTheObservers', ()=>{})

        obsOpen = true;

      }

      if (data.type == 'id'){

        LOM.sockID = data.id

      }

      // handle data returned from Live 

      if (data.type === 'got'){

        LOM.getList[data.path + data.prop](data.value) // retreive callback from cache

        LOM.getList[data.path + data.prop] = null; // reset the cache

      }

      if (obsOpen && data.type === 'observed' && !(data.prop === 'id')){

        let entry = (data.path + data.prop).replace('"', '').replace('"', '').split(' ').join('')

        LOM.observeList[entry](data.value);

      }
    
    });

    // socket.emit('fromClient', "Hello Mars")

    LOM.socket = socket;

};


LOM.scrape = function(){

  // async functions to scrape the Live session

  let cache = {};
  let sceneArr = [];

  function trackCountPromise(){
    return new Promise(resolve=>{
      LOM.count('tracks', (x)=>{resolve(x)})
    })
  }

  function trackNameGetPromise(num){
    return new Promise(resolve=>{

      LOM.track(num).get('name', (x)=>resolve( cache[num] = {name: x, clips: [], deviceParams: []} ))

    })
  }

  async function asyncTrackScrape(count){

    let list = [];

    for(let i =0; i < count;i++){
      list.push(i)
    }

    for (let j of list){

      await trackNameGetPromise(j)
    
    };
    
    return cache;
  }

  function sceneNameGetPromise(num){

    return new Promise(resolve=>{

      LOM.scene(num).get('name', (x)=>resolve( sceneArr[num] =  x ))

    })
  }

  function sceneCountPromise(){
    return new Promise(resolve=>{
      LOM.count('scenes', (x)=>{resolve(x)})
    })
  }

  function clipNameGetPromise(inputArr, trackNum, clipNum){
      return new Promise(resolve=>{

        LOM.track(trackNum).clip(clipNum).get('name', (x)=>resolve(inputArr[clipNum] = x))
      
      })
  }

  function deviceParamsGetPromise(inputArr, trackNum, devNum){
      return new Promise(resolve=>{

        LOM.track(trackNum).dev(0).knob(devNum).get('name', (x)=>resolve(inputArr[devNum] = x))
      
      })
  }

  async function asyncSceneScrape(trackArray, scenesNum){

    let scenes = [];

    let devices = [1,2,3,4,5,6]

    for(let i =0; i < scenesNum; i++){
      scenes.push(i)

      await sceneNameGetPromise(i)

    }

    for (let j of Object.keys(trackArray)){

      LOM.status(`processing track: ${j}`)

      for (let k of scenes){
          await clipNameGetPromise(trackArray[j].clips, j, k )
      }

      for (let L of devices){

          await deviceParamsGetPromise(trackArray[j].deviceParams, j, L)
      }

    
    };
    
    return trackArray;
  }

  async function theScrape(){

    let trackCount = await trackCountPromise();

    LOM.status(`tracks: ${trackCount}`)
    
    let sceneCount = await sceneCountPromise();
    
    LOM.status(`scenes: ${sceneCount}`)
    
    let trackList = await asyncTrackScrape(trackCount);
    let finalArray = await asyncSceneScrape(trackList, sceneCount)

    LOM.status(`scrapped ${trackCount} tracks`)
    
    cache['track count'] = trackCount;
    cache['scene count'] = sceneCount;
    cache['scene names'] = sceneArr;
    
    return finalArray 

  }

  return theScrape() 

},


LOM.initObs = function(callback){

    function tempoCB(x){
      LOM.currentTempo = x
      callback({'current tempo' : x})
    }

    LOM.observe(5, "live_set", "tempo", tempoCB)

    function playingCB(x){
      let output
      x === 0 ? output = "Abe is not playing" : output = "Abe is bangin!" ;
      // console.log('\n')
      callback({"playing?" : output})
    }

    LOM.observe(0, "live_set", "is_playing", playingCB)

    function mastVolCB(x){
      callback({'master volume fader': x})
    }

    LOM.observe(1, "live_set master_track mixer_device volume", "value", mastVolCB)

    function beatPosition(time){

      return [Math.round(time % LOM.currentTempo)]

    }

    function progressCB(x){
      LOM.currentTrackTime = x;
      callback({'track time': x})
      callback({'beat position': beatPosition(LOM.currentTrackTime) })

    }

    LOM.observe(2, "live_set", "current_song_time", progressCB)

    function meterCB(x){
      callback({'master track output level': x})
    }

    LOM.observe(3, "live_set master_track", "output_meter_level", meterCB)

};

module.exports = LOM;
