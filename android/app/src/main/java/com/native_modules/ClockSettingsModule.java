package com.native_modules;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

import android.content.ContentResolver;
import android.os.Build;
import android.provider.Settings;
import android.content.Context;

public class ClockSettingsModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  @Override
  public String getName() {
    return "ClockSettings";
  }

  @ReactMethod
  public void getUsesAutoDateAndTime(Promise promise) {
     ContentResolver resolver = getReactApplicationContext().getContentResolver();

    try{
      boolean config = (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1
        ? Settings.Global.getInt(resolver, Settings.Global.AUTO_TIME, 0)
        : Settings.System.getInt(resolver, Settings.System.AUTO_TIME, 0)) != 0;
        promise.resolve(config);
    } catch (Exception e ) {
        promise.reject("CLOCK SETTINGS ERROR", e);
    }
  }

  @ReactMethod
  public void getUsesAutoTimeZone(Promise promise) {
    ContentResolver resolver = getReactApplicationContext().getContentResolver();

    try{
      boolean config = (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1
        ? Settings.Global.getInt(resolver, Settings.Global.AUTO_TIME_ZONE, 0)
        : Settings.System.getInt(resolver, Settings.System.AUTO_TIME_ZONE, 0)) != 0;
        promise.resolve(config);
    } catch (Exception e ) {
        promise.reject("CLOCK SETTINGS ERROR", e);
    }
  }

  ClockSettingsModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
}
