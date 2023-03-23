#!/usr/bin/env node

// In order to fix the react-native-sqlite-storage complain from typeorm/browser,
// we need this script to run after installing typeorm.
const replace = require('replace');
const path = require('path');

replace({
    regex: 'import { ReactNativeDriver } from "./react-native/ReactNativeDriver";',
    replacement: '',
    paths: ['node_modules/typeorm/browser/driver/DriverFactory.js']
});
replace({
    regex: 'case "react-native":',
    replacement: '',
    paths: [ 'node_modules/typeorm/browser/driver/DriverFactory.js']
});
replace({
    regex: 'return new ReactNativeDriver\\(connection\\);',
    replacement: '',
    paths: ['node_modules/typeorm/browser/driver/DriverFactory.js']
});