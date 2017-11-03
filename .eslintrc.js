module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "react-app",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/sort-comp": ["error", {
            "order": [
              "static-methods",
              "lifecycle",
              "everything-else",
              "render",
              "/^_render.+$/",
            ]
        }],
        "react/prop-types": ["error"],
        "react/require-default-props": ["error"],
    },
    "globals": {
        "EventSource": true,
        "getComputedStyle": true,
        "AFRAME": true,
        "THREE": true,
    }
  };
