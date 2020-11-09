# Native Modules for React Native

This repo is an example of a Java module used in React Native.
The module reads time settings through Java and returns a promise to Javascript.

## :fire: Instructions to run

- Clone repo
- yarn
- yarn android

## :book: Instructions to use

- Copy `ClockSettingsModule.java` and `ClockSettingsPackage.java` to your project
- Add this to your MainApplication: </br>

```
  import com.<your-package-name>.ClockSettingsPackage;

  ...

  @Override
  protected List<ReactPackage> getPackages() {
  @SuppressWarnings("UnnecessaryLocalVariable")
  List<ReactPackage> packages = new PackageList(this).getPackages();
  // Packages that cannot be autolinked yet can be added manually here, for example:
  // packages.add(new MyReactNativePackage());
  packages.add(new ClockSettingsPackage());
  return packages;
  }
```

- Copy the file `ClockSettings.js` from the root of this project.
- Call it wherever you want to use the module as it is done in `App.js`
