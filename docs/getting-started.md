# Getting Started with NutriScan

This guide will help you install, set up, and begin using the NutriScan app to track your nutrition and create personalized diet plans.

## Installation

### System Requirements

| Platform | Minimum Requirements |
|----------|----------------------|
| **Android** | Android 12 or higher |
| **iOS** | iOS 13.0 or higher |
| **Storage** | 100MB free space |
| **Network** | Internet connection required |

### Download Instructions

1. Visit the appropriate app store for your device:
   - **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=app.nutriscan)
   - **iOS**: [Apple App Store](https://apps.apple.com/in/app/nutriscan-track-diet-plan/id6479204257)

2. Search for "NutriScan" in the search bar

3. Tap **Install** or **Get** to download the app

4. Once installed, locate the NutriScan icon on your home screen or app drawer

::: tip Quick Download
Scan the QR code below for direct access to the app store download page:

[QR Code Placeholder]
:::

::: info Update Notifications
If a new version of the app is available, you'll receive a notification with a download button on the home screen. Some updates may automatically download in the background when you restart the app.
:::

## First Launch & Setup

### Splash Screen
When you first open NutriScan, you'll see a splash screen displaying the app logo. This screen may occasionally show customized content based on app updates from Firebase.

### Onboarding
The app will guide you through a brief onboarding screen explaining key features and benefits.

### App Permissions

NutriScan requires several permissions to function properly:

- **Required Permissions**:
  - **Camera**: For scanning meals and taking food pictures
  - **Photos**: To access saved food images

- **Optional (but recommended) Permissions**:
  - **Location**: For map insights and mobile authentication (required for India)
  - **Microphone**: For voice input and AI assistant
  - **Notifications**: For reminders and updates
  - **Activity Tracking** (iOS only): For better personalization

::: warning Permission Management
You can manage permissions at any time through your device settings:
- **Android**: Settings > Apps > NutriScan > Permissions
- **iOS**: Settings > NutriScan > Permissions
:::

## Account Creation

### Sign-Up Options

Choose from multiple authentication methods:

#### Mobile Number (India only)
1. Select "Sign in with Mobile Number" (only available if location permission is granted in India)
2. Enter your mobile number
3. Receive and enter the OTP (supports autofill)
4. Complete profile setup

::: info Location Requirement
Mobile authentication requires location permission and is only available in India. If location permission is denied, this option won't be displayed.
:::

#### Google Account
1. Tap "Sign in with Google"
2. Select your Google account
3. Confirm permissions
4. Complete profile setup

#### Apple ID (iOS only)
1. Tap "Sign in with Apple"
2. Complete Apple authentication
3. Choose data sharing options
4. Complete profile setup

::: tip Login Memory
The app will remember your preferred sign-in method when you log in again after logging out.
:::

### Profile Setup

After signing in for the first time, you'll need to provide basic information:

1. Enter your first and last name
2. Select your food preference:
   - Vegetarian
   - Non-vegetarian
   - Vegan
   - Mixed

3. Choose your primary health goal:
   - Weight Loss
   - Muscle Gain
   - Diabetes Management
   - PCOS Management
   - Pregnancy Nutrition
   - Viral/Flu Recovery

::: tip Profile Completion
You can update your profile information later through the Profile section of the app.
:::

## Free Trial Activation

As a new user, you'll be offered a 7-day free trial of the Premium Plan:

1. A trial offer modal will appear on your home screen for new users
2. Options:
   - **Start 7-Day Free Trial**: Begin using premium features
   - **Close**: Continue with basic features (offer will reappear every 24 hours if no action is taken)

3. If you select the trial:
   - Press Upgrade
   - Complete the payment verification process (no charge during trial)
   - Wait for payment completion
   - See success, waiting, or failed screen based on payment status
   - Gain immediate access to all Premium features with a confirmation model displayed on the home page

::: warning Trial Expiration
The trial automatically converts to a paid subscription unless canceled before the 7-day period ends.
:::

## First Steps

Now that you're set up, here's how to start using NutriScan:

### 1. Scan Your First Meal
```
Home Screen > Camera Icon > Take Picture > Crop Image > Continue
```

1. Tap the camera icon on the home screen
2. Grant camera permission if prompted
3. Take a clear picture of your meal
4. On the crop screen:
   - Adjust the crop to focus on food items
   - Optionally type text input
   - Optionally add audio input
   - Use retake button if needed
5. Tap Continue to process the image
6. View the processing screen while your meal is analyzed
   - Note: You may see an error if the picture is not food, if there's a JSON error, network error, or if content is flagged by LLM content filter

::: tip Better Scanning Results
- Ensure good lighting
- Take photos from above for a clear view of all food items
- Make sure the entire meal is visible in the frame
:::

### 2. Explore Nutrition Details

After scanning your meal, you'll see:

- **Macro Nutrients**: Calories, protein, carbs, and fat
- **Top 4 Micro Nutrients**: Important vitamins and minerals (ordered from high to low)
- **NutriScore**: Overall nutritional rating with description (click arrow to learn more)
- **Meal Questions**: 3 meal-related questions you can explore

You can:
- Edit the meal title/name
- Adjust portion sizes (+/-)
- Remove items
- Add missing items (via typing or voice input)
- Access Nutrition Breakdown & Ask More section
- Share a screenshot of your meal analysis
- Return to the previous screen

### 3. Dive Deeper with Nutrition Breakdown & Ask More

From the Nutrition Details page:
1. Tap "Nutrition Breakdown & Ask More"
2. View all nutritional values
3. Click on Explore Topic tags for suggested questions
4. Type or use voice input to ask custom questions
5. Tap on the meal image to return to the Nutrition Details page

### 4. Fill Food Preference Form

After scanning 2 meals, you'll be prompted to complete a Food Preference Form:
1. Enter your First Name and Last Name
2. Select Food Preference (Veg, Non-veg, Vegan, Mixed)
3. Choose a Goal (Weight Loss, Muscle Gain, Diabetes, Pregnancy, PCOS, Viral/Flu)

### 5. Explore Your Home Dashboard

After scanning your first meal, your home screen will begin to populate with:

- Today's nutritional counts (Calories, Protein, Carbs, Fat)
- Meal history with images and names
- For Premium Plan users with a Diet Plan: Pie chart progress and color indicators for exceeding daily goals
- Insights widgets (appear after your first meal scan):
  - City Map Widget (requires location permission)
  - Calendar Widget
  - NutriBites Question Widget

::: tip Rating Prompt
After scanning 2 meals, you'll be prompted to rate the app.
:::

### 6. Use NutriBites to Gain Insights
```
Home > Bottom Nav - NutriBites
```

1. View the intro screen (first-time users only)
2. Select a pre-set question or type/speak your own
3. Ask your question
4. View answers that may include meal cards from your history
5. Tap on meal cards to see their Nutrition Details

### 7. Create a Diet Plan (Premium Feature)
```
Home > Bottom Nav - Diet Plan
```

If you're on the Premium Plan:

1. Complete a comprehensive questionnaire about:
   - Personal details (First Name, Last Name, Age, Gender)
   - Physical profile (Height, Weight)
   - Health goal and details
   - Lifestyle and feelings
   - Food preferences and restrictions
   - Eating schedule
   - Diet preparation
   - Daily physical activity
   - Eating patterns
   - Openness to supplements
   - Current kitchen ingredients

2. Wait for your personalized 28-day plan to be generated
3. View your plan with:
   - Start & End dates with progress bar
   - Daily targets for macros and micronutrients
   - Three tabs: Diet Plan, Supplements, Lifestyle
   - Food items based on your eating schedule (each with 2 options)

4. Click on meal items to view:
   - Quick recipe
   - Portion size
   - Benefits
   - Things to avoid
   - Nutrition breakdown

::: info Diet Plan Renewal
Your diet plan will need to be renewed or modified after 28 days.
:::

## Advanced Features

### Refer & Earn Program
```
Home > Invite & Earn Button
```

1. Share your referral link with friends
2. Track your total successful referrals
3. When friends sign up using your link:
   - Both you and your friend get 2 weeks of Premium Plan
   - Get 1 month Premium for 5 successful referrals
   - Get 3 months Premium for 10 successful referrals
4. View FAQs about the referral program
5. Receive notifications for successful referrals

### Meal Management

#### Delete Meals
```
Home > Long Press Meal Item > Delete > Confirm Delete
```

#### Copy Meals to Today
```
Home > Long Press Meal Item > Copy to Today
```
- Useful for repeated meals to avoid scanning again
- Confirmation message appears when completed

### Talk with AI Nutritionist Monika (Premium/Track Plans)
```
Home > Call Button
```

1. Grant microphone permission if prompted
2. Ask any nutrition-related questions
3. Receive AI-powered responses from Monika

### Share Your Food Timeline
```
Home > Bottom Nav Profile > Share Food Timeline
```

1. Give a name to your gallery
2. Submit to create a public timeline
3. Copy the URL to share with others

### Insights Dashboard
```
Home > Insights Widget
```

1. View meal logging NutriScore colors in monthly calendar view
2. Click on specific days to see nutrition breakdowns
3. Swipe between months
4. View nutrition metrics by:
   - Month (e.g., Total March)
   - Last 7 days
   - Today
5. View city map (requires location permission)

## Navigation Guide

### Main Navigation

NutriScan uses a bottom navigation bar with four main sections:

| Icon | Section | Description |
|------|---------|-------------|
| 🏠 | **Home** | Daily tracking, meal history, and insights |
| 💬 | **NutriBites** | AI-powered meal questions and insights |
| 🍽️ | **Diet Plan** | Personalized meal plans (Premium) |
| 👤 | **Profile** | Account settings and preferences |

### Profile Section Options
```
Home > Bottom Nav Profile
```

- Edit Profile
- Share Food Timeline
- About NutriScan
- Contact Us
- App Contributors
- Invite & Earn
- Logout
- App Version (Bundle ID)

### Subscription Management
```
Home > Upgrade Button
```

1. Select subscription type:
   - Track
   - Premium
2. Complete the payment process
3. View success, waiting, or failed screen based on payment status
4. For active plans:
   - View highlighted plan with valid date
   - Cancel subscription (requires completing a survey before going to app store management)
   - Change subscription plan type

## Troubleshooting

### Common Issues

- **Camera not working**: Ensure camera permissions are granted
- **Meal not recognized**: Try better lighting or a different angle
- **App crashes**: Ensure your device meets minimum requirements
- **Payment issues**: Check your payment method details
- **Location features not working**: Verify location permissions are granted

### Support Resources

If you encounter problems:

1. **In-app help**: Profile > Contact Us
   - Submit a message
   - Get a success confirmation
   - Join the community
   - Visit FAQs

2. **Email support**: support@nutriscan.app
3. **Community forum**: [community.nutriscan.app](https://community.nutriscan.app)
4. **FAQs**: Profile > About NutriScan > FAQs

::: info App Version
You can find your app version at the bottom of the Profile screen to reference when seeking support.
:::