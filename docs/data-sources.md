# Data Sources for Nutritional Values

At NutriScan, providing accurate and reliable nutritional information is paramount. We utilize a multi-faceted approach to ensure the data you receive is as precise as possible, powering key features throughout the app.

Our methodology combines several high-quality sources:

1.  **Advanced Internet Search:** For unique, regional, or newly available food products, our systems perform targeted, high-quality searches across reputable online sources to gather the necessary nutritional information.
2.  **OpenAI API Integration:** We leverage the power of the OpenAI API for several critical tasks:
    *   **Analyzing Scanned Meals:** Helping to identify complex food items within an image and understand the context of the meal.
    *   **Cross-Referencing Data:** Validating information found across different sources for improved accuracy.
    *   **Powering Diet Plans:** Assisting in processing user preferences and health goals to generate personalized meal recommendations and nutritional targets.
    *   **Enhancing NutriBites:** Understanding user queries about their meal history to provide relevant insights.

This robust combination allows us to provide reliable nutritional breakdowns across various app features:

*   **Scanned Meals (`Process Meal Scan` & `Nutrition Details Page`):** When you scan a meal, image analysis identifies food items. Our system then queries the integrated data sources (primarily advanced search and OpenAI analysis) to retrieve macronutrients (Calories, Protein, Carbs, Fat), top micronutrients (like Fiber, Potassium, Calcium), and calculate the NutriScore. The process includes checks to handle non-food images or potential content filtering issues.
*   **Manually Logged Foods & Edits (`Nutrition Details Page`):** When you manually log food, add missing items to a scanned meal, or adjust portion sizes, the app queries the same data sources to find and display the relevant nutritional information.
*   **Personalized Diet Plans (`Diet plan` - Premium Feature):** Generating a diet plan involves combining your detailed profile (preferences, goals, restrictions, etc.) with our nutritional data retrieval methods. An LLM, primarily powered by OpenAI, processes this information to create daily macro/micronutrient targets and suggest specific meals with detailed breakdowns (recipes, portion sizes, benefits).
*   **Insights & NutriBites (`Insights`, `NutriBites`):** Features like the monthly calendar view (showing NutriScore colors), daily nutritional breakdowns, and answers provided by NutriBites rely on querying and aggregating the historical nutritional data logged or scanned by the user.

By integrating these diverse and high-quality sources, NutriScan aims to deliver trustworthy, comprehensive nutritional insights for all types of food consumption, helping you make informed dietary choices and effectively track your progress towards your health goals. 