# notes


expo is not just a CLI but a package that make writing React Native code easier

its a javascript package

it gives us many utility functinality

babel.config.js

handles how code is transpiled under the hood

### app.json


Configure settings and behaviors of React native app, file picked up by expo when picked up for preiveiew or app store,


set name
background colors


we have that file beacuse we're using expo


### App.js

Its the only real code file we have in the project 



# Styling React Native Apps


There is no CSS!

Inline Styles || StyleSheet Objects

in the JavaScript coee files

based on CSS and only a subset of properties

style prop is only support on some elements


```jsx

<Text style={{
    mar
}}>Hello World!</Text>

```


React Native border

valid keys:

borderWidth: int
borderColor: string || hex code, rgb, hsl, rgba

besides auto-completion, the StyleSheet object also provides validation.
If you would use invalid style properties or values, you would get an error / warning