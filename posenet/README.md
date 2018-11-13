# PoseNet 
Wraps [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) inside electron and serves the detected parts via MaxAPI.

![posenet](https://user-images.githubusercontent.com/14039540/48412987-9029e280-e789-11e8-86a0-03c94a06ab13.gif)

# Steps
1. Install npm dependencies by clicking the indicated button. Since Electron's kind of big in size, this make take a while depending on your network environment. When the message object says it's 'completed' you'll never have to do this step again.
2. Click on the toggle button to launch PoseNet. The UI controls offer you to change parameters. For more details, see [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet).
3. The node.script will emit the detected results as a dict, so feel free to mess around!