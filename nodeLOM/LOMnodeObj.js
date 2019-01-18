/*

this is the node.js max file
this hosts a socket io server 

*/

// start a socket io server

const Max = require('max-api');

const http = require('http');

const server = http.createServer(function(req, res){})

const io = require('socket.io').listen(server)

let idList = []

io.sockets.on('connection', function (socket) {

    console.log('conncted')

	idList.push(socket.id) 

    // this emits to the socket that just connected

    socket.emit('fromServer', { type: "openMessage", value: `Connected to Live via socket.io at socket id: ${socket.id}`} ); 

    // socket.emit('fromServer', { type: 'id', id: socket.id} ); 
    	// send to the client, will append get and observer requests
    	// with id tag later 

    // client listeners have to be put inside the sever side connection callback

    // simply relaying the data into the Max JS object

    socket.on('fromClient', function(data2){

		Max.outlet(data2)

	})

    socket.on('disconnect', function(){
        Max.outlet('obsSet', 'reset')
    })

});


server.listen(8080);


// handlers for the get and observer relays 

Max.addHandler("got", (path, val, result) => { 

	io.emit('fromServer', { type: 'got', path: path, prop: val, value: result } )

})

Max.addHandler("observed", (path, val, result) => { 
    // console.log('observed', path, val, result)
	io.emit('fromServer', { type: 'observed', path: path, prop: val, value: result } )

})

