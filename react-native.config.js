module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./assets/images'], // Path to your icon image(s)
    "react-native-asset": {
        "path": "./assets/brand/green-logo.svg", // Path to your main icon file
        "output": "images", // Optional output directory
        "android": {
            "icon": "mipmap",
            "roundIcon": "mipmap-round"
        },
        "ios": {
            "icon": "AppIcon"
        }
    }
};