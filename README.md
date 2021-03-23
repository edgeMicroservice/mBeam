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
- Run the following commands under the same directory of your containerized microservice file:

```
curl -i -H 'Authorization: Bearer <edge Access Token>' -F "image=@beam-v1.tar" http://localhost:8083/mcm/v1/images
```

- To run the microservice after successful deployment, with environment variables:

```
curl -i -H 'Authorization: Bearer <edge Access Token>' -d '{"name": "beam-v1", "image": "beam-v1", "env": {"MCM.BASE_API_PATH": "/beam/v1", "MCM.WEBSOCKET_SUPPORT": "true", "ownerCode": <YourOwnerCode>, "signatureKey": <YourSignatureKey>} }' http://localhost:8083/mcm/v1/containers
```

- For more information and explanation, you can visit our [mCM container management API references](https://developer.mimik.com/edgeengine-mcm-api/) and [general guide on packaing, deployment, and exporting microservice](https://developer.mimik.com/building-edge-microservices/).

## Supports

- https://developer.mimik.com

## License

[MIT licensed](./LICENSE).
