export function createTripPrompt(days, budget, numberOfPeople, tripType, cityName) {
    const dailyBudget = (budget / days).toFixed(2);
    const lowerBudgetLimit = (budget * 0.95).toFixed(2);
    const upperBudgetLimit = (budget * 1.05).toFixed(2);

    let content = `Generate a detailed ${days}-day itinerary for a ${tripType} trip in ${cityName} for ${numberOfPeople} people. 
                The total trip budget is ${budget} dollars, with an average daily budget of ${dailyBudget} dollars.
                Ensure the total cost for the trip stays within 95% to 105% of the overall budget, meaning it should be between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.
                The budget provided should be used effectively for ${numberOfPeople} people without much leftover.
                Please provide activities, meals, and experiences for each day, considering the group size. 
                Break each day into morning, afternoon, and evening segments. 
                Provide approximate costs for each day, and make sure no days are left empty.
                State the cost of the whole day just once on each day.
                Make the plans in a way that the estimated total cost for the trip is very close to the given budget, ideally between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.

                Ensure the format is strictly:

                Day X:\n
                Morning: [Activity and cost]\n
                Afternoon: [Activity and cost]\n
                Evening: [Activity and cost]\n
                Total Cost for Day X: [total cost]\n

                Do not provide more than ${days} days in total.`;

    if (tripType === "family") {
        content = `Generate a detailed ${days}-day family-friendly itinerary in ${cityName} for ${numberOfPeople} people. 
                The total trip budget is ${budget} dollars, with an average daily budget of ${dailyBudget} dollars. 
                Include activities suitable for children, affordable dining, and safe accommodations. 
                For each day, break it into morning, afternoon, and evening segments with activities for kids and families.
                Ensure the budget is used effectively for ${numberOfPeople} people, and the estimated total cost falls between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.
                State the cost of the whole day just once on each day.
                Make the plans in a way that the estimated total cost for the trip is very close to the given budget.

                Follow the format:

                Day X:\n
                Morning: [Activity and cost]\n
                Afternoon: [Activity and cost]\n
                Evening: [Activity and cost]\n
                Total Cost for Day X: [total cost]\n

                Do not provide more than ${days} days in total.`;
    } else if (tripType === "couple") {
        content = `Generate a detailed ${days}-day romantic itinerary for a couple in ${cityName}. 
                The total trip budget is ${budget} dollars, with an average daily budget of ${dailyBudget} dollars.
                Include romantic activities, scenic views, and intimate dining experiences. 
                Break each day into morning, afternoon, and evening plans. Provide approximate costs for each day.
                Ensure that the budget is used effectively for the couple, and the estimated total cost falls between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.
                Make the plans in a way that the estimated total cost for the trip is very close to the given budget.

                Follow the format:

                Day X:\n
                Morning: [Activity and cost]\n
                Afternoon: [Activity and cost]\n
                Evening: [Activity and cost]\n
                Total Cost for Day X: [total cost]\n

                Do not provide more than ${days} days in total.`;
    } else if (tripType === "friends") {
        content = `Generate a detailed ${days}-day fun itinerary for a group of friends (${numberOfPeople} people) in ${cityName}. 
                The total trip budget is ${budget} dollars, with an average daily budget of ${dailyBudget} dollars.
                Include group activities, social hangouts, and nightlife. Break each day into morning, afternoon, and evening segments.
                Provide approximate costs for each day, ensuring the budget is used effectively for ${numberOfPeople} friends and that the estimated total cost falls between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.
                Ensure each day is filled with activities without gaps.
                Make the plans in a way that the estimated total cost for the trip is very close to the given budget.

                Follow the format:

                Day X:\n
                Morning: [Activity and cost]\n
                Afternoon: [Activity and cost]\n
                Evening: [Activity and cost]\n
                Total Cost for Day X: [total cost]\n

                Do not provide more than ${days} days in total.`;
    } else if (tripType === "solo") {
        content = `Generate a detailed ${days}-day itinerary for a solo traveler in ${cityName}. 
                The total trip budget is ${budget} dollars, with an average daily budget of ${dailyBudget} dollars.
                Include activities like exploring local culture, visiting landmarks, and dining experiences for one.
                Each day should be broken into morning, afternoon, and evening segments. Provide approximate costs for each day and ensure no days are left empty.
                Make the plans in a way that the estimated total cost for the trip falls between ${lowerBudgetLimit} and ${upperBudgetLimit} dollars.

                Follow the format:

                Day X:\n
                Morning: [Activity and cost]\n
                Afternoon: [Activity and cost]\n
                Evening: [Activity and cost]\n
                Total Cost for Day X: [total cost]\n

                Do not provide more than ${days} days in total.`;
    }
    return content;
}



export const tripInputValidator = (req, res, next) => {
    const { days, budget, numberOfPeople, tripType } = req.body;

    if (!days || isNaN(days) || days <= 0 || !Number.isInteger(Number(days)) || days > 10) {
        return res.status(400).json({ error: "Days must be a positive integer number between 1 and 10." });
    }

    if (!budget || isNaN(budget) || budget <= 0 || budget > 20000) {
        return res.status(400).json({ error: "Budget must be a positive number between 1 and 20000." });
    }

    if (!numberOfPeople || isNaN(numberOfPeople) || numberOfPeople <= 0 || !Number.isInteger(Number(numberOfPeople)) || numberOfPeople > 10) {
        return res.status(400).json({ error: "Number of people must be a positive integer number between 1 and 10." });
    }

    const validTripTypes = ["family", "couple", "friends", "solo"];
    if (!validTripTypes.includes(tripType)) {
        return res.status(400).json({ error: "There is no such trip type" });
    }

    next();
};

