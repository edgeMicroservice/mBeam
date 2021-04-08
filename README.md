# mBeam [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

This open source mBeam microservice created by the mimik team is an example cross-platform solution for media streaming. More specifically, this edgeEngine microservice has the following functionality:

1. Provide a queue of links to shared media on the target device
2. Beam content from one target device to another

## Environment Variables

| Variables    | Description                                                                         |
| ------------ | ----------------------------------------------------------------------------------- |
| signatureKey | the signatureKey is used as a signing secret for the file token                     |
| ownerCode    | the ownerCode is used as a secret to protect endpoints according to the swagger API |

# Build Process

---

The build script **default.yml** is specified under **config** directory.

1. Install dependencies: `npm install`
2. Run the build script: `npm run build`
3. Package to container: `npm run package`

# Deployment

---

For **mobile application development**, deployment is programmatically by **Android or iOS Wrappers**, learn more about it:

- Android: [Link](https://developer.mimik.com/edgemobileclient-android-wrapper/)
- iOS: [Link](https://developer.mimik.com/edgemobileclient-ios-wrapper/)

For **microservice development**, things you will need:

- edgeEngine running on the deployment targeted device.
- Obtained edge Access Token and associate the device from [mimik-edge-cli](https://www.npmjs.com/package/@mimik/mimik-edge-cli)
- Run the following commands under the same directory of your containerized microservice file using mimik-edge-cli:

```
mimik-edge-cli image deploy --image={YOUR_IMAGE_PATH} --token={EDGE_ACCESS_TOKEN}
```

Once microservice is successfully deployed you should get a response that looks like this:

```
created: 1617901400
digest:  sha265:cd3b0e39004ef2996e5f36089db47ab9ea415d28f00bf4d45f0ac3e3821a53fd
id:      79279c04-8945-4141-8b52-2cb92b78cf43-mbeam-v1
name:    mbeam-v1
size:    108238
status:  successfully deployed
```

Now open start.json in editor of choice. It can be found in the repo.

copy the name of the microservice that you got in the response when you deployed the image

replace {{imageName}} with the name you copied

replace {{containerName}} with the name you copied

replace {{mbeamApiKey}} with a more than 8 characters code of your choosing. we suggest it includes both numbers and letters
For example:

```
"ownerCode": "1a2b34cdef",
```

replace {{mbeamSignKey}} with a more than 8 characters code of your choosing. we suggest it includes both numbers and letters
For example:

```
"signatureKey": "R1yC7mpKXW81"
```

save the newly updated start.json file

navigate to where the start.json file is located via terminal

run command:

```
mimik-edge-cli container deploy --payload start.json --token={EDGE_ACCESS_TOKEN}
```

- For more information and explanation, you can visit our [mCM container management API references](https://developer.mimik.com/edgeengine-mcm-api/) and [general guide on packaing, deployment, and exporting microservice](https://developer.mimik.com/building-edge-microservices/).

## Supports

- https://developer.mimik.com

## License

[MIT licensed](./LICENSE).
