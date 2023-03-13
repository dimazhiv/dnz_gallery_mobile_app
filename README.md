# dnz_gallery_mobile_app
Demo mobile application for Flicker gallery: https://www.flickr.com/photos/flickr/galleries/72157647277042064/with/8432423659/

Manual is valid for MacOS. For another OS commands can be different.

## Android:

To run android app you should have prepared environment with Android studio, JDK, emulators, etc. 
according to React-Native guides:  
https://reactnative.dev/docs/environment-setup

To run application on emulator, run in console in root project folder:

 ```
yarn  
react-native run-android
```

To build apk with specific version name and version code, run in console in root project folder:

```
cd ..android  
./gradlew assembleRelease -PversionName=[yourVersionNumber] -PversionCode=[yourVersionCode]

Example:
./gradlew assembleRelease -PversionName=2.1.1 -PversionCode=234
```
If you run build command without specific version name and version code, it will build with default params: versionName=1.0 versionCode=1

Apk file will appear in folder dnz_gallery_mobile_app/android/app/build/outputs/apk/releases/

## Ios:

To run ios app you should have prepared environment with Xcode, Simulators, Cocoapods, Ruby, bundle, etc. 
according to React-Native guides:
https://reactnative.dev/docs/environment-setup

To run application on simulator, run in console in root project folder:

```
yarn
bundle install
yarn pod
react-native run-ios
```
