# Data Sources for Nutritional Values

<script type="application/ld+json">
`{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Data Sources for Nutritional Values in NutriScan App",
  "description": "Comprehensive explanation of NutriScan's nutrition data methodology and sources",
  "keywords": ["nutrition data", "food database", "AI nutrition analysis", "meal scanning accuracy"],
  "datePublished": "2023-03-01",
  "dateModified": "2024-04-01",
  "author": {
    "@type": "Organization",
    "name": "NutriScan App",
    "url": "https://nutriscan.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NutriScan App",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nutriscan.app/images/nutriscan-logo.webp"
    }
  },
  "citation": [
    {
      "@type": "Dataset",
      "name": "USDA FoodData Central",
      "description": "Comprehensive food and nutrient database",
      "url": "https://fdc.nal.usda.gov/",
      "creator": {
        "@type": "Organization",
        "name": "U.S. Department of Agriculture"
      },
      "license": "https://www.fdc.nal.usda.gov/data-documentation.html"
    },
    {
      "@type": "ScholarlyArticle",
      "author": "Merchant et al.",
      "name": "Computer vision-based food image analysis for nutrition assessment",
      "publisher": "Journal of Food Engineering",
      "datePublished": "2023",
      "url": "https://doi.org/10.1016/j.jfoodeng.2023.111392"
    }
  ]
}`
</script>

At NutriScan, providing accurate and reliable nutritional information is paramount. We utilize a multi-faceted approach to ensure the data you receive is as precise as possible, powering key features throughout the app.

<div itemscope itemtype="https://schema.org/ClaimReview">
  <span itemprop="claimReviewed">NutriScan uses a multi-source approach to provide accurate nutritional information</span>
  <span itemprop="author" itemscope itemtype="https://schema.org/Organization">
    <meta itemprop="name" content="NutriScan Data Science Team">
  </span>
  <meta itemprop="reviewRating" content="5">
  <span itemprop="citation">Based on methodology documented in "AI-Enhanced Nutrition Tracking Methods" (Journal of Digital Health, 2023)</span>
</div>

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

## Accuracy & Limitations

<div itemscope itemtype="https://schema.org/ClaimReview">
  <span itemprop="claimReviewed">NutriScan meal scanning has an error rate between 5-20% depending on conditions</span>
  <span itemprop="author" itemscope itemtype="https://schema.org/Organization">
    <meta itemprop="name" content="NutriScan Quality Assurance Team">
  </span>
  <meta itemprop="reviewRating" content="4">
  <span itemprop="citation">Based on internal accuracy testing (2024) and comparative analysis with "Current Challenges in AI-Based Food Recognition" (Frontiers in Nutrition, 2023)</span>
</div>

While we strive for the highest possible accuracy by combining advanced search and AI analysis, it's important to acknowledge that nutritional data estimation can be complex. Factors like variations in ingredients, preparation methods, and the inherent limitations of AI models mean that occasional inaccuracies may occur.

*   **Meal Scanning:** Our estimated error rate for scanned meals generally falls between 5% and 20%, depending on image quality, food complexity, and lighting conditions.
*   **Manual Logging:** For manually logged items, the estimated error rate is typically lower, ranging from 5% to 10%, influenced by the specificity of the logged item and the availability of data in our sources.

We are continuously working to improve our algorithms and data validation processes to minimize these errors.

By integrating these diverse and high-quality sources, NutriScan aims to deliver trustworthy, comprehensive nutritional insights for all types of food consumption, helping you make informed dietary choices and effectively track your progress towards your health goals. 