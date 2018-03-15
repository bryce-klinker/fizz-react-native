# Getting Started

## Tooling

* node
    * `brew install node`
    * version of node used for scripts is saved as a dependency: [discussion](https://twitter.com/housecor/status/962347301456015360)
* npm
    * also saved as a dependency
* yarn (1.5.1)
    * `brew install yarn`
* XCode (9.2) (iOS)
    * Installed through AppStore
* Android Studio (3.0.1) (Android)
    * https://developer.android.com/studio/index.html
    * May work: https://gist.github.com/patrickhammond/4ddbe49a67e5eb1b9c03

## Initial Setup

You will need to install the node packages using:

```bash
cd {local repo directory}
yarn install
```

## Running the App

### iOS

```bash
cd {local repo directory}
yarn ios
```

### Android

```bash
cd {local repo directory}
yarn android
```

# Background

This project was bootstrapped using 
[create-react-native-app](https://github.com/react-community/create-react-native-app)

However, create-react-native-app won't work with this anymore as native bindings are 
used from node packages. At least this is my current understanding of how 
create-react-native-app. Please let us know if this is in correct.