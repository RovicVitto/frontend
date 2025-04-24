const quizData = {
    "STEM": [
      {
        question: "What is the main gas found in Earth’s atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen"
      },
      {
        question: "What part of the cell contains genetic material?",
        options: ["Ribosome", "Mitochondria", "Nucleus", "Cytoplasm"],
        answer: "Nucleus"
      },
      {
        question: "Which simple machine is a seesaw an example of?",
        options: ["Pulley", "Wheel and axle", "Lever", "Inclined plane"],
        answer: "Lever"
      },
      {
        question: "Which organ is responsible for filtering blood in the human body?",
        options: ["Liver", "Heart", "Lungs", "Kidneys"],
        answer: "Kidneys"
      },
      {
        question: "Which planet has the most rings?",
        options: ["Neptune", "Earth", "Jupiter", "Saturn"],
        answer: "Saturn"
      },
      {
        question: "Which organ helps you breathe?",
        options: ["Liver", "Brain", "Lungs", "Heart"],
        answer: "Lungs"
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["50°C", "100°C", "0°C", "212°C"],
        answer: "100°C"
      },
      {
        question: "What is the largest internal organ in the human body?",
        options: ["Heart", "Liver", "Lungs", "Intestines"],
        answer: "Liver"
      },
      {
        question: "What is the main source of energy for the Earth?",
        options: ["Electricity", "Wind", "Moon", "Sun"],
        answer: "Sun"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        answer: "Mars"
      },
      {
        "question": "What is a scientist who studies rocks called?",
        "options": ["Physicist", "Geologist", "Chemist", "Biologist"],
        "answer": "Geologist"
      },
      {
        "question": "What device is used to measure electric current?",
        "options": ["Thermometer", "Voltmeter", "Ohmmeter", "Ammeter"],
        "answer": "Ammeter"
      },
      {
        "question": "Which metal is liquid at room temperature?",
        "options": ["Copper", "Mercury", "Silver", "Gold"],
        "answer": "Mercury"
      },
      {
        "question": "Which force keeps planets in orbit?",
        "options": ["Magnetism", "Friction", "Centrifugal", "Gravity"],
        "answer": "Gravity"
      },
      {
        "question": "What is the most common state of matter in the universe?",
        "options": ["Plasma", "Gas", "Liquid", "Solid"],
        "answer": "Plasma"
      },
      {
        "question": "What instrument is used to see distant objects in space?",
        "options": ["Periscope", "Telescope", "Microscope", "Stethoscope"],
        "answer": "Telescope"
      },
      {
        "question": "Which type of energy does a moving object have?",
        "options": ["Chemical energy", "Kinetic energy", "Potential energy", "Thermal energy"],
        "answer": "Kinetic energy"
      },
      {
        "question": "What is the formula for the area of a circle?",
        "options": ["r²", "πr²", "2πr", "πd"],
        "answer": "πr²"
      },
      {
        "question": "Which is the hardest natural substance?",
        "options": ["Gold", "Quartz", "Diamond", "Iron"],
        "answer": "Diamond"
      },
      {
        "question": "What is the main function of the large intestine?",
        "options": ["Absorb water", "Pump blood", "Digest protein", "Produce bile"],
        "answer": "Absorb water"
      },
      {
        "question": "Which part of the brain controls balance?",
        "options": ["Cerebellum", "Pons", "Medulla", "Cerebrum"],
        "answer": "Cerebellum"
      },
      {
        "question": "What is the term for animals that eat only plants?",
        "options": ["Omnivores", "Insectivores", "Herbivores", "Carnivores"],
        "answer": "Herbivores"
      },
      {
        "question": "What kind of lens is used to correct nearsightedness?",
        "options": ["Convex", "Bifocal", "Cylindrical", "Concave"],
        "answer": "Concave"
      },
      {
        "question": "What is the formula for calculating density?",
        "options": ["Volume ÷ Mass", "Length × Width", "Mass ÷ Volume", "Force ÷ Area"],
        "answer": "Mass ÷ Volume"
      },
      {
        "question": "What type of energy is stored in a battery?",
        "options": ["Kinetic", "Nuclear", "Chemical", "Thermal"],
        "answer": "Chemical"
      },
      {
        "question": "What is the primary gas in the Sun?",
        "options": ["Helium", "Nitrogen", "Hydrogen", "Oxygen"],
        "answer": "Hydrogen"
      },
      {
        "question": "Which instrument is used to measure temperature?",
        "options": ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
        "answer": "Thermometer"
      },
      {
        "question": "What is the name of our galaxy?",
        "options": ["Solar System", "Alpha Centauri", "Andromeda", "Milky Way"],
        "answer": "Milky Way"
      },
      {
        "question": "How many bones are in the adult human body?",
        "options": ["206", "198", "208", "210"],
        "answer": "206"
      },
      {
        "question": "What is the atomic number of oxygen?",
        "options": ["6", "8", "16", "12"],
        "answer": "8"
      },
      {
        "question": "What part of the plant conducts photosynthesis?",
        "options": ["Stem", "Flower", "Roots", "Leaves"],
        "answer": "Leaves"
      },
      {
        "question": "What is the chemical symbol for gold?",
        "options": ["Go", "Au", "Ag", "Gd"],
        "answer": "Au"
      },
      {
        "question": "Which gas is essential for human respiration?",
        "options": ["Hydrogen", "Oxygen", "Carbon dioxide", "Helium"],
        "answer": "Oxygen"
      },
      {
        "question": "What is the pH level of pure water?",
        "options": ["14", "3", "0", "7"],
        "answer": "7"
      },
      {
        "question": "What’s the speed of light?",
        "options": ["150,000,000 m/s", "3,000 m/s", "299,792,458 m/s", "186,000 m/s"],
        "answer": "299,792,458 m/s"
      },
      {
        "question": "What is 3² + 4²?",
        "options": ["9", "25", "12", "16"],
        "answer": "25"
      },
      {
        "question": "Which planet is farthest from the Sun?",
        "options": ["Saturn", "Neptune", "Pluto", "Uranus"],
        "answer": "Neptune"
      },
      {
        "question": "Which body system includes the brain and spinal cord?",
        "options": ["Digestive system", "Circulatory system", "Nervous system", "Respiratory system"],
        "answer": "Nervous system"
      },
      {
        "question": "What’s the symbol for iron on the periodic table?",
        "options": ["I", "Ir", "In", "Fe"],
        "answer": "Fe"
      },
      {
        "question": "What is the center of an atom called?",
        "options": ["Electron", "Proton", "Neutron", "Nucleus"],
        "answer": "Nucleus"
      },
      {
        "question": "What is the process of water changing from liquid to gas?",
        "options": ["Sublimation", "Evaporation", "Freezing", "Condensation"],
        "answer": "Evaporation"
      },
      {
        "question": "Which vitamin is primarily obtained from sunlight?",
        "options": ["Vitamin C", "Vitamin A", "Vitamin K", "Vitamin D"],
        "answer": "Vitamin D"
      },
      {
        "question": "What is a group of tissues that perform a specific function called?",
        "options": ["System", "Organ", "Organism", "Cell"],
        "answer": "Organ"
      },
      {
        "question": "How many chromosomes does a human cell have?",
        "options": ["92", "48", "23", "46"],
        "answer": "46"
      },
      {
        "question": "Which type of bond involves the sharing of electrons?",
        "options": ["Ionic", "Covalent", "Hydrogen", "Metallic"],
        "answer": "Covalent"
      },
      {
        "question": "What causes tides on Earth?",
        "options": ["Moon’s gravity", "Wind currents", "Earth’s rotation", "Sun’s heat"],
        "answer": "Moon’s gravity"
      },
      {
        "question": "What is the SI unit of energy?",
        "options": ["Joule", "Watt", "Ampere", "Newton"],
        "answer": "Joule"
      },
      {
        "question": "Which planet is tilted on its side?",
        "options": ["Uranus", "Earth", "Venus", "Mars"],
        "answer": "Uranus"
      },
      {
        "question": "What is the smallest unit of matter?",
        "options": ["Molecule", "Atom", "Cell", "Electron"],
        "answer": "Atom"
      },
      {
        "question": "Which organ regulates blood sugar levels?",
        "options": ["Heart", "Kidney", "Liver", "Pancreas"],
        "answer": "Pancreas"
      },
      {
        "question": "What is the main function of red blood cells?",
        "options": ["Digest food", "Carry oxygen", "Produce hormones", "Fight infection"],
        "answer": "Carry oxygen"
      },
      {
        "question": "Which planet has the largest moon?",
        "options": ["Jupiter", "Neptune", "Earth", "Saturn"],
        "answer": "Jupiter"
      },
      {
        "question": "What does DNA stand for?",
        "options": ["Digital Nucleotide Array", "Deoxyribose Acid", "Deoxyribonucleic Acid", "Dynamic Nuclear Acid"],
        "answer": "Deoxyribonucleic Acid"
      },
      {
        "question": "Which blood type is the universal donor?",
        "options": ["A+", "O-", "B-", "AB+"],
        "answer": "O-"
      },
      {
        "question": "What is Newton's second law?",
        "options": ["V=IR", "E=mc²", "F=ma", "a² + b² = c²"],
        "answer": "F=ma"
      },
      {
        "question": "Which gas do plants absorb for photosynthesis?",
        "options": ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        "answer": "Carbon Dioxide"
      },
      {
        "question": "What is the chemical formula for water?",
        "options": ["NaCl", "O2", "CO2", "H2O"],
        "answer": "H2O"
      },
      {
        "question": "Which element has the atomic number 1?",
        "options": ["Oxygen", "Helium", "Carbon", "Hydrogen"],
        "answer": "Hydrogen"
      },
      {
        "question": "What is the powerhouse of the cell?",
        "options": ["Golgi apparatus", "Nucleus", "Mitochondria", "Ribosome"],
        "answer": "Mitochondria"
      }
        
],
"ABM": [
  {
    "question": "What does ROI stand for in business analysis?",
    "options": ["Return on Investment", "Rate of Income", "Revenue Over Investment", "Return on Inventory"],
    "answer": "Return on Investment"
  },
  {
    "question": "Which of the following is considered an intangible asset?",
    "options": ["Machinery", "Building", "Trademark", "Inventory"],
    "answer": "Trademark"
  },
  {
    "question": "Which budgeting method starts from zero and builds up?",
    "options": ["Top-down budgeting", "Incremental budgeting", "Zero-based budgeting", "Flexible budgeting"],
    "answer": "Zero-based budgeting"
  },
  {
    "question": "What does GAAP stand for?",
    "options": ["Generally Accepted Accounting Principles", "General Accounting and Auditing Policies", "Global Association of Accountants and Practitioners", "General Application of Accounting Procedures"],
    "answer": "Generally Accepted Accounting Principles"
  },
  {
    "question": "Which of the following best describes a balance sheet?",
    "options": ["Shows profit and loss over time", "Summarizes cash inflow and outflow", "Shows the financial position at a point in time", "Details operational expenses"],
    "answer": "Shows the financial position at a point in time"
  },
  {
    "question": "What is the main purpose of a cash flow statement?",
    "options": ["To calculate profit", "To list liabilities", "To show changes in equity", "To summarize cash inflows and outflows"],
    "answer": "To summarize cash inflows and outflows"
  },
  {
    "question": "Which is an example of a current asset?",
    "options": ["Office equipment", "Patent", "Accounts receivable", "Land"],
    "answer": "Accounts receivable"
  },
  {
    "question": "Which financial statement is used to assess profitability over a period?",
    "options": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Changes in Equity"],
    "answer": "Income Statement"
  },
  {
    "question": "What is inventory turnover ratio used to measure?",
    "options": ["Profit per item sold", "Revenue growth", "Liquidity", "Efficiency of inventory management"],
    "answer": "Efficiency of inventory management"
  },
  {
    "question": "Which of the following best defines equity?",
    "options": ["Assets minus liabilities", "Revenue minus expenses", "Liabilities plus assets", "Owner’s draw from the business"],
    "answer": "Assets minus liabilities"
  },
  {
    "question": "Which of the following is a typical example of variable cost?",
    "options": ["Raw materials", "Insurance", "Salaries", "Rent"],
    "answer": "Raw materials"
  },
  {
    "question": "What does liquidity refer to?",
    "options": ["The total value of a company’s assets", "The rate at which a company generates revenue", "The amount of fixed costs a company has", "The ease with which an asset can be converted to cash"],
    "answer": "The ease with which an asset can be converted to cash"
  },
  {
    "question": "What is the purpose of diversification in business?",
    "options": ["To reduce risk by expanding into new markets or products", "To raise capital through stocks", "To increase market share in existing products", "To focus on a single product line"],
    "answer": "To reduce risk by expanding into new markets or products"
  },
  {
    "question": "Which of the following is a characteristic of a sole proprietorship?",
    "options": ["Has a separate legal identity from its owner", "Limited liability for the owner", "Owned by multiple shareholders", "Owned and operated by one person"],
    "answer": "Owned and operated by one person"
  },
  {
    "question": "What is the formula for calculating the current ratio?",
    "options": ["Cash Flow / Liabilities", "Net Income / Total Equity", "Current Assets / Current Liabilities", "Total Assets / Total Liabilities"],
    "answer": "Current Assets / Current Liabilities"
  },
  {
    "question": "Which type of market involves buying and selling standardized products?",
    "options": ["Perfect Competition", "Monopolistic Competition", "Oligopoly", "Monopoly"],
    "answer": "Perfect Competition"
  },
  {
    "question": "What is goodwill in accounting?",
    "options": ["The value of a company's brand", "An accounting profit", "A legal liability", "The value of a company's tangible assets"],
    "answer": "The value of a company's brand"
  },
  {
    "question": "Which of the following is a source of long-term financing?",
    "options": ["Equity financing", "Bank overdrafts", "Trade credit", "Credit card loans"],
    "answer": "Equity financing"
  },
  {
    "question": "Which term refers to the reduction of a company’s liabilities through debt payment?",
    "options": ["Capital Preservation", "Debt Restructuring", "Debt Service", "Debt Reduction"],
    "answer": "Debt Service"
  },
  {
    "question": "What is the primary objective of financial management?",
    "options": ["To minimize expenses", "To maximize shareholder wealth", "To increase employee wages", "To decrease liabilities"],
    "answer": "To maximize shareholder wealth"
  },
  {
    "question": "Which financial ratio measures a company’s ability to pay short-term obligations?",
    "options": ["Current Ratio", "Debt-to-Equity Ratio", "Quick Ratio", "Return on Assets"],
    "answer": "Current Ratio"
  },
  {
    "question": "What is depreciation?",
    "options": ["An expense for wear and tear on an asset", "A cost of raw materials", "A tax charge", "The increase in asset value"],
    "answer": "An expense for wear and tear on an asset"
  },
  {
    "question": "What does a company’s income statement show?",
    "options": ["Assets, liabilities, and equity at a specific time", "Cost of goods sold and operating expenses", "Cash inflows and outflows", "Revenue, expenses, and profits over a period"],
    "answer": "Revenue, expenses, and profits over a period"
  },
  {
    "question": "Which of the following is a capital budgeting method?",
    "options": ["Operating Profit", "Liquidity Ratio", "Net Present Value", "Debt to Equity Ratio"],
    "answer": "Net Present Value"
  },
  {
    "question": "Which of the following is NOT a type of financial ratio?",
    "options": ["Competitiveness Ratio", "Profitability Ratio", "Liquidity Ratio", "Efficiency Ratio"],
    "answer": "Competitiveness Ratio"
  },
  {
    "question": "What is the formula for calculating return on equity?",
    "options": ["Net Income / Total Assets", "Total Assets / Total Liabilities", "Net Income / Total Equity", "Net Revenue / Total Equity"],
    "answer": "Net Income / Total Equity"
  },
  {
    "question": "What is the break-even point?",
    "options": ["Where fixed costs exceed variable costs", "Where total revenue equals total costs", "Where assets exceed liabilities", "Where profits exceed losses"],
    "answer": "Where total revenue equals total costs"
  },
  {
    "question": "Which financial document summarizes the company's assets, liabilities, and equity?",
    "options": ["Balance Sheet", "Profit and Loss Statement", "Cash Flow Statement", "Income Statement"],
    "answer": "Balance Sheet"
  },
  {
    "question": "Which accounting principle assumes that the company will continue indefinitely?",
    "options": ["Consistency", "Relevance", "Going Concern", "Conservatism"],
    "answer": "Going Concern"
  },
  {
    "question": "Which of the following is a fixed cost?",
    "options": ["Rent", "Utility bills", "Wages", "Raw materials"],
    "answer": "Rent"
  },
  {
    "question": "What is a current liability?",
    "options": ["An asset", "A debt to be paid within a year", "A long-term debt", "A company’s profit"],
    "answer": "A debt to be paid within a year"
  },
  {
    "question": "What does P/E ratio stand for?",
    "options": ["Price Equity Ratio", "Price-to-Earnings Ratio", "Profit-to-Equity Ratio", "Profit Efficiency Ratio"],
    "answer": "Price-to-Earnings Ratio"
  }

],

"HUMSS": [
  {
    "question": "Who is the author of 'Critique of Pure Reason'?",
    "options": ["Immanuel Kant", "Jean-Paul Sartre", "Plato", "Friedrich Nietzsche"],
    "answer": "Immanuel Kant"
  },
  {
    "question": "What is the study of population statistics called?",
    "options": ["Geography", "Demography", "Anthropology", "Psychology"],
    "answer": "Demography"
  },
  {
    "question": "Which of the following best defines ideology?",
    "options": ["A type of government", "A method of reasoning", "A system of ideas and ideals", "A military strategy"],
    "answer": "A system of ideas and ideals"
  },
  {
    "question": "What does the term 'existentialism' refer to?",
    "options": ["Belief in supernatural beings", "Study of language", "Philosophical theory focusing on individual freedom and choice", "Theory of evolution"],
    "answer": "Philosophical theory focusing on individual freedom and choice"
  },
  {
    "question": "Which thinker is associated with the concept of the 'social contract'?",
    "options": ["Thomas Hobbes", "Karl Marx", "John Locke", "Aristotle"],
    "answer": "Thomas Hobbes"
  },
  {
    "question": "In literature, what does 'allegory' mean?",
    "options": ["A poem that praises nature", "A story with a hidden moral or political meaning", "A type of factual biography", "A historical document"],
    "answer": "A story with a hidden moral or political meaning"
  },
  {
    "question": "What does linguistics study?",
    "options": ["Cultural artifacts", "Human languages", "Social classes", "Economic systems"],
    "answer": "Human languages"
  },
  {
    "question": "Who is considered the father of psychoanalysis?",
    "options": ["Wilhelm Wundt", "Sigmund Freud", "Carl Rogers", "Jean Piaget"],
    "answer": "Sigmund Freud"
  },
  {
    "question": "What is phenomenology concerned with?",
    "options": ["Phenomena in the natural world", "Social movements", "Structures of experience and consciousness", "Artistic expressions"],
    "answer": "Structures of experience and consciousness"
  },
  {
    "question": "What type of government is ruled by a king or queen?",
    "options": ["Democracy", "Theocracy", "Monarchy", "Oligarchy"],
    "answer": "Monarchy"
  },
  {
    "question": "Who developed the theory of multiple intelligences?",
    "options": ["Jean Piaget", "Howard Gardner", "Noam Chomsky", "B.F. Skinner"],
    "answer": "Howard Gardner"
  },
  {
    "question": "Which philosopher wrote 'Being and Nothingness'?",
    "options": ["Søren Kierkegaard", "Albert Camus", "Jean-Paul Sartre", "René Descartes"],
    "answer": "Jean-Paul Sartre"
  },
  {
    "question": "What is the primary concern of ethics?",
    "options": ["Beauty and taste", "Human origin", "Right and wrong behavior", "Social hierarchy"],
    "answer": "Right and wrong behavior"
  },
  {
    "question": "Which of the following is NOT a social science?",
    "options": ["Economics", "Philosophy", "Sociology", "Political Science"],
    "answer": "Philosophy"
  },
  {
    "question": "Which field of study analyzes written texts and their meanings?",
    "options": ["Philosophy", "Literary Criticism", "Psychology", "Sociology"],
    "answer": "Literary Criticism"
  }
],

        "TVL-ICT": [
          {
            question: "Which of the following stores the operating system and system files?",
            options: ["GPU", "RAM", "Hard Drive", "ROM"],
            answer: "Hard Drive"
          },
          {
            question: "What is a firewall used for?",
            options: ["Cooling system", "Data entry", "Security protection", "Power regulation"],
            answer: "Security protection"
          },
          {
            question: "Which command is used to delete a file in a terminal?",
            options: ["del", "rm", "remove", "clr"],
            answer: "rm"
          },
          {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheet", "Cascading Style Sheets", "Control Style Set", "Computer System Servicing"],
            answer: "Computer System Servicing"
          },
          {
            question: "Which type of network is used in a small area like a home or office?",
            options: ["WAN", "MAN", "LAN", "VPN"],
            answer: "LAN"
          },
          {
            question: "Which command is used to create a directory in a terminal?",
            options: ["cd", "ls", "mkdir", "rm"],
            answer: "mkdir"
          },
          {
            question: "Which file extension is used for JavaScript files?",
            options: [".java", ".html", ".js", ".css"],
            answer: ".js"
          },
          {
            question: "Which of the following is NOT an operating system?",
            options: ["Windows", "Linux", "Oracle", "macOS"],
            answer: "Oracle"
          },
          {
            question: "What is the function of an IP address?",
            options: [
              "To store web pages",
              "To identify devices on a network",
              "To connect USB devices",
              "To browse the internet"
            ],
            answer: "To identify devices on a network"
          },
          {
            question: "Which of the following is a version control system?",
            options: ["Git", "Java", "Linux", "Apache"],
            answer: "Git"
          },
          {
            question: "Which device connects a local network to the internet?",
            options: ["Switch", "Modem", "Repeater", "Firewall"],
            answer: "Modem"
          },
          {
            question: "Which programming language is primarily used for web development?",
            options: ["Python", "C#", "JavaScript", "Java"],
            answer: "JavaScript"
          },
          {
            question: "Which of the following is a web browser?",
            options: ["Photoshop", "Chrome", "Excel", "Git"],
            answer: "Chrome"
          },
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Trainer Marking Language",
              "Hyper Text Markup Language",
              "Highlevel Text Machine Language",
              "Hyper Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
          },
          {
            question: "Which protocol is used for sending emails?",
            options: ["FTP", "SMTP", "HTTP", "SSH"],
            answer: "SMTP"
          },
          {
            question: "Which tool is used to test the voltage of a power supply?",
            options: ["Screwdriver", "Antistatic wrist strap", "LAN tester", "Multimeter"],
            answer: "Multimeter"
          },
          {
            question: "Which safety precaution should be followed before opening a system unit?",
            options: [
              "Install antivirus",
              "Run Disk Cleanup",
              "Unplug the power cord",
              "Update drivers"
            ],
            answer: "Unplug the power cord"
          },
          {
            question: "Which connector is used to attach monitors to a computer?",
            options: ["HDMI", "RJ-45", "PS/2", "VGA"],
            answer: "VGA"
          },
          {
            question: "Which component stores the system firmware and settings?",
            options: ["CMOS", "RAM", "SSD", "CPU"],
            answer: "CMOS"
          },
          {
            question: "Which tool is used to compress air and remove dust from components?",
            options: ["Soldering iron", "Power tester", "Air blower", "Multimeter"],
            answer: "Air blower"
          },
          {
            question: "What is the purpose of thermal paste in computer assembly?",
            options: [
              "Fix motherboards",
              "Enhance heat transfer between CPU and heatsink",
              "Prevent short circuits",
              "Improve power supply"
            ],
            answer: "Enhance heat transfer between CPU and heatsink"
          },
          {
            question: "Which type of storage device uses flash memory and has no moving parts?",
            options: ["DVD", "Floppy Disk", "SSD", "HDD"],
            answer: "SSD"
          },
          {
            question: "Which connector is commonly used for connecting hard drives and optical drives?",
            options: ["USB", "HDMI", "SATA", "VGA"],
            answer: "SATA"
          },
          {
            question: "Which type of memory is volatile and temporarily stores data?",
            options: ["SSD", "HDD", "RAM", "ROM"],
            answer: "RAM"
          },
          {
            question: "What device allows a technician to ground themselves and avoid damaging components?",
            options: ["USB hub", "Thermal paste", "Antistatic wrist strap", "SATA cable"],
            answer: "Antistatic wrist strap"
          },
          {
            question: "Which hardware component is responsible for processing all instructions in a computer?",
            options: ["Motherboard", "RAM", "Central Processing Unit", "Hard Disk Drive"],
            answer: "Central Processing Unit"
          },
          {
            question: "Which tool is used to test network cables?",
            options: ["Crimping tool", "Multimeter", "Heat gun", "LAN tester"],
            answer: "LAN tester"
          },
          {
            question: "What does POST stand for in computer diagnostics?",
            options: [
              "Power-On Self Test",
              "Peripheral Optimization System Test",
              "Program Output Startup Test",
              "Performance Oriented System Test"
            ],
            answer: "Power-On Self Test"
          },
          {
            question: "Which type of software is used to scan and remove malicious programs?",
            options: ["Disk Management", "Antivirus", "BIOS", "Driver"],
            answer: "Antivirus"
          },
          {
            question: "What does BIOS stand for?",
            options: [
              "Basic Input Output System",
              "Base Integrated Output Scheme",
              "Basic Internal Operations Setup",
              "Binary Integrated Operating Setup"
            ],
            answer: "Basic Input Output System"
          },
          {
            question: "Which port is commonly used to connect a keyboard or mouse in older systems?",
            options: ["RJ-11", "HDMI", "USB-C", "PS/2"],
            answer: "PS/2"
          },
          {
            question: "Which component houses the CPU, RAM, and expansion cards?",
            options: ["Chassis", "Monitor", "Power Supply", "Motherboard"],
            answer: "Motherboard"
          },
          {
            question: "Which Windows utility is used to check disk errors?",
            options: ["MSCONFIG", "CHKDSK", "CMD", "DXDIAG"],
            answer: "CHKDSK"
          },
          {
            question: "What is the main function of a power supply unit (PSU)?",
            options: [
              "Convert AC to DC power",
              "Store user data",
              "Connect peripherals",
              "Manage RAM allocation"
            ],
            answer: "Convert AC to DC power"
          },
          {
            question: "Which type of memory is volatile and temporarily stores data?",
            options: ["SSD", "HDD", "RAM", "ROM"],
            answer: "RAM"
          },
          {
            question: "Which connector is commonly used for connecting hard drives and optical drives?",
            options: ["USB", "HDMI", "SATA", "VGA"],
            answer: "SATA"
          }
            ],

        "TVL-FBS/COOKERY": [
          {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Avocado", "Cucumber", "Lemon"],
            answer: "Avocado"
        },
        {
            question: "Which of the following is a type of fish commonly used for sushi?",
            options: ["Salmon", "Chicken", "Beef", "Pork"],
            answer: "Salmon"
        },
        {
            question: "Which cooking method involves cooking food by submerging it in hot oil?",
            options: ["Boiling", "Frying", "Grilling", "Steaming"],
            answer: "Frying"
        },
        {
            question: "What is the term for the process of cooking meat slowly in liquid?",
            options: ["Braising", "Grilling", "Sautéing", "Baking"],
            answer: "Braising"
        },
        {
            question: "Which of the following is a type of mushroom commonly used in cooking?",
            options: ["Button mushroom", "Spinach", "Lettuce", "Carrot"],
            answer: "Button mushroom"
        },
        {
            question: "What is the main purpose of a slow cooker?",
            options: ["To fry food", "To bake food", "To cook food slowly at low temperatures", "To steam food"],
            answer: "To cook food slowly at low temperatures"
        },
        {
            question: "Which fruit is traditionally used to make guacamole?",
            options: ["Apple", "Avocado", "Banana", "Peach"],
            answer: "Avocado"
        },
        {
            question: "Which of the following is a primary ingredient in a Caesar salad dressing?",
            options: ["Mayonnaise", "Olive oil", "Egg yolk", "Anchovies"],
            answer: "Anchovies"
        },
        {
            question: "What is the name of the Italian dish made with layers of pasta, sauce, and cheese?",
            options: ["Lasagna", "Pizza", "Spaghetti", "Fettuccine"],
            answer: "Lasagna"
        },
        {
            question: "Which cooking technique is used to cook food by exposing it to direct heat in an oven?",
            options: ["Baking", "Steaming", "Frying", "Grilling"],
            answer: "Baking"
        },
        {
            question: "What is the primary ingredient in the dish ‘Hummus’?",
            options: ["Chickpeas", "Lentils", "Peas", "Beans"],
            answer: "Chickpeas"
        },
        {
            question: "What is the term for cooking food in water just below boiling point?",
            options: ["Poaching", "Boiling", "Simmering", "Frying"],
            answer: "Simmering"
        },
        {
            question: "Which of the following is a tropical fruit?",
            options: ["Apple", "Banana", "Pear", "Orange"],
            answer: "Banana"
        },
        {
            question: "What is the purpose of a rolling pin in baking?",
            options: ["To mix ingredients", "To cut dough", "To roll out dough", "To sift flour"],
            answer: "To roll out dough"
        },
        {
            question: "Which of the following is considered a healthy fat?",
            options: ["Butter", "Olive oil", "Vegetable oil", "Lard"],
            answer: "Olive oil"
        },
             {
    question: "What does FBS stand for?",
    options: ["Frozen Beverage Store", "Fast Breakfast Services", "Food and Beverage Services", "Food Baking Science"],
    answer: "Food and Beverage Services"
  },
  {
    question: "Which of the following is a dry cooking method?",
    options: ["Grilling", "Boiling", "Poaching", "Steaming"],
    answer: "Grilling"
  },
  {
    question: "What is the correct temperature range for the danger zone in food safety?",
    options: ["1°C to 4°C", "5°C to 60°C", "70°C to 120°C", "0°C to 100°C"],
    answer: "5°C to 60°C"
  },
  {
    question: "Which knife is commonly used for slicing bread?",
    options: ["Paring knife", "Chef’s knife", "Cleaver", "Serrated knife"],
    answer: "Serrated knife"
  },
  {
    question: "What is the purpose of mise en place?",
    options: ["Serving the dish", "Preparation before cooking", "Cleaning after cooking", "Cooking the ingredients"],
    answer: "Preparation before cooking"
  },
  {
    question: "What mineral is most important for bone health?",
    options: ["Zinc", "Potassium", "Iron", "Calcium"],
    answer: "Calcium"
  },
  {
    question: "Which of the following is a moist cooking method?",
    options: ["Grilling", "Baking", "Steaming", "Roasting"],
    answer: "Steaming"
  },
  {
    question: "Which of these is a thick soup made with roux and cream?",
    options: ["Bouillon", "Broth", "Bisque", "Consommé"],
    answer: "Bisque"
  },
  {
    question: "What is the correct order in setting up a table from left to right?",
    options: ["Fork, plate, knife, spoon", "Knife, fork, plate, spoon", "Spoon, plate, knife, fork", "Fork, spoon, plate, knife"],
    answer: "Fork, plate, knife, spoon"
  },
  {
    question: "Which microorganism commonly causes food poisoning?",
    options: ["Listeria", "E. coli", "Salmonella", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is a leafy vegetable?",
    options: ["Spinach", "Carrot", "Onion", "Potato"],
    answer: "Spinach"
  },
  {
    question: "Which equipment is used to measure liquid ingredients accurately?",
    options: ["Measuring cup", "Spoon", "Timer", "Weighing scale"],
    answer: "Measuring cup"
  },
  {
    question: "What is the French term for 'everything in its place'?",
    options: ["En papillote", "Julienne", "Sauté", "Mise en place"],
    answer: "Mise en place"
  },
  {
    question: "Which of the following is a common emulsifier in mayonnaise?",
    options: ["Egg yolk", "Vinegar", "Water", "Oil"],
    answer: "Egg yolk"
  },
  {
    question: "Which cooking method uses dry heat and no oil?",
    options: ["Poaching", "Frying", "Sautéing", "Baking"],
    answer: "Baking"
  },
  {
    question: "Which utensil is best for stirring sauces?",
    options: ["Fork", "Knife", "Ladle", "Wooden spoon"],
    answer: "Wooden spoon"
  },
  {
    question: "How many milliliters are in one liter?",
    options: ["200", "100", "500", "1000"],
    answer: "1000"
  },
  {
    question: "Which of the following is a form of personal hygiene?",
    options: ["Washing hands before handling food", "Wearing jewelry", "Wearing sandals", "Using perfume"],
    answer: "Washing hands before handling food"
  },
  {
    question: "What is the safest way to defrost frozen meat?",
    options: ["Room temperature", "Refrigerator", "Under hot water", "Microwave without monitoring"],
    answer: "Refrigerator"
  },
  {
    question: "Which of the following is considered a root vegetable?",
    options: ["Lettuce", "Carrot", "Spinach", "Cabbage"],
    answer: "Carrot"
  },
  {
    question: "What is the main ingredient in a béchamel sauce?",
    options: ["Milk", "Oil", "Vinegar", "Tomato"],
    answer: "Milk"
  },
  {
    question: "Which tool is used to level off dry ingredients?",
    options: ["Fork", "Peeler", "Spatula", "Knife"],
    answer: "Spatula"
  },
  {
    question: "What is the function of yeast in bread-making?",
    options: ["Leavening", "Coloring", "Flavoring", "Binding"],
    answer: "Leavening"
  },
  {
    question: "Which of the following is NOT a dry heat method?",
    options: ["Baking", "Grilling", "Roasting", "Steaming"],
    answer: "Steaming"
  },
  {
    question: "What does HACCP stand for?",
    options: ["Hazard Analysis Critical Control Point", "Hazard Avoidance Cooking Code", "Health and Care Cooking Plan", "Hot and Cold Cooking Procedures"],
    answer: "Hazard Analysis Critical Control Point"
  },
  {
    question: "Which of the following is used for garnishing?",
    options: ["Parsley", "Salt", "Flour", "Butter"],
    answer: "Parsley"
  },
  {
    question: "What is the main function of protein in the body?",
    options: ["Absorb vitamins", "Build and repair tissues", "Supply energy", "Aid digestion"],
    answer: "Build and repair tissues"
  },
  {
    question: "What is blanching?",
    options: ["Boiling then cooling vegetables quickly", "Frying food in oil", "Baking bread", "Marinating meat"],
    answer: "Boiling then cooling vegetables quickly"
  },
  {
    question: "Which of the following is a type of pasta?",
    options: ["Curry", "Fettuccine", "Roti", "Gnocchi"],
    answer: "Fettuccine"
  },
  {
    question: "What is the ideal temperature for a refrigerator?",
    options: ["5°C to 7°C", "0°C to 10°C", "10°C to 12°C", "1°C to 4°C"],
    answer: "1°C to 4°C"
  },
  {
    question: "What type of milk is used to make cheese?",
    options: ["Almond milk", "Soy milk", "Animal milk", "Coconut milk"],
    answer: "Animal milk"
  },
  {
    question: "Which of these tools is used to scrape bowls clean?",
    options: ["Rubber scraper", "Tongs", "Spatula", "Peeler"],
    answer: "Rubber scraper"
  },
  {
    question: "Which cooking method uses steam in a closed container?",
    options: ["Simmering", "Frying", "Grilling", "Steaming"],
    answer: "Steaming"
  },
  {
    question: "What is the main nutrient found in rice?",
    options: ["Iron", "Vitamin C", "Protein", "Carbohydrates"],
    answer: "Carbohydrates"
  },
  {
    question: "Which food group helps build strong bones?",
    options: ["Dairy", "Meat", "Grains", "Fats and oils"],
    answer: "Dairy"
  },
  {
    question: "What is the term for cutting food into very small pieces?",
    options: ["Slicing", "Mincing", "Dicing", "Chopping"],
    answer: "Mincing"
  },
  {
    question: "Which of the following is a breakfast dish?",
    options: ["Pizza", "Omelette", "Lasagna", "Steak"],
    answer: "Omelette"
  },
  {
    question: "What is cross-contamination?",
    options: ["Washing fruits together", "Transfer of bacteria from one food to another", "Mixing of spices", "Heating food repeatedly"],
    answer: "Transfer of bacteria from one food to another"
  },
  {
    question: "What tool is best for grating cheese?",
    options: ["Knife", "Sieve", "Peeler", "Grater"],
    answer: "Grater"
  },
  {
    question: "Which vitamin is essential for vision?",
    options: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin D"],
    answer: "Vitamin A"
  },
  {
    question: "What is the purpose of setting a table properly?",
    options: ["All of the above", "Shows cleanliness", "Enhances dining experience", "Promotes etiquette"],
    answer: "All of the above"
  },
  {
    question: "Which cut is shaped like matchsticks?",
    options: ["Julienne", "Slice", "Dice", "Mince"],
    answer: "Julienne"
  },
  {
    question: "Which of the following is a fermented product?",
    options: ["Yogurt", "Butter", "Margarine", "Cream"],
    answer: "Yogurt"
  },
  {
    question: "What color apron is usually used by cooks in the kitchen?",
    options: ["Red", "White", "Green", "Blue"],
    answer: "White"
  },
  {
    question: "Which of the following is NOT a proper personal hygiene practice?",
    options: ["Wearing nail polish", "Wearing a clean uniform", "Washing hands", "Wearing a hairnet"],
    answer: "Wearing nail polish"
  },
  {
    question: "What is the purpose of preheating an oven?",
    options: ["Heat the air inside", "Improve baking results", "All of the above", "Ensure accurate cooking time"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is used to serve soup?",
    options: ["Slotted spoon", "Ladle", "Tongs", "Whisk"],
    answer: "Ladle"
  }
            ]
      };
     
      export default quizData;