// Quotes
const quotes = [
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Some people look for a beautiful place. Others make a place beautiful.",
  "Happiness is not by chance, but by choice.",
  "If I cannot do great things, I can do small things in a great way.",
  "The bad news is time flies. The good news is you're the pilot.",
  "You make a life out of what you have, not what you're missing.",
  "It's how you deal with failure that determines how you achieve success.",
];

// Strengths;
const characterStrengths = {
  Wisdom: [
    "Creativity",
    "Curiosity",
    "Judgment",
    "Love of Learning",
    "Perspective",
  ],
  Courage: ["Bravery", "Honesty", "Perseverance", "Zest"],
  Humanity: ["Kindness", "Love", "Social Intelligence"],
  Justice: ["Fairness", "Leadership", "Teamwork"],
  Temperance: ["Forgiveness", "Humility", "Prudence", "Self-Regulation"],
  Transcendence: [
    "Appreciation of Beauty and Excellence",
    "Gratitude",
    "Hope",
    "Humor",
    "Spirituality",
  ],
}; // characterStrengths is an object composed with 'virtue' keys with associated arrays of 'strength' values

const descriptionStrengths = {
  Creativity:
    "Creativity is thinking of new ways to do things. It involves producing ideas or behaviors that are original. However, originality is not enough: whatever is created, whether an idea or a product, must also be useful or adaptable. For example, you might write a blog post that is unique because it is entirely gibberish. That’s not going to be useful, so it would not be considered creative.",

  Curiosity:
    "To be curious is to explore and discover, to take an interest in ongoing experience for its own sake. Curiosity is often described as novelty-seeking and being open to experience, and it’s associated with the natural desire to build knowledge. It is fulfilling to journey toward an answer, to engage in a new experience, or to learn a new fact.",

  Judgment:
    "Judgment involves making rational and logical choices, and analytically evaluating ideas, opinions, and facts. To use a term that originally came from outside the character field: it is critical thinking, weighing the evidence fairly, thinking things through, and examining the evidence from all sides rather than jumping to conclusions. Judgment also involves being open-minded and able to change one’s mind in the light of evidence, remaining open to other arguments and perspectives.",

  "Love of Learning":
    "Love of learning means a passion for learning, a desire to learn just for learning’s sake. In fact, curiosity and love of learning are among the most closely related strengths in the VIA Classification. They can still be distinguished though. While curiosity is the motivating force that leads you to seek out new information, love of learning refers to the desire to hold on to and deepen that information. The curious person is motivated by the pursuit of knowledge; the person who loves learning is motivated by the expansion of their fund of knowledge. Where curiosity is often associated with a great deal of energy and a drive to gather information, the lover of learning is often more contemplative.",

  Perspective:
    "Perspective means the ability to see the bigger picture in life. Perspective is about being able to see the forest as well as the trees, to avoid getting wrapped up in the small details when there are bigger issues to consider. While listening to others, perspective helps you to simultaneously think about life lessons, proper conduct, and what’s best for the situation being discussed.",

  Bravery:
    "To be brave is to face your challenges, threats, or difficulties. It involves valuing a goal or conviction and acting upon it, whether popular or not. A central element involves facing – rather than avoiding – fears.",

  Honesty:
    "When you are honest, you speak the truth. More broadly, you present yourself in a genuine and sincere way, without pretense, and taking responsibility for your feelings and actions. You are a person of integrity — you are who you say you are — and you act consistently across the domains of your life rather than being one way in the community and a completely different way in your family. As a result, you believe you are being consistently true to yourself.",

  Perseverance:
    "Perseverance is sticking with things. It means being hardworking and finishing what is started, despite barriers and obstacles that arise. The pleasure received from completing tasks and projects is very important to those who are high in perseverance. Sometimes he or she must dig deep and muster the will to overcome thoughts of giving up. Perseverance involves organizing oneself to support activities (e.g., scheduling breaks and sticking to them, rewarding in small ways along the way), but when all else fails, this strength helps the person to barrel through until the project is done.",

  Zest: "Zest means approaching a situation, or life in general, with excitement and energy, not approaching tasks or activities halfway or halfheartedly. People who are high in zest are excited to get up in the morning, and they live their lives like an adventure. Zest is a dynamic strength that is directly related to physical and psychological wellness. This strength has the strongest ties to overall life satisfaction and a life of engagement.",

  Kindness:
    "Simply put, kindness is being nice to others. As you examine kindness further, a number of important dimensions begin to unfold. Kindness is being generous with others, giving your time, money, and talent to support those who are in need. Kindness is being compassionate, which means to really be there for someone, listening intently to their suffering or just sitting with them and silently supporting them. Such compassion involves a deep concern for the welfare of others. Kindness is also being nurturing and caring to others — to enjoy doing favors for them, to take care of them, and to perform good deeds.",

  Love: "Love as a character strength, rather than as an emotion, refers to the degree to which you value close relationships with people, and contribute to that closeness in a warm and genuine way. Where kindness can be a behavioral pattern applied in any relationship, love as a character strength really refers to the way you approach your closest and warmest relationships.",

  "Social Intelligence":
    "When a person knows what makes other people tick, he or she is displaying social intelligence. They’re aware of the motives and feelings of themselves and others, and how to fit into different social situations. They can feel comfortable and say the right thing whether they’re in the boardroom or the janitorial room, in a school setting or at a construction site.",

  Fairness:
    "Fairness is treating people justly, not letting your personal feelings bias your decisions about others. You want to give everyone a fair chance, and believe there should be equal opportunity for all, though you also realize that what is fair for one person might not be fair for another.",

  Leadership:
    "Leadership can take on many forms. As a character strength, leadership refers to the tendency to organize and encourage a group to get things done, while maintaining good relations within the group. Like teamwork, leadership involves being committed to the goals of the group, but how that commitment manifests itself is very different.",

  Teamwork:
    "Teamwork means that in team situations you are committed to contributing to the team’s success. The team could be a work group or a sports team, but it could also refer to your family, marriage, or even a group of friends working on a project together. Teamwork extends to being a good citizen of your community or country, and more broadly to a sense of social responsibility for particular groups of people or even all of humanity.",

  Forgiveness:
    "Forgiveness means to extend understanding towards those who have wronged or hurt us. It means to let go. In many cases this is the letting go of some or all of the frustration, disappointment, resentment, or other painful feelings associated with an offense. Forgiveness, and the related quality of mercy, involve accepting the shortcomings, flaws, and imperfections of others and giving them a second (or third) chance. As the expression goes, it is letting bygones be bygones, rather than being vengeful. It is a process of humanizing those who have led us to feel dehumanized.",

  Humility:
    "Humility means accurately evaluating your accomplishments. It’s easy to describe what humility is not — it is not bragging, not doing things in excess, not seeking the spotlight, not drawing attention to yourself, not viewing yourself as more special or important than others. On the other hand, it is not bowing to every wish or demand of another person and it is not being highly self-critical. Truly humble people think well of themselves and have a good sense of who they are, but they also are aware of their mistakes, gaps in their knowledge, and imperfections. Most importantly, they are content without being a center of attention or getting praised for their accomplishments.",

  Prudence:
    "Prudence means being careful about your choices, stopping and thinking before acting. It is a strength of restraint. When you are prudent, you are not taking unnecessary risks, and not saying or doing things that you might later regret. If you are high in prudence, you are able to consider the long-term consequences of your actions. Prudence is a form of practical reasoning, the ability to examine the potential consequences of your actions objectively, and to control yourself based on that examination. Prudence involves far-sighted planning as well as short-term, goal-directed planning. It is often referred to as cautious wisdom, practical wisdom, and practical reason.",

  "Self-Regulation":
    "Self-Regulation is a complex character strength. It has to do with controlling your appetites and emotions and regulating what you do. Those high in self-regulation have a good level of confidence in their belief that they can be effective in what they pursue and are likely to achieve their goals. They are admired for their ability to control their reactions to disappointment and insecurities. Self-regulation helps keep a sense of balance, order, and progress in life. Self-Regulation can be viewed as a resource that can be depleted and fatigued. A useful metaphor can be that self-regulation acts like a muscle, which can be exhausted through over-exertion or strengthened through regular practice.",

  "Appreciation of Beauty and Excellence":
    "Those who express an appreciation of beauty & excellence notice and appreciate beauty, excellence and/or skilled performance in all domains of life, from nature to art to mathematics to science to everyday experience.",

  Gratitude:
    "The character strength of gratitude involves feeling and expressing a deep sense of thankfulness in life, and more specifically, taking the time to genuinely express thankfulness to others. This thankfulness can be for specific gifts or thoughtful acts. It could also more generally reflect recognition of what that person contributes to your life. We can be grateful for deliberate acts by others, such as a piece of art from a child, or for spontaneous treasures, such as a cool breeze on your face on a hot day. What marks gratitude is the psychological response: the transcendent feeling of thankfulness, the sense of having been given a gift by that person or event.",

  Hope: "The character strength of hope has to do with positive expectations about the future. It involves optimistic thinking and focusing on good things to come. Hope is more than a feel-good emotion. It is an action-oriented strength involving agency, the motivation and confidence that goals can be reached, and also that many effective pathways can be devised in order to get to that desired future.",

  Humor:
    "Humor means to recognize what is amusing in situations, and to offer the lighter side to others. Humor is an important lubricant to social interactions, and can contribute to team building or moving toward group goals. Where other strengths are more or less essential for achieving certain types of goals or dealing with certain types of problems, humor is rarely an essential component to positive social interactions, but it is often a desirable one. It is also a valuable method of coping with distressing situations.",

  Spirituality:
    "The strength of spirituality has many dimensions. Some of these include meaning, purpose, life calling, beliefs about the universe, the expression of virtue/goodness, and practices that connect with the transcendent. Spirituality has been defined consistently by scientists as the search for or connection with “the sacred”. The sacred might be that which is blessed, holy, revered, or particularly special. This can be secular or non-secular: sacredness might be pursued as the search for a purpose in life or as a close relationship with something greater; the sacred might be experienced in the forgiveness offered by a child, a humble moment between a leader and a subordinate, an awe-inspiring sunset, a profound experience during meditation or a religious service, or the self-sacrificing kindness of a stranger. As a character strength, spirituality involves the belief that there is a dimension to life that is beyond human understanding.",
};

module.exports = {
  quotes,
  characterStrengths,
  descriptionStrengths
};