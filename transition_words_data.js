// This file defines the quiz data for Transition Words Practice

const quizData = [
    // --- CELPIP Relevant Transition Words Examples ---
    // Categories: Contrast, Addition, Cause/Effect, Sequence, Emphasis, Example, Summary

    // --- Contrast ---
    {
        id: 1,
        text: "The city offers many job opportunities; {CHOICE}, the cost of living is very high.",
        options: ["however", "therefore", "furthermore"],
        correctAnswer: "however",
        explanation: "'However' introduces a contrasting idea to what has just been stated."
    },
    {
        id: 2,
        text: "He enjoys living in the countryside. {CHOICE}, his wife prefers the city.",
        options: ["On the other hand", "As a result", "In addition"],
        correctAnswer: "On the other hand",
        explanation: "'On the other hand' presents a contrasting point of view or fact."
    },
    {
        id: 3,
        text: "She studied very hard for the test; {CHOICE}, she didn't perform as well as she had hoped.",
        options: ["nevertheless", "consequently", "similarly"],
        correctAnswer: "nevertheless",
        explanation: "'Nevertheless' (or nonetheless) is used to introduce a statement that contrasts with something that has just been said, implying 'in spite of that'."
    },
    {
        id: 4,
        text: "Public transportation is efficient in this city. {CHOICE}, it can be very crowded during peak hours.",
        options: ["Even so", "Therefore", "For example"],
        correctAnswer: "Even so",
        explanation: "'Even so' is used to introduce a fact or opinion that is surprising or seems to contradict what was just said."
    },
    {
        id: 5,
        text: "{CHOICE} its small size, the apartment feels quite spacious due to its clever design.",
        options: ["Despite", "Because of", "In addition to"],
        correctAnswer: "Despite",
        explanation: "'Despite' (or 'In spite of') is a preposition used to show contrast, followed by a noun or -ing form."
    },
    {
        id: 6,
        text: "The proposal has many benefits. {CHOICE}, there are also some significant drawbacks to consider.",
        options: ["Conversely", "Hence", "Moreover"],
        correctAnswer: "Conversely",
        explanation: "'Conversely' is used to introduce an idea that is the opposite of, or contrasts with, the previous one."
    },
    {
        id: 7,
        text: "He claims to be a team player; {CHOICE}, his actions often suggest otherwise.",
        options: ["yet", "so", "thus"],
        correctAnswer: "yet",
        explanation: "'Yet' is used as a conjunction to introduce a contrasting idea, similar to 'but'."
    },
    {
        id: 8,
        text: "{CHOICE} the advantages of working from home, some people miss the social interaction of an office.",
        options: ["While", "Because", "Since"],
        correctAnswer: "While",
        explanation: "'While' (or 'Although', 'Though') can introduce a subordinate clause that presents a contrast or concession."
    },
    {
        id: 9,
        text: "The marketing campaign was expensive. {CHOICE}, its impact on sales was minimal.",
        options: ["Nonetheless", "Therefore", "Besides"],
        correctAnswer: "Nonetheless",
        explanation: "'Nonetheless' is similar to 'nevertheless', introducing a contrasting point despite what was just mentioned."
    },
    {
        id: 10,
        text: "Many people are moving to urban areas; {CHOICE}, a growing number are seeking a quieter life in rural settings.",
        options: ["in contrast", "as a result", "for instance"],
        correctAnswer: "in contrast",
        explanation: "'In contrast' explicitly highlights a difference between two things or situations."
    },

    // --- Addition ---
    {
        id: 11,
        text: "The new community center will have a gym and a swimming pool. {CHOICE}, it will offer various classes for all ages.",
        options: ["Furthermore", "However", "Consequently"],
        correctAnswer: "Furthermore",
        explanation: "'Furthermore' (or 'Moreover', 'In addition') adds another piece of information or argument."
    },
    {
        id: 12,
        text: "You need to complete the application form. {CHOICE}, you must submit two letters of recommendation.",
        options: ["In addition", "On the contrary", "Therefore"],
        correctAnswer: "In addition",
        explanation: "'In addition' is used to add another item to what has already been mentioned."
    },
    {
        id: 13,
        text: "The report highlights the economic benefits. {CHOICE}, it discusses the environmental impact.",
        options: ["Moreover", "Nevertheless", "Hence"],
        correctAnswer: "Moreover",
        explanation: "'Moreover' adds more information that supports or develops the previous point."
    },
    {
        id: 14,
        text: "He is a talented musician; {CHOICE}, he is an excellent painter.",
        options: ["also", "yet", "so"],
        correctAnswer: "also",
        explanation: "'Also' is a common way to add another fact or idea."
    },
    {
        id: 15,
        text: "The company provides health insurance and paid vacation. {CHOICE}, employees receive an annual bonus.",
        options: ["Besides", "However", "Thus"],
        correctAnswer: "Besides",
        explanation: "'Besides' means 'in addition to' or 'as well'."
    },
    {
        id: 16,
        text: "To prepare for the CELPIP writing task, practice organizing your ideas; {CHOICE}, work on your grammar and vocabulary.",
        options: ["additionally", "otherwise", "consequently"],
        correctAnswer: "additionally",
        explanation: "'Additionally' is a formal way to add more information."
    },
    {
        id: 17,
        text: "The park is a great place for picnics. {CHOICE}, it has excellent walking trails.",
        options: ["What's more", "Nevertheless", "Therefore"],
        correctAnswer: "What's more",
        explanation: "'What's more' is an informal way to add a surprising or important piece of information."
    },
    {
        id: 18,
        text: "The project requires careful planning. {CHOICE}, it needs sufficient funding.",
        options: ["Likewise", "Nonetheless", "However"],
        correctAnswer: "Likewise", // Can be used for addition of a similar idea or comparison.
        explanation: "'Likewise' can indicate that something similar applies or is also true."
    },
    {
        id: 19,
        text: "She enjoys reading novels. {CHOICE}, she is interested in historical biographies.",
        options: ["Similarly", "Conversely", "Therefore"],
        correctAnswer: "Similarly",
        explanation: "'Similarly' is used to show that two ideas or facts are alike."
    },
    {
        id: 20,
        text: "The proposed solution is cost-effective. {CHOICE} point is its ease of implementation.",
        options: ["Another", "A contrasting", "A final"],
        correctAnswer: "Another",
        explanation: "'Another point' introduces an additional, distinct idea or argument."
    },

    // --- Cause/Effect & Result ---
    {
        id: 21,
        text: "The company invested heavily in new technology; {CHOICE}, its productivity increased significantly.",
        options: ["as a result", "however", "furthermore"],
        correctAnswer: "as a result",
        explanation: "'As a result' (or 'Consequently', 'Therefore') indicates the outcome or effect of a previous action."
    },
    {
        id: 22,
        text: "There was a major power outage. {CHOICE}, many businesses had to close for the day.",
        options: ["Consequently", "Nevertheless", "Meanwhile"],
        correctAnswer: "Consequently",
        explanation: "'Consequently' shows that the second statement is a result of the first."
    },
    {
        id: 23,
        text: "He missed the train; {CHOICE}, he was late for the meeting.",
        options: ["therefore", "in contrast", "moreover"],
        correctAnswer: "therefore",
        explanation: "'Therefore' signifies a logical consequence or result."
    },
    {
        id: 24,
        text: "The demand for eco-friendly products has grown. {CHOICE}, many companies are developing sustainable alternatives.",
        options: ["Thus", "Yet", "Besides"],
        correctAnswer: "Thus",
        explanation: "'Thus' (or 'Hence') is a more formal way to indicate a result or conclusion."
    },
    {
        id: 25,
        text: "The instructions were unclear; {CHOICE}, many participants made errors.",
        options: ["for this reason", "despite this", "in addition"],
        correctAnswer: "for this reason",
        explanation: "'For this reason' clearly links the cause (unclear instructions) to the effect (errors)."
    },
    {
        id: 26,
        text: "She didn't understand the question; {CHOICE}, she asked for clarification.",
        options: ["so", "but", "and"],
        correctAnswer: "so",
        explanation: "'So' is a common conjunction used to show a result or consequence."
    },
    {
        id: 27,
        text: "{CHOICE} the heavy rain, the outdoor event was cancelled.",
        options: ["Due to", "Although", "In spite of"],
        correctAnswer: "Due to",
        explanation: "'Due to' (or 'Because of', 'Owing to') is a prepositional phrase that indicates the cause of something."
    },
    {
        id: 28,
        text: "The team worked tirelessly on the project. {CHOICE}, their efforts were rewarded with success.",
        options: ["Accordingly", "Conversely", "Nevertheless"],
        correctAnswer: "Accordingly",
        explanation: "'Accordingly' means in a way that is appropriate to the particular circumstances or that follows logically."
    },
    {
        id: 29,
        text: "The cost of raw materials has increased. {CHOICE}, the price of the final product will also rise.",
        options: ["Hence", "However", "Furthermore"],
        correctAnswer: "Hence",
        explanation: "'Hence' is a formal transition indicating a direct result or inference."
    },
    {
        id: 30,
        text: "The company failed to adapt to market changes, {CHOICE} leading to its decline.",
        options: ["thereby", "although", "additionally"],
        correctAnswer: "thereby",
        explanation: "'Thereby' means 'by that means' or 'as a result of that', often followed by an -ing verb."
    },

    // --- Sequence & Time ---
    {
        id: 31,
        text: "{CHOICE}, I would like to thank the organizers for this opportunity.",
        options: ["First of all", "However", "As a result"],
        correctAnswer: "First of all",
        explanation: "'First of all' (or 'Firstly', 'To begin with') is used to introduce the first point in a series."
    },
    {
        id: 32,
        text: "We discussed the budget. {CHOICE}, we moved on to the marketing strategy.",
        options: ["Next", "Finally", "In contrast"],
        correctAnswer: "Next",
        explanation: "'Next' (or 'Then', 'Subsequently') indicates the following step or item in a sequence."
    },
    {
        id: 33,
        text: "{CHOICE}, I will summarize the main arguments presented today.",
        options: ["Finally", "Initially", "Meanwhile"],
        correctAnswer: "Finally",
        explanation: "'Finally' (or 'Lastly', 'In conclusion') signals the last point or the end of a discussion."
    },
    {
        id: 34,
        text: "He was working on his report. {CHOICE}, his colleague was making phone calls.",
        options: ["Meanwhile", "Consequently", "Therefore"],
        correctAnswer: "Meanwhile",
        explanation: "'Meanwhile' indicates that something else is happening at the same time."
    },
    {
        id: 35,
        text: "The problem was identified. {CHOICE}, a solution was implemented.",
        options: ["Subsequently", "Previously", "However"],
        correctAnswer: "Subsequently",
        explanation: "'Subsequently' means 'after that' or 'later on'."
    },
    {
        id: 36,
        text: "{CHOICE} the meeting, several important decisions were made.",
        options: ["During", "Before", "Afterwards"],
        correctAnswer: "During",
        explanation: "'During' specifies a period when something happens."
    },
    {
        id: 37,
        text: "She completed her undergraduate studies. {CHOICE}, she pursued a master's degree.",
        options: ["Afterwards", "Nevertheless", "Initially"],
        correctAnswer: "Afterwards",
        explanation: "'Afterwards' (or 'Later') indicates something that happens at a time subsequent to a previously mentioned time."
    },
    {
        id: 38,
        text: "{CHOICE}, the plan seemed feasible, but unforeseen challenges arose.",
        options: ["Initially", "Ultimately", "Consequently"],
        correctAnswer: "Initially",
        explanation: "'Initially' refers to the beginning or the first stage."
    },
    {
        id: 39,
        text: "The system will be upgraded. {CHOICE}, users may experience some temporary disruptions.",
        options: ["In the meantime", "As a result", "However"],
        correctAnswer: "In the meantime",
        explanation: "'In the meantime' (or 'Meanwhile') refers to the period between two events."
    },
    {
        id: 40,
        text: "Please read the instructions carefully {CHOICE} starting the test.",
        options: ["before", "after", "while"],
        correctAnswer: "before",
        explanation: "'Before' indicates a time preceding a particular event."
    },

    // --- Emphasis ---
    {
        id: 41,
        text: "The most important factor, {CHOICE}, is customer satisfaction.",
        options: ["indeed", "however", "therefore"],
        correctAnswer: "indeed",
        explanation: "'Indeed' is used to emphasize a statement or to confirm something already suggested."
    },
    {
        id: 42,
        text: "She is {CHOICE} a dedicated employee, always willing to help.",
        options: ["undoubtedly", "consequently", "alternatively"],
        correctAnswer: "undoubtedly",
        explanation: "'Undoubtedly' (or 'Certainly', 'Definitely') emphasizes that something is true or certain."
    },
    {
        id: 43,
        text: "This is a {CHOICE} critical issue that requires immediate attention.",
        options: ["particularly", "finally", "similarly"],
        correctAnswer: "particularly",
        explanation: "'Particularly' (or 'Especially') highlights something as being more important or notable than others."
    },
    {
        id: 44,
        text: "{CHOICE}, we must address the root cause of the problem, not just the symptoms.",
        options: ["Above all", "Nevertheless", "For instance"],
        correctAnswer: "Above all",
        explanation: "'Above all' means more than anything else; primarily."
    },
    {
        id: 45,
        text: "The team's performance was, {CHOICE}, outstanding.",
        options: ["in fact", "however", "therefore"],
        correctAnswer: "in fact",
        explanation: "'In fact' (or 'As a matter of fact') is used to emphasize the truth of an assertion, especially one that contrasts with what has been implied."
    },
    {
        id: 46,
        text: "It is {CHOICE} that all participants follow the safety guidelines.",
        options: ["essential", "additional", "optional"],
        correctAnswer: "essential",
        explanation: "'Essential' emphasizes something as being absolutely necessary or important."
    },
    {
        id: 47,
        text: "The manager {CHOICE} stressed the importance of punctuality.",
        options: ["repeatedly", "finally", "consequently"],
        correctAnswer: "repeatedly",
        explanation: "'Repeatedly' emphasizes that something happened many times."
    },
    {
        id: 48,
        text: "The findings of the study are {CHOICE} significant for future research.",
        options: ["highly", "merely", "alternatively"],
        correctAnswer: "highly",
        explanation: "'Highly' is an adverb used to emphasize the degree or extent of an adjective (like significant)."
    },
    {
        id: 49,
        text: "Let me {CHOICE} the main benefits of this approach.",
        options: ["reiterate", "contrast", "conclude"],
        correctAnswer: "reiterate",
        explanation: "'Reiterate' means to say something again or a number of times, typically for emphasis or clarity."
    },
    {
        id: 50,
        text: "The key takeaway, {CHOICE}, is the need for better communication.",
        options: ["in essence", "on the contrary", "for example"],
        correctAnswer: "in essence",
        explanation: "'In essence' means fundamentally or basically, used to emphasize the most important aspect."
    },

    // --- Example & Illustration ---
    {
        id: 51,
        text: "Many countries face environmental challenges; {CHOICE}, rising sea levels and deforestation.",
        options: ["for example", "however", "therefore"],
        correctAnswer: "for example",
        explanation: "'For example' (or 'For instance') introduces specific examples to illustrate a general point."
    },
    {
        id: 52,
        text: "There are several ways to improve your writing skills, {CHOICE}, reading widely and practicing regularly.",
        options: ["such as", "due to", "in contrast"],
        correctAnswer: "such as",
        explanation: "'Such as' is used to introduce examples."
    },
    {
        id: 53,
        text: "The company offers various employee benefits. {CHOICE}, they provide health insurance and retirement plans.",
        options: ["To illustrate", "Nevertheless", "Consequently"],
        correctAnswer: "To illustrate",
        explanation: "'To illustrate' means to give an example in order to make something clearer."
    },
    {
        id: 54,
        text: "Renewable energy sources, {CHOICE} solar and wind power, are becoming increasingly important.",
        options: ["namely", "however", "thus"],
        correctAnswer: "namely",
        explanation: "'Namely' is used to introduce more specific information or examples of what has just been mentioned."
    },
    {
        id: 55,
        text: "Consider the case of Japan, {CHOICE}, where politeness is highly valued in business interactions.",
        options: ["for instance", "therefore", "moreover"],
        correctAnswer: "for instance",
        explanation: "'For instance' is synonymous with 'for example'."
    },
    {
        id: 56,
        text: "Several factors contributed to the project's success; {CHOICE}, strong leadership and a dedicated team.",
        options: ["specifically", "although", "as a result"],
        correctAnswer: "specifically",
        explanation: "'Specifically' is used to pinpoint or give exact details or examples."
    },
    {
        id: 57,
        text: "Many technological advancements have changed our lives. {CHOICE} the internet, which has revolutionized communication.",
        options: ["Take", "Give", "Make"],
        correctAnswer: "Take",
        explanation: "'Take X, for example' is a common way to introduce an example."
    },
    {
        id: 58,
        text: "The CELPIP speaking section assesses various skills, {CHOICE} fluency, vocabulary, and pronunciation.",
        options: ["including", "excluding", "despite"],
        correctAnswer: "including",
        explanation: "'Including' is used to show that something is part of a larger group or list of examples."
    },
    {
        id: 59,
        text: "The survey revealed several areas for improvement. {CHOICE}, customer service response times need to be faster.",
        options: ["As an illustration", "On the contrary", "Therefore"],
        correctAnswer: "As an illustration",
        explanation: "'As an illustration' provides a concrete example of a general statement."
    },
    {
        id: 60,
        text: "Effective communication involves more than just words; {CHOICE}, body language and tone of voice play a significant role.",
        options: ["in other words", "to clarify", "for one thing"], // "For one thing" introduces one example or reason.
        correctAnswer: "for one thing",
        explanation: "'For one thing' is used to introduce one example or reason when more could be given."
    },

    // --- Summary & Conclusion ---
    {
        id: 61,
        text: "{CHOICE}, the evidence suggests that the new policy has been effective.",
        options: ["In conclusion", "However", "Furthermore"],
        correctAnswer: "In conclusion",
        explanation: "'In conclusion' (or 'To conclude', 'To sum up') signals that a summary or final statement is about to be made."
    },
    {
        id: 62,
        text: "{CHOICE}, regular exercise and a balanced diet are key to good health.",
        options: ["To summarize", "On the other hand", "For example"],
        correctAnswer: "To summarize",
        explanation: "'To summarize' (or 'In summary') indicates a brief restatement of the main points."
    },
    {
        id: 63,
        text: "{CHOICE}, the main argument is that technology can enhance learning if used appropriately.",
        options: ["In short", "Nevertheless", "Consequently"],
        correctAnswer: "In short",
        explanation: "'In short' (or 'Briefly') introduces a concise summary of what has been said."
    },
    {
        id: 64,
        text: "{CHOICE}, it is clear that further research is needed in this area.",
        options: ["Overall", "Initially", "Meanwhile"],
        correctAnswer: "Overall",
        explanation: "'Overall' means taking everything into account; generally."
    },
    {
        id: 65,
        text: "All factors considered, the committee decided to approve the project. {CHOICE}, it was deemed viable.",
        options: ["In essence", "Therefore", "Despite this"], // "Therefore" or "Thus" could also fit well. "In essence" for summary.
        correctAnswer: "Therefore", // As per the sentence structure this provides a logical conclusion based on "all factors considered".
        explanation: "'Therefore' indicates a logical conclusion drawn from the preceding statement."
    },
    {
        id: 66,
        text: "{CHOICE}, the data presented supports the initial hypothesis.",
        options: ["Thus", "However", "Additionally"],
        correctAnswer: "Thus",
        explanation: "'Thus' is used to indicate a logical conclusion or summary based on what has been stated."
    },
    {
        id: 67,
        text: "{CHOICE} the discussion, it can be said that teamwork is crucial for success.",
        options: ["To wrap up", "To begin", "To contrast"],
        correctAnswer: "To wrap up",
        explanation: "'To wrap up' is an informal way to signal the end or summary of a discussion."
    },
    {
        id: 68,
        text: "The presentation covered various aspects of climate change. {CHOICE}, the key message was the urgency of action.",
        options: ["Essentially", "Conversely", "For instance"],
        correctAnswer: "Essentially",
        explanation: "'Essentially' means 'in essence' or 'fundamentally', used here to summarize the core message."
    },
    {
        id: 69,
        text: "{CHOICE} remarks, I would like to express my gratitude to everyone involved.",
        options: ["In my final", "In my initial", "In contrasting"],
        correctAnswer: "In my final",
        explanation: "'In my final remarks' indicates the concluding part of a speech or presentation."
    },
    {
        id: 70,
        text: "Given all the evidence, the only logical {CHOICE} is that the defendant is innocent.",
        options: ["conclusion", "addition", "example"],
        correctAnswer: "conclusion",
        explanation: "'Conclusion' refers to a judgment or decision reached by reasoning."
    },

    // --- Clarification & Restatement ---
    {
        id: 71,
        text: "The system is quite complex; {CHOICE}, it has many interconnected parts.",
        options: ["in other words", "however", "therefore"],
        correctAnswer: "in other words",
        explanation: "'In other words' is used to explain something more clearly or in a different way."
    },
    {
        id: 72,
        text: "He is a polyglot. {CHOICE}, he speaks several languages fluently.",
        options: ["That is to say", "On the contrary", "As a result"],
        correctAnswer: "That is to say",
        explanation: "'That is to say' (or 'That is') is used to provide further explanation or clarification."
    },
    {
        id: 73,
        text: "The company aims to be carbon neutral. {CHOICE}, it plans to offset all its emissions.",
        options: ["To put it another way", "Nevertheless", "Consequently"],
        correctAnswer: "To put it another way",
        explanation: "'To put it another way' rephrases an idea for clarity or emphasis."
    },
    {
        id: 74,
        text: "The task requires meticulous attention to detail. {CHOICE}, you must be very careful and precise.",
        options: ["Essentially", "However", "For example"], // "Essentially" can fit for core meaning.
        correctAnswer: "Essentially",
        explanation: "'Essentially' means 'basically' or 'fundamentally', restating the core meaning."
    },
    {
        id: 75,
        text: "The CELPIP test assesses communicative competence. {CHOICE} it measures how well you can use English in real-life situations.",
        options: ["More precisely", "On the other hand", "In addition"],
        correctAnswer: "More precisely",
        explanation: "'More precisely' is used to give more exact details or a clearer explanation."
    },

    // --- Mix & More Complex Usage ---
    {
        id: 76,
        text: "The new software has many advanced features. {CHOICE}, it is also very user-friendly.",
        options: ["Not only that, but", "Despite that", "As a consequence"],
        correctAnswer: "Not only that, but",
        explanation: "'Not only that, but' is used to add an even more important or surprising piece of information."
    },
    {
        id: 77,
        text: "{CHOICE} improving public transport, the city should also invest in cycling infrastructure.",
        options: ["As well as", "Instead of", "Due to"],
        correctAnswer: "As well as",
        explanation: "'As well as' means 'in addition to'."
    },
    {
        id: 78,
        text: "The team faced numerous challenges; {CHOICE}, they managed to complete the project on time.",
        options: ["even so", "therefore", "furthermore"],
        correctAnswer: "even so",
        explanation: "'Even so' introduces a contrasting idea, similar to 'despite that'."
    },
    {
        id: 79,
        text: "He is qualified for the job. {CHOICE}, his lack of experience might be a concern.",
        options: ["Having said that", "As a result", "In addition"],
        correctAnswer: "Having said that",
        explanation: "'Having said that' is used to introduce an opinion or fact that contrasts with or makes the previous statement less strong."
    },
    {
        id: 80,
        text: "The government plans to increase taxes. {CHOICE}, this measure is expected to reduce the budget deficit.",
        options: ["Presumably", "Conversely", "For instance"],
        correctAnswer: "Presumably",
        explanation: "'Presumably' means 'it is reasonable to suppose', often indicating an expected outcome."
    },
    {
        id: 81,
        text: "The restaurant is popular. {CHOICE}, it's advisable to book a table in advance.",
        options: ["Therefore", "However", "Moreover"],
        correctAnswer: "Therefore",
        explanation: "'Therefore' indicates a logical consequence: because it's popular, booking is advised."
    },
    {
        id: 82,
        text: "{CHOICE} the initial difficulties, the experiment was a success.",
        options: ["In spite of", "Because of", "In addition to"],
        correctAnswer: "In spite of",
        explanation: "'In spite of' (or 'Despite') shows contrast, followed by a noun phrase."
    },
    {
        id: 83,
        text: "She not only sings well {CHOICE} plays the piano proficiently.",
        options: ["but also", "and", "or"],
        correctAnswer: "but also",
        explanation: "The correlative conjunction is 'not only... but also...'."
    },
    {
        id: 84,
        text: "The lecture was informative; {CHOICE}, it was quite engaging.",
        options: ["furthermore", "yet", "consequently"],
        correctAnswer: "furthermore",
        explanation: "'Furthermore' adds another positive quality about the lecture."
    },
    {
        id: 85,
        text: "You can choose to take the bus; {CHOICE}, you can walk if the weather is nice.",
        options: ["alternatively", "therefore", "however"],
        correctAnswer: "alternatively",
        explanation: "'Alternatively' presents another option or choice."
    },
    {
        id: 86,
        text: "The CEO's speech was inspiring. {CHOICE}, it outlined a clear vision for the company's future.",
        options: ["In particular", "More importantly", "To clarify"], // "More importantly" fits context of adding significance
        correctAnswer: "More importantly",
        explanation: "'More importantly' emphasizes the significance of the following point."
    },
    {
        id: 87,
        text: "Climate change is a global issue. {CHOICE}, international cooperation is essential to address it.",
        options: ["Accordingly", "Nevertheless", "For example"],
        correctAnswer: "Accordingly",
        explanation: "'Accordingly' means 'therefore' or 'so', indicating a logical consequence or appropriate action."
    },
    {
        id: 88,
        text: "The instructions were clear. {CHOICE}, some students still had questions.",
        options: ["Nonetheless", "Therefore", "Moreover"],
        correctAnswer: "Nonetheless",
        explanation: "'Nonetheless' introduces a contrasting idea, similar to 'nevertheless' or 'however'."
    },
    {
        id: 89,
        text: "The weather forecast predicted rain; {CHOICE}, we brought our umbrellas.",
        options: ["hence", "but", "also"],
        correctAnswer: "hence",
        explanation: "'Hence' indicates a reason or consequence, similar to 'therefore' or 'so'."
    },
    {
        id: 90,
        text: "To begin your response in CELPIP Speaking Task 5, you might say, '{CHOICE} the two options, I would choose...' ",
        options: ["Comparing", "However", "Therefore"],
        correctAnswer: "Comparing",
        explanation: "'Comparing' is often used to start an analysis of two options, fitting for CELPIP Task 5."
    },
    {
        id: 91,
        text: "The new park has a playground for children. {CHOICE}, there are benches for adults to relax.",
        options: ["Likewise", "However", "Consequently"],
        correctAnswer: "Likewise",
        explanation: "'Likewise' adds a similar or corresponding feature or point."
    },
    {
        id: 92,
        text: "He didn't get the promotion. {CHOICE}, he decided to look for a new job.",
        options: ["As a consequence", "In contrast", "In addition"],
        correctAnswer: "As a consequence",
        explanation: "'As a consequence' clearly states the result of not getting the promotion."
    },
    {
        id: 93,
        text: "The museum offers free admission on Tuesdays. {CHOICE}, it is often very crowded then.",
        options: ["On the downside", "As an example", "Therefore"],
        correctAnswer: "On the downside",
        explanation: "'On the downside' introduces a negative aspect or disadvantage."
    },
    {
        id: 94,
        text: "{CHOICE} the candidate's impressive resume, her lack of practical experience was a concern.",
        options: ["Notwithstanding", "Because of", "In addition to"],
        correctAnswer: "Notwithstanding",
        explanation: "'Notwithstanding' means 'in spite of' or 'despite', often used in more formal contexts."
    },
    {
        id: 95,
        text: "The study was conducted over a period of five years. {CHOICE}, the researchers gathered extensive data.",
        options: ["During this time", "However", "For example"],
        correctAnswer: "During this time",
        explanation: "'During this time' refers to the period already mentioned (five years)."
    },
    {
        id: 96,
        text: "Many people believe that technology isolates individuals. {CHOICE}, others argue it fosters new forms of connection.",
        options: ["Conversely", "Therefore", "Furthermore"],
        correctAnswer: "Conversely",
        explanation: "'Conversely' introduces an opposing argument or viewpoint."
    },
    {
        id: 97,
        text: "The company is expanding its operations. {CHOICE}, it is hiring new staff in several departments.",
        options: ["In line with this", "Despite this", "Alternatively"],
        correctAnswer: "In line with this",
        explanation: "'In line with this' means 'consistent with this' or 'as a result of this development'."
    },
    {
        id: 98,
        text: "The first draft of the report was good; {CHOICE}, it needed some minor revisions for clarity.",
        options: ["albeit", "therefore", "moreover"],
        correctAnswer: "albeit",
        explanation: "'Albeit' means 'though' or 'although', often used to introduce a concession or contrasting detail."
    },
    {
        id: 99,
        text: "To conclude your advice in CELPIP Speaking Task 4, you could say, '{CHOICE}, following these steps should help.'",
        options: ["Ultimately", "Initially", "On the contrary"],
        correctAnswer: "Ultimately",
        explanation: "'Ultimately' means 'in the end' or 'finally', suitable for a concluding piece of advice."
    },
    {
        id: 100,
        text: "The proposal aims to improve efficiency. {CHOICE}, it seeks to reduce operational costs.",
        options: ["By the same token", "Nevertheless", "For instance"],
        correctAnswer: "By the same token",
        explanation: "'By the same token' means 'in a similar way' or 'for the same reason', adding a related point."
    }
];