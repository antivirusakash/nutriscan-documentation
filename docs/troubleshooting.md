# Troubleshooting Guide 🛠️

This comprehensive guide will help you solve common issues you might encounter while using the NutriScan app. If you're experiencing a problem, please check the relevant section below.

::: tip Quick Fix for Most Issues
Before trying specific solutions, try these three quick steps:
1. Restart the app
2. Update to the latest version
3. Restart your device
:::

## App Launch & Setup Issues 📱

### Splash Screen Problems

| Issue | Possible Solutions |
|-------|-------------------|
| App stuck on splash screen | • Wait 30 seconds<br>• Force close and relaunch<br>• Check for app updates<br>• Ensure sufficient device storage |
| Custom splash screen not showing | • Check your internet connection<br>• Updates from Firebase may be delayed<br>• Try restarting the app |

### Onboarding Screen Issues
- **Can't proceed past onboarding**: Swipe through all screens completely or tap "Skip" if available
- **Onboarding not showing for new install**: Reinstall the app or clear app data

### General Performance Issues

<details>
<summary><b>Slow or Unresponsive App</b></summary>

- **Check Internet:** Make sure your network connection is stable. Switch between Wi-Fi and mobile data to test.
- **Restart the App:** Close the app completely and reopen it.
- **Update the App:** Ensure you are using the latest version available in the App Store or Play Store.
- **Clear Cache:** Go to your phone's settings and clear the app cache if the option is available.
- **Reinstall:** If problems persist, uninstall and reinstall the app.
- **Check Device Storage:** Insufficient storage can cause slowness; free up space if needed.
- **Background Apps:** Close other resource-intensive apps running in the background.

</details>

<details>
<summary><b>App Crashes/Unexpected Errors</b></summary>

- **Force Stop:** Use your device's task manager to force stop the app and then restart it.
- **Report Error:** Note any error messages displayed and report them using the in-app feedback form.
- **Device Compatibility:** Check if your device meets the minimum system requirements (Android 12+ or iOS 13+).
- **Update OS:** Ensure your device's operating system is up to date.
- **Memory Issues:** Try freeing up RAM by closing other apps.

</details>

::: warning App Version Issues
If you see a download notification on the home screen for a new app version:
- Tap the download button to be directed to the App/Play Store
- For Shorebird patch updates, follow the prompt or restart the app
:::

## Permission Issues 🔒

### Common Permission Problems

| Permission | Issues | Solutions |
|------------|--------|-----------|
| **Camera** | • Scan not working<br>• Black screen when taking photo | • Go to Settings > Apps > NutriScan > Permissions > Camera > Allow<br>• Restart app after enabling permission |
| **Photos** | • Can't access gallery<br>• Can't save meal images | • Ensure Photos/Storage permission is granted<br>• For iOS, check "Read and Write" access |
| **Location** | • Mobile sign-in unavailable<br>• Map insights not showing<br>• City map missing | • Enable precise location in device settings<br>• Must be granted for mobile sign-in in India<br>• Required for city map in insights |
| **Microphone** | • Voice input not working<br>• Monika AI assistant not responding | • Check microphone permission is enabled<br>• Test microphone with another app to ensure it works |
| **Notifications** | • Missing alerts<br>• No referral notifications | • Check both device and in-app notification settings<br>• For iOS, ensure notifications are allowed in Settings |
| **Activity Tracking** (iOS) | • Less personalized experience | • Go to iOS Settings > Privacy > Tracking<br>• Toggle "Allow Apps to Request to Track" |

::: danger Permission Denied
If you denied a permission and the app no longer asks for it:
1. Go to your device settings
2. Find NutriScan in your apps list
3. Go to Permissions
4. Manually enable each required permission
:::

## Authentication & Account Issues 🔑

### Sign-In Problems

<details>
<summary><b>Mobile Number Sign-In Issues</b></summary>

- **Option not visible**: 
  - Ensure location permission is granted (required for India location)
  - Check you are physically located in India, as this sign-in method is region-restricted

- **OTP Not Received**:
  - Verify your number is entered correctly with proper country code
  - Check network connection (try switching between Wi-Fi and mobile data)
  - Use "Resend OTP" after the countdown completes
  - Check if your SMS inbox is full
  - Ensure your carrier is not blocking verification SMS

- **OTP Autofill Not Working**:
  - For Android: Check that SMS Retriever API permissions are enabled
  - For iOS: Make sure SMS autofill is enabled in settings
  - Try entering the code manually if autofill fails

</details>

<details>
<summary><b>Google/Apple Sign-In Issues</b></summary>

- **Google Sign-In Fails**:
  - Ensure you have a working internet connection
  - Update Google Play Services
  - Verify the Google account is properly set up on your device
  - Try signing out of your Google account on the device and signing back in

- **Apple ID Sign-In Fails**:
  - Verify you're using iOS 13 or higher
  - Ensure your Apple ID is properly configured in Settings
  - Update to the latest iOS version
  - Try signing out of your Apple ID and signing back in
  
- **Authentication Remembering Issues**:
  - If the app doesn't remember your sign-in method, clear app cache and try again
  - Ensure you've completed the sign-in process fully at least once

</details>

### Profile Issues
- **Can't update profile**: Try logging out and logging back in, then attempt to edit again
- **Changes not saving**: Ensure you have a stable internet connection when updating profile
- **Food preferences not applying**: Complete the full form submission with the "Save" button

## Free Trial & Subscription Issues 💳

### Free Trial Activation Problems

- **Trial offer not appearing**: 
  - New users should see it on home page; if not showing, try logging out and back in
  - The offer reappears every 24 hours if previously closed

- **Payment verification issues**:
  - Ensure your payment method has valid information
  - Check if your bank requires additional verification
  - Some payment methods may not support trial authorizations

::: warning Payment Status Screens
- **Success screen**: Proceed to enjoy premium features
- **Waiting screen**: Wait for up to 15 minutes for processing to complete
- **Failed screen**: Note the error code and try an alternative payment method
:::

### Subscription Management

| Issue | Solution |
|-------|----------|
| Can't upgrade plan | • Check internet connection<br>• Verify payment method is valid<br>• Try a different payment method |
| Plan not activating after payment | • Wait 15 minutes for processing<br>• Check for confirmation email<br>• Contact support with transaction details |
| Cancel subscription | • Go to Profile > Upgrade > Cancel Subscription<br>• Complete cancellation survey<br>• Finalize in App Store/Play Store |
| Change plan type | • Go to Profile > Upgrade > Change Subscription<br>• Select new plan and confirm |

## Meal Scanning & Analysis Issues 📸

### Camera & Scanning Problems

<details>
<summary><b>Photo Capture Issues</b></summary>

- **Camera not launching**:
  - Check camera permission is granted
  - Restart app and try again
  - Ensure another app isn't using the camera

- **Image capture fails**:
  - Free up storage space on your device
  - Ensure camera lens is clean
  - Try in better lighting conditions

- **Crop screen problems**:
  - If crop controls are unresponsive, restart the app
  - Use the retake button if image quality is poor
  - Text/audio input not working? Check relevant permissions

</details>

<details>
<summary><b>Processing Errors</b></summary>

- **"Not a food item" error**:
  - Ensure your image clearly contains food
  - Improve lighting and try again
  - Avoid abstract food presentations

- **JSON error or Network error**:
  - Check your internet connection
  - Try switching between Wi-Fi and mobile data
  - Retry scan after a few minutes

- **LLM content filter triggered**:
  - Ensure your food image doesn't contain inappropriate content
  - Try scanning individual food items instead of the full meal

- **Long processing times**:
  - Check your internet speed
  - Large, complex meals may take longer to analyze
  - Cancel and try again with a clearer, simpler image

</details>

::: tip Better Scanning Results
- Use good lighting (natural daylight works best)
- Take photos from directly above the meal
- Make sure all food items are visible and identifiable
- For mixed dishes, try to separate items when possible
:::

### Nutrition Details Issues

- **Inaccurate nutritional values**: 
  - Use the edit feature to adjust portion sizes
  - Add missing items manually
  - Remove incorrect items

- **Cannot edit meal title/name**:
  - Ensure you're tapping directly on the name field
  - Check if you have a stable internet connection

- **Can't share screenshot**:
  - Verify you've granted the app permission to share content
  - Try saving the image first, then sharing from your gallery

- **Missing micro nutrients**:
  - The app shows only the top 4 micro nutrients by default
  - Tap on "Nutrition Breakdown & Ask More" to see all values

- **NutriScore questions not working**:
  - Ensure you have an active internet connection
  - Try refreshing the page or restarting the app

## NutriBites & AI Assistant Issues 🤖

### NutriBites Problems

| Issue | Solution |
|-------|----------|
| Intro screen not showing | • This appears only for first-time users<br>• Try clearing app data if needed |
| Questions not working | • Check internet connection<br>• Ensure you've scanned at least one meal |
| Voice input not detecting | • Verify microphone permission<br>• Speak clearly close to your device<br>• Try typing instead if voice fails |
| Meal cards not appearing | • Ensure you have meal history<br>• Try asking questions specifically about meals you've logged |
| Can't access meal details | • Tap directly on the meal card image<br>• Try viewing the meal from Home screen timeline |

### Monika AI Assistant Issues

- **Call button not working**: 
  - Ensure you have Premium or Track subscription activated
  - Check microphone permission is granted
  - Restart app if button is unresponsive

- **Monika not responding**:
  - Check your internet connection
  - Speak clearly and wait for processing
  - If still not working, restart the app and try again

- **Questions about specific meals not working**:
  - Try to be more specific about which meal you're referring to
  - Mention the date or time of the meal in your question
  - Ensure you've logged meals that the AI can reference

## Diet Plan Issues 🍽️

::: warning Premium Feature
Diet Plan is only available with a Premium subscription. Ensure your subscription is active before troubleshooting.
:::

### Diet Plan Creation Problems

<details>
<summary><b>Form Submission Issues</b></summary>

- **Can't complete form**:
  - Ensure all required fields are filled
  - Each step must be validated before proceeding
  - If stuck on a particular screen, try going back and re-entering information

- **Form data not saving**:
  - Check your internet connection
  - Data should save automatically as you proceed
  - If encountering persistent issues, try logging out and back in

- **Processing error when creating plan**:
  - This is a complex process that requires good internet connectivity
  - Wait at least 5 minutes before concluding there's an error
  - If it fails, try again when you have a stable connection

</details>

### Existing Diet Plan Issues

- **Can't see meal options**: Refresh the page or restart the app
- **Plan not showing despite Premium subscription**: 
  - Verify you've completed the full Diet Plan questionnaire
  - Contact support if plan creation fails repeatedly
- **Meal details not loading**: Check your internet connection
- **Cannot renew plan after 28 days**: Go to Edit Diet Plan and complete the form again
- **Diet plan tabs not switching**:
  - Ensure you're tapping directly on the tab names (Diet Plan, Supplements, Lifestyle)
  - Try restarting the app if the UI becomes unresponsive
  - Check for app updates that might fix UI issues

## Advanced Features Issues 🌟

### Refer & Earn Program

- **Link not generating**: Check internet connection and try again
- **Referral not tracking**: 
  - Ensure your friend uses your exact link to sign up
  - New users must complete registration for referral to count
- **Premium reward not received**: 
  - Rewards apply after friend completes sign-up
  - Allow up to 24 hours for rewards to be applied
  - Check notification center for confirmation
- **Referral count discrepancy**:
  - The referral counter may take time to update
  - Verify that referred friends have completed the full registration process
  - Contact support if discrepancies persist after 48 hours

### Meal Management

- **Can't delete meals**: 
  - Ensure you're long-pressing the meal item
  - Complete the confirmation step
  - Try force-stopping and restarting the app if delete option doesn't appear

- **Copy to Today not working**:
  - Make sure you're long-pressing the meal item
  - This works only for previously logged meals
  - Verify you have a stable internet connection
  - Wait for the success message to confirm the action completed

### Insights Dashboard

- **Calendar not showing data**:
  - Need at least one meal scan to see data
  - Try switching between time periods (Month/7 days/Today)
  - Pull down to refresh the dashboard

- **City map not visible**:
  - Location permission must be granted
  - Feature requires at least one meal scan
  - Some regions may have limited map data
  - Try zooming in/out on the map if it appears but shows no data

- **NutriScore colors not matching expectations**:
  - The color coding is based on a complex nutritional algorithm
  - Review the "Learn NutriScore" section for explanation of scoring
  - Ensure you've entered all food items for accurate scoring

## Rating & Feedback Issues ⭐

- **Rating prompt not appearing**:
  - The prompt appears after scanning 2 meals
  - If you've already responded to it, it won't appear again
  - You can still rate the app directly in the App/Play Store

- **Cannot submit feedback**:
  - Ensure all required fields in the Contact Us form are completed
  - Check your internet connection
  - Try submitting shorter feedback if the form won't accept long text

## Notification Issues 🔔

- **Missing notifications**:
  - Check that notification permission is granted
  - Verify that notifications are enabled in app settings
  - For Android: Check that battery optimization isn't restricting the app
  - For iOS: Ensure notifications aren't silenced or grouped

- **Notification taps not navigating correctly**:
  - Update to the latest version of the app
  - If persistent, try clearing app cache or reinstalling

## Frequently Asked Questions ❓

<details>
<summary><b>How do I access my previous meals?</b></summary>

All your previously logged meals appear on the Home screen. Scroll down to view your meal history by date. You can tap on any meal to view its detailed nutritional information.
</details>

<details>
<summary><b>Why can't I sign in with my phone number?</b></summary>

Mobile number sign-in is only available in India and requires location permission to be granted. If you're outside India or have denied location permission, this option won't be visible. Use Google or Apple ID sign-in instead.
</details>

<details>
<summary><b>How do I cancel my subscription?</b></summary>

Go to Profile > Upgrade > Cancel Subscription. You'll be asked to complete a brief survey about why you're cancelling, then directed to your device's subscription management screen (App Store or Play Store) to complete the cancellation.
</details>

<details>
<summary><b>What's the difference between Track and Premium plans?</b></summary>

Both plans include NutriBites Q&A and the AI nutritionist (Monika). The Premium plan additionally includes custom diet plans and advanced insights. Check the pricing page for the most current feature comparison.
</details>

<details>
<summary><b>Why does the app need so many permissions?</b></summary>

Each permission serves a specific purpose:
- Camera: For scanning meals
- Photos: To access saved food images
- Location: For map insights and mobile authentication (India)
- Microphone: For voice input and AI assistant
- Notifications: For reminders and updates
All permissions except Camera and Photos are optional but enable better functionality.
</details>

## Contact Support 📞

If your issue persists after trying the solutions above:

1. **In-app help**:
   - Navigate to Profile > Contact Us
   - Fill in all required fields
   - Be specific about your issue and include:
     - App version (found at bottom of Profile screen)
     - Device model and OS version
     - Steps to reproduce the issue

2. **Email support**: [support@nutriscan.app](mailto:support@nutriscan.app)

3. **Community forum**: [WhatsApp Community](https://chat.whatsapp.com/D59cAogthGxFZo67dShNzv)

4. **Social media**:
   - [Instagram](https://instagram.com/nutriscan.app)
   - [Twitter](https://twitter.com/nutriscanapp)