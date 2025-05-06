## Splash Screen
- Show general Splash Screen with logo
- Show custom Splash Screen if updated in Firebase
- Check subscription Status

## Onboarding Screen
1. Intro - Track Your Meals Effortlessly
2. Intro - Get Your Custom Diet Plan
3. Intro - Achieve Your Health Goals
4. Choose Your Goal - save as cache
5. Your Food Preference - save as cache

## App Permissions
- Notification Permission
- Location Permission
- Microphone Permission
- Access Photos Permission
- Camera Permission
- iOS - Allow App to Track Activity

## Sign in with Mobile, Google or Apple ID
- Sign in with Mobile Number only valid for India location
- Sign in with Mobile Number won't show if user denies location permission
- Sign in with Mobile -> Send OTP / Resend OTP
- Autofill Mobile Number & OTP
- Sign in with Google
- Sign in with Apple
- Remember the Sign in Method if the user relogs after logout.

## Start 7 Days Free Trial Model
- Trigger Start Free Trial - Premium Plan model on the home page for new users
- Trigger after every 24 hours if user has not taken action
- Close Model
- Button to Start 7 Days Free Trial
- Press Upgrade
- Complete payment
- Wait for payment completion
- Show success screen if payment success
- Show waiting screen if payment still processing
- Show failed screen if payment is falied
- If payment is successful, then show the upgrade confirmation model on the home page

## Home Page
- Showing 4 sample meals new user
- Showing Today's Count (Calories, Protein, Carbs, Fat)
- If Premium Plan & Diet Plan Created - Showing Today's Count with pie chart progress and progress red color for carbs & fat if exceed the daily count goal
- Showing meals list by date with image, name
- Trigger Rating After 2 meal scan
- Insights Widget > Show City Map Widget after 1 meal scan
- Insights Widget > Show Calendar Widget after 1 meal scan
- Insights Widget > NutriBites Question Widget after 1 meal scan
- Upgrade Plan Button (Show Plan Name if plan is active, also days left if less than 7 days left)
- Invite & Earn Button

## Click Meal Picture
@Path - Home > Camera Icon
- Camera Permission
- Select Picture
- Fill Food Preference Form after 2 meals scanned

## Crop Screen
@Path - Home > Camera Icon > Click Picture
- Crop Image
- Select Food Type from Tags (8): 🏠 Home Made, 🍫 Packaged Food, 🧑‍🍳 Restaurent / Cafe, 🏢 Office, 🥘 Hostel, 📍 Street Food, 💊 Supplements, 🏨 Hotel / Event Buffet
- Select Cooking Method from Tags (11): Not Sure ❓, 🥘 Mixed, 🍟 Deep-fried, 🍃 Air-fried, 🍳 Stir-fried, ♨️ Oven-baked, 🔥 Roasted, 🫧 Steamed, 🥣 Boiled, 🍢 Grilled, 🥗 Raw
- Change the oil level from slider: No Oil, Low Oil, Default / Medium Oil, High Oil
- Type Input Text
- Add audio input text
- Retake Button
- Go back
- Error if something went wrong

## Process Meal Scan
@Path - Home > Camera Icon > Click Picture > Continue
- Show Process Loading Screen
- Error if picture is not food
- Error if JSON error
- Error if network error
- Error if LLM content filter

## Manual Logging
@Path 1 - Home > Pencil Icon > Write About Meal
- Back
- Write Meal Info
- Select Food Type from Tags (8): 🏠 Home Made, 🍫 Packaged Food, 🧑‍🍳 Restaurent / Cafe, 🏢 Office, 🥘 Hostel, 📍 Street Food, 💊 Supplements, 🏨 Hotel / Event Buffet
- Change the oil level from slider: No Oil, Low Oil, Default / Medium Oil, High Oil
- Save & Log -> Process -> Nutrition Details Page

## Nutrition Details Page
@Path 1 - Home > Camera Icon > Click Picture > Crop Picture
@Path 2 - Home > Meal Item
- Autofill, Change & Select Food Time from Dropdown (6): 🥣 Breakfast, 🍞 Mid-Morning, 🍱 Lunch, 🍏 Afternoon, 🍛 Dinner, 🛏️ Bed Time
- Autofill, Change & Select Food Type from Dropdown (7): 🏠 Home Made, 🍫 Packaged Food, 🧑‍🍳 Restaurent / Cafe, 🏢 Office, 🥘 Hostel, 📍 Street Food, 💊 Supplements, 🏨 Hotel / Event Buffet
- Autofill, Change & Select Cooking Method from Dropdown (11): Not Sure ❓, 🥘 Mixed, 🍟 Deep-fried, 🍃 Air-fried, 🍳 Stir-fried, ♨️ Oven-baked, 🔥 Roasted, 🫧 Steamed, 🥣 Boiled, 🍢 Grilled, 🥗 Raw
- Macros Nutritions (Calories, Protein, Carbs, Fat)
- Top 4 Micro Nutrients - order by high to low (fiber, Potassium, Calcium, Omega 3 etc) 
- NutriScore with description
- Click arrow to go to Learn Nutriscore page
- 3 Meal related questions
- Edit Meal Title Name
- Edit or Adjust Portion Size + / -
- Tap & Type Portion Size
- Remove item
- Add missing item (type or voice input)
- Nutrition Breakdown & Ask More Button
- Share Screenshot
- Copy Meal to Today
- Delete Meal
- Back

## Nutrition Breakdown & Ask More
@Path 1 - Home > Camera Icon > Click Picture > Crop Picture > Nutritional Details Page
@Path 2 - Home > Meal Item > Nutrition Details Page
- Back
- Click to view all nutritional values
- Click on Explore Topic tags and fill in input
- Meal Image - click meal image to go back to Nutrition Details Page
- Type or voice input Question and ask
- Replace question in input if user clicks on a different explore topic

## NutriBites - talk with your meal timeline. Ask questions to get insights into your meal timelines.
@Path - Home > Bottom Nav - NutriBites
- Show intro screen to first-time user
- The user can select a question
- Type or voice input questions
- Ask Question
- Meal-related answers should contain meal cards
- If a user clicks on the Meal card, then go to the Nutrition Details Screen

## Food Preference Form
@Path - Home > Camera (after 2 meal scans) > Food Preference Form
- Trigger Form only after 2 meal scans
- Fill First Name, Last Name, Food Preference (Veg, Non-veg, Vegan, Mixed), Select Goal (Weight Loss, Muscle Gain, Diabetes, Pregnancy, PCOS, Viral/Flu)

## Location Permission
- To load map insights
- After 2 meal scan complete

## Refer & Earn — Invite friends to the NutriScan App! Once they get the app and sign up, both will get 2 weeks of the Premium Plan.
@Path - Home > Click Invite & Earn
- Share link with Friends
- Show Number of total successful referrals
- Get 2 weeks if successful referral to user & referred user
- Give Premium 1 month if 5, 3 months if 10 referral
- FAQs related to Refer & Earn
- Trigger Notification if successful referral
- Show successful referral model on home to both users on referral

## Upgrade Subscription
@Path - Home > Upgrade Button
- Select Type of Subscription - Track or Premium
- Press Upgrade
- Complete payment
- Wait for payment completion
- Show success screen if payment success
- Show waiting screen if payment still processing
- Show failed screen if payment is falied
- If payment is successful, then show the upgrade confirmation model on the home page
- If plan active, show plan highlighted with valid date
- If plan active, Cancel Subscription button - takes to survey (reason of cancellation) then App Store/Play Store's manage subscriptions
- If plan active, Change Subscription plan type

## Diet plan 
@Path - Home > Bottom Nav Diet Plan
@Plan - Premium
- Fill in detail - Tell Us About Yourself (First Name, Last Name, Age, Gender), Your Physical Profile (Height, Weight), Your Health Goal, More Details About Goal, Lifestyle & Feelings, Your Food Preferences, Any Food Restrictions?, Your Eating Schedule, Your Diet Preparation, Daily Physical Activity, Your Eating Patterns, Open to Nutritional Supplements?, Raw items in Kitchen / Currently Consuming.
- All form steps should be validated
- All data should be automatically saved in the DB.
- All data should go to LLM
- Loader for Processing Building Diet Plan
- Once the diet plan is created, show Diet Plan Start & End Date with Progress Bar, Daily Target of Macros & Micronutrients
- 3 clickable Tabs of Diet Plan, Supplements, Lifestyle
- Food Items based on the selected eating schedule. Each schedule should have 2 item options
- Click Meal item > Navigate to meal details page (Quick Recipe, Portion Size, Benefits, Things to Avoid, Nutrition Breakdown) 
- Renew the Diet Plan after 28 days or modify it by updating the information in the form

## Edit Diet Plan
@Path 1 - Home > Bottom Nav Diet Plan > Edit Plan Button
@Path 2 - Home > Bottom Nav Profile > Edit Diet Plan
- Fill entire form again

## Talk with Voice Powered AI Assistant - Monika - Nutritionist.
@Path - Home > Click Call Button
@Plan - Premium, Track
- Microphone Permission
- Ask any questions
- Ask to log meal
- Back to Home
- Meal should be logged on Home

## Make Meal Timeline public and share by URL.
@Path - Home > Bottom Nav Profile > Profile Page > Share Food Timeline
- Give a name to the Gallery & Submit
- Get URL & Copy URL

## Profile
@Path - Home > Bottom Nav Profile
- Edit Profile
- Share Food Timeline
- About NutriScan
- Contact Us
- App Contributors
- Invite & Earn
- Logout
- App Version (Bundle ID)

## Edit Profile
@Path - Home > Bottom Nav Profile > Profile Page > Edit Icon
- Edit & Update Details in Form (First Name, Last Name, Food Preference, Goal)
- Go back to the Profile Page once updated details

## Contact Us
@Path - Home > Bottom Nav Profile > Contact Us
- Submit Message
- Get Success Message
- Click to Join Community
- Click FAQs URL

## Notifications
- Take the user to the related path once the user clicks on the notification

## Delete Meals
@Path - Home > Long Press Meal Item > Delete > Confirm Delete

## Skip Scan if your meal is repeated. Just copy the old meal to today.
@Path 1 - Home > Long Press Meal Item > Copy to Today
@Path 2 - Home > Nutrition Details Page > Click Copy Icon
- Copy the meal by long pressing the Meal Item
- Show Success Message once done

## Insights
@Path 1 - Home > Insights Widget
@Path 2 - Home > Click Insights Widget
- User should be able to view meal logging NutriScore Colors (Dark Green, Green, Yellow, Orange & Red) in monthly calendar view
- User should be able to view the nutrition breakdown if they click on the day of calendar
- The user should be able to swipe over months
- Metrics should be valid based on - Month (ex - Total March), last 7 days, today
- User should be able to view map of city
- Show location permission widget if location permission is not granted

## Download Available
@Path - Home
- Show snackbar with Download Button if a new version app is available which takes to App/Play Store
- Show snackbar with Download Button if Shorebird pushes new patch.io
- Auto download in the background if user restarts the app and removes the snackbar

## Typing by Keyboard
- Close keyboard by clicking outside of text input