export interface Question {
  id: string
  type: "multiple-choice" | "true-false"
  question: string
  options?: string[]
  correctAnswer: number | boolean
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
            correctAnswer: 0,
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
            type: "multiple-choice",
            question: "What is an amendment?",
            options: ["A new law", "A change or addition to the Constitution", "A presidential order", "A court ruling"],
            correctAnswer: 1,
            explanation: "An amendment is a change or addition to the Constitution."
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
            type: "true-false",
            question: "The Constitution can never be changed.",
            correctAnswer: false,
            explanation: "The Constitution can be changed through the amendment process. There have been 27 amendments so far."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What is one right or freedom from the First Amendment?",
            options: ["Right to bear arms", "Freedom of speech", "Right to a fair trial", "Right to vote"],
            correctAnswer: 1,
            explanation: "The First Amendment protects freedom of speech, religion, press, assembly, and petition."
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
            type: "true-false",
            question: "The Declaration of Independence declared independence from France.",
            correctAnswer: false,
            explanation: "The Declaration of Independence declared independence from Great Britain, not France."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What is freedom of religion?",
            options: ["You must follow the state religion", "You can practice any religion, or not practice a religion", "Only certain religions are allowed", "Religion is banned"],
            correctAnswer: 1,
            explanation: "Freedom of religion means you can practice any religion, or not practice a religion at all."
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
            type: "multiple-choice",
            question: "How many senators are in the U.S. Senate?",
            options: ["50", "100", "435", "538"],
            correctAnswer: 1,
            explanation: "There are 100 senators, 2 from each of the 50 states."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "We elect a U.S. Senator for how many years?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctAnswer: 2,
            explanation: "U.S. Senators serve 6-year terms."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "The House of Representatives has how many voting members?",
            options: ["100", "270", "435", "535"],
            correctAnswer: 2,
            explanation: "The House of Representatives has 435 voting members."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "We elect a U.S. Representative for how many years?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctAnswer: 0,
            explanation: "U.S. Representatives serve 2-year terms."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "What are the two parts of the U.S. Congress?",
            options: ["House and Cabinet", "Senate and House of Representatives", "President and Vice President", "Supreme Court and Congress"],
            correctAnswer: 1,
            explanation: "Congress is made up of the Senate and the House of Representatives."
          },
          {
            id: "q6",
            type: "true-false",
            question: "The President can declare war.",
            correctAnswer: false,
            explanation: "Only Congress has the power to declare war. The President is Commander in Chief but cannot declare war."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "Who makes federal laws?",
            options: ["The President", "Congress", "The Supreme Court", "State Governors"],
            correctAnswer: 1,
            explanation: "Congress (Senate and House of Representatives) makes federal laws."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What stops one branch of government from becoming too powerful?",
            options: ["The military", "Checks and balances", "Public opinion", "State governments"],
            correctAnswer: 1,
            explanation: "Checks and balances prevent any one branch from becoming too powerful."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "Who is the Commander in Chief of the military?",
            options: ["Secretary of Defense", "The President", "Chairman of Joint Chiefs", "Congress"],
            correctAnswer: 1,
            explanation: "The President is the Commander in Chief of the military."
          },
          {
            id: "q10",
            type: "true-false",
            question: "The judicial branch includes the Supreme Court.",
            correctAnswer: true,
            explanation: "The judicial branch includes the Supreme Court and other federal courts."
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
            type: "multiple-choice",
            question: "What is one responsibility that is only for United States citizens?",
            options: ["Pay taxes", "Serve on a jury", "Obey laws", "Attend school"],
            correctAnswer: 1,
            explanation: "Serving on a jury is a responsibility that only U.S. citizens have."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What is one right only for United States citizens?",
            options: ["Freedom of speech", "Vote in a federal election", "Freedom of religion", "Right to a trial"],
            correctAnswer: 1,
            explanation: "Only U.S. citizens can vote in federal elections."
          },
          {
            id: "q3",
            type: "true-false",
            question: "Non-citizens must obey the laws of the United States.",
            correctAnswer: true,
            explanation: "Everyone living in the United States must obey federal, state, and local laws."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "What is the 'rule of law'?",
            options: ["Laws passed by rulers", "Everyone must follow the law", "Laws made by judges", "Police enforcement"],
            correctAnswer: 1,
            explanation: "The rule of law means everyone, including the government, must follow the law."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "When must all men register for the Selective Service?",
            options: ["At age 16", "Between ages 18 and 26", "At age 21", "At age 30"],
            correctAnswer: 1,
            explanation: "All men must register for the Selective Service between ages 18 and 26."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What is one promise you make when you become a United States citizen?",
            options: ["To become wealthy", "To give up loyalty to other countries", "To never leave the country", "To join the military"],
            correctAnswer: 1,
            explanation: "When becoming a citizen, you promise to give up loyalty to other countries."
          },
          {
            id: "q7",
            type: "true-false",
            question: "U.S. citizens are required to vote in elections.",
            correctAnswer: false,
            explanation: "Voting is a right, not a requirement. Citizens are encouraged but not required to vote."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What are two ways that Americans can participate in their democracy?",
            options: ["Pay taxes and work", "Vote and join a political party", "Attend school and work", "Travel and pay taxes"],
            correctAnswer: 1,
            explanation: "Americans can participate by voting, joining political parties, helping with campaigns, and more."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "When is the last day you can send in federal income tax forms?",
            options: ["January 1", "April 15", "July 4", "December 31"],
            correctAnswer: 1,
            explanation: "Federal income tax forms are due by April 15 each year."
          },
          {
            id: "q10",
            type: "true-false",
            question: "Freedom of speech means you can say anything without any consequences.",
            correctAnswer: false,
            explanation: "While freedom of speech is protected, there are limitations such as threats, defamation, and incitement to violence."
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
            type: "multiple-choice",
            question: "In what year was the Declaration of Independence signed?",
            options: ["1774", "1775", "1776", "1777"],
            correctAnswer: 2,
            explanation: "The Declaration of Independence was signed on July 4, 1776."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
            correctAnswer: 1,
            explanation: "Thomas Jefferson wrote the Declaration of Independence."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What country did the American colonies declare independence from?",
            options: ["France", "Spain", "Great Britain", "Germany"],
            correctAnswer: 2,
            explanation: "The American colonies declared independence from Great Britain."
          },
          {
            id: "q4",
            type: "true-false",
            question: "The Pilgrims came to America seeking religious freedom.",
            correctAnswer: true,
            explanation: "The Pilgrims came to America in 1620 seeking religious freedom."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Who was the first President of the United States?",
            options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
            correctAnswer: 2,
            explanation: "George Washington was the first President of the United States."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What was one reason the colonists fought the British?",
            options: ["High taxes without representation", "Religious persecution", "To gain new territory", "To free the slaves"],
            correctAnswer: 0,
            explanation: "Colonists fought because of taxation without representation in British Parliament."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "Who is known as the 'Father of Our Country'?",
            options: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "Abraham Lincoln"],
            correctAnswer: 2,
            explanation: "George Washington is called the Father of Our Country."
          },
          {
            id: "q8",
            type: "true-false",
            question: "Benjamin Franklin was a President of the United States.",
            correctAnswer: false,
            explanation: "Benjamin Franklin was never President. He was a Founding Father, diplomat, and inventor."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "What major event ended in 1783?",
            options: ["The French Revolution", "The American Revolutionary War", "The Civil War", "World War I"],
            correctAnswer: 1,
            explanation: "The American Revolutionary War ended in 1783 with the Treaty of Paris."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What document did the Founding Fathers sign in 1787?",
            options: ["Declaration of Independence", "Bill of Rights", "The Constitution", "Articles of Confederation"],
            correctAnswer: 2,
            explanation: "The Founding Fathers signed the Constitution in 1787."
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
            options: ["Alaska", "Florida", "Louisiana Territory", "Texas"],
            correctAnswer: 2,
            explanation: "The Louisiana Purchase in 1803 doubled the size of the United States."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What was one important thing that Abraham Lincoln did?",
            options: ["Wrote the Declaration of Independence", "Freed the slaves", "Was the first President", "Discovered America"],
            correctAnswer: 1,
            explanation: "Abraham Lincoln freed the slaves with the Emancipation Proclamation."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What years did the Civil War take place?",
            options: ["1776-1783", "1812-1815", "1861-1865", "1914-1918"],
            correctAnswer: 2,
            explanation: "The Civil War lasted from 1861 to 1865."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "What was one cause of the Civil War?",
            options: ["Taxation", "Slavery", "Religion", "Foreign invasion"],
            correctAnswer: 1,
            explanation: "Slavery was a primary cause of the Civil War, along with states' rights."
          },
          {
            id: "q5",
            type: "true-false",
            question: "The North won the Civil War.",
            correctAnswer: true,
            explanation: "The Union (North) won the Civil War, preserving the United States as one nation."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What did the Emancipation Proclamation do?",
            options: ["Ended World War I", "Freed slaves in Confederate states", "Created new states", "Established the Supreme Court"],
            correctAnswer: 1,
            explanation: "The Emancipation Proclamation freed slaves in Confederate states."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What was 'Manifest Destiny'?",
            options: ["A religious movement", "The belief that the US should expand across North America", "A political party", "A type of government"],
            correctAnswer: 1,
            explanation: "Manifest Destiny was the belief that American expansion across the continent was destined."
          },
          {
            id: "q8",
            type: "true-false",
            question: "Abraham Lincoln was assassinated in 1865.",
            correctAnswer: true,
            explanation: "President Lincoln was assassinated by John Wilkes Booth on April 14, 1865."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "Which amendment abolished slavery?",
            options: ["1st Amendment", "10th Amendment", "13th Amendment", "19th Amendment"],
            correctAnswer: 2,
            explanation: "The 13th Amendment abolished slavery in the United States."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What did Susan B. Anthony fight for?",
            options: ["Abolition of slavery", "Women's rights", "Civil rights", "Labor rights"],
            correctAnswer: 1,
            explanation: "Susan B. Anthony was a leader in the women's suffrage movement."
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
            question: "What major event happened on September 11, 2001?",
            options: ["Pearl Harbor attack", "Terrorists attacked the United States", "Moon landing", "Berlin Wall fell"],
            correctAnswer: 1,
            explanation: "On September 11, 2001, terrorists attacked the United States."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Who was President during World War I?",
            options: ["Theodore Roosevelt", "Woodrow Wilson", "Franklin Roosevelt", "Herbert Hoover"],
            correctAnswer: 1,
            explanation: "Woodrow Wilson was President during World War I."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Who was President during the Great Depression and World War II?",
            options: ["Herbert Hoover", "Harry Truman", "Franklin Roosevelt", "Dwight Eisenhower"],
            correctAnswer: 2,
            explanation: "Franklin D. Roosevelt was President during both the Great Depression and World War II."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Who did the United States fight in World War II?",
            options: ["Great Britain and France", "Japan, Germany, and Italy", "Soviet Union", "China"],
            correctAnswer: 1,
            explanation: "The United States fought against Japan, Germany, and Italy in World War II."
          },
          {
            id: "q5",
            type: "true-false",
            question: "The United States entered World War II after the attack on Pearl Harbor.",
            correctAnswer: true,
            explanation: "The attack on Pearl Harbor on December 7, 1941 led to US entry into World War II."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What movement tried to end racial discrimination?",
            options: ["Progressive movement", "Civil rights movement", "Labor movement", "Temperance movement"],
            correctAnswer: 1,
            explanation: "The civil rights movement worked to end racial discrimination."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "Martin Luther King, Jr. is famous for what?",
            options: ["Ending World War II", "Fighting for civil rights", "Being President", "Writing the Constitution"],
            correctAnswer: 1,
            explanation: "Martin Luther King, Jr. was a leader in the civil rights movement."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What was the main concern of the United States during the Cold War?",
            options: ["Global warming", "Communism", "Terrorism", "Economic depression"],
            correctAnswer: 1,
            explanation: "The main concern during the Cold War was the spread of communism."
          },
          {
            id: "q9",
            type: "true-false",
            question: "Neil Armstrong was the first person to walk on the moon.",
            correctAnswer: true,
            explanation: "Neil Armstrong walked on the moon on July 20, 1969."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What did the 19th Amendment give citizens?",
            options: ["Freedom of speech", "Right to bear arms", "Women the right to vote", "Prohibition of alcohol"],
            correctAnswer: 2,
            explanation: "The 19th Amendment gave women the right to vote in 1920."
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
            question: "What is the capital of the United States?",
            options: ["New York City", "Los Angeles", "Washington, D.C.", "Chicago"],
            correctAnswer: 2,
            explanation: "Washington, D.C. is the capital of the United States."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What ocean is on the West Coast of the United States?",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
            correctAnswer: 1,
            explanation: "The Pacific Ocean is on the West Coast of the United States."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What ocean is on the East Coast of the United States?",
            options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
            correctAnswer: 2,
            explanation: "The Atlantic Ocean is on the East Coast of the United States."
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "How many states are in the United States?",
            options: ["48", "50", "51", "52"],
            correctAnswer: 1,
            explanation: "There are 50 states in the United States."
          },
          {
            id: "q5",
            type: "true-false",
            question: "Alaska is the largest state in the United States.",
            correctAnswer: true,
            explanation: "Alaska is the largest state by area in the United States."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What country borders the United States to the north?",
            options: ["Mexico", "Canada", "Russia", "Cuba"],
            correctAnswer: 1,
            explanation: "Canada borders the United States to the north."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "What country borders the United States to the south?",
            options: ["Canada", "Cuba", "Mexico", "Brazil"],
            correctAnswer: 2,
            explanation: "Mexico borders the United States to the south."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What is the longest river in the United States?",
            options: ["Colorado River", "Missouri River", "Mississippi River", "Ohio River"],
            correctAnswer: 1,
            explanation: "The Missouri River is the longest river in the United States."
          },
          {
            id: "q9",
            type: "true-false",
            question: "Hawaii is located in the Pacific Ocean.",
            correctAnswer: true,
            explanation: "Hawaii is an island state located in the Pacific Ocean."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "Where is the Statue of Liberty?",
            options: ["Washington, D.C.", "New York Harbor", "Los Angeles", "Boston"],
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
            question: "What do the stripes on the American flag represent?",
            options: ["The 50 states", "The 13 original colonies", "The branches of government", "The founding fathers"],
            correctAnswer: 1,
            explanation: "The 13 stripes represent the 13 original colonies."
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What do the stars on the American flag represent?",
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
          },
          {
            id: "q4",
            type: "true-false",
            question: "The bald eagle is the national bird of the United States.",
            correctAnswer: true,
            explanation: "The bald eagle has been the national bird since 1782."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "What colors are on the American flag?",
            options: ["Red, white, and green", "Red, white, and blue", "Red, yellow, and blue", "Blue, white, and yellow"],
            correctAnswer: 1,
            explanation: "The American flag is red, white, and blue."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What famous bell is a symbol of American freedom?",
            options: ["Big Ben", "Liberty Bell", "Freedom Bell", "Independence Bell"],
            correctAnswer: 1,
            explanation: "The Liberty Bell in Philadelphia is a symbol of American freedom."
          },
          {
            id: "q7",
            type: "true-false",
            question: "The rose is the national flower of the United States.",
            correctAnswer: true,
            explanation: "The rose was designated as the national flower in 1986."
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "What is written on the Statue of Liberty's tablet?",
            options: ["Declaration of Independence date", "July 4, 1776", "Constitution date", "We the People"],
            correctAnswer: 1,
            explanation: "The tablet shows JULY IV MDCCLXXVI (July 4, 1776)."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "What is the motto of the United States?",
            options: ["E Pluribus Unum", "In God We Trust", "Liberty and Justice", "United We Stand"],
            correctAnswer: 1,
            explanation: "In God We Trust is the official motto of the United States."
          },
          {
            id: "q10",
            type: "true-false",
            question: "Uncle Sam is a personification of the United States.",
            correctAnswer: true,
            explanation: "Uncle Sam is a common national personification of the U.S. federal government."
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
            type: "multiple-choice",
            question: "What holiday honors veterans who served in the military?",
            options: ["Memorial Day", "Veterans Day", "Labor Day", "Presidents Day"],
            correctAnswer: 1,
            explanation: "Veterans Day on November 11 honors all who served in the military."
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "What holiday remembers those who died in military service?",
            options: ["Veterans Day", "Independence Day", "Memorial Day", "Flag Day"],
            correctAnswer: 2,
            explanation: "Memorial Day honors those who died while serving in the U.S. military."
          },
          {
            id: "q4",
            type: "true-false",
            question: "Thanksgiving is always on the fourth Thursday of November.",
            correctAnswer: true,
            explanation: "Thanksgiving is celebrated on the fourth Thursday of November."
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "When is Presidents Day celebrated?",
            options: ["January", "February", "July", "November"],
            correctAnswer: 1,
            explanation: "Presidents Day is celebrated on the third Monday of February."
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "What is celebrated on the first Monday of September?",
            options: ["Memorial Day", "Labor Day", "Columbus Day", "Veterans Day"],
            correctAnswer: 1,
            explanation: "Labor Day is celebrated on the first Monday of September."
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "Martin Luther King, Jr. Day is celebrated in which month?",
            options: ["January", "February", "April", "June"],
            correctAnswer: 0,
            explanation: "Martin Luther King, Jr. Day is the third Monday of January."
          },
          {
            id: "q8",
            type: "true-false",
            question: "New Year's Day is a federal holiday.",
            correctAnswer: true,
            explanation: "New Year's Day (January 1) is a federal holiday."
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "What holiday celebrates the discovery of America?",
            options: ["Independence Day", "Thanksgiving", "Columbus Day", "Flag Day"],
            correctAnswer: 2,
            explanation: "Columbus Day commemorates Christopher Columbus's arrival in the Americas."
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "When is Flag Day observed?",
            options: ["June 14", "July 4", "November 11", "January 1"],
            correctAnswer: 0,
            explanation: "Flag Day is observed on June 14."
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
