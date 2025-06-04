// This file defines the quiz data for CELPIP Writing Task Vocabulary Practice

const quizData = [
    // --- Task 1: Writing an Email (Formal/Informal depending on prompt) ---
    // Salutations & Openings
    {
        id: 1,
        text: "For a formal email to a company when you don't know the recipient's name: 'Dear Sir or {CHOICE},'",
        options: ["Madam", "Lady", "Woman"],
        correctAnswer: "Madam",
        explanation: "'Dear Sir or Madam,' is a standard formal salutation for unknown recipients."
    },
    {
        id: 2,
        text: "A slightly less formal but still professional opening than 'Dear Sir/Madam' could be 'To the {CHOICE} Department,'",
        options: ["Relevant", "Correct", "Good"],
        correctAnswer: "Relevant",
        explanation: "'To the Relevant Department,' or 'To the Hiring Committee,' can be used if appropriate."
    },
    {
        id: 3,
        text: "Stating the purpose of a formal email: 'I am writing to {CHOICE} my interest in the Marketing Manager position advertised on your website.'",
        options: ["express", "tell strongly", "make show"],
        correctAnswer: "express",
        explanation: "'Express my interest' is a formal way to state your purpose in a job application."
    },
    {
        id: 4,
        text: "Referring to previous contact in an email: '{CHOICE} our telephone conversation yesterday, I am sending you the requested documents.'",
        options: ["Further to", "Because after", "Making from talk"],
        correctAnswer: "Further to",
        explanation: "'Further to' is a formal way to refer to previous communication."
    },
    // Making Requests / Inquiries
    {
        id: 5,
        text: "A polite way to ask for information: 'I would be {CHOICE} if you could clarify the requirements for this role.'",
        options: ["grateful", "happy much", "thanking now"],
        correctAnswer: "grateful",
        explanation: "'I would be grateful if...' is a standard polite request."
    },
    {
        id: 6,
        text: "Requesting action: 'Could you please {CHOICE} this matter at your earliest convenience?'",
        options: ["look into", "make see for", "do check on"],
        correctAnswer: "look into",
        explanation: "'Look into this matter' means to investigate or examine it."
    },
    {
        id: 7,
        text: "Another formal request: 'I would {CHOICE} it if you could send me a copy of the report.'",
        options: ["appreciate", "like very", "want for me"],
        correctAnswer: "appreciate",
        explanation: "'I would appreciate it if...' is a polite and common request."
    },
    // Expressing Complaint / Dissatisfaction
    {
        id: 8,
        text: "Starting a complaint email: 'I am writing to voice my {CHOICE} regarding the recent changes to the service schedule.'",
        options: ["concerns", "bad feelings", "angry makes"],
        correctAnswer: "concerns",
        explanation: "'Voice my concerns/dissatisfaction' is a formal way to begin a complaint."
    },
    {
        id: 9,
        text: "Describing a problem: 'The product I received was {CHOICE} and did not function as advertised.'",
        options: ["defective", "bad made", "no good for use"],
        correctAnswer: "defective",
        explanation: "'Defective' means not working correctly or having a fault."
    },
    {
        id: 10,
        text: "Stating the negative impact: 'This has caused me considerable {CHOICE} and disruption to my work.'",
        options: ["inconvenience", "bad time make", "trouble for me big"],
        correctAnswer: "inconvenience",
        explanation: "'Inconvenience' refers to trouble or difficulty caused to one's personal requirements or comfort."
    },
    // Proposing Solutions / Requesting Action (Complaint)
    {
        id: 11,
        text: "Suggesting a resolution to a complaint: 'I trust you will take the necessary steps to {CHOICE} this situation promptly.'",
        options: ["rectify", "make good now", "do fix for it"],
        correctAnswer: "rectify",
        explanation: "'Rectify' means to correct something that is wrong."
    },
    {
        id: 12,
        text: "Requesting a specific outcome: 'Therefore, I request a full {CHOICE} for the faulty item.'",
        options: ["refund", "money back make", "pay again for bad"],
        correctAnswer: "refund",
        explanation: "A 'refund' is a sum of money that is paid back."
    },
    // Apologizing
    {
        id: 13,
        text: "A formal apology: 'Please accept my sincere {CHOICE} for any inconvenience this may have caused.'",
        options: ["apologies", "sorry makes", "bad feeling says"],
        correctAnswer: "apologies",
        explanation: "'Sincere apologies' is a standard formal apology."
    },
    // Providing Information / Attachments
    {
        id: 14,
        text: "Referring to an attachment: 'Please find {CHOICE} my resume for your consideration.'",
        options: ["attached", "in this send", "making with this"],
        correctAnswer: "attached",
        explanation: "'Please find attached...' is a standard phrase for referring to email attachments."
    },
    {
        id: 15,
        text: "Another way to refer to an attachment: 'I have {CHOICE} a copy of the contract for your review.'",
        options: ["enclosed", "put with it", "made to go now"],
        correctAnswer: "enclosed",
        explanation: "'Enclosed' is often used, similar to 'attached', especially if thinking of traditional mail."
    },
    // Closings
    {
        id: 16,
        text: "A polite closing before the final salutation: 'Thank you for your time and {CHOICE}.'",
        options: ["consideration", "good looking at", "nice thinking for"],
        correctAnswer: "consideration",
        explanation: "'Thank you for your time and consideration' is a common polite closing."
    },
    {
        id: 17,
        text: "Offering further assistance: 'Please do not {CHOICE} to contact me if you require any further information.'",
        options: ["hesitate", "make stop for ask", "feel bad to call"],
        correctAnswer: "hesitate",
        explanation: "'Please do not hesitate to contact me...' is a standard offer of further help."
    },
    {
        id: 18,
        text: "Looking forward to a response: 'I {CHOICE} hearing from you soon.'",
        options: ["look forward to", "want happy for hear", "make wait for say"],
        correctAnswer: "look forward to",
        explanation: "'I look forward to hearing from you' is a common and polite way to anticipate a reply."
    },
    // Informal/Semi-Formal Email Vocabulary
    {
        id: 19,
        text: "A casual way to start an email to a colleague: 'Just wanted to {CHOICE} on the progress of the marketing campaign.'",
        options: ["follow up", "make ask now", "do a see for"],
        correctAnswer: "follow up",
        explanation: "'Follow up on' means to check the progress of something or get more information."
    },
    {
        id: 20,
        text: "Suggesting a meeting informally: 'Are you {CHOICE} for a quick chat sometime next week?'",
        options: ["free", "good to make time", "open for talk"],
        correctAnswer: "free",
        explanation: "'Are you free/available for a chat?' is a common informal way to suggest a meeting."
    },
    {
        id: 21,
        text: "A friendly closing to a colleague: '{CHOICE} wishes,'",
        options: ["Warm", "My good makes", "Happy for you now"],
        correctAnswer: "Warm",
        explanation: "'Warm regards,' or 'Kind regards,' or 'Best wishes,' are friendly closings."
    },
    // --- Task 2: Responding to Survey Questions ---
    // Stating Opinions/Preferences
    {
        id: 22,
        text: "Expressing a strong preference: 'Without a {CHOICE}, I believe option A is the most suitable choice for our community.'",
        options: ["doubt", "bad think for it", "no maybe say"],
        correctAnswer: "doubt",
        explanation: "'Without a doubt' or 'Undoubtedly' expresses strong conviction."
    },
    {
        id: 23,
        text: "A more nuanced preference: 'While both options have their merits, I am more {CHOICE} towards developing the green space.'",
        options: ["inclined", "made to like more", "feeling good for"],
        correctAnswer: "inclined",
        explanation: "'Inclined towards' suggests a preference that is not absolute."
    },
    {
        id: 24,
        text: "Justifying a choice: 'My decision is primarily {CHOICE} on the long-term environmental benefits.'",
        options: ["based", "made for thinking", "done from good reason"],
        correctAnswer: "based",
        explanation: "'Based on' clearly states the foundation of your decision."
    },
    // Discussing Advantages
    {
        id: 25,
        text: "Highlighting a key benefit: 'A significant {CHOICE} of this proposal is its potential to reduce traffic congestion.'",
        options: ["advantage", "good making part", "plus for doing it"],
        correctAnswer: "advantage",
        explanation: "'Advantage', 'benefit', or 'positive aspect' are suitable."
    },
    {
        id: 26,
        text: "Another phrase for an advantage: 'This option also offers the {CHOICE} of being more cost-effective in the long run.'",
        options: ["merit", "good point for sure", "best thing of all"],
        correctAnswer: "merit",
        explanation: "'Merit' refers to a good quality or feature that deserves praise."
    },
    // Discussing Disadvantages
    {
        id: 27,
        text: "Pointing out a negative aspect: 'One potential {CHOICE} of the alternative plan is its higher initial investment cost.'",
        options: ["drawback", "bad part for it", "minus making thing"],
        correctAnswer: "drawback",
        explanation: "'Drawback', 'disadvantage', or 'shortcoming' are appropriate."
    },
    {
        id: 28,
        text: "Expressing concern about a downside: 'I am somewhat {CHOICE} about the logistical challenges this might entail.'",
        options: ["concerned", "worried making now", "feeling not good for"],
        correctAnswer: "concerned",
        explanation: "'Concerned about' or 'apprehensive about' expresses worry."
    },
    // Comparing Options
    {
        id: 29,
        text: "When comparing, to highlight a difference: 'In {CHOICE} to the first option, the second one provides more flexibility.'",
        options: ["contrast", "making other look", "different way for it"],
        correctAnswer: "contrast",
        explanation: "'In contrast to' or 'Unlike' highlights differences."
    },
    {
        id: 30,
        text: "To show similarity: '{CHOICE}, both proposals aim to improve community well-being.'",
        options: ["Similarly", "Making same for both", "Doing like the other"],
        correctAnswer: "Similarly",
        explanation: "'Similarly' or 'Likewise' indicates a resemblance."
    },
    // Making Recommendations / Concluding Survey
    {
        id: 31,
        text: "Recommending a course of action: 'Therefore, I would {CHOICE} that the city council prioritize the park development project.'",
        options: ["advocate", "say strong for do", "make them choose this"],
        correctAnswer: "advocate",
        explanation: "'Advocate' means to publicly recommend or support."
    },
    {
        id: 32,
        text: "Concluding your survey response: '{CHOICE}, I believe this decision will have the most positive impact on our community.'",
        options: ["In summary", "For the end make say", "At the last telling now"],
        correctAnswer: "In summary",
        explanation: "'In summary', 'To conclude', or 'Overall' are effective concluding phrases."
    },
    {
        id: 33,
        text: "Expressing hope for the outcome: 'I am {CHOICE} that the chosen option will be implemented successfully.'",
        options: ["optimistic", "good feeling for future", "happy hope make"],
        correctAnswer: "optimistic",
        explanation: "'Optimistic' means hopeful and confident about the future."
    },
    // --- General Formal/Academic Vocabulary for Writing ---
    {
        id: 34,
        text: "The study aims to {CHOICE} the effectiveness of different teaching methods.",
        options: ["evaluate", "make good see for", "do a check on how"],
        correctAnswer: "evaluate",
        explanation: "'Evaluate', 'assess', or 'determine' are verbs for judging effectiveness."
    },
    {
        id: 35,
        text: "It is {CHOICE} that participants provide informed consent before joining the research.",
        options: ["imperative", "must be done now", "very big need for"],
        correctAnswer: "imperative",
        explanation: "'Imperative', 'crucial', or 'essential' mean extremely important."
    },
    {
        id: 36,
        text: "The new software is designed to {CHOICE} workflow and increase productivity.",
        options: ["streamline", "make easy fast", "do good flow for"],
        correctAnswer: "streamline",
        explanation: "'Streamline' means to make a system or organization more efficient."
    },
    {
        id: 37,
        text: "The findings of the report {CHOICE} the need for policy reform.",
        options: ["underscore", "make strong point for", "do a big tell on"],
        correctAnswer: "underscore",
        explanation: "'Underscore', 'highlight', or 'emphasize' stress importance."
    },
    {
        id: 38,
        text: "A {CHOICE} number of residents have expressed support for the initiative.",
        options: ["substantial", "very big many", "good lot of them"],
        correctAnswer: "substantial",
        explanation: "'Substantial', 'significant', or 'considerable' mean large in amount or importance."
    },
    {
        id: 39,
        text: "The committee will {CHOICE} on Friday to discuss the budget proposal.",
        options: ["convene", "make a meet now", "do a sit together"],
        correctAnswer: "convene",
        explanation: "'Convene' means to come or bring together for a meeting or activity."
    },
    {
        id: 40,
        text: "The project's success will largely {CHOICE} on effective team collaboration.",
        options: ["depend", "make from good work", "do because of team"],
        correctAnswer: "depend",
        explanation: "'Depend on' means to be decided or determined by something else."
    },
    {
        id: 41,
        text: "It is important to {CHOICE} between correlation and causation when analyzing data.",
        options: ["differentiate", "make see two things", "do a look for not same"],
        correctAnswer: "differentiate",
        explanation: "'Differentiate' means to recognize or ascertain what makes something different."
    },
    {
        id: 42,
        text: "The company plans to {CHOICE} its resources towards research and development.",
        options: ["allocate", "give money for make", "do a spend on new"],
        correctAnswer: "allocate",
        explanation: "'Allocate' means to distribute resources or duties for a particular purpose."
    },
    {
        id: 43,
        text: "The arguments presented in the essay were {CHOICE} and well-supported by evidence.",
        options: ["coherent", "good making sense", "all parts fit nice"],
        correctAnswer: "coherent",
        explanation: "'Coherent' means logical and consistent."
    },
    {
        id: 44,
        text: "The long-term {CHOICE} of this decision need to be carefully considered.",
        options: ["implications", "what happens after big", "future makes from it"],
        correctAnswer: "implications",
        explanation: "'Implications' are the conclusions that can be drawn from something, or its likely consequences."
    },
    {
        id: 45,
        text: "The new policy aims to {CHOICE} opportunities for underprivileged youth.",
        options: ["foster", "make grow good for", "do help much for"],
        correctAnswer: "foster",
        explanation: "'Foster' means to encourage or promote the development of something."
    },
    {
        id: 46,
        text: "The survey results provide valuable {CHOICE} into consumer preferences.",
        options: ["insights", "deep looks for see", "good knowings from it"],
        correctAnswer: "insights",
        explanation: "'Insights' are accurate and deep understanding of something."
    },
    {
        id: 47,
        text: "The government must take {CHOICE} measures to address the housing crisis.",
        options: ["decisive", "strong make-do now", "big fix-it ways"],
        correctAnswer: "decisive",
        explanation: "'Decisive measures' are actions taken quickly and effectively to resolve something."
    },
    {
        id: 48,
        text: "A {CHOICE} approach is needed to tackle such a multifaceted problem.",
        options: ["holistic", "all-parts-together way", "big round look at"],
        correctAnswer: "holistic",
        explanation: "'Holistic' means considering a whole thing or being to be more than a collection of parts."
    },
    {
        id: 49,
        text: "The organization is committed to promoting environmental {CHOICE}.",
        options: ["sustainability", "good for earth long time", "making nature last"],
        correctAnswer: "sustainability",
        explanation: "'Sustainability' is the ability to be maintained at a certain rate or level, especially in an environmental context."
    },
    {
        id: 50,
        text: "It is {CHOICE} that the project be completed within the allocated budget.",
        options: ["paramount", "top most important", "very big need for sure"],
        correctAnswer: "paramount",
        explanation: "'Paramount' means more important than anything else; supreme."
    },
    {
        id: 51,
        text: "The team needs to {CHOICE} a strategy to overcome these obstacles.",
        options: ["devise", "make a good plan for", "think up a way through"],
        correctAnswer: "devise",
        explanation: "'Devise' means to plan or invent a complex procedure, system, or mechanism by careful thought."
    },
    {
        id: 52,
        text: "The economic downturn had a {CHOICE} effect on small businesses.",
        options: ["detrimental", "very bad make for", "harm doing big time"],
        correctAnswer: "detrimental",
        explanation: "'Detrimental' means tending to cause harm."
    },
    {
        id: 53,
        text: "Further research is needed to {CHOICE} these initial findings.",
        options: ["corroborate", "make more true for sure", "add good proof to"],
        correctAnswer: "corroborate",
        explanation: "'Corroborate' means to confirm or give support to a statement, theory, or finding."
    },
    {
        id: 54,
        text: "The workshop aims to {CHOICE} participants with the necessary skills.",
        options: ["equip", "give tools for doing", "make able with good ways"],
        correctAnswer: "equip",
        explanation: "'Equip with' means to supply with the necessary items for a particular purpose."
    },
    {
        id: 55,
        text: "The proposed legislation has {CHOICE} widespread debate among the public.",
        options: ["elicited", "made big talk from", "caused many says for"],
        correctAnswer: "elicited",
        explanation: "'Elicit' means to evoke or draw out a response, answer, or fact from someone."
    },
    {
        id: 56,
        text: "It is essential to {CHOICE} to ethical standards in all business dealings.",
        options: ["adhere", "stick hard to rules", "do good by the law way"],
        correctAnswer: "adhere",
        explanation: "'Adhere to' means to stick fast to (a substance or surface) or believe in and follow the practices of."
    },
    {
        id: 57,
        text: "The manager will {CHOICE} the information to all team members tomorrow.",
        options: ["disseminate", "send out wide to all", "make know for everyone"],
        correctAnswer: "disseminate",
        explanation: "'Disseminate' means to spread information, knowledge, ideas, etc. widely."
    },
    {
        id: 58,
        text: "The project requires a {CHOICE} effort from all departments involved.",
        options: ["concerted", "big team work for all", "doing together strong way"],
        correctAnswer: "concerted",
        explanation: "'Concerted effort' means a coordinated and determined effort."
    },
    {
        id: 59,
        text: "The company is seeking to {CHOICE} its market share in Asia.",
        options: ["augment", "make bigger more for it", "add to what it has"],
        correctAnswer: "augment",
        explanation: "'Augment' means to make something greater by adding to it; increase."
    },
    {
        id: 60,
        text: "The preliminary results are {CHOICE}, but more data is needed.",
        options: ["promising", "good hope looking", "making a future bright"],
        correctAnswer: "promising",
        explanation: "'Promising' means showing signs of future success."
    },
    {
        id: 61,
        text: "The city needs to {CHOICE} its aging infrastructure to support future growth.",
        options: ["revitalize", "make new life for old", "do fresh start on things"],
        correctAnswer: "revitalize",
        explanation: "'Revitalize' means to imbue something with new life and vitality."
    },
    {
        id: 62,
        text: "The two companies decided to {CHOICE} on this research project.",
        options: ["collaborate", "work together for make", "do a join for good"],
        correctAnswer: "collaborate",
        explanation: "'Collaborate' means to work jointly on an activity or project."
    },
    {
        id: 63,
        text: "The contract {CHOICE} that all work must be completed by December 31st.",
        options: ["stipulates", "says strong in paper", "makes a rule for end"],
        correctAnswer: "stipulates",
        explanation: "'Stipulate' means to demand or specify a requirement, typically as part of an agreement."
    },
    {
        id: 64,
        text: "Effective communication is {CHOICE} to the success of any team.",
        options: ["conducive", "good making for help", "doing a best way for"],
        correctAnswer: "conducive",
        explanation: "'Conducive to' means making a certain situation or outcome likely or possible."
    },
    {
        id: 65,
        text: "The government will {CHOICE} new measures to combat tax evasion.",
        options: ["implement", "make do now for real", "start using things for"],
        correctAnswer: "implement",
        explanation: "'Implement' means to put a decision, plan, agreement, etc., into effect."
    },
    {
        id: 66,
        text: "The evidence presented was not {CHOICE} enough to secure a conviction.",
        options: ["substantive", "big true for real", "making a strong case for"],
        correctAnswer: "substantive",
        explanation: "'Substantive' means having a firm basis in reality and therefore important, meaningful, or considerable."
    },
    {
        id: 67,
        text: "The organization strives to be {CHOICE} to the needs of the community.",
        options: ["responsive", "quick do for help", "making good answer for"],
        correctAnswer: "responsive",
        explanation: "'Responsive to' means reacting quickly and positively."
    },
    {
        id: 68,
        text: "The details of the plan are still {CHOICE} and subject to change.",
        options: ["tentative", "not sure for now make", "maybe like this way"],
        correctAnswer: "tentative",
        explanation: "'Tentative' means not certain or fixed; provisional."
    },
    {
        id: 69,
        text: "The success of this initiative is {CHOICE} on active participation from all members.",
        options: ["predicated", "made true because of", "depends big for it"],
        correctAnswer: "predicated",
        explanation: "'Predicated on' means founded or based on something."
    },
    {
        id: 70,
        text: "It is important to maintain a {CHOICE} attitude, even when facing challenges.",
        options: ["resilient", "strong keep going make", "bounce back easy way"],
        correctAnswer: "resilient",
        explanation: "'Resilient' means able to withstand or recover quickly from difficult conditions."
    },
    {
        id: 71,
        text: "The report aims to provide a {CHOICE} overview of the current economic climate.",
        options: ["succinct", "short good say for", "quick tell all of it"],
        correctAnswer: "succinct",
        explanation: "'Succinct' means briefly and clearly expressed."
    },
    {
        id: 72,
        text: "The findings from the study have significant {CHOICE} for public health policy.",
        options: ["ramifications", "big effects after all", "what happens next for it"],
        correctAnswer: "ramifications",
        explanation: "'Ramifications' are complex or unwelcome consequences of an action or event."
    },
    {
        id: 73,
        text: "The company will need to {CHOICE} its strategy to remain competitive in the market.",
        options: ["recalibrate", "make new settings for", "do a change for better"],
        correctAnswer: "recalibrate",
        explanation: "'Recalibrate' means to adjust or realign something, such as a strategy or instrument."
    },
    {
        id: 74,
        text: "There is a {CHOICE} need for affordable housing in this city.",
        options: ["pressing", "very big want now for", "must have quick time"],
        correctAnswer: "pressing",
        explanation: "'Pressing need' means an urgent or important need."
    },
    {
        id: 75,
        text: "The new design incorporates several {CHOICE} features to improve user experience.",
        options: ["innovative", "new smart make for", "clever good ideas in"],
        correctAnswer: "innovative",
        explanation: "'Innovative' means featuring new methods; advanced and original."
    },
    {
        id: 76,
        text: "It's crucial to {CHOICE} the problem accurately before attempting to solve it.",
        options: ["diagnose", "find the what's wrong", "make a see for the bad"],
        correctAnswer: "diagnose",
        explanation: "'Diagnose' means to identify the nature of an illness or other problem by examination of the symptoms."
    },
    {
        id: 77,
        text: "The team showed remarkable {CHOICE} in adapting to the unexpected changes.",
        options: ["versatility", "good change easy make", "can do many ways for"],
        correctAnswer: "versatility",
        explanation: "'Versatility' means the ability to adapt or be adapted to many different functions or activities."
    },
    {
        id: 78,
        text: "The project was completed ahead of schedule, which was a {CHOICE} achievement.",
        options: ["commendable", "very good make for praise", "big well done thing"],
        correctAnswer: "commendable",
        explanation: "'Commendable' means deserving praise."
    },
    {
        id: 79,
        text: "The negotiation process was {CHOICE}, with both sides unwilling to compromise initially.",
        options: ["arduous", "very hard long time make", "big difficult doing for"],
        correctAnswer: "arduous",
        explanation: "'Arduous' means involving or requiring strenuous effort; difficult and tiring."
    },
    {
        id: 80,
        text: "The company is known for its {CHOICE} commitment to customer satisfaction.",
        options: ["unwavering", "strong no change make for", "big true always keep"],
        correctAnswer: "unwavering",
        explanation: "'Unwavering' means steady or resolute; not wavering."
    },
    {
        id: 81,
        text: "We must {CHOICE} from making any hasty generalizations based on limited data.",
        options: ["refrain", "stop doing quick say", "no make big think from small"],
        correctAnswer: "refrain",
        explanation: "'Refrain from' means to stop oneself from doing something."
    },
    {
        id: 82,
        text: "The two theories are not mutually {CHOICE}; they can coexist.",
        options: ["exclusive", "no fit together make", "one or other only way"],
        correctAnswer: "exclusive",
        explanation: "'Mutually exclusive' means that two or more things cannot all be true or happen at the same time."
    },
    {
        id: 83,
        text: "The speaker's arguments were {CHOICE} and easy to follow.",
        options: ["lucid", "clear good make sense", "easy see for thinking"],
        correctAnswer: "lucid",
        explanation: "'Lucid' means expressed clearly; easy to understand."
    },
    {
        id: 84,
        text: "The company needs to {CHOICE} its efforts to improve employee morale.",
        options: ["bolster", "make strong more for good", "add power to help feel"],
        correctAnswer: "bolster",
        explanation: "'Bolster' means to support or strengthen."
    },
    {
        id: 85,
        text: "The new discovery could {CHOICE} our understanding of the universe.",
        options: ["revolutionize", "make big change for all know", "do a new way for see"],
        correctAnswer: "revolutionize",
        explanation: "'Revolutionize' means to change something radically or fundamentally."
    },
    {
        id: 86,
        text: "The evidence is {CHOICE}; there's no room for doubt.",
        options: ["irrefutable", "super true no question", "big strong proof for sure"],
        correctAnswer: "irrefutable",
        explanation: "'Irrefutable' means impossible to deny or disprove."
    },
    {
        id: 87,
        text: "The government has pledged to {CHOICE} poverty in the region.",
        options: ["eradicate", "make go away all bad poor", "do a finish for no have"],
        correctAnswer: "eradicate",
        explanation: "'Eradicate' means to destroy completely; put an end to."
    },
    {
        id: 88,
        text: "The transition to a new system was remarkably {CHOICE}, with minimal disruption.",
        options: ["seamless", "easy go smooth no stop", "good change no problem"],
        correctAnswer: "seamless",
        explanation: "'Seamless' means smooth and continuous, with no apparent gaps or spaces between one part and the next."
    },
    {
        id: 89,
        text: "The project's success is a {CHOICE} to the hard work and dedication of the team.",
        options: ["testament", "big true show for good", "proof of make strong work"],
        correctAnswer: "testament",
        explanation: "'A testament to' something means it serves as clear proof of it."
    },
    {
        id: 90,
        text: "It is important to {CHOICE} your sources when writing an academic paper.",
        options: ["cite", "say where from make", "do a tell for book used"],
        correctAnswer: "cite",
        explanation: "'Cite' means to quote (a passage, book, or author) as evidence for or justification of an argument or statement."
    },
    {
        id: 91,
        text: "The politician's speech was intended to {CHOICE} the concerns of the voters.",
        options: ["assuage", "make feel better for worry", "do a calm for scared"],
        correctAnswer: "assuage",
        explanation: "'Assuage' means to make an unpleasant feeling less intense."
    },
    {
        id: 92,
        text: "The new initiative is designed to be {CHOICE} with existing company policies.",
        options: ["congruent", "good fit together make", "same way for rules now"],
        correctAnswer: "congruent",
        explanation: "'Congruent with' means in agreement or harmony with."
    },
    {
        id: 93,
        text: "The manager tried to {CHOICE} a dispute between two employees.",
        options: ["mediate", "make peace for fight two", "do a stop for bad talk"],
        correctAnswer: "mediate",
        explanation: "'Mediate' means to intervene between people in a dispute in order to bring about an agreement or reconciliation."
    },
    {
        id: 94,
        text: "The findings are {CHOICE}, suggesting a need for further investigation.",
        options: ["inconclusive", "not sure for real make", "no clear end for it now"],
        correctAnswer: "inconclusive",
        explanation: "'Inconclusive' means not leading to a firm conclusion; not ending doubt or dispute."
    },
    {
        id: 95,
        text: "The company's {CHOICE} growth over the past year has been impressive.",
        options: ["exponential", "super fast big make up", "growing very quick now"],
        correctAnswer: "exponential",
        explanation: "'Exponential growth' means growth whose rate becomes ever more rapid in proportion to the growing total number or size."
    },
    {
        id: 96,
        text: "It is important to approach this sensitive topic with {CHOICE} and understanding.",
        options: ["tact", "good careful talk way", "nice soft speak for it"],
        correctAnswer: "tact",
        explanation: "'Tact' means adroitness and sensitivity in dealing with others or with difficult issues."
    },
    {
        id: 97,
        text: "The evidence seems to {CHOICE} his version of the events.",
        options: ["substantiate", "make strong true for say", "add good proof to tell"],
        correctAnswer: "substantiate",
        explanation: "'Substantiate' means to provide evidence to support or prove the truth of something."
    },
    {
        id: 98,
        text: "The two countries agreed to a {CHOICE} of hostilities.",
        options: ["cessation", "big stop for fighting now", "make end to bad war time"],
        correctAnswer: "cessation",
        explanation: "'Cessation' means the fact or process of ending or being brought to an end."
    },
    {
        id: 99,
        text: "The current economic climate is {CHOICE}, making long-term planning difficult.",
        options: ["volatile", "up down fast make hard", "changing quick no sure way"],
        correctAnswer: "volatile",
        explanation: "'Volatile' means liable to change rapidly and unpredictably, especially for the worse."
    },
    {
        id: 100,
        text: "The team's {CHOICE} efforts finally paid off with a championship win.",
        options: ["persevering", "strong keep trying hard make", "no give up doing for it"],
        correctAnswer: "persevering",
        explanation: "'Persevering efforts' refers to continued effort despite difficulties."
    }
];