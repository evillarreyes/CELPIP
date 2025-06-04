// This file defines the quiz data for CELPIP Speaking Phrases Practice

const quizData = [
    // --- Task 1: Giving Advice ---
    {
        id: 1,
        text: "To start giving advice to a friend about a problem, you could say: 'Well, if I were {CHOICE}, I would probably...'",
        options: ["in your shoes", "as your problem", "making your trouble"],
        correctAnswer: "in your shoes",
        explanation: "'If I were in your shoes' or 'If I were you' is a common and empathetic way to begin giving advice."
    },
    {
        id: 2,
        text: "A gentle way to suggest an action for advice: 'Have you {CHOICE} trying a different approach?'",
        options: ["considered", "made thought", "done for look"],
        correctAnswer: "considered",
        explanation: "'Have you considered + -ing?' is a polite way to offer a suggestion."
    },
    {
        id: 3,
        text: "Offering a specific piece of advice: 'One thing that might {CHOICE} is to make a list of pros and cons.'",
        options: ["help", "do good now", "make easy for"],
        correctAnswer: "help",
        explanation: "'One thing that might help is...' is a practical way to suggest something."
    },
    {
        id: 4,
        text: "Another useful phrase for giving advice: 'It might be a good {CHOICE} to talk to someone who has experience in this area.'",
        options: ["idea", "order", "saying"],
        correctAnswer: "idea",
        explanation: "'It might be a good idea to...' is a common way to propose a course of action."
    },
    {
        id: 5,
        text: "When advising against something: 'I would probably {CHOICE} making any hasty decisions right now.'",
        options: ["avoid", "not do for sure", "make stop from"],
        correctAnswer: "avoid",
        explanation: "'I would probably avoid + -ing' is a good way to advise against a certain action."
    },
    {
        id: 6,
        text: "A phrase to offer support along with advice: 'Whatever you decide, I'm here to {CHOICE} you.'",
        options: ["support", "make help", "do backing"],
        correctAnswer: "support",
        explanation: "Offering support makes your advice more empathetic."
    },
    {
        id: 7,
        text: "To suggest seeking professional advice: 'Perhaps it would be {CHOICE} to consult a financial advisor.'",
        options: ["worthwhile", "good make", "best do now"],
        correctAnswer: "worthwhile",
        explanation: "'It would be worthwhile to...' suggests a beneficial action."
    },
    {
        id: 8,
        text: "A soft way to recommend something: 'You {CHOICE} want to try out the new community center; I've heard good things about it.'",
        options: ["might", "must", "should making"],
        correctAnswer: "might",
        explanation: "'You might want to...' is a less direct and polite way to make a suggestion."
    },
    // --- Task 2: Talking about a Personal Experience (Storytelling) ---
    {
        id: 9,
        text: "To begin telling a story about a personal experience: '{CHOICE} this one time when I was traveling, something really unexpected happened.'",
        options: ["I remember", "It is making that", "My story start for"],
        correctAnswer: "I remember",
        explanation: "'I remember this one time...' or 'Let me tell you about a time when...' are good story starters."
    },
    {
        id: 10,
        text: "Setting the scene for your story: '{CHOICE} a few years ago, I was visiting my relatives in Vancouver.'",
        options: ["It was", "Making it now", "Did happen then"],
        correctAnswer: "It was",
        explanation: "Setting the time and place helps the listener visualize the story."
    },
    {
        id: 11,
        text: "To describe a sequence of events in your story: '{CHOICE}, we decided to go for a hike, and then later on...'",
        options: ["First", "Making one part", "At the go"],
        correctAnswer: "First",
        explanation: "Using sequencers like 'First,' 'Next,' 'Then,' 'After that,' 'Finally' helps structure your narrative."
    },
    {
        id: 12,
        text: "Expressing feelings during the experience: 'At that moment, I {CHOICE} incredibly surprised and a little scared.'",
        options: ["felt", "was making feel", "did have emotion"],
        correctAnswer: "felt",
        explanation: "Describing your emotions makes the story more engaging."
    },
    {
        id: 13,
        text: "Concluding your story and stating what you learned: '{CHOICE}, it taught me the importance of being prepared.'",
        options: ["In the end", "For the finish make", "At the stopping now"],
        correctAnswer: "In the end",
        explanation: "'In the end,' or 'Ultimately,' or 'What I learned from this was...' are good ways to conclude a personal story."
    },
    // --- Task 3: Describing a Scene ---
    {
        id: 14,
        text: "When starting to describe a picture: 'Okay, {CHOICE} this picture, I can see...'",
        options: ["looking at", "for the seeing of", "making view on"],
        correctAnswer: "looking at",
        explanation: "'Looking at this picture...' or 'In this picture, I see...' are standard ways to begin."
    },
    {
        id: 15,
        text: "Describing the main elements: '{CHOICE} of the image, there appears to be a family having a picnic.'",
        options: ["In the foreground", "At the start side", "For the first look"],
        correctAnswer: "In the foreground",
        explanation: "Using location phrases like 'In the foreground/background/center/left/right' is essential."
    },
    {
        id: 16,
        text: "Describing actions: 'A little girl {CHOICE} to be feeding ducks by the pond.'",
        options: ["seems", "is making look", "does apparent"],
        correctAnswer: "seems",
        explanation: "'Seems to be + -ing' or 'appears to be + -ing' is useful for describing ongoing actions."
    },
    {
        id: 17,
        text: "Describing the setting or weather: 'The weather {CHOICE} sunny and warm, perfect for an outdoor activity.'",
        options: ["looks", "is making feel", "does show like"],
        correctAnswer: "looks",
        explanation: "'The weather looks/seems/appears...' or 'It looks like a sunny day.'"
    },
    {
        id: 18,
        text: "Speculating about the relationships or feelings: 'The people in the picture {CHOICE} to be enjoying themselves.'",
        options: ["look like they are", "make for happiness", "do seem happy way"],
        correctAnswer: "look like they are",
        explanation: "'They look like they are...' or 'They seem to be...' helps in speculating about feelings or relationships."
    },
    {
        id: 19,
        text: "Describing objects in the scene: 'There's also a bicycle {CHOICE} against a tree in the background.'",
        options: ["leaning", "making stand", "doing put by"],
        correctAnswer: "leaning",
        explanation: "Use precise verbs to describe the state or position of objects."
    },
    // --- Task 4: Making Predictions ---
    {
        id: 20,
        text: "After observing a scene, to predict what might happen next: '{CHOICE} the current situation, I think the children will probably start playing a game soon.'",
        options: ["Based on", "For making from", "Doing see now"],
        correctAnswer: "Based on",
        explanation: "'Based on...' or 'Judging by...' are good ways to start a prediction from visual cues."
    },
    {
        id: 21,
        text: "Expressing a likely prediction: '{CHOICE} the dark clouds gathering, it might rain later in the afternoon.'",
        options: ["Given", "Making with", "Doing for because"],
        correctAnswer: "Given",
        explanation: "'Given...' or 'Considering...' introduces a reason for your prediction."
    },
    {
        id: 22,
        text: "A phrase for making a prediction with some certainty: 'I'm fairly {CHOICE} that the team will win the match.'",
        options: ["confident", "sure make", "knowing strong"],
        correctAnswer: "confident",
        explanation: "'I'm fairly confident/certain that...' expresses a strong likelihood."
    },
    {
        id: 23,
        text: "Predicting a future trend from a graph: 'If this trend {CHOICE}, we can expect a significant increase in renewable energy use.'",
        options: ["continues", "makes to go on", "does keep doing"],
        correctAnswer: "continues",
        explanation: "'If this trend continues...' is a standard way to extrapolate from data."
    },
    {
        id: 24,
        text: "A more cautious prediction: 'There's a {CHOICE} that the new policy will lead to some initial confusion.'",
        options: ["possibility", "sure thing make", "maybe happen for"],
        correctAnswer: "possibility",
        explanation: "'There's a possibility that...' or 'It's possible that...' indicates less certainty."
    },
    // --- Task 5: Comparing and Persuading ---
    {
        id: 25,
        text: "When starting to compare two options for a friend: 'Okay, so you're trying to decide between Option A and Option B. Let's {CHOICE} them.'",
        options: ["compare", "make look at", "do seeing for"],
        correctAnswer: "compare",
        explanation: "Clearly stating your intention to compare is a good start."
    },
    {
        id: 26,
        text: "Highlighting an advantage of one option: 'One clear {CHOICE} of the first option is its lower cost.'",
        options: ["advantage", "good making", "plus for it"],
        correctAnswer: "advantage",
        explanation: "'Advantage', 'benefit', or 'pro' are suitable words."
    },
    {
        id: 27,
        text: "Contrasting with the other option: '{CHOICE}, the second option, while more expensive, offers better long-term durability.'",
        options: ["On the other hand", "For the bad side now", "Making different look"],
        correctAnswer: "On the other hand",
        explanation: "'On the other hand' or 'However' are used for contrast."
    },
    {
        id: 28,
        text: "Stating your recommended choice: '{CHOICE} your situation, I think Option B would be the better fit for you.'",
        options: ["Considering", "Making for look at", "Doing with your need"],
        correctAnswer: "Considering",
        explanation: "'Considering your situation/needs...' helps tailor your recommendation."
    },
    {
        id: 29,
        text: "Justifying your recommendation: 'I say this {CHOICE} it aligns more closely with your stated priorities.'",
        options: ["because", "for make reason", "doing so for why"],
        correctAnswer: "because",
        explanation: "Always provide a reason for your recommendation."
    },
    {
        id: 30,
        text: "A persuasive concluding remark: '{CHOICE}, I really believe you'll be happier with the second choice in the long run.'",
        options: ["Ultimately", "For the end make", "At the very last saying"],
        correctAnswer: "Ultimately",
        explanation: "'Ultimately' or 'Overall' can be used to give a final persuasive push."
    },
    // --- Task 6: Dealing with a Difficult Situation ---
    {
        id: 31,
        text: "Starting a call to resolve a problem with a service: 'Hello, I'm calling to {CHOICE} an issue I'm having with my internet service.'",
        options: ["discuss", "make trouble for", "say bad about"],
        correctAnswer: "discuss",
        explanation: "'Discuss an issue' or 'report a problem' are appropriate."
    },
    {
        id: 32,
        text: "Explaining the problem clearly: 'The main {CHOICE} is that my connection has been very unreliable for the past few days.'",
        options: ["problem", "bad making thing", "trouble for me"],
        correctAnswer: "problem",
        explanation: "Clearly state the problem using words like 'problem', 'issue', or 'concern'."
    },
    {
        id: 33,
        text: "Expressing your desired outcome politely: 'What I would {CHOICE} is for a technician to look into this as soon as possible.'",
        options: ["appreciate", "demand now", "make happen please"],
        correctAnswer: "appreciate",
        explanation: "'I would appreciate it if...' or 'I would like to request...' are polite."
    },
    {
        id: 34,
        text: "Responding to a friend's difficult situation with empathy: 'Oh no, I'm so {CHOICE} to hear that you're going through that.'",
        options: ["sorry", "bad feeling for", "sad make now"],
        correctAnswer: "sorry",
        explanation: "Expressing empathy with 'I'm so sorry to hear that' is important."
    },
    {
        id: 35,
        text: "Offering a practical solution to a friend's problem: 'Perhaps we could {CHOICE} a way to reschedule the event?'",
        options: ["figure out", "make do find", "do for solving"],
        correctAnswer: "figure out",
        explanation: "'Figure out a way' or 'work out a solution' are constructive."
    },
    // --- Task 7: Expressing Opinions ---
    {
        id: 36,
        text: "When asked for your opinion on a topic like urban development: '{CHOICE}, I believe that sustainable development is key.'",
        options: ["Personally", "For my own make", "I say true now"],
        correctAnswer: "Personally",
        explanation: "'Personally,' 'In my opinion,' or 'From my perspective,' are good opinion starters."
    },
    {
        id: 37,
        text: "Supporting your opinion with a reason: 'This is largely {CHOICE} it ensures long-term benefits for both the environment and the community.'",
        options: ["due to the fact that", "making from because", "for why it is"],
        correctAnswer: "due to the fact that",
        explanation: "'This is because...' or 'This is due to the fact that...' introduces a reason."
    },
    {
        id: 38,
        text: "Giving an example to strengthen your opinion: '{CHOICE}, cities that have invested in green spaces tend to have higher quality of life.'",
        options: ["For example", "Making like this", "Doing a show for"],
        correctAnswer: "For example",
        explanation: "'For example,' or 'For instance,' provides concrete support."
    },
    {
        id: 39,
        text: "Acknowledging an opposing viewpoint before refuting or qualifying it: '{CHOICE} some might argue that rapid development boosts the economy, we also need to consider the environmental cost.'",
        options: ["While", "Because for sure", "Making not true now"],
        correctAnswer: "While",
        explanation: "'While some may argue...' or 'Although it's true that...' shows balanced thinking."
    },
    {
        id: 40,
        text: "Concluding your opinion: '{CHOICE}, I feel that a balanced approach is the most sensible way forward.'",
        options: ["In conclusion", "For the end make now", "At the stop of my say"],
        correctAnswer: "In conclusion",
        explanation: "'In conclusion,' 'To sum up,' or 'Overall,' are good concluding phrases."
    },
    // --- Task 8: Describing an Unusual Situation ---
    {
        id: 41,
        text: "Starting your description of an unusual picture/scenario: 'Well, this is certainly a {CHOICE} situation depicted here.'",
        options: ["peculiar", "normal make", "everyday looking"],
        correctAnswer: "peculiar",
        explanation: "'Peculiar,' 'unusual,' 'strange,' or 'bizarre' can be used."
    },
    {
        id: 42,
        text: "Describing the main unusual element: 'What immediately {CHOICE} is a group of animals dressed in formal attire.'",
        options: ["catches my eye", "makes me see hard", "does a big look to"],
        correctAnswer: "catches my eye",
        explanation: "'What catches my eye' or 'The most striking thing is...' highlights the unusual aspect."
    },
    {
        id: 43,
        text: "Trying to make sense of the unusual scene: '{CHOICE} this is some kind of fantasy illustration or a scene from a play.'",
        options: ["I'm guessing", "It is true making", "My order says"],
        correctAnswer: "I'm guessing",
        explanation: "'I'm guessing,' 'Perhaps,' or 'It could be that...' are good for speculation."
    },
    {
        id: 44,
        text: "Describing the reactions of people (if any) in the scene: 'The onlookers {CHOICE} quite amused and surprised by the spectacle.'",
        options: ["seem to be", "make for looking", "do appear like"],
        correctAnswer: "seem to be",
        explanation: "'Seem to be' or 'appear to be' helps describe reactions."
    },
    {
        id: 45,
        text: "Offering a possible explanation, however strange: '{CHOICE} the animals are protesting something in a very creative way!'",
        options: ["It's conceivable that", "For sure making that", "My truth is telling"],
        correctAnswer: "It's conceivable that",
        explanation: "'It's conceivable that...' or 'One possible explanation is...' allows for creative interpretation."
    },
    // --- General Fluency, Discourse Markers, Fillers ---
    {
        id: 46,
        text: "To add another point smoothly: '{CHOICE}, the cost is another factor to consider.'",
        options: ["Additionally", "But for that", "Making more now"],
        correctAnswer: "Additionally",
        explanation: "'Additionally,' 'Furthermore,' or 'Moreover' add points."
    },
    {
        id: 47,
        text: "When you need a brief moment to think: '{CHOICE}, let me see... yes, I think that's the best option.'",
        options: ["Um", "Stop now think", "I must make quiet"],
        correctAnswer: "Um",
        explanation: "Short, natural fillers like 'Um,' 'Well,' or 'Let me see...' are acceptable if used sparingly."
    },
    {
        id: 48,
        text: "To transition to a different aspect of the topic: '{CHOICE} the practicalities, let's talk about the emotional impact.'",
        options: ["Moving on to", "Making from other side", "Doing next part for"],
        correctAnswer: "Moving on to",
        explanation: "'Moving on to...' or 'Turning to...' are good signposting phrases."
    },
    {
        id: 49,
        text: "To rephrase something for clarity: '{CHOICE}, what I'm trying to say is that communication is key.'",
        options: ["In other words", "For make different say", "Doing new tell for"],
        correctAnswer: "In other words",
        explanation: "'In other words,' or 'To put it differently,' helps clarify."
    },
    {
        id: 50,
        text: "To emphasize a really important point: '{CHOICE}, this could significantly impact our timeline.'",
        options: ["Crucially", "Big make for this", "Very good point now"],
        correctAnswer: "Crucially",
        explanation: "'Crucially,' 'Importantly,' or 'Significantly' add emphasis."
    },
    {
        id: 51,
        text: "When you generally agree but have a reservation: '{CHOICE}, I agree with the main idea, but I have some concerns about the implementation.'",
        options: ["By and large", "For sure making yes", "My good think is but"],
        correctAnswer: "By and large",
        explanation: "'By and large' means 'in general' or 'mostly'."
    },
    {
        id: 52,
        text: "To introduce a sequence of reasons: '{CHOICE}, it's cost-effective. Secondly, it's environmentally friendly.'",
        options: ["Firstly", "One making now", "For the start saying"],
        correctAnswer: "Firstly",
        explanation: "Using 'Firstly, Secondly, Thirdly, Finally' structures your points."
    },
    {
        id: 53,
        text: "If you make a mistake and want to correct yourself: 'The event is on Friday... {CHOICE}, I mean Saturday.'",
        options: ["actually", "no make that", "bad word take back"],
        correctAnswer: "actually",
        explanation: "'Actually,' 'Sorry, I meant,' or 'Or rather,' are good for self-correction."
    },
    {
        id: 54,
        text: "To show you are considering all sides: '{CHOICE} all the different perspectives, it's a complex issue.'",
        options: ["Taking into account", "Making with all looks", "Doing from many views"],
        correctAnswer: "Taking into account",
        explanation: "'Taking into account' or 'Considering all aspects' shows comprehensive thought."
    },
    {
        id: 55,
        text: "A phrase to introduce your personal stance more formally: '{CHOICE} I'm concerned, the benefits are clear.'",
        options: ["As far as", "For my own make see", "Doing my look at it"],
        correctAnswer: "As far as",
        explanation: "'As far as I'm concerned' clearly states your personal viewpoint."
    },
    {
        id: 56,
        text: "When you want to make a general statement: '{CHOICE} that most people would prefer a shorter work week.'",
        options: ["It's fair to say", "I make it true now", "My order is for this"],
        correctAnswer: "It's fair to say",
        explanation: "'It's fair to say' or 'It's generally accepted that...' introduces a common belief."
    },
    {
        id: 57,
        text: "To express some doubt or uncertainty: '{CHOICE} whether this plan will succeed without more funding.'",
        options: ["I'm not entirely sure", "It is no good make", "My knowing is not full"],
        correctAnswer: "I'm not entirely sure",
        explanation: "'I'm not entirely sure/convinced' expresses reservation."
    },
    {
        id: 58,
        text: "To politely interrupt if absolutely necessary (rare in CELPIP): '{CHOICE}, but could I just ask a quick question?'",
        options: ["Sorry to interrupt", "Stop now I talk", "My turn for saying"],
        correctAnswer: "Sorry to interrupt",
        explanation: "If needed, 'Sorry to interrupt, but...' is a polite way."
    },
    {
        id: 59,
        text: "When summarizing multiple points: '{CHOICE} these reasons, I believe my chosen option is superior.'",
        options: ["For all", "Making with many", "Doing from these tells"],
        correctAnswer: "For all",
        explanation: "'For all these reasons' is a good way to lead into a concluding statement after listing several points."
    },
    {
        id: 60,
        text: "A common way to start your response to any task: '{CHOICE}, I've been asked to talk about / describe / choose an option...'",
        options: ["Okay, so", "Now for making my say", "I will do the talk"],
        correctAnswer: "Okay, so",
        explanation: "A simple 'Okay, so...' or 'Alright, then...' is a natural way to begin."
    },
    {
        id: 61,
        text: "If I were to {CHOICE} one aspect, it would be the user-friendly interface.",
        options: ["highlight", "make big", "show strong"],
        correctAnswer: "highlight",
        explanation: "'Highlight' means to emphasize or draw particular attention to something."
    },
    {
        id: 62,
        text: "It's {CHOICE} noting that the survey results were overwhelmingly positive.",
        options: ["worth", "good for", "making sense"],
        correctAnswer: "worth",
        explanation: "'It's worth noting that...' introduces a significant or interesting point."
    },
    {
        id: 63,
        text: "From my {CHOICE}, this is the most logical course of action.",
        options: ["standpoint", "seeing place", "look from me"],
        correctAnswer: "standpoint",
        explanation: "'From my standpoint' or 'From my perspective' means from my point of view."
    },
    {
        id: 64,
        text: "To put it {CHOICE}, the project was a resounding success.",
        options: ["bluntly", "making sharp", "saying hard"],
        correctAnswer: "bluntly",
        explanation: "'To put it bluntly' means to speak frankly or directly, even if the information is unpleasant (though here it's positive, it implies directness)."
    },
    {
        id: 65,
        text: "That's a valid point. {CHOICE}, I also think we need to consider the budget.",
        options: ["Nevertheless", "For making true", "Doing same for it"],
        correctAnswer: "Nevertheless",
        explanation: "'Nevertheless' or 'However' can be used to acknowledge a point and then introduce a counterpoint or additional consideration."
    },
    {
        id: 66,
        text: "I'm {CHOICE} to believe that this new strategy will yield positive results.",
        options: ["inclined", "made for thinking", "doing a hope on"],
        correctAnswer: "inclined",
        explanation: "'I'm inclined to believe/think...' suggests a tendency towards a particular opinion without being completely certain."
    },
    {
        id: 67,
        text: "Could you {CHOICE} on why you think that's the best approach?",
        options: ["elaborate", "make bigger say", "do more talk for"],
        correctAnswer: "elaborate",
        explanation: "'Elaborate on' means to add more details or explain something more fully."
    },
    {
        id: 68,
        text: "The way I {CHOICE} it, there are two main challenges we need to address.",
        options: ["see", "make look for", "do my view on"],
        correctAnswer: "see",
        explanation: "'The way I see it' is a common idiom for expressing one's opinion or interpretation."
    },
    {
        id: 69,
        text: "Let's {CHOICE} the potential risks involved before proceeding.",
        options: ["examine", "make hard look at", "do a check for bad"],
        correctAnswer: "examine",
        explanation: "'Examine' or 'assess' means to look at something closely and carefully."
    },
    {
        id: 70,
        text: "To be {CHOICE}, I wasn't expecting such a positive outcome.",
        options: ["frank", "true making now", "saying open for"],
        correctAnswer: "frank",
        explanation: "'To be frank' or 'To be honest' introduces a candid statement."
    },
    {
        id: 71,
        text: "It {CHOICE} without saying that punctuality is important for this role.",
        options: ["goes", "makes for sure", "does a true tell"],
        correctAnswer: "goes",
        explanation: "'It goes without saying' means something is so obvious that it doesn't need to be stated."
    },
    {
        id: 72,
        text: "I'd like to {CHOICE} the fact that we have limited resources for this project.",
        options: ["emphasize", "make big point on", "do a strong say for"],
        correctAnswer: "emphasize",
        explanation: "'Emphasize' or 'stress' means to give special importance to something."
    },
    {
        id: 73,
        text: "All things {CHOICE}, I think we made the right decision.",
        options: ["considered", "made for look at", "done with thinking"],
        correctAnswer: "considered",
        explanation: "'All things considered' means after thinking about all the different aspects of a situation."
    },
    {
        id: 74,
        text: "That's an interesting perspective. I hadn't {CHOICE} it that way before.",
        options: ["thought of", "made look for", "done a see on"],
        correctAnswer: "thought of",
        explanation: "'I hadn't thought of it that way' shows you are open to other views."
    },
    {
        id: 75,
        text: "When giving advice about a sensitive topic: 'It's a tricky situation, but perhaps you could {CHOICE} discussing your concerns openly.'",
        options: ["try", "make do for", "do a go at"],
        correctAnswer: "try",
        explanation: "'Perhaps you could try + -ing' is a gentle way to suggest something in a sensitive context."
    },
    {
        id: 76,
        text: "To describe something visually striking in Task 3: 'The most {CHOICE} feature of the landscape is the towering mountain range.'",
        options: ["eye-catching", "big looking make", "see-me-now thing"],
        correctAnswer: "eye-catching",
        explanation: "'Eye-catching' or 'prominent' describes something that easily attracts attention."
    },
    {
        id: 77,
        text: "When predicting a negative outcome in Task 4: 'Unfortunately, if current trends persist, it's {CHOICE} that we'll face resource shortages.'",
        options: ["foreseeable", "bad make sure", "gonna happen bad"],
        correctAnswer: "foreseeable",
        explanation: "'It's foreseeable that...' or 'It's likely that...' can be used for negative predictions too."
    },
    {
        id: 78,
        text: "In Task 5, when weighing options: 'While option A is cheaper, option B offers superior quality, which is a key {CHOICE} for me.'",
        options: ["consideration", "make-think point", "good decider"],
        correctAnswer: "consideration",
        explanation: "'A key consideration' highlights an important factor in decision-making."
    },
    {
        id: 79,
        text: "When responding to a difficult situation in Task 6 by proposing a compromise: 'How about we try to find a {CHOICE} that works for everyone?'",
        options: ["middle ground", "half-way make", "good for all do"],
        correctAnswer: "middle ground",
        explanation: "'Find a middle ground' or 'reach a compromise' suggests finding a solution acceptable to all parties."
    },
    {
        id: 80,
        text: "In Task 7, to strongly support an opinion: 'I am firmly {CHOICE} that investing in education is paramount for a country's development.'",
        options: ["convinced", "made to think hard", "sure-sure saying"],
        correctAnswer: "convinced",
        explanation: "'I am firmly convinced that...' or 'I strongly believe that...' shows strong conviction."
    },
    {
        id: 81,
        text: "Describing an unusual activity in Task 8: 'It appears as if the characters are {CHOICE} in some sort of elaborate role-playing game.'",
        options: ["engaged", "doing a make-play", "acting for funsies"],
        correctAnswer: "engaged",
        explanation: "'Engaged in' means involved in an activity."
    },
    {
        id: 82,
        text: "Giving advice on managing time for CELPIP prep: 'I'd suggest you {CHOICE} a study schedule and stick to it.'",
        options: ["create", "make a do-list", "do a time plan"],
        correctAnswer: "create",
        explanation: "'Create a schedule' is a natural collocation for time management advice."
    },
    {
        id: 83,
        text: "Describing the mood of people in a picture (Task 3): 'The people in the cafe seem quite {CHOICE} and are chatting animatedly.'",
        options: ["relaxed", "chill making", "easy doing time"],
        correctAnswer: "relaxed",
        explanation: "Using adjectives like 'relaxed,' 'animated,' 'joyful,' 'tense' helps describe the mood."
    },
    {
        id: 84,
        text: "Predicting the consequences of an action (Task 4): 'If the city implements this new traffic plan, it will {CHOICE} lead to reduced congestion.'",
        options: ["likely", "for sure make", "good happen then"],
        correctAnswer: "likely",
        explanation: "'It will likely lead to...' or 'It will probably result in...' are common prediction phrases."
    },
    {
        id: 85,
        text: "Justifying a choice in Task 5: 'The main {CHOICE} behind my decision is the long-term sustainability of the project.'",
        options: ["rationale", "big why-for", "reason make-sense"],
        correctAnswer: "rationale",
        explanation: "'Rationale' means the set of reasons or logical basis for a course of action or belief."
    },
    {
        id: 86,
        text: "When trying to persuade someone in Task 6: 'Don't you think it would be more {CHOICE} if we approached it this way?'",
        options: ["sensible", "good-think making", "smart-do for it"],
        correctAnswer: "sensible",
        explanation: "'Sensible' or 'practical' or 'beneficial' can be used in persuasive arguments."
    },
    {
        id: 87,
        text: "Expressing a strong disagreement politely in Task 7: 'With all due respect, I have a slightly {CHOICE} on that matter.'",
        options: ["different take", "no-good view now", "other make-think"],
        correctAnswer: "different take",
        explanation: "'A different take' or 'a different perspective' is a polite way to disagree."
    },
    {
        id: 88,
        text: "Describing a very strange element in Task 8: 'The most {CHOICE} aspect of this scene is the sky, which is painted in psychedelic colors.'",
        options: ["bizarre", "super weird make", "not normal looking"],
        correctAnswer: "bizarre",
        explanation: "'Bizarre,' 'surreal,' or 'outlandish' can describe very unusual things."
    },
    {
        id: 89,
        text: "A general phrase for starting to list reasons: '{CHOICE} why I believe this is a good idea.'",
        options: ["There are several reasons", "Many good makes for this", "I have big whys"],
        correctAnswer: "There are several reasons",
        explanation: "This phrase clearly signals that you are about to list justifications."
    },
    {
        id: 90,
        text: "When you want to offer a counter-argument: '{CHOICE} that, one could also argue that the initial investment is too high.'",
        options: ["Against", "No for making", "But for other side"],
        correctAnswer: "Against",
        explanation: "'Against that,' or 'Countering that,' can introduce an opposing point."
    },
    {
        id: 91,
        text: "To express something is your best guess: 'My {CHOICE} is that they are celebrating a special occasion.'",
        options: ["hunch", "top think-so", "sure-maybe feeling"],
        correctAnswer: "hunch",
        explanation: "'My hunch is...' or 'My best guess is...' indicates speculation."
    },
    {
        id: 92,
        text: "When giving advice on learning English: '{CHOICE} practicing speaking as much as possible.'",
        options: ["I can't stress enough the importance of", "You must make big do for", "Do very hard on"],
        correctAnswer: "I can't stress enough the importance of",
        explanation: "This phrase strongly emphasizes a key piece of advice."
    },
    {
        id: 93,
        text: "Describing a crowded place in Task 3: 'The market is {CHOICE} people from all walks of life.'",
        options: ["teeming with", "full up making with", "many folks in there"],
        correctAnswer: "teeming with",
        explanation: "'Teeming with' or 'bustling with' vividly describes a crowded, active place."
    },
    {
        id: 94,
        text: "Predicting a possible challenge in Task 4: 'One potential {CHOICE} could be resistance from the local community.'",
        options: ["obstacle", "hard make-stop", "no-go thingy"],
        correctAnswer: "obstacle",
        explanation: "'Obstacle,' 'hurdle,' or 'challenge' refers to something that makes progress difficult."
    },
    {
        id: 95,
        text: "When choosing between two holiday destinations in Task 5: 'While the beach is relaxing, the mountains offer more {CHOICE} for adventure.'",
        options: ["scope", "big do-space", "many funs to make"],
        correctAnswer: "scope",
        explanation: "'Scope for adventure' means opportunity or possibility for adventure."
    },
    {
        id: 96,
        text: "When trying to mediate a difficult situation in Task 6: 'Let's try to {CHOICE} this misunderstanding calmly.'",
        options: ["clear up", "make go away bad", "do good for no fight"],
        correctAnswer: "clear up",
        explanation: "'Clear up a misunderstanding' means to resolve it by explaining."
    },
    {
        id: 97,
        text: "Expressing a widely held belief in Task 7: 'It is {CHOICE} acknowledged that regular exercise contributes to good health.'",
        options: ["generally", "big true for all", "many people say yes"],
        correctAnswer: "generally",
        explanation: "'Generally acknowledged' or 'widely accepted' refers to a common belief."
    },
    {
        id: 98,
        text: "Describing a chaotic scene in Task 8: 'Everything seems to be in a state of {CHOICE}, with objects scattered everywhere.'",
        options: ["disarray", "messy make-all-over", "no-good order now"],
        correctAnswer: "disarray",
        explanation: "'Disarray' or 'chaos' describes a state of disorganization."
    },
    {
        id: 99,
        text: "A polite way to express you need more information before deciding: 'I'd need a bit more {CHOICE} before I could commit to that option.'",
        options: ["clarification", "telling on it", "make-know for me"],
        correctAnswer: "clarification",
        explanation: "'Clarification' or 'information' is a polite way to request more details."
    },
    {
        id: 100,
        text: "Concluding a persuasive argument in Task 5: '{CHOICE}, the evidence strongly supports choosing the environmentally friendly option.'",
        options: ["All in all", "For the end of makes", "My big true say is"],
        correctAnswer: "All in all",
        explanation: "'All in all,' 'In the final analysis,' or 'To conclude,' are strong concluding phrases."
    }
];