// Language translations
const translations = {
    en: {
        knowYourRights: "Know Your Rights",
        createPlan: "Create Your Termination Plan",
        mainDescription: "Be Ready prepares you for the day your contract is terminated by helping you develop the right reflexes and plan for the eventuality.",
        registerText: "Register to be added to the list of people we are ready. We will contact you with news and updates when we launch!",
        registerButton: "Register",
        learnLawsButton: "Learn about Labour Laws",
        nextLaw: "Next Law",
        planTitle: "Your Termination Checklist",
        checkReviews: "Gather your performance reviews, pay slips and tax slips",
        checkEmails: "Gather all relevant emails and communication",
        checkLawyer: "Contact an Employment Lawyer"
    },
    fr: {
        knowYourRights: "Connaître Vos Droits",
        createPlan: "Créer Votre Plan de Départ",
        mainDescription: "Be Ready vous prépare pour le jour où votre contrat sera résilié en vous aidant à développer les bons réflexes et à planifier cette éventualité.",
        registerText: "Inscrivez-vous pour être ajouté à la liste des personnes que nous préparons. Nous vous contacterons avec les nouvelles et les mises à jour lors du lancement !",
        registerButton: "S'inscrire",
        learnLawsButton: "En savoir plus sur le droit du travail",
        nextLaw: "Loi suivante",
        planTitle: "Votre liste de vérification de fin d'emploi",
        checkReviews: "Rassembler vos évaluations de rendement, fiches de paie et feuillets d'impôt",
        checkEmails: "Rassembler tous les courriels et communications pertinents",
        checkLawyer: "Contacter un avocat spécialisé en droit du travail"
    }
};

const laborLaws = {
    en: [
        {
            title: "Notice of Termination",
            content: "In Quebec, employers must provide written notice before terminating employment. The notice period depends on your length of service: 1 week for 3 months to 1 year, 2 weeks for 1-5 years, 4 weeks for 5-10 years, and 8 weeks for 10+ years."
        },
        {
            title: "Severance Pay",
            content: "If notice is not given, the employer must pay compensation equal to the wages you would have earned during the notice period. This is called pay in lieu of notice."
        },
        {
            title: "Final Payment",
            content: "Upon termination, you must receive all unpaid wages, accumulated vacation pay, and any other amounts owing within 7 days of termination."
        }
    ],
    fr: [
        {
            title: "Avis de cessation d'emploi",
            content: "Au Québec, les employeurs doivent fournir un avis écrit avant de mettre fin à l'emploi. La période de préavis dépend de votre ancienneté : 1 semaine pour 3 mois à 1 an, 2 semaines pour 1-5 ans, 4 semaines pour 5-10 ans et 8 semaines pour 10+ ans."
        },
        {
            title: "Indemnité de départ",
            content: "Si l'avis n'est pas donné, l'employeur doit verser une indemnité égale au salaire que vous auriez gagné pendant la période de préavis. C'est ce qu'on appelle l'indemnité compensatrice de préavis."
        },
        {
            title: "Paiement final",
            content: "À la fin de l'emploi, vous devez recevoir tous les salaires impayés, l'indemnité de vacances accumulée et tout autre montant dû dans les 7 jours suivant la cessation d'emploi."
        }
    ]
};

// DOM elements
const languageSelect = document.getElementById('languageSelect');
const knowRightsBtn = document.getElementById('knowRightsBtn');
const planBtn = document.getElementById('planBtn');
const mainDescription = document.getElementById('mainDescription');
const registerText = document.getElementById('registerText');
const registerBtn = document.getElementById('registerBtn');
const homeSection = document.getElementById('homeSection');
const rightsSection = document.getElementById('rightsSection');
const learnLawsBtn = document.getElementById('learnLawsBtn');
const lawCard = document.getElementById('lawCard');
const lawTitle = document.getElementById('lawTitle');
const lawContent = document.getElementById('lawContent');
const nextLawBtn = document.getElementById('nextLawBtn');
const planSection = document.getElementById('planSection');
const planTitle = document.getElementById('planTitle');
const labelReviews = document.getElementById('labelReviews');
const labelEmails = document.getElementById('labelEmails');
const labelLawyer = document.getElementById('labelLawyer');

// Update content based on selected language
function updateContent(language) {
    knowRightsBtn.textContent = translations[language].knowYourRights;
    planBtn.textContent = translations[language].createPlan;
    mainDescription.textContent = translations[language].mainDescription;
    registerText.textContent = translations[language].registerText;
    registerBtn.textContent = translations[language].registerButton;
    document.documentElement.lang = language;
}

// Event listener for language change
languageSelect.addEventListener('change', (e) => {
    updateContent(e.target.value);
});

// Register button click handler
registerBtn.addEventListener('click', () => {
    window.location.href = '';
});

// Know Your Rights button click handler
knowRightsBtn.addEventListener('click', () => {
    homeSection.classList.add('hidden');
    rightsSection.classList.remove('hidden');
});

// Logo click handler (return to home)
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.classList.remove('hidden');
    rightsSection.classList.add('hidden');
    planSection.classList.add('hidden');
    lawCard.classList.add('hidden');
});

// Create Plan button click handler
planBtn.addEventListener('click', () => {
    homeSection.classList.add('hidden');
    rightsSection.classList.add('hidden');
    planSection.classList.remove('hidden');
});

// Track current law index
let currentLawIndex = 0;

// Learn Laws button click handler
learnLawsBtn.addEventListener('click', () => {
    lawCard.classList.remove('hidden');
    showCurrentLaw();
});

// Next Law button click handler
nextLawBtn.addEventListener('click', () => {
    currentLawIndex = (currentLawIndex + 1) % laborLaws[document.documentElement.lang].length;
    showCurrentLaw();
});

// Show current law card
function showCurrentLaw() {
    const currentLang = document.documentElement.lang;
    const currentLaw = laborLaws[currentLang][currentLawIndex];
    lawTitle.textContent = currentLaw.title;
    lawContent.textContent = currentLaw.content;
    nextLawBtn.textContent = translations[currentLang].nextLaw;
}

// Update content based on selected language
function updateContent(language) {
    knowRightsBtn.textContent = translations[language].knowYourRights;
    planBtn.textContent = translations[language].createPlan;
    mainDescription.textContent = translations[language].mainDescription;
    registerText.textContent = translations[language].registerText;
    registerBtn.textContent = translations[language].registerButton;
    learnLawsBtn.textContent = translations[language].learnLawsButton;
    planTitle.textContent = translations[language].planTitle;
    labelReviews.textContent = translations[language].checkReviews;
    labelEmails.textContent = translations[language].checkEmails;
    labelLawyer.textContent = translations[language].checkLawyer;
    document.documentElement.lang = language;

    if (!lawCard.classList.contains('hidden')) {
        showCurrentLaw();
    }
}

// Initialize with default language (English)
updateContent('en');
