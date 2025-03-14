# Insights - Track Your Nutritional Journey

## Overview

The Insights feature provides a comprehensive analysis of your nutritional habits over time, allowing you to visualize patterns, track progress, and gain valuable perspective on your dietary choices. This powerful analytics dashboard transforms your individual meal data into actionable insights that help you make informed decisions about your nutrition.

:::tip VISUAL NUTRITION TRACKING
Insights offers both calendar and map views, giving you multiple ways to understand your nutritional journey at a glance!
:::

## Calendar View

The calendar view is your daily nutritional diary, providing a visual representation of your meal quality over time.

### Understanding the Calendar

<div class="feature-highlight">
  <div class="feature-image">
    <img src="/images/insights/insights-calendar.webp" alt="Calendar View in Insights showing color-coded days representing nutritional quality" />
  </div>
  <div class="feature-description">
    <h4>Color-Coded Days</h4>
    <p>Each day in the calendar is color-coded according to your average NutriScore for that day:</p>
    <ul>
      <li><span class="dark-green-dot"></span> Dark Green (A): Excellent nutritional day</li>
      <li><span class="light-green-dot"></span> Light Green (B): Very good nutritional day</li>
      <li><span class="yellow-dot"></span> Yellow (C): Moderate nutritional day</li>
      <li><span class="orange-dot"></span> Orange (D): Below optimal nutrition</li>
      <li><span class="red-dot"></span> Red (E): Poor nutritional day</li>
    </ul>
  </div>
</div>

<style>
.feature-highlight {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
}
.feature-image {
  flex: 1;
  min-width: 250px;
}
.feature-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.placeholder-image {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  color: #aaa;
  border: 2px dashed #444;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.placeholder-image p {
  margin: 5px 0;
}
.feature-description {
  flex: 2;
  min-width: 250px;
}
.dark-green-dot, .light-green-dot, .yellow-dot, .orange-dot, .red-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
}
.dark-green-dot { background-color: #1a7c3b; }
.light-green-dot { background-color: #57b757; }
.yellow-dot { background-color: #ffc107; }
.orange-dot { background-color: #fd7e14; }
.red-dot { background-color: #dc3545; }
</style>

### Interacting with the Calendar

The calendar view is designed for intuitive interaction:

1. **Tap Any Day**: Reveals a detailed breakdown of all meals logged that day
2. **Swipe Left/Right**: Navigate between months to see your long-term patterns
3. **Empty Days**: Days without recorded meals appear without color
4. **Current Day**: Highlighted with a circular border

### Daily Breakdown

When you tap on a specific day, you'll see:

- **Meal Count**: Total number of meals logged that day
- **Individual Meals**: Each meal with its time, name, and NutriScore
- **Daily Average**: Your overall nutritional score for the day
- **Nutrient Summary**: Key nutrient totals across all meals that day

## Nutritional Metrics

The Insights dashboard provides critical metrics to help you understand your nutritional patterns:

### Time-Based Analytics

View your nutritional data aggregated across different time periods:

<div class="metrics-table">
  <table>
    <thead>
      <tr>
        <th>Time Period</th>
        <th>Available Metrics</th>
        <th>Benefits</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Daily</td>
        <td>
          <ul>
            <li>Calorie intake</li>
            <li>Macronutrient breakdown</li>
            <li>NutriScore average</li>
          </ul>
        </td>
        <td>Helps identify day-to-day fluctuations and immediate patterns</td>
      </tr>
      <tr>
        <td>Weekly</td>
        <td>
          <ul>
            <li>Average daily calories</li>
            <li>Macronutrient percentages</li>
            <li>Meal consistency score</li>
          </ul>
        </td>
        <td>Perfect for spotting weekend vs. weekday differences</td>
      </tr>
      <tr>
        <td>Monthly</td>
        <td>
          <ul>
            <li>Nutritional trend lines</li>
            <li>Most common meal types</li>
            <li>Progress toward goals</li>
          </ul>
        </td>
        <td>Reveals longer-term habits and gradual improvements</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.metrics-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
.metrics-table th, .metrics-table td {
  padding: 12px;
  border: 1px solid #444;
}
.metrics-table th {
  background-color: #333;
}
.metrics-table ul {
  margin: 0;
  padding-left: 20px;
}
</style>

### Progress Tracking

For users with specific goals (available in Track and Premium plans):

- **Goal Alignment**: Percentage of meals that align with your stated goals
- **Consistency Score**: How regularly you maintain your target nutritional values
- **Improvement Rate**: The rate at which your NutriScores are improving

## Location Map

The Location Map feature provides a geographical view of your eating habits, helping you understand how location affects your nutrition.

:::warning PERMISSION REQUIRED
The Location Map requires location permissions. You'll be prompted to grant these permissions when accessing this feature for the first time.
:::

### Map Features

<div class="feature-highlight">
  <div class="feature-image">
    <img src="/images/insights/insights-map.webp" alt="Location Map in Insights showing meal pins and nutritional quality by location" />
  </div>
  <div class="feature-description">
    <h4>Visualizing Your Meals Geographically</h4>
    <p>The Location Map displays:</p>
    <ul>
      <li>Colored pins representing individual meals at their logged locations</li>
      <li>Pin colors match the NutriScore of each meal</li>
      <li>Cluster indicators for areas with multiple meals</li>
      <li>"Heat zones" showing nutritional quality by area (Premium Plan only)</li>
    </ul>
  </div>
</div>

### Using the Map View

The map view offers several interactive features:

1. **Tap Any Pin**: View meal details directly from the map
2. **Filter By Date**: Show meals from specific time periods
3. **Filter By Score**: Focus on high-scoring or low-scoring meals
4. **Zoom Control**: Pinch to zoom in/out for different levels of detail

### Location Insights (Premium Plan)

Premium users gain access to advanced location analytics:

- **Venue Analysis**: See which restaurants or locations consistently provide higher or lower nutritional quality
- **Area Comparison**: Compare the nutritional quality of meals in different neighborhoods or cities
- **Trend Mapping**: Visualize how your nutritional choices vary by location over time

## Customizing Your Insights

Tailor the Insights dashboard to focus on what matters most to you:

### Available Customizations

- **Default View**: Choose whether to open Insights in Calendar or Map view
- **Metric Priority**: Select which metrics appear at the top of your dashboard
- **Time Period**: Set your preferred default time period for viewing data
- **Goal Focus**: Highlight metrics related to your specific health objectives

### Setting Up Customizations

To customize your Insights view:

1. Open the Insights tab
2. Tap the gear icon in the top-right corner
3. Select "Customize Dashboard"
4. Adjust settings to your preference
5. Tap "Save" to apply your changes

## Sharing and Exporting Insights

Premium and Track plan users can share and export their nutritional data:

### Sharing Options

- **Progress Snapshot**: Share a visual summary of your nutritional progress
- **Weekly/Monthly Report**: Generate and share a detailed nutritional report
- **Individual Day**: Share the nutritional breakdown of a specific day

### Export Formats

- **PDF Report**: Comprehensive nutritional analysis with charts and recommendations
- **CSV Data**: Raw nutritional data for use in spreadsheets or other apps
- **Image Gallery**: Visual representations of your key metrics and progress

## Frequently Asked Questions

<details>
<summary>Can I see insights without a premium subscription?</summary>

Yes, all users have access to the basic Insights features:

- Calendar view with color-coded days
- Ability to view daily meal breakdowns
- Basic weekly summaries

However, premium features like detailed analytics, location heat maps, and data export require a Track or Premium subscription.
</details>

<details>
<summary>How is my daily NutriScore calculated?</summary>

Your daily NutriScore is calculated as a weighted average of all meals logged that day, with the following considerations:

- Larger meals have more impact on the daily score than small snacks
- Missing meals may impact the calculation (e.g., skipping breakfast)
- If you log multiple versions of the same meal (e.g., before and after adding ingredients), only the final version is counted

This provides a fair representation of your overall nutritional intake for the day.
</details>

<details>
<summary>Why does the location map show my meals in slightly different locations than where I ate them?</summary>

Several factors can affect location accuracy:

1. **GPS Accuracy**: Your phone's GPS has a typical accuracy range of 3-5 meters
2. **Indoor Locations**: GPS accuracy is reduced when indoors
3. **Battery Saving**: If your device uses battery-saving location services, accuracy may be reduced
4. **Manual Logging**: For manually logged meals (not scanned in real-time), location is based on where you logged the meal, not necessarily where you ate it

For the most accurate location data, ensure your device has:
- High-accuracy location services enabled
- Permission granted for the app to access your location "While Using the App"
</details>

<details>
<summary>Can I hide certain meals from appearing in my Insights?</summary>

Yes, you can exclude specific meals from your Insights calculations:

1. Go to the meal details page for the meal you want to exclude
2. Tap the three-dot menu in the top-right corner
3. Select "Exclude from Insights"
4. The meal will remain in your timeline but won't affect your statistics or appear on the map

This is useful for special occasions or meals that aren't representative of your regular eating habits.
</details>

## Troubleshooting

### Common Issues

<div class="troubleshooting">
  <div class="issue">
    <h4>No Data Appearing in Calendar</h4>
    <p><strong>Possible causes:</strong></p>
    <ul>
      <li>No meals have been logged in the selected time period</li>
      <li>App data may need to be refreshed</li>
    </ul>
    <p><strong>Solutions:</strong></p>
    <ul>
      <li>Log a meal to see it appear in the calendar</li>
      <li>Pull down on the screen to refresh the data</li>
      <li>Check your internet connection</li>
    </ul>
  </div>
  
  <div class="issue">
    <h4>Location Map Not Loading</h4>
    <p><strong>Possible causes:</strong></p>
    <ul>
      <li>Location permissions not granted</li>
      <li>Poor internet connectivity</li>
      <li>Location services disabled on device</li>
    </ul>
    <p><strong>Solutions:</strong></p>
    <ul>
      <li>Check app permissions in your device settings</li>
      <li>Enable location services for the app</li>
      <li>Ensure you have a stable internet connection</li>
    </ul>
  </div>
</div>

<style>
.troubleshooting {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
.issue {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.issue h4 {
  margin-top: 0;
  color: #ff6b6b;
}
</style>

### Data Discrepancies

If you notice discrepancies in your data:

1. **Check for Excluded Meals**: Verify if you've excluded any meals from Insights
2. **Time Zone Issues**: If you've traveled across time zones, meal timestamps may appear differently
3. **Sync Status**: Ensure your app has fully synced with the server (check for the sync icon in the top bar)
4. **App Version**: Make sure you're running the latest version of the app

## Getting the Most from Insights

### Best Practices

For the most valuable insights from this feature:

1. **Log Consistently**: Record all your meals to get the most accurate picture
2. **Use Real-Time Scanning**: Scan meals when you eat them for accurate location and time data
3. **Set Clear Goals**: Define your nutritional goals to make the progress metrics more meaningful
4. **Review Weekly**: Take a few minutes each week to review your patterns and identify areas for improvement
5. **Compare Time Periods**: Use the comparison feature to see how your nutrition changes over time

### Premium Features

Upgrade to Track or Premium plan to unlock advanced Insights capabilities:

- **Nutrient Correlation**: See how specific nutrients affect your energy levels and other metrics
- **Meal Timing Analysis**: Understand how meal timing impacts your nutritional patterns
- **Custom Reports**: Generate personalized reports focused on your specific health goals
- **Smart Recommendations**: Receive AI-powered suggestions for improving your nutritional habits based on your data

:::tip UNLOCK FULL POTENTIAL
Track and Premium subscribers have access to 12 months of historical data, compared to 30 days for free users. This expanded history provides much more powerful trend analysis!
:::

## Need More Help?

If you have questions about your Insights or need assistance interpreting your data:

1. Tap the Info icon (i) in the top-right corner of the Insights screen for contextual help
2. Chat with Monika, our AI nutritionist, for personalized guidance (Track and Premium plans)
3. Visit the Support section in the app for additional resources
4. Contact our support team through Home > Profile tab > Contact Us 