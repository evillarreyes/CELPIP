document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        // PAGE 1
        {
            id: 1,
            text: "Water {CHOICE} at a temperature of 100°C.",
            options: ["is to boil", "is boiling", "boils"],
            correctAnswer: "boils",
            explanation: "For general truths or scientific facts, we use the simple present tense. 'Boils' is the correct simple present form for the third-person singular subject 'Water'."
        },
        {
            id: 2,
            text: "In some countries there {CHOICE} very hot all the time.",
            options: ["is", "is", "it is"], // As per PDF. If options should be distinct, adjust.
            correctAnswer: "it is",
            explanation: "'It is' is used here as an impersonal subject to describe the weather or a general condition. 'There is' introduces the existence of something."
        },
        {
            id: 3,
            text: "In cold countries people wear thick clothes {CHOICE} warm.",
            options: ["for keeping", "to keep", "for to keep"],
            correctAnswer: "to keep",
            explanation: "The infinitive of purpose 'to + verb' (to keep) is used to explain why an action is done. 'For keeping' suggests function, and 'for to keep' is grammatically incorrect."
        },
        {
            id: 4,
            text: "In England people are always talking about {CHOICE} weather.",
            options: ["a weather", "the weather", "weather"],
            correctAnswer: "the weather",
            explanation: "'The weather' is a specific, commonly understood topic of conversation, so the definite article 'the' is used."
        },
        {
            id: 5,
            text: "In some places it {CHOICE} almost every day.",
            options: ["rains", "there rains", "it raining"],
            correctAnswer: "it rains", // Solution says "it rains"
            explanation: "Simple present tense 'it rains' is used for habitual actions or general facts. 'It' is the subject."
        },
        {
            id: 6,
            text: "In deserts there isn't {CHOICE} grass.",
            options: ["the", "some", "any"],
            correctAnswer: "any",
            explanation: "'Any' is used in negative sentences (isn't) with uncountable nouns like 'grass' to indicate a non-existence or lack of quantity."
        },
        {
            id: 7,
            text: "Places near the Equator have {CHOICE} weather even in the cold season.",
            options: ["a warm", "the warm", "warm"],
            correctAnswer: "warm",
            explanation: "'Warm' is an adjective describing 'weather'. No article is needed here as 'warm weather' is a general concept."
        },
        {
            id: 8,
            text: "In England {CHOICE} time of year is usually from December to February.",
            options: ["coldest", "the coldest", "colder"],
            correctAnswer: "the coldest",
            explanation: "Superlative adjectives (like 'coldest') are typically preceded by 'the' when referring to a unique item or a specific one among a group."
        },
        {
            id: 9,
            text: "{CHOICE} people don't know what it's like in other countries.",
            options: ["The most", "Most of", "Most"],
            correctAnswer: "Most", // Solution says "Most" (PDF scan shows Moat, likely OCR error)
            explanation: "'Most' is used as a determiner before a plural noun ('people') to mean 'the majority of'. 'Most of' would require 'the' or a possessive (e.g., 'most of the people')."
        },
        {
            id: 10,
            text: "Very {CHOICE} people can travel abroad.",
            options: ["less", "little", "few"],
            correctAnswer: "few",
            explanation: "'Few' is used with countable nouns (like 'people') to indicate a small number. 'Little' is for uncountable nouns, and 'less' is the comparative of 'little'."
        },
        {
            id: 11,
            text: "Mohammed Ali {CHOICE} his first world title fight in 1960.",
            options: ["has won", "won", "is winning"],
            correctAnswer: "won",
            explanation: "The simple past tense 'won' is used for actions completed at a specific time in the past (in 1960)."
        },
        {
            id: 12,
            text: "After he {CHOICE} an Olympic gold medal he became a professional boxer.",
            options: ["had won", "have won", "was winning"],
            correctAnswer: "had won",
            explanation: "The past perfect 'had won' is used to describe an action that was completed before another past action ('became')."
        },
        {
            id: 13,
            text: "His religious beliefs {CHOICE} change his name when he became champion.",
            options: ["have made him", "made him to", "made him"],
            correctAnswer: "made him",
            explanation: "The structure 'make someone do something' (without 'to') is used here. 'Made him change' is correct."
        },
        {
            id: 14,
            text: "If he {CHOICE} lost his first fight with Sonny Liston, no one would have been surprised.",
            options: ["has", "would have", "had"],
            correctAnswer: "had",
            explanation: "This is a Type 3 conditional sentence (unreal past). The 'if' clause uses the past perfect tense: 'if + subject + had + past participle'. So, 'If he had lost...'"
        },
        {
            id: 15,
            text: "He has travelled a lot {CHOICE} as a boxer and as a world-famous personality.",
            options: ["both", "and", "or"],
            correctAnswer: "both",
            explanation: "The structure is 'both X and Y', so 'both as a boxer and as a world-famous personality'. 'Both' introduces the paired conjunction."
        },
        {
            id: 16,
            text: "He is very well known {CHOICE} the world.",
            options: ["all in", "all over", "in all"],
            correctAnswer: "all over",
            explanation: "The idiomatic expression is 'all over the world', meaning everywhere in the world."
        },
        {
            id: 17,
            text: "Many people {CHOICE} he was the greatest boxer of all time.",
            options: ["is believing", "are believing", "believe"],
            correctAnswer: "believe",
            explanation: "'Believe' is a stative verb, generally not used in continuous tenses for expressing an opinion or conviction. Simple present 'believe' is correct for 'Many people'."
        },
        {
            id: 18,
            text: "To be the best {CHOICE} the world is not easy.",
            options: ["from", "in", "of"],
            correctAnswer: "in",
            explanation: "When referring to being the best within a geographical area or a defined group, 'in the world' is the correct preposition."
        },
        {
            id: 19,
            text: "Like any top sportsman Ali {CHOICE} train very hard.",
            options: ["had to", "must", "should"],
            correctAnswer: "had to",
            explanation: "'Had to' expresses a past obligation or necessity, fitting the historical context of Ali's training."
        },
        {
            id: 20,
            text: "Even though he has now lost his title, people {CHOICE} always remember him as a champion.",
            options: ["would", "will", "did"],
            correctAnswer: "will",
            explanation: "'Will' is used to express a future certainty or a strong likelihood/prediction about people's future actions or sentiments."
        },
        // PAGE 2
        {
            id: 21,
            text: "The history of {CHOICE} is",
            options: ["aeroplane", "the aeroplane", "an aeroplane"],
            correctAnswer: "the aeroplane",
            explanation: "'The aeroplane' refers to the concept or invention of the aeroplane in general, making it a specific, known entity in this context."
        },
        {
            id: 22,
            text: "{CHOICE} short one. For many centuries men",
            options: ["quite a", "a quite", "quite"],
            correctAnswer: "quite a",
            explanation: "The correct idiomatic structure is 'quite a + adjective + noun' (quite a short one)."
        },
        {
            id: 23,
            text: "are trying / try / had tried to fly, but with", // Text from PDF is "are trying / try / had tried to fly, but with" assuming it means "men {CHOICE} to fly"
            options: ["are trying", "try", "had tried"],
            correctAnswer: "had tried",
            explanation: "Past perfect 'had tried' indicates attempts made over a period in the past before a later development (the 19th century success mentioned next)."
        },
        {
            id: 24,
            text: "{CHOICE} success. In the 19th century a few people",
            options: ["little", "few", "a little"],
            correctAnswer: "little",
            explanation: "'Little' is used with uncountable nouns like 'success' to mean 'not much'. 'A little' would mean 'some, but not much'."
        },
        {
            id: 25,
            text: "succeeded {CHOICE} in balloons. But it wasn't until",
            options: ["to fly", "in flying", "into flying"],
            correctAnswer: "in flying",
            explanation: "The verb 'succeed' is followed by the preposition 'in' and a gerund (-ing form): 'succeed in doing something'."
        },
        {
            id: 26,
            text: "the beginning of {CHOICE} century that anybody",
            options: ["this", "next", "that"],
            correctAnswer: "this", // Solution states 'this'. Refers to the 20th century relative to the 19th.
            explanation: "'This century' refers to the century being discussed as current or most recent in the narrative context (the 20th century after the 19th)."
        },
        {
            id: 27,
            text: "{CHOICE} able to fly in a machine",
            options: ["were", "is", "was"],
            correctAnswer: "was",
            explanation: "'Anybody' is a singular pronoun and takes a singular verb, 'was able'."
        },
        {
            id: 28,
            text: "{CHOICE} was heavier than air, in other words, in",
            options: ["who", "which", "what"],
            correctAnswer: "which",
            explanation: "'Which' is used as a relative pronoun to refer to things (the machine)."
        },
        {
            id: 29,
            text: "{CHOICE} we now call a 'plane'. The first people to achieve",
            options: ["who", "which", "what"],
            correctAnswer: "what",
            explanation: "'What' is used here to mean 'the thing that' (the thing that we now call a 'plane')."
        },
        {
            id: 30,
            text: "'powered flight' were the Wright brothers. {CHOICE} was the machine which was the",
            options: ["His", "Their", "Theirs"],
            correctAnswer: "Theirs",
            explanation: "'Theirs' is a possessive pronoun meaning 'belonging to them' (the Wright brothers)."
        },
        {
            id: 31,
            text: "forerunner of the Jumbo jets and supersonic airliners that are {CHOICE} common",
            options: ["such", "such a", "so"],
            correctAnswer: "such a", // Solution states "such a", assumes "such a common sight"
            explanation: "The structure is 'such a + adjective + singular countable noun' (such a common sight)."
        },
        {
            id: 32,
            text: "sight today. They {CHOICE} hardly have imagined that in 1969",
            options: ["could", "should", "couldn't"],
            correctAnswer: "could",
            explanation: "'Could hardly have imagined' expresses that it was very difficult or almost impossible for them to imagine."
        },
        {
            id: 33,
            text: "{CHOICE} more than half a century later,",
            options: ["not much", "not many", "no much"],
            correctAnswer: "not much",
            explanation: "'Not much more' is used because 'half a century' is treated as a quantity or period of time (uncountable idea here)."
        },
        {
            id: 34,
            text: "a man {CHOICE} landed on the moon.",
            options: ["will be", "had been", "would be"],
            correctAnswer: "would be",
            explanation: "'Would be landed' refers to a future event from a past perspective (their imagining in 1903 about 1969)."
        },
        {
            id: 35,
            text: "Already a {CHOICE} is taking the first steps towards the stars.",
            options: ["man", "man", "the man"], // Assuming options might be "a man", "man", "the man"
            correctAnswer: "man", // "Man" in a general sense (mankind)
            explanation: "'Man' is used here in a general, uncountable sense to mean 'humankind'."
        },
        {
            id: 36,
            text: "Although space satellites have existed {CHOICE} less",
            options: ["since", "during", "for"],
            correctAnswer: "for",
            explanation: "'For' is used with a period of time (less than forty years) to indicate duration."
        },
        {
            id: 37,
            text: "than forty years, we are now dependent {CHOICE} them for all",
            options: ["from", "of", "on"],
            correctAnswer: "on",
            explanation: "The adjective 'dependent' is followed by the preposition 'on': 'dependent on something/someone'."
        },
        {
            id: 38,
            text: "kinds of {CHOICE}. Not only",
            options: ["informations", "information", "an information"],
            correctAnswer: "information",
            explanation: "'Information' is an uncountable noun and does not have a plural form 'informations'. 'An information' is also incorrect."
        },
        {
            id: 39,
            text: "{CHOICE} being used for scientific research in",
            options: ["are they", "they are", "there are"],
            correctAnswer: "are they",
            explanation: "This is an inversion after 'Not only...' at the beginning of a clause: 'Not only are they...'"
        },
        {
            id: 40,
            text: "space, but also to see what kind of weather {CHOICE}.",
            options: ["is coming", "comes", "coming"],
            correctAnswer: "is coming",
            explanation: "Present continuous 'is coming' is used to talk about something arranged or expected in the near future (upcoming weather)."
        },
        {
            id: 41,
            text: "By 1998 there {CHOICE} have been satellites in space for forty",
            options: ["would", "must", "will"],
            correctAnswer: "will",
            explanation: "'Will have been' (future perfect) is used to describe an action that will be completed by a certain time in the future (or future in the past, from the perspective of the writing)."
        },
        {
            id: 42,
            text: "years and the 'space superpowers' are planning to {CHOICE}",
            options: ["have", "make", "let"],
            correctAnswer: "have",
            explanation: "'To have something built' is a causative construction meaning to arrange for something to be built by someone else."
        },
        {
            id: 43,
            text: "massive space stations built. When these {CHOICE}",
            options: ["will be", "are", "will have been"],
            correctAnswer: "are",
            explanation: "In a time clause starting with 'when' referring to the future, we use the simple present ('are') not 'will be'."
        },
        {
            id: 44,
            text: "completed it will be the first time {CHOICE} astronauts will be",
            options: ["when", "where", "that"],
            correctAnswer: "that",
            explanation: "'The first time that...' is a common construction to introduce the specific occasion."
        },
        {
            id: 45,
            text: "able to work in space in large numbers. {CHOICE} all that,",
            options: ["Apart", "For", "Except"],
            correctAnswer: "For", // Solution says "For". "Apart from all that" is also common.
            explanation: "'For all that' means 'in spite of all that', introducing a contrasting point."
        },
        {
            id: 46,
            text: "in many ways the most remarkable flight {CHOICE} all was",
            options: ["of", "above", "at"],
            correctAnswer: "of",
            explanation: "'Flight of all' or 'flight of all time' means the most remarkable one out of all flights."
        },
        {
            id: 47,
            text: "{CHOICE} of the flying bicycle, which the world saw on television,",
            options: ["it", "that", "that one"],
            correctAnswer: "that",
            explanation: "'That of the flying bicycle' refers to 'the most remarkable flight' mentioned previously, using 'that' as a demonstrative pronoun."
        },
        {
            id: 48,
            text: "{CHOICE} across the Channel from England to France, with nothing",
            options: ["flying", "to fly", "fly"],
            correctAnswer: "flying",
            explanation: "A participle clause 'flying across the Channel...' describes the 'flying bicycle' or its action."
        },
        {
            id: 49,
            text: "apart / but / than a man to power it. As the bicycle-flyer said,", // Assuming "{CHOICE} a man"
            options: ["apart", "but", "than"],
            correctAnswer: "but",
            explanation: "'Nothing but a man' means 'only a man'."
        },
        {
            id: 50,
            text: "\"It's the first time I {CHOICE} what hard work it is to be a bird!\"",
            options: ["realize", "I've realized", "I am realizing"],
            correctAnswer: "I've realized",
            explanation: "Present perfect 'I've realized' is used with 'It's the first time...' to describe an experience happening up to the present moment."
        },
        // PAGE 3
        {
            id: 51,
            text: "Many teachers {CHOICE} their students should learn a foreign language.",
            options: ["say to", "say", "tell"],
            correctAnswer: "say",
            explanation: "'Say' is used without a direct object pronoun (like 'their students') immediately after it when reporting what was said. 'Tell' requires an object (tell their students)."
        },
        {
            id: 52,
            text: "Learning a second language is not the same {CHOICE} learning a first language.",
            options: ["as", "like", "than"],
            correctAnswer: "as",
            explanation: "The expression is 'the same as'."
        },
        {
            id: 53,
            text: "It takes {CHOICE} to learn any language.",
            options: ["long time", "long", "a long time"],
            correctAnswer: "a long time",
            explanation: "The correct phrase is 'a long time' when referring to a duration."
        },
        {
            id: 54,
            text: "It is said that Chinese is the world's {CHOICE} language to master.",
            options: ["harder", "hardest", "more hard"],
            correctAnswer: "hardest",
            explanation: "Superlative adjective 'hardest' is used with 'the world's' to indicate the highest degree."
        },
        {
            id: 55,
            text: "English is quite difficult because of all the exceptions {CHOICE} have to be learnt.",
            options: ["who", "which", "what"],
            correctAnswer: "which",
            explanation: "'Which' is a relative pronoun used to refer to things (the exceptions)."
        },
        {
            id: 56,
            text: "You can learn the basic structures of a language quite quickly, but only if you {CHOICE} to make an effort.",
            options: ["are wanting", "will to", "are willing to"],
            correctAnswer: "are willing to",
            explanation: "'Be willing to do something' means to be prepared or ready to do it."
        },
        {
            id: 57,
            text: "A lot of people aren't used {CHOICE} grammar in their own language.",
            options: ["to the study", "to study", "to studying"],
            correctAnswer: "to studying",
            explanation: "The phrase 'be used to' is followed by a gerund (-ing form) or a noun, meaning 'be accustomed to'."
        },
        {
            id: 58,
            text: "Many adult students wish they {CHOICE} their language studies earlier.",
            options: ["would start", "would have started", "had started"],
            correctAnswer: "had started",
            explanation: "After 'wish' to express regret about the past, we use the past perfect ('had started')."
        },
        {
            id: 59,
            text: "In some countries students have to spend a lot of time working {CHOICE} their own.",
            options: ["on", "by", "in"],
            correctAnswer: "on",
            explanation: "'On their own' means alone or independently."
        },
        {
            id: 60,
            text: "There aren't {CHOICE} easy ways of learning a foreign language in your own country.",
            options: ["no", "any", "some"],
            correctAnswer: "any",
            explanation: "'Any' is used in negative sentences ('aren't') with plural countable nouns."
        },
        {
            id: 61,
            text: "Some people try to improve their English by {CHOICE} the BBC World Service.",
            options: ["hearing", "listening", "listening to"],
            correctAnswer: "listening to",
            explanation: "We 'listen to' something. 'Hearing' is passive; 'listening' is active and usually requires 'to'."
        },
        {
            id: 62,
            text: "{CHOICE} with a foreign family can be a good way to learn a language.",
            options: ["Live", "Life", "Living"],
            correctAnswer: "Living",
            explanation: "A gerund ('Living') is used as the subject of the sentence."
        },
        {
            id: 63,
            text: "It's no use {CHOICE} to learn a language just by studying a dictionary.",
            options: ["to try", "trying", "in trying"],
            correctAnswer: "trying",
            explanation: "The expression 'It's no use' is followed by a gerund (-ing form)."
        },
        {
            id: 64,
            text: "Many students {CHOICE} take tests.",
            options: ["would rather not", "would rather prefer not", "would rather not to"],
            correctAnswer: "would rather not",
            explanation: "'Would rather not' is followed by the base form of the verb (take), without 'to'."
        },
        {
            id: 65,
            text: "Some people think it's time we all {CHOICE} a single international language.",
            options: ["learn", "should learn", "learnt"],
            correctAnswer: "learnt", // or "learned" (past subjunctive or simple past)
            explanation: "After 'It's time', we can use the past simple (or past subjunctive, which looks the same) to suggest something should be done."
        },
        {
            id: 66,
            text: "Charles Walker is a teacher at a school in Norwich. He {CHOICE}",
            options: ["has joined", "joined", "joins"],
            correctAnswer: "joined",
            explanation: "Simple past 'joined' is used to indicate when he started (in 1988, mentioned next)."
        },
        {
            id: 67,
            text: "the staff of the school in 1988 and {CHOICE} there ever since.",
            options: ["has been working", "worked", "works"],
            correctAnswer: "has been working",
            explanation: "Present perfect continuous 'has been working' is used for an action that started in the past and continues to the present ('ever since')."
        },
        {
            id: 68,
            text: "Before {CHOICE} to Norwich, he taught in Italy and in Wales, and before that",
            options: ["move", "to move", "moving"],
            correctAnswer: "moving",
            explanation: "After the preposition 'Before', a gerund (-ing form) is used."
        },
        {
            id: 69,
            text: "he {CHOICE} a student at Cambridge University.",
            options: ["has been", "was", "was being"],
            correctAnswer: "was",
            explanation: "Simple past 'was' is used to describe a completed state in the past."
        },
        {
            id: 70,
            text: "So far he {CHOICE} in Norwich for as long as he was in Wales,",
            options: ["isn't", "wasn't", "hasn't been"],
            correctAnswer: "hasn't been",
            explanation: "Present perfect 'hasn't been' is used with 'so far' to talk about a period up to the present."
        },
        {
            id: 71,
            text: "but he likes the city a lot and {CHOICE} like to stay there for at least",
            options: ["should", "would", "could"],
            correctAnswer: "would",
            explanation: "'Would like to' is a polite way of expressing a desire or wish."
        },
        {
            id: 72,
            text: "another two years, or, {CHOICE} he puts it, until his two children",
            options: ["how", "which", "as"],
            correctAnswer: "as",
            explanation: "'As he puts it' is an idiomatic phrase meaning 'in the way he expresses it'."
        },
        {
            id: 73,
            text: "{CHOICE} grown up a bit. He met his wife, Kate, in 1982",
            options: ["have", "will have", "will be"],
            correctAnswer: "have", // "until his two children have grown up"
            explanation: "After 'until' referring to a future point, we use present perfect ('have grown up') to indicate completion before that future point from the perspective of the main clause's future intention."
        },
        {
            id: 74,
            text: "while he {CHOICE} abroad for a while, and they got married",
            options: ["was to live", "was living", "had been living"],
            correctAnswer: "was living",
            explanation: "Past continuous 'was living' is used for an ongoing action in the past ('while' he was living abroad) when another action ('met') happened."
        },
        {
            id: 75,
            text: "in 1986. Their two children, Mark and Susan, {CHOICE} both born in Norwich.",
            options: ["are", "were", "have been"],
            correctAnswer: "were",
            explanation: "Simple past 'were born' is used because their birth is a completed event in the past."
        },
        {
            id: 76,
            text: "Mark, {CHOICE} is four, has just started",
            options: ["who", "which", "he"],
            correctAnswer: "who",
            explanation: "'Who' is a relative pronoun used to refer to people (Mark)."
        },
        {
            id: 77,
            text: "at nursery school, but {CHOICE} sister",
            options: ["his", "their", "her"],
            correctAnswer: "his",
            explanation: "'His' is a possessive adjective referring to Mark (male)."
        },
        {
            id: 78,
            text: "{CHOICE} at home for another couple of years,",
            options: ["shall stay", "stays", "will be staying"],
            correctAnswer: "will be staying",
            explanation: "Future continuous 'will be staying' is used to describe an action that will be in progress over a period of time in the future."
        },
        {
            id: 79,
            text: "because she is nearly two years {CHOICE} than him.",
            options: ["younger", "more young", "the younger"],
            correctAnswer: "younger",
            explanation: "'Younger' is the correct comparative form of the adjective 'young'."
        },
        {
            id: 80,
            text: "Charles and Kate {CHOICE} to live in the country,",
            options: ["are used", "use", "used"],
            correctAnswer: "used", // "used to live" for past habit
            explanation: "'Used to live' describes a past habit or state that is no longer true."
        },
        // PAGE 4 (Questions 81-90)
        {
            id: 81,
            text: "but now they have children, they {CHOICE} into the city.",
            options: ["have moved", "move", "moved"],
            correctAnswer: "have moved",
            explanation: "Present perfect 'have moved' is used for a past action with a result in the present (they live in the city now)."
        },
        {
            id: 82,
            text: "Charles wanted a house {CHOICE} the school",
            options: ["next", "near", "close"],
            correctAnswer: "near",
            explanation: "'Near the school' is the correct prepositional phrase. 'Next to the school' or 'close to the school' would also be possible, but 'next' or 'close' alone are incomplete."
        },
        {
            id: 83,
            text: "{CHOICE} get to work easily. Unfortunately",
            options: ["in order", "for", "to"],
            correctAnswer: "to",
            explanation: "The infinitive of purpose 'to get' is used to explain the reason for wanting the house near the school."
        },
        {
            id: 84,
            text: "{CHOICE} one the two of them really wanted was too expensive,",
            options: ["the", "a", "that"],
            correctAnswer: "the",
            explanation: "'The one' refers to a specific house that they both wanted."
        },
        {
            id: 85,
            text: "so they {CHOICE} buy one a bit further away. By the time the children",
            options: ["must", "should", "had to"],
            correctAnswer: "had to",
            explanation: "'Had to' expresses a past necessity or obligation."
        },
        {
            id: 86,
            text: "{CHOICE} to secondary school,",
            options: ["go", "will go", "will have gone"],
            correctAnswer: "go",
            explanation: "After 'By the time' referring to a future event, the simple present ('go') is used in the time clause."
        },
        {
            id: 87,
            text: "{CHOICE} Charles and Kate hope will be in Norwich,",
            options: ["that", "which", "what"],
            correctAnswer: "which", // "the time which Charles and Kate hope will be in Norwich" or "the place which..." This is a bit awkward, could also be 'that'. Solution is 'which'.
            explanation: "'Which' as a relative pronoun referring to the period or situation they hope for in Norwich. 'That' could also work."
        },
        {
            id: 88,
            text: "the Walkers {CHOICE} living there for a least fifteen years.",
            options: ["will have been", "have been", "will be"],
            correctAnswer: "will have been",
            explanation: "Future perfect continuous 'will have been living' is used to describe an action that will have been in progress for a duration up to a specific point in the future."
        },
        {
            id: 89,
            text: "They can't be sure if they {CHOICE}, but if they",
            options: ["stay", "do stay", "will stay"],
            correctAnswer: "will stay",
            explanation: "In an 'if' clause expressing uncertainty about a future event, 'will stay' can be used, especially after phrases like 'I'm not sure if'."
        },
        {
            id: 90,
            text: "{CHOICE}, their friends won't be too surprised.",
            options: ["don't", "didn't", "won't"],
            correctAnswer: "don't",
            explanation: "This refers to the present possibility or decision not to stay, linked to the previous 'if they will stay'."
        },
        // PAGE 4 - Question Tags (91-100)
        {
            id: 91,
            text: "John's coming to see you, {CHOICE}?",
            options: ["hasn't he", "wasn't he", "isn't he"],
            correctAnswer: "isn't he",
            explanation: "Main clause: 'John's coming' (John is coming - positive, auxiliary 'is'). Tag: negative, same auxiliary -> 'isn't he?'."
        },
        {
            id: 92,
            text: "It's been a long time since you've seen him, {CHOICE}?",
            options: ["hasn't it", "isn't it", "haven't you"],
            correctAnswer: "hasn't it",
            explanation: "Main clause: 'It's been' (It has been - positive, auxiliary 'has'). Tag: negative, same auxiliary -> 'hasn't it?'."
        },
        {
            id: 93,
            text: "He's due to arrive tomorrow, {CHOICE}?",
            options: ["won't he", "isn't he", "will he"],
            correctAnswer: "isn't he",
            explanation: "Main clause: 'He's due' (He is due - positive, auxiliary 'is'). Tag: negative, same auxiliary -> 'isn't he?'."
        },
        {
            id: 94,
            text: "He won't be getting in till about 10.30, {CHOICE}?",
            options: ["isn't he", "is he", "will he"],
            correctAnswer: "will he",
            explanation: "Main clause: 'He won't be' (He will not be - negative, auxiliary 'will'). Tag: positive, same auxiliary -> 'will he?'."
        },
        {
            id: 95,
            text: "You met him while you were on holiday, {CHOICE}?",
            options: ["didn't you", "weren't you", "haven't you"],
            correctAnswer: "didn't you",
            explanation: "Main clause: 'You met him' (Simple Past - positive, auxiliary 'did' is implied). Tag: negative, auxiliary 'did' -> 'didn't you?'."
        },
        {
            id: 96,
            text: "I think I'm expected to pick him up, {CHOICE}?",
            options: ["aren't I", "don't I", "are you"],
            correctAnswer: "aren't I",
            explanation: "The tag refers to 'I'm expected'. Main clause with 'I am' (I'm) uses 'aren't I?' as the negative tag (a special case)."
        },
        {
            id: 97,
            text: "No doubt you'd rather he stayed in England now, {CHOICE}?",
            options: ["didn't you", "wouldn't you", "shouldn't you"],
            correctAnswer: "wouldn't you",
            explanation: "'You'd rather' is 'You would rather' (positive, auxiliary 'would'). Tag: negative, same auxiliary -> 'wouldn't you?'."
        },
        {
            id: 98,
            text: "Nobody else has been told he's coming, {CHOICE}?",
            options: ["is he", "has he", "have they"],
            correctAnswer: "have they",
            explanation: "Statement with 'Nobody' is negative in meaning. The auxiliary is 'has'. The pronoun for 'nobody' in tags is 'they', so the tag is positive 'have they?'."
        },
        {
            id: 99,
            text: "We'd better not stay up too late tonight, {CHOICE}?",
            options: ["didn't we", "have we", "had we"],
            correctAnswer: "had we",
            explanation: "'We'd better not' (We had better not - negative, auxiliary 'had'). Tag: positive, same auxiliary -> 'had we?'."
        },
        {
            id: 100,
            text: "I suppose it's time we called it a day, {CHOICE}?",
            options: ["didn't we", "isn't it", "don't I"],
            correctAnswer: "isn't it",
            explanation: "When a sentence starts with 'I suppose', the tag usually refers to the following clause. Here, 'it's time' (it is time - positive, auxiliary 'is'). Tag: negative -> 'isn't it?'."
        }
    ];

    const quizArea = document.getElementById('quiz-area');
    const submitBtn = document.getElementById('submit-btn');
    const resultsArea = document.getElementById('results-area');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const feedbackP = document.getElementById('feedback');
    const progressList = document.getElementById('progress-list');
    const clearProgressBtn = document.getElementById('clear-progress-btn');

    const synth = window.speechSynthesis;
    let voices = [];

    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }
        voices = synth.getVoices().filter(voice => voice.lang.startsWith('en'));
        // console.log("Available English voices:", voices); 
    }
    
    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function renderQuiz() {
        quizArea.innerHTML = '';
        totalQuestionsSpan.textContent = quizData.length;

        quizData.forEach((q) => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.setAttribute('data-question-id', q.id);

            // Create select element first
            const selectElHTML = createSelectElement(q.options, q.id);
            // Then construct the question text with the select element embedded
            const questionTextHTML = q.text.replace('{CHOICE}', selectElHTML);
            
            const p = document.createElement('p');
            // Use innerHTML to render the select element within the paragraph
            p.innerHTML = `${q.id}) ${questionTextHTML}`; 

            const explainBtn = document.createElement('button');
            explainBtn.classList.add('explain-btn');
            explainBtn.textContent = 'Explain';
            explainBtn.type = 'button';

            const ttsBtn = document.createElement('button');
            ttsBtn.classList.add('tts-btn');
            ttsBtn.textContent = '🔊 Hear';
            ttsBtn.type = 'button';
            if (!synth) {
                ttsBtn.disabled = true;
                ttsBtn.title = "Speech synthesis not supported in your browser.";
            }

            const explanationDiv = document.createElement('div');
            explanationDiv.classList.add('explanation');
            explanationDiv.setAttribute('id', `explanation-${q.id}`);
            explanationDiv.style.display = 'none';
            
            questionBlock.appendChild(p); // p now contains the select element
            
            const controlsDiv = document.createElement('div');
            controlsDiv.classList.add('question-controls');
            controlsDiv.appendChild(explainBtn);
            controlsDiv.appendChild(ttsBtn);
            questionBlock.appendChild(controlsDiv);

            questionBlock.appendChild(explanationDiv);
            
            quizArea.appendChild(questionBlock);

            explainBtn.addEventListener('click', () => toggleExplanation(q.id));
            ttsBtn.addEventListener('click', () => speakCorrectSentence(q.id));
        });
    }

    function createSelectElement(options, questionId) {
        let selectHTML = `<select id="q${questionId}-select" name="q${questionId}">`;
        selectHTML += `<option value="">--Choose--</option>`;
        options.forEach(opt => {
            // Ensure options are properly escaped if they contain special HTML characters
            const escapedOpt = escapeHtml(opt);
            selectHTML += `<option value="${escapedOpt}">${escapedOpt}</option>`;
        });
        selectHTML += `</select>`;
        return selectHTML;
    }

    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') {
            return ''; // Or handle non-string input as appropriate
        }
        return unsafe
             .replace(/&/g, "&")
             .replace(/</g, "<")
             .replace(/>/g, ">")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "'");
    }
    
    function toggleExplanation(questionId) {
        const explanationDiv = document.getElementById(`explanation-${questionId}`);
        const question = quizData.find(q => q.id === questionId);
        const selectedAnswerElement = document.getElementById(`q${questionId}-select`);
        const selectedAnswer = selectedAnswerElement ? selectedAnswerElement.value : "";

        if (!question) return;

        if (explanationDiv.style.display === 'none' || explanationDiv.innerHTML === '') {
            let explanationText = `<strong>Explanation:</strong> ${question.explanation}<br>`;
            if (selectedAnswer) {
                if (selectedAnswer === question.correctAnswer) {
                    explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer)}</strong>' is correct.`;
                    explanationDiv.className = 'explanation correct';
                } else {
                    explanationText += `Your answer '<strong>${escapeHtml(selectedAnswer)}</strong>' is incorrect. The correct answer is '<strong>${escapeHtml(question.correctAnswer)}</strong>'.`;
                    explanationDiv.className = 'explanation incorrect';
                }
            } else {
                 explanationText += `Please select an answer to see if it's correct. The correct answer is '<strong>${escapeHtml(question.correctAnswer)}</strong>'.`;
                 explanationDiv.className = 'explanation';
            }
            explanationDiv.innerHTML = explanationText;
            explanationDiv.style.display = 'block';
        } else {
            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
        }
    }

    function speakCorrectSentence(questionId) {
        if (!synth) {
            alert("Sorry, your browser does not support text-to-speech.");
            return;
        }
        if (synth.speaking) {
            synth.cancel();
        }

        const question = quizData.find(q => q.id === questionId);
        if (!question) return;

        let fullSentenceText = question.text.replace('{CHOICE}', question.correctAnswer);
        fullSentenceText = fullSentenceText.replace(/^\d+\)\s*/, '').trim();
        
        // Preserve trailing punctuation if it was part of the original text structure
        const originalTextEnd = question.text.trim().slice(-1);
        if (['?', '.', '!'].includes(originalTextEnd) && !fullSentenceText.endsWith(originalTextEnd)) {
            fullSentenceText += originalTextEnd;
        }

        const utterThis = new SpeechSynthesisUtterance(fullSentenceText);
        
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror', event);
            // alert('An error occurred during speech synthesis: ' + event.error);
        };
        
        let englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.toLowerCase().includes('google'));
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
        if (!englishVoice) englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
        
        if (englishVoice) {
            utterThis.voice = englishVoice;
        }
        // utterThis.rate = 0.9;

        synth.speak(utterThis);
    }

    submitBtn.addEventListener('click', () => {
        let score = 0;
        if (synth && synth.speaking) {
            synth.cancel();
        }
        quizData.forEach(q => {
            const selectElement = document.getElementById(`q${q.id}-select`);
            if (selectElement && selectElement.value === q.correctAnswer) {
                score++;
            }
            const explanationDiv = document.getElementById(`explanation-${q.id}`);
            if (explanationDiv) {
                explanationDiv.style.display = 'none';
                explanationDiv.innerHTML = '';
            }
        });

        scoreSpan.textContent = score;
        totalQuestionsSpan.textContent = quizData.length; // Ensure total is updated
        feedbackP.textContent = `You got ${score} out of ${quizData.length} questions correct.`;
        resultsArea.style.display = 'block';

        saveProgress(score, quizData.length);
        loadProgress();
        resultsArea.scrollIntoView({ behavior: 'smooth' });
    });

    function saveProgress(currentScore, total) {
        const attempts = JSON.parse(localStorage.getItem('englishTestProgress')) || [];
        const now = new Date();
        attempts.push({
            date: now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            score: currentScore,
            total: total
        });
        localStorage.setItem('englishTestProgress', JSON.stringify(attempts));
    }

    function loadProgress() {
        const attempts = JSON.parse(localStorage.getItem('englishTestProgress')) || [];
        progressList.innerHTML = '';
        if (attempts.length === 0) {
            progressList.innerHTML = '<li>No past attempts recorded.</li>';
            return;
        }
        attempts.slice().reverse().forEach(attempt => {
            const li = document.createElement('li');
            li.textContent = `${attempt.date}: Scored ${attempt.score} / ${attempt.total}`;
            progressList.appendChild(li);
        });
    }
    
    clearProgressBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear all progress history? This cannot be undone.")) {
            localStorage.removeItem('englishTestProgress');
            loadProgress();
        }
    });

    // Initial setup
    renderQuiz();
    loadProgress();
    resultsArea.style.display = 'none';
});