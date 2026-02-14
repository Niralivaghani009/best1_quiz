export interface Question {
  id: string
  type: "multiple-choice" | "true-false" | "multiple-select"
  question: string
  options?: string[]
  correctAnswer?: number | boolean
  correctAnswers?: number[] // For multiple-select questions
  explanation: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  estimatedTime: string
  passingScore: number
  questions: Question[]
}

export interface Category {
  id: string
  name: string
  description: string
  color: string
  quizzes: Quiz[]
}

export const quizData: Record<string, Category> = {
  "american-government": {
    id: "american-government",
    name: "American Government",
    description: "Master the principles of American democracy and government structure",
    color: "#8B9456",
    quizzes: [
      {
        id: "principles-democracy",
        title: "Principles of American Democracy",
        description: "Test your knowledge of the fundamental principles of American democracy",
        difficulty: "beginner",
        estimatedTime: "10 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "What is the supreme law of the land?",
            options: ["The Constitution", "The Declaration of Independence", "The Bill of Rights", "Federal Law"],
            correctAnswer: 1,
            explanation: "The Constitution is the supreme law of the United States, establishing the framework of government and fundamental laws."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What does the Constitution do?",
            options: ["Declares independence from Britain", "Sets up the government and protects basic rights", "Creates state governments", "Establishes the military"],
            correctAnswer: 1,
            explanation: "The Constitution sets up the government, defines its structure, and protects the basic rights of Americans."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
            options: ["We the People", "In order to", "United States of", "Freedom and Liberty"],
            correctAnswer: 0,
            explanation: "'We the People' establishes that the government derives its power from the citizens."
          },
          {
            id: "q4",
            type: "multiple-select",
            question: "What is an amendment?",
            options: ["A petition", "An addition (to the Constitution)", "A change (to the Constitution)", "The Bill of Rights"],
            correctAnswers: [2, 3],
            explanation: "An amendment is a change or addition to the Constitution. Select all correct answers."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "What do we call the first ten amendments to the Constitution?",
            options: ["The Founding Documents", "The Bill of Rights", "The Articles", "The Amendments"],
            correctAnswer: 1,
            explanation: "The first ten amendments are called the Bill of Rights."
          },
          {
            id: "q6",
            type: "multiple-select",
            question: "What did the Declaration of Independence do?",
            options: ["Announced our independence", "Declared our independence", "Said that the United States is free"],
            correctAnswers: [0, 1, 3],
            explanation: "The Constitution can be changed through the amendment process. There have been 27 amendments so far."
          },
          // {
          //   id: "q6",
          //   type: "true-false",
          //   question: "The Constitution can never be changed.",
          //   correctAnswer: false,
          //   explanation: "The Constitution can be changed through the amendment process. There have been 27 amendments so far."
          // },
          {
            id: "q7",
            type: "multiple-select",
            question: "What are rights or freedoms from the First Amendment? (Select all that apply)",
            options: ["Freedom of speech", "Right to bear arms", "Freedom of religion", "Freedom of the press", "Petition the government"],
            correctAnswers: [0, 2, 3, 4],
            explanation: "The First Amendment protects freedom of speech, religion, press, assembly, and petition.  The right to bear arms is the Second Amendment."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "How many amendments does the Constitution have?",
            options: ["10", "20", "27", "50"],
            correctAnswer: 2,
            explanation: "The Constitution has 27 amendments."
          },
          {
            id: "q9",
            type: "multiple-select",
            question: "What are two rights in the Declaration of Independence?",
            options: ["Freedom", "Life", "Liberty", "Pursuit of happiness"],
            correctAnswers: [2, 3, 4],
            explanation: "The Declaration of Independence declared independence from Great Britain, not France."
          },
          // { 
          //   id: "q9",
          //   type: "true-false",
          //   question: "The Declaration of Independence declared independence from France.",
          //   correctAnswer: false,
          //   explanation: "The Declaration of Independence declared independence from Great Britain, not France."
          // },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What is freedom of religion?",
            options: ["You must follow the state religion", "You can practice any religion, or not practice a religion", "Only certain religions are allowed", "Religion is banned"],
            correctAnswer: 1,
            explanation: "Freedom of religion means you can practice any religion, or not practice a religion at all."
          },
          {
            id: "q11",
            type: "multiple-select",
            question: "What is the economic system in the United States?",
            options: ["Freedom economy", "Religion economy", "Market economy", "Capitalist economy"],
            correctAnswers: [2, 3],
            explanation: "The United States has a market economy, which means that the economy is based on supply and demand."
          },
          {
            id: "q12",
            type: "multiple-choice",
            question: "What is the “rule of law”?",
            options: ["Everyone must follow the law includes leaders", "No one is above the law. ", " Government must obey the law.", "All of the above"],
            correctAnswer: 3,
            explanation: "The rule of law means that everyone, including leaders and the government, must follow the law."
          }
        ]
      },
      {
        id: "system-government",
        title: "System of Government",
        description: "Learn about how the U.S. government operates",
        difficulty: "intermediate",
        estimatedTime: "15 minutes",
        passingScore: 75,
        questions: [
          {
            id: "q1",
            type: "multiple-select",
            question: "Name one branch or part of the government.",
            options: ["Congress", "legislative", "President", "executive", "the courts", "judicial"],
            correctAnswers: [0, 1, 2, 3, 4, 5],
            explanation: "The U.S. government has three branches: legislative (Congress), executive (President), and judicial (the courts)."
          },
          {
            id: "q2",
            type: "multiple-select",
            question: "What stops one branch of government from becoming too powerful?",
            options: ["checks and balances", "separation of powers"],
            correctAnswers: [0, 1],
            explanation: "Checks and balances and separation of powers prevent any one branch from becoming too powerful."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Who is in charge of the executive branch?",
            options: ["Congress", "the President", "the Supreme Court", "the Speaker of the House"],
            correctAnswer: 1,
            explanation: "The President is in charge of the executive branch."
          },
          {
            id: "q4",
            type: "multiple-select",
            question: "Who makes federal laws?",
            options: ["Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"],
            correctAnswers: [0, 1, 2],
            explanation: "Congress, which consists of the Senate and House of Representatives, makes federal laws."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "What are the two parts of the U.S. Congress?",
            options: ["the Senate and House (of Representatives)", "House and Cabinet", "President and Vice President", "Supreme Court and Congress"],
            correctAnswer: 0,
            explanation: "Congress is made up of the Senate and the House of Representatives."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "How many U.S. Senators are there?",
            options: ["50", "100", "435", "538"],
            correctAnswer: 1,
            explanation: "There are 100 U.S. Senators, with 2 senators from each of the 50 states."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "We elect a U.S. Senator for how many years?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctAnswer: 2,
            explanation: "U.S. Senators serve 6-year terms."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Who is one of your state's U.S. Senators now?",
            options: ["Answers will vary."],
            correctAnswer: 0,
            explanation: "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]"
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "The House of Representatives has how many voting members?",
            options: ["100", "270", "435", "535"],
            correctAnswer: 2,
            explanation: "The House of Representatives has 435 voting members."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "We elect a U.S. Representative for how many years?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctAnswer: 0,
            explanation: "U.S. Representatives serve 2-year terms."
          },
          {
            id: "q11",
            type: "multiple-choice",
            question: "Name your U.S. Representative.",
            options: ["Answers will vary."],
            correctAnswer: 0,
            explanation: "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]"
          },
          {
            id: "q12",
            type: "multiple-choice",
            question: "Who does a U.S. Senator represent?",
            options: ["all people of the state", "only the people who voted for them", "only the people in their district"],
            correctAnswer: 0,
            explanation: "A U.S. Senator represents all people of the state they are elected from."
          },
          {
            id: "q13",
            type: "multiple-select",
            question: "Why do some states have more Representatives than other states?",
            options: ["because of the state's population", "because they have more people", "because some states have more people"],
            correctAnswers: [0, 1, 2],
            explanation: "The number of Representatives a state has is based on its population."
          },
          {
            id: "q14",
            type: "multiple-choice",
            question: "We elect a President for how many years?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctAnswer: 1,
            explanation: "A President is elected for a 4-year term."
          },
          {
            id: "q15",
            type: "multiple-choice",
            question: "In what month do we vote for President?",
            options: ["January", "June", "November", "December"],
            correctAnswer: 2,
            explanation: "We vote for President in November."
          },
          {
            id: "q16",
            type: "multiple-select",
            question: "What is the name of the President of the United States now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the name of the current President.]"
          },
          {
            id: "q17",
            type: "multiple-select",
            question: "What is the name of the Vice President of the United States now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the name of the current Vice President.]"
          },
          {
            id: "q18",
            type: "multiple-select",
            question: "What is the name of the Speaker of the House of Representatives now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the name of the current Speaker of the House.]"
          },
          {
            id: "q19",
            type: "multiple-choice",
            question: "If the President can no longer serve, who becomes President?",
            options: ["The Vice President", "The Speaker of the House", "The President Pro Tempore of the Senate"],
            correctAnswer: 0,
            explanation: "If the President can no longer serve, the Vice President becomes President."
          },
          {
            id: "q20",
            type: "multiple-choice",
            question: "If both the President and the Vice President can no longer serve, who becomes President?",
            options: ["The Speaker of the House", "The President Pro Tempore of the Senate", "The Secretary of State"],
            correctAnswer: 0,
            explanation: "If both the President and the Vice President can no longer serve, the Speaker of the House becomes President."
          },
          {
            id: "q21",
            type: "multiple-choice",
            question: "Who is the Commander in Chief of the military?",
            options: ["The President", "The Secretary of Defense", "The Chairman of the Joint Chiefs of Staff"],
            correctAnswer: 0,
            explanation: "The President is the Commander in Chief of the military."
          },
          {
            id: "q22",
            type: "multiple-choice",
            question: "Who signs bills to become laws?",
            options: ["The President", "The Vice President", "The Speaker of the House"],
            correctAnswer: 0,
            explanation: "The President signs bills to become laws."
          },
          {
            id: "q23",
            type: "multiple-choice",
            question: "Who vetoes bills?",
            options: ["The President", "The Vice President", "The Speaker of the House"],
            correctAnswer: 0,
            explanation: "The President vetoes bills."
          },
          {
            id: "q24",
            type: "multiple-choice",
            question: "What does the President's Cabinet do?",
            options: ["Advises the President", "Makes laws", "Commands the military"],
            correctAnswer: 0,
            explanation: "The President's Cabinet advises the President."
          },
          {
            id: "q25",
            type: "multiple-select",
            question: "What are two Cabinet-level positions?",
            options: ["Secretary of Agriculture", "Secretary of Commerce", "Secretary of Defense", "Secretary of Education", "Secretary of Energy", "Secretary of Health and Human Services", "Secretary of Homeland Security", "Secretary of Housing and Urban Development", "Secretary of the Interior", "Secretary of Labor", "Secretary of State", "Secretary of Transportation", "Secretary of the Treasury", "Secretary of Veterans Affairs", "Attorney General", "Vice President"],
            correctAnswers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            explanation: "All of these are Cabinet-level positions. Any two are correct answers."
          },
          {
            id: "q26",
            type: "multiple-select",
            question: "What does the judicial branch do?",
            options: ["reviews laws", "explains laws", "resolves disputes (disagreements)", "decides if a law goes against the Constitution"],
            correctAnswers: [0, 1, 2, 3],
            explanation: "The judicial branch reviews laws, explains laws, resolves disputes, and decides if laws go against the Constitution."
          },
          {
            id: "q27",
            type: "multiple-choice",
            question: "What is the highest court in the United States?",
            options: ["The Supreme Court", "The Court of Appeals", "The District Court", "The Constitutional Court"],
            correctAnswer: 0,
            explanation: "The Supreme Court is the highest court in the United States."
          },
          {
            id: "q28",
            type: "multiple-select",
            question: "How many justices are on the Supreme Court?",
            options: ["nine (9)"],
            correctAnswers: [0],
            explanation: "There are nine justices on the Supreme Court."
          },
          {
            id: "q29",
            type: "multiple-select",
            question: "Who is the Chief Justice of the United States now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the name of the current Chief Justice.]"
          },
          {
            id: "q30",
            type: "multiple-select",
            question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
            options: ["to print money", "to declare war", "to create an army", "to make treaties"],
            correctAnswers: [0, 1, 2, 3],
            explanation: "Any of these are powers of the federal government."
          },
          {
            id: "q31",
            type: "multiple-select",
            question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
            options: ["provide schooling and education", "provide protection (police)", "provide safety (fire departments)", "give a driver's license", "approve zoning and land use"],
            correctAnswers: [0, 1, 2, 3, 4],
            explanation: "Any of these are powers of the states."
          },
          {
            id: "q32",
            type: "multiple-select",
            question: "Who is the Governor of your state now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [District of Columbia residents should answer that D.C. does not have a Governor.]"
          },
          {
            id: "q33",
            type: "multiple-select",
            question: "What is the capital of your state?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]"
          },
          {
            id: "q34",
            type: "multiple-select",
            question: "What are the two major political parties in the United States?",
            options: ["Democratic and Republican"],
            correctAnswers: [0],
            explanation: "The two major political parties in the United States are Democratic and Republican."
          },
          {
            id: "q35",
            type: "multiple-select",
            question: "What is the political party of the President now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the political party of the President.]"
          },
          {
            id: "q36",
            type: "multiple-select",
            question: "What is the name of the Speaker of the House of Representatives now?",
            options: ["Answers will vary."],
            correctAnswers: [0],
            explanation: "Answers will vary. [Respondents should provide the name of the Speaker of the House of Representatives.]"
          }
        ]
      },
      {
        id: "rights-responsibilities",
        title: "Rights and Responsibilities",
        description: "Understand the rights and duties of U.S. citizens",
        difficulty: "intermediate",
        estimatedTime: "12 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-select",
            question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
            options: ["Citizens eighteen (18) and older (can vote).", "You don't have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."],
            correctAnswers: [0, 1, 2, 3],
            explanation: "All four options describe voting-related amendments: 26th (voting age 18+), 24th (no poll tax), 19th (women's suffrage), and 15th (race-based voting rights)."
          },
          {
            id: "q2",
            type: "multiple-select",
            question: "What is one responsibility that is only for United States citizens?",
            options: ["serve on a jury", "vote in a federal election"],
            correctAnswers: [0, 1],
            explanation: "Both serving on a jury and voting in federal elections are responsibilities exclusive to U.S. citizens."
          },
          {
            id: "q3",
            type: "multiple-select",
            question: "Name one right only for United States citizens.",
            options: ["vote in a federal election", "run for federal office"],
            correctAnswers: [0, 1],
            explanation: "Only U.S. citizens have the right to vote in federal elections and run for federal office."
          },
          {
            id: "q4",
            type: "multiple-select",
            question: "What are two rights of everyone living in the United States?",
            options: ["freedom of expression", "freedom of speech", "freedom of assembly", "freedom to petition the government", "freedom of religion", "the right to bear arms"],
            correctAnswers: [0, 1, 2, 3, 4, 5],
            explanation: "All listed rights are protected for everyone living in the U.S., not just citizens."
          },
          {
            id: "q5",
            type: "multiple-select",
            question: "What do we show loyalty to when we say the Pledge of Allegiance?",
            options: ["the United States", "the flag"],
            correctAnswers: [0, 1],
            explanation: "The Pledge of Allegiance shows loyalty to both the United States and the flag."
          },
          {
            id: "q6",
            type: "multiple-select",
            question: "What is one promise you make when you become a United States citizen?",
            options: ["give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military (if needed)", "serve (do important work for) the nation (if needed)", "be loyal to the United States"],
            correctAnswers: [0, 1, 2, 3, 4, 5],
            explanation: "All of these are promises made when becoming a U.S. citizen during the Oath of Allegiance."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "How old do citizens have to be to vote for President?",
            options: ["sixteen (16) and older", "eighteen (18) and older", "twenty-one (21) and older", "twenty-five (25) and older"],
            correctAnswer: 1,
            explanation: "Citizens must be eighteen (18) and older to vote for President according to the 26th Amendment."
          },
          {
            id: "q8",
            type: "multiple-select",
            question: "What are two ways that Americans can participate in their democracy?",
            options: ["vote", "join a political party", "help with a campaign", "join a civic group", "join a community group", "give an elected official your opinion on an issue", "call Senators and Representatives", "publicly support or oppose an issue or policy", "run for office", "write to a newspaper"],
            correctAnswers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            explanation: "All listed options are valid ways Americans can participate in their democracy."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "When is the last day you can send in federal income tax forms?",
            options: ["January 15", "April 15", "July 15", "October 15"],
            correctAnswer: 1,
            explanation: "April 15 is the deadline for filing federal income tax forms in the United States."
          },
          {
            id: "q10",
            type: "multiple-select",
            question: "When must all men register for the Selective Service?",
            options: ["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"],
            correctAnswers: [0, 1],
            explanation: "All men must register for the Selective Service at age 18 or between ages 18 and 26."
          }
        ]
      }
    ]
  },
  "american-history": {
    id: "american-history",
    name: "American History",
    description: "Learn about important events in American history",
    color: "#E85D55",
    quizzes: [
      {
        id: "colonial-period",
        title: "Colonial Period and Independence",
        description: "Explore America's founding period",
        difficulty: "beginner",
        estimatedTime: "10 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-select",
            question: "What is one reason colonists came to America?",
            options: [
              "Freedom",
              "Political liberty",
              "Religious freedom",
              "Economic opportunity",
              "Practice their religion",
              "Escape persecution"
            ],
            correctAnswers: [0, 1, 2, 3, 4, 5],
            explanation: "Colonists came to America for various reasons including freedom, political liberty, religious freedom, economic opportunity, to practice their religion, and to escape persecution."
          },
          {
            id: "q2",
            type: "multiple-select",
            question: "Who lived in America before the Europeans arrived?",
            options: [
              "American Indians",
              "Native Americans", "North Americans", "South Americans"
            ],
            correctAnswers: [0, 1],
            explanation: "American Indians, also known as Native Americans, lived in America before the Europeans arrived."
          },
          {
            id: "q3",
            type: "multiple-select",
            question: "What group of people was taken to America and sold as slaves?",
            options: [
              "Africans",
              "People from Africa", "African Americans", "Black people", "Enslaved people"
            ],
            correctAnswers: [0, 1],
            explanation: "Africans were taken to America and sold as slaves."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Why did the colonists fight the British?",
            options: [
              "Because of high taxes (taxation without representation)",
              "Because the British army stayed in their houses (boarding, quartering)",
              "Because they didn't have self-government",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "The colonists fought the British due to high taxes without representation, British soldiers being quartered in their homes, and lack of self-government."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Who wrote the Declaration of Independence?",
            options: [
              "George Washington",
              "Thomas Jefferson",
              "Benjamin Franklin",
              "John Adams"
            ],
            correctAnswer: 1,
            explanation: "Thomas Jefferson wrote the Declaration of Independence."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "When was the Declaration of Independence adopted?",
            options: [
              "July 4, 1775",
              "July 4, 1776",
              "July 4, 1777",
              "July 4, 1778"
            ],
            correctAnswer: 1,
            explanation: "The Declaration of Independence was adopted on July 4, 1776."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "There were 13 original states. Which one was not among them?",
            options: [
              "New Hampshire",
              "Massachusetts",
              "Connecticut",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "Any three of the 13 original colonies are correct answers. All listed options were among the original 13 states."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What happened at the Constitutional Convention?",
            options: [
              "The Declaration of Independence was written",
              "The Constitution was written",
              "The Bill of Rights was created",
              "The Revolutionary War ended"
            ],
            correctAnswer: 1,
            explanation: "The Constitution was written at the Constitutional Convention in 1787."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "When was the Constitution drafted?",
            options: [
              "1776",
              "1787",
              "1791",
              "1800"
            ],
            correctAnswer: 1,
            explanation: "The Constitution was drafted in 1787 at the Constitutional Convention in Philadelphia."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What is one promise made in the Constitution?",
            options: [
              "To guarantee freedom of speech",
              "To promote the general welfare",
              "To establish justice",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "The Constitution promises to establish justice, promote the general welfare, and guarantee freedoms including speech."
          },
          {
            id: "q11",
            type: "multiple-choice",
            question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
            options: [
              "James Madison",
              "Alexander Hamilton",
              "John Jay",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "James Madison, Alexander Hamilton, and John Jay were the authors of The Federalist Papers. Publius was the pseudonym used by the three writers."
          },
          {
            id: "q12",
            type: "multiple-select",
            question: "What is one thing Benjamin Franklin is famous for?",
            options: [
              "U.S. diplomat",
              "Oldest member of the Constitutional Convention",
              "First Postmaster General of the United States",
              "Writer of 'Poor Richard's Almanac'",
              "Started the first free libraries"
            ],
            correctAnswers: [0, 1, 2, 3, 4],
            explanation: "Benjamin Franklin was famous for being a U.S. diplomat, the oldest member of the Constitutional Convention, the first Postmaster General of the United States, the writer of 'Poor Richard's Almanac', and for starting the first free libraries."
          },
          {
            id: "q13",
            type: "multiple-choice",
            question: "Who is the 'Father of Our Country'?",
            options: [
              "Thomas Jefferson",
              "John Adams",
              "George Washington",
              "Benjamin Franklin"
            ],
            correctAnswer: 2,
            explanation: "George Washington is known as the 'Father of Our Country'."
          },
          {
            id: "q14",
            type: "multiple-choice",
            question: "Who was the first President?",
            options: [
              "John Adams",
              "Thomas Jefferson",
              "James Madison",
              "George Washington"
            ],
            correctAnswer: 3,
            explanation: "George Washington was the first President of the United States."
          }
        ]
      },
      {
        id: "1800s",
        title: "The 1800s - Expansion and Civil War",
        description: "Key events of the 19th century",
        difficulty: "intermediate",
        estimatedTime: "15 minutes",
        passingScore: 75,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "What territory did the United States buy from France in 1803?",
            options: [
              "the Louisiana Territory",
              "Louisiana"
            ],
            correctAnswer: 0,
            explanation: "The United States bought the Louisiana Territory from France in 1803."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Name one war fought by the United States in the 1800s.",
            options: [
              "War of 1812",
              "Mexican-American War",
              "Civil War",
              "Spanish-American War"
            ],
            correctAnswer: 0,
            explanation: "The United States fought several wars in the 1800s including the War of 1812, Mexican-American War, Civil War, and Spanish-American War."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Name the U.S. war between the North and the South.",
            options: [
              "the Civil War",
              "the War between the States"
            ],
            correctAnswer: 0,
            explanation: "The war between the North and South is known as the Civil War or the War between the States."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Name one problem that led to the Civil War.",
            options: [
              "slavery",
              "economic reasons",
              "states' rights"
            ],
            correctAnswer: 0,
            explanation: "Slavery was the primary problem that led to the Civil War, along with economic reasons and states' rights."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "What was one important thing that Abraham Lincoln did?",
            options: [
              "freed the slaves (Emancipation Proclamation)",
              "saved (or preserved) the Union",
              "led the United States during the Civil War",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "Ababive raham Lincoln freed the slaves through the Emancipation Proclamation, preserved the Union, and led the country during the Civil War."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What did the Emancipation Proclamation do?",
            options: [
              "freed slaves in the Confederacy",
              "freed slaves in the Union",
              "gave slaves the right to vote",
              "All of the above"
            ],
            correctAnswer: 3,
            explanation: "The Emancipation Proclamation freed slaves in the Confederate states that were in rebellion."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What did Susan B. Anthony do?",
            options: [
              "fought for women's rights",
              "fought for civil rights"
            ],
            correctAnswer: 0,
            explanation: "Susan B. Anthony fought for women's rights, particularly the right to vote (women's suffrage)."
          }
        ]
      },
      {
        id: "recent-history",
        title: "Recent American History",
        description: "20th and 21st century events",
        difficulty: "advanced",
        estimatedTime: "20 minutes",
        passingScore: 80,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Name one war fought by the United States in the 1900s.",
            options: [
              "World War I",
              "World War II",
              "Korean War",
              "Vietnam War",
              "(Persian) Gulf War"
            ],
            correctAnswer: 0,
            explanation: "The United States fought several wars in the 1900s including World War I, World War II, Korean War, Vietnam War, and the Persian Gulf War."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Who was President during World War I?",
            options: [
              "(Woodrow) Wilson",
              "Theodore Roosevelt",
              "Franklin Roosevelt",
              "Harry Truman"
            ],
            correctAnswer: 0,
            explanation: "Woodrow Wilson was President during World War I (1917-1918)."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Who was President during the Great Depression and World War II?",
            options: [
              "(Franklin) Roosevelt"
            ],
            correctAnswer: 0,
            explanation: "Franklin D. Roosevelt was President during both the Great Depression and most of World War II."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Who did the United States fight in World War II?",
            options: [
              "Russia and Turkey",
              "China and France",
              "Japan, Germany, and Italy",
              "Great Britain and Canada"
            ],
            correctAnswer: 2,
            explanation: "The United States fought against Japan, Germany, and Italy (the Axis powers) in World War II."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Before he was President, Eisenhower was a general. What war was he in?",
            options: [
              "World War I",
              "World War II",
              "The Vietnam War",
              "The Korean War"
            ],
            correctAnswer: 1,
            explanation: "Dwight D. Eisenhower was a general in World War II before becoming President."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "During the Cold War, what was the main concern of the United States?",
            options: [
              "Communism",
              "Fascism",
              "Imperialism",
              "Totalitarianism"
            ],
            correctAnswer: 0,
            explanation: "The main concern of the United States during the Cold War was the spread of communism."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What movement tried to end racial discrimination?",
            options: [
              "black power movement",
              "civil disobedience movement",
              "nonviolent resistance movement",
              "civil rights (movement)"
            ],
            correctAnswer: 3,
            explanation: "The civil rights movement worked to end racial discrimination in the United States."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What did Martin Luther King, Jr. do?",
            options: [
              "fought for civil rights",
              "worked for equality for all Americans"
            ],
            correctAnswer: 0,
            explanation: "Martin Luther King, Jr. fought for civil rights and worked for equality for all Americans."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "What major event happened on September 11, 2001, in the United States?",
            options: [
              "The United States entered World War II.",
              "Terrorists attacked the United States.",
              "The United States declared independence.",
              "The United States won the Revolutionary War."
            ],
            correctAnswer: 1,
            explanation: "On September 11, 2001, terrorists attacked the United States, changing the country forever."
          }
        ]
      }
    ]
  },
  "integrated-civics": {
    id: "integrated-civics",
    name: "Integrated Civics",
    description: "Explore American geography, symbols, and holidays",
    color: "#5B9BD5",
    quizzes: [
      {
        id: "geography",
        title: "Geography",
        description: "U.S. geography and locations",
        difficulty: "beginner",
        estimatedTime: "10 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Name one of the two longest rivers in the United States.",
            options: [
              "Missouri (River)",
              "Mississippi (River)"
            ],
            correctAnswer: 0,
            explanation: "The Missouri River and Mississippi River are the two longest rivers in the United States."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What ocean is on the West Coast of the United States?",
            options: [
              "Pacific (Ocean)"
            ],
            correctAnswer: 0,
            explanation: "The Pacific Ocean is on the West Coast of the United States."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What ocean is on the East Coast of the United States?",
            options: [
              "Atlantic (Ocean)"
            ],
            correctAnswer: 0,
            explanation: "The Atlantic Ocean is on the East Coast of the United States."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Name one U.S. territory.",
            options: [
              "Puerto Rico",
              "U.S. Virgin Islands",
              "American Samoa",
              "Northern Mariana Islands",
              "Guam"
            ],
            correctAnswer: 0,
            explanation: "Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, and Guam are all U.S. territories."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Name one state that borders Canada.",
            options: [
              "New York",
              "Maine",
              "Michigan",
              "Idaho",
            ],
            correctAnswer: 1,
            explanation: "Many states border Canada, including Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, and Alaska."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "Name one state that borders Mexico.",
            options: [
              "Arizona",
              "New Mexico",
              "Texas",
              "California"
            ],
            correctAnswer: 3,
            explanation: "California, Arizona, New Mexico, and Texas all border Mexico."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What is the capital of the United States?",
            options: [
              "Washington, D.C.",
              "New York, NY",
              "Los Angeles, CA",
              "Chicago, IL"
            ],
            correctAnswer: 0,
            explanation: "The capital of the United States is Washington, D.C."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What is the name of the national anthem of the United States?",
            options: [
              "America the Beautiful",
              "God Bless America",
              "The Star-Spangled Banner",
              "My Country, Tis of Thee"
            ],
            correctAnswer: 2,
            explanation: `The national anthem of the United States is "The Star-Spangled Banner".`
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "Where is the Statue of Liberty?",
            options: [
              "Washington, D.C.",
              "New York Harbor",
              "Los Angeles, CA",
              "Chicago, IL"
            ],
            correctAnswer: 1,
            explanation: "The Statue of Liberty is located in New York Harbor."
          }
        ]
      },
      {
        id: "symbols",
        title: "Symbols",
        description: "American symbols and their meanings",
        difficulty: "beginner",
        estimatedTime: "8 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Why does the flag have 13 stripes?",
            options: ["The 50 states", "The 13 original colonies", "The branches of government", "The founding fathers"],
            correctAnswer: 1,
            explanation: "The 13 stripes represent the 13 original colonies."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Why does the flag have 50 stars?",
            options: ["The 13 original colonies", "The 50 states", "Military victories", "Constitutional amendments"],
            correctAnswer: 1,
            explanation: "The 50 stars represent the 50 states."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What is the national anthem of the United States?",
            options: ["America the Beautiful", "God Bless America", "The Star-Spangled Banner", "My Country, 'Tis of Thee"],
            correctAnswer: 2,
            explanation: "The Star-Spangled Banner is the national anthem of the United States."
          }
        ]
      },
      {
        id: "holidays",
        title: "Holidays",
        description: "National holidays and their significance",
        difficulty: "beginner",
        estimatedTime: "8 minutes",
        passingScore: 70,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "When do we celebrate Independence Day?",
            options: ["January 1", "July 4", "November 11", "December 25"],
            correctAnswer: 1,
            explanation: "Independence Day is celebrated on July 4."
          },
          {
            id: "q2",
            type: "multiple-select",
            question: "Select any two national U.S. holidays from below.",
            options: ["New Year's Day", " Halloween", "Memorial Day", " St. Patrick's Day"],
            correctAnswers: [0, 2],
            explanation: "New Year's Day, Martin Luther King, Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas are national holidays in the United States."
          }
        ]
      }
    ]
  }
}

export function getCategory(categoryId: string): Category | undefined {
  return quizData[categoryId]
}

export function getQuiz(categoryId: string, quizId: string): Quiz | undefined {
  const category = quizData[categoryId]
  if (!category) return undefined
  return category.quizzes.find(q => q.id === quizId)
}

export function getAllCategories(): Category[] {
  return Object.values(quizData)
}
