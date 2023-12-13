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


# Exploring layouts & flexbox

```jsx

<View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text style={styles.dummyText}>
        Hello World!
      </Text>
      <Button title="Tap me!" />
      <StatusBar style="auto" />
    </View>


    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
    
  }
});
```



### Build interface to manage goals

In the first nested view should hold the input area where users input text for the goal
and clicka button to add goal

the second sview should hold the list 



## Layouts & Flexbox

