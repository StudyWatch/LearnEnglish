import friendsItemList from "./series json/friends.json" assert { type: "json" };
import howItemList from "./series json/himym.json" assert { type: "json" };
import the100itemList from "./series json/the100.json" assert { type: "json" };
import bigbang from "./series json/bigbang.json" assert { type: "json" };
import simpsons from "./series json/simpsons.json" assert { type: "json" };
import brooklyn99 from "./series json/brooklyn99.json" assert { type: "json" };
import modernfamily from "./series json/modern.json" assert { type: "json" };
import BigmouthItemList from "./series json/bigmouth.json" assert { type: "json" };
import newgirlItemList from "./series json/newgirl.json" assert { type: "json" };
import seinfeldItemList from "./series json/seinfeld.json" assert { type: "json" };
import thegoodplaceItemList from "./series json/thegoodplace.json" assert { type: "json" };
import theofficeItemList from "./series json/theoffice.json" assert { type: "json" };
document.addEventListener('DOMContentLoaded', () => {
    const feedbackButton = document.getElementById('feedbackButton');
    const feedbackModal = document.getElementById('feedbackModal');
    const closeModalButton = feedbackModal.querySelector('.close');
    const toSeriesButton = document.getElementById('to-series');
    const backToTopButton = document.querySelector('.back-to-top-button');

    const hideButtonScrollThreshold = 100; // Adjust this value as needed

    feedbackButton.addEventListener('click', () => {
        feedbackModal.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });

    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('תודה שמילאתם את השאלון! המשוב שלכם חשוב לנו.');
        feedbackModal.style.display = 'none';
        this.reset();
    });

    function toggleFeedbackButton() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > hideButtonScrollThreshold || window.location.hash !== '') {
            feedbackButton.style.display = 'none';
        } else {
            feedbackButton.style.display = 'block';
        }
    }

    window.addEventListener('scroll', toggleFeedbackButton);
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        feedbackButton.style.display = 'block';
    });

    toSeriesButton.addEventListener('click', (e) => {
        e.preventDefault();
        feedbackButton.style.display = 'none';
        handleSeriesClick();
    });

    // Initial check to ensure the button is displayed correctly on page load
    toggleFeedbackButton();
});
;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navbar = document.getElementById("navbar");
    const accessibilityBtn = document.getElementById("accessibilityBtn");
    const accessibilityOptions = document.getElementById("accessibilityOptions");
    const increaseTextBtn = document.getElementById('increaseText');
    const decreaseTextBtn = document.getElementById('decreaseText');
    const toggleContrastBtn = document.getElementById('toggleContrast');
    let textSize = 100;

    // Toggle the display of the navbar
    document.getElementById('hamburgerBtn').addEventListener('click', function() {
        var btn = this; // השיג את הכפתור
        var navbar = document.getElementById('navbar'); // השיג את הניווט
    
        function updateNavbarPosition() {
            var rect = btn.getBoundingClientRect();
            
            // עדכון מיקום הניווט
            navbar.style.top = (rect.bottom + window.scrollY) + 'px';
            navbar.style.right = (document.body.clientWidth - rect.right) + 'px';
        }
    
        // משנה את מצב התצוגה של הניווט ומעדכן את מיקומו
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
            window.removeEventListener('scroll', updateNavbarPosition); // מסיר את המאזין כשהתפריט סגור
            window.removeEventListener('resize', updateNavbarPosition); // מסיר את המאזין לשינויים בגודל החלון
        } else {
            navbar.style.display = 'block';
            updateNavbarPosition(); // עדכון מיקום ראשוני
            window.addEventListener('scroll', updateNavbarPosition); // מוסיף מאזין לגלילה
            window.addEventListener('resize', updateNavbarPosition); // מוסיף מאזין לשינויים בגודל החלון
        }
    });
    
    // Toggle the display of the accessibility options
    accessibilityBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleVisibility(accessibilityOptions);
    });

    increaseTextBtn.addEventListener('click', () => {
        if (textSize < 150) {
            textSize += 10;
            document.body.style.fontSize = textSize + '%';
        }
    });

    decreaseTextBtn.addEventListener('click', () => {
        if (textSize > 100) {
            textSize -= 10;
            document.body.style.fontSize = textSize + '%';
        }
    });

    toggleContrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Close the navbar and accessibility options when clicking outside of them
    document.addEventListener("click", (event) => {
        if (!event.target.closest('.navbar') && !event.target.closest('#hamburgerBtn')) {
            navbar.classList.remove('visible');
        }
        if (!event.target.closest('#accessibilityOptions') && !event.target.closest('#accessibilityBtn')) {
            accessibilityOptions.classList.remove('visible');
        }
    });

    function toggleVisibility(element) {
        element.classList.toggle('visible');
    }

  const didYouKnowFacts = [
    { word: "Elixir", explanation: "משקה קסום שמעניק חיי נצח או מרפא לכל מחלה. מקורה בערבית, 'al-iksir' שפירושו אבן החכמים." },
    { word: "Phoenix", explanation: "עוף החול המיתולוגי שמתחדש מחורבותיו. מקור המילה במיתולוגיה היוונית." },
    { word: "Renaissance", explanation: "תקופת התחדשות תרבותית ואומנותית באירופה. מקורה בלטינית, 'renasci' שפירושו להיוולד מחדש." },
    { word: "Labyrinthine", explanation: "מסובך ומבוך. מקורה במיתוס היווני של המינוטאור." },
    { word: "Nefarious", explanation: "רע ומרושע. מקורה בלטינית, 'nefas' שפירושו פשע גדול." },
    { word: "Esoteric", explanation: "ידוע למעטים בלבד. מקורה ביוונית, 'esoterikos' שפירושו פנימי." },
    { word: "Abyss", explanation: "תהום אין סופית. מקורה ביוונית, 'abyssos' שפירושו ללא תחתית." },
    { word: "Gossamer", explanation: "דק ועדין כמו קורי עכביש. מקורה באנגלית תיכונה, 'goose summer' בגלל קורי העכביש שמופיעים באוויר בסתיו." },
    { word: "Zephyr", explanation: "רוח קלילה ונעימה. מקורה במיתולוגיה היוונית, שם 'זפירוס' היה אל הרוח המערבית." },
    { word: "Obsidian", explanation: "סוג של זכוכית געשית. מקורה בלטינית, שם 'obsidianus' נכתב על פי האגדה על Obsius שגילה אותה." },
    { word: "Lethargy", explanation: "עייפות רבה או שינה עמוקה. מקורה במיתולוגיה היוונית, שם נהר 'Lethe' היה נהר השכחה." },
    { word: "Pandemonium", explanation: "כאוס ובלגן גדול. מקורה בלטינית, 'pan' פירושו הכל ו-'demonium' שפירושו שדים. תואר זה ניתן לעיר השדים ביצירתו של מילטון, 'גן עדן האבוד'." },
    { word: "Cacophony", explanation: "רעש צורם ולא נעים. מקורה ביוונית, 'kakophonia' שפירושו צליל רע." },
    { word: "Mirage", explanation: "אשליה אופטית במדבר. מקורה בצרפתית, 'mirer' שפירושו להסתכל." },
    { word: "Ethereal", explanation: "אוורירי ועדין כאלמנט שמימי. מקורה ביוונית, 'aither' שפירושו שמיים." },
    { word: "Maelstrom", explanation: "מערבולת חזקה בים. מקורה בהולנדית, 'malen' שפירושו לטחון ו-'stroom' שפירושו זרם." },
    { word: "Nebula", explanation: "ענן גז בחלל. מקורה בלטינית, 'nebula' שפירושו ערפל." },
    { word: "Eclipse", explanation: "ליקוי. מקורה ביוונית, 'ekleipsis' שפירושו נטישה." },
    { word: "Chimera", explanation: "יצור מיתולוגי שמורכב מחלקי גוף של חיות שונות. מקורה במיתולוגיה היוונית." },
    { word: "Aurora", explanation: "זוהר צפוני. מקורה ברומית, שם אורורה הייתה אלת השחר." },
    { word: "Horizon", explanation: "קו שבו השמיים והארץ נפגשים. מקורה ביוונית, 'horizōn' שפירושו להגביל." },
    { word: "Turbulence", explanation: "תנועה סוערת באוויר או מים. מקורה בלטינית, 'turbulentus' שפירושו סוער." },
    { word: "Cascade", explanation: "מפל מים קטן. מקורה בלטינית, 'cascare' שפירושו ליפול." },
    { word: "Myriad", explanation: "מספר גדול מאוד. מקורה ביוונית, 'myrios' שפירושו עשרת אלפים." },
    { word: "Tranquility", explanation: "שלווה ורוגע. מקורה בלטינית, 'tranquillitas' שפירושו שקט." },
    { word: "Tempest", explanation: "סערה חזקה. מקורה בלטינית, 'tempestas' שפירושו מזג אוויר סוער." },
    { word: "Tapestry", explanation: "שטיח קיר עם ציורים. מקורה בצרפתית, 'tapisserie' שפירושו שטיח." },
    { word: "Nebulous", explanation: "מעורפל ולא ברור. מקורה בלטינית, 'nebulosus' שפירושו מעורפל." }
];


    const penguinImg = document.getElementById('penguin');
    const thoughtBubble = document.getElementById('thoughtBubble');
    const didYouKnowText = document.getElementById('didYouKnowText');

    function showDailyFact() {
        const today = new Date();
        const factIndex = today.getDate() % didYouKnowFacts.length;
        const dailyFact = didYouKnowFacts[factIndex];
        didYouKnowText.textContent = `${dailyFact.word}: ${dailyFact.explanation}`;
    }

    window.togglePenguinInfo = function() {
        if (thoughtBubble.classList.contains('show')) {
            penguinImg.src = "img/pinguin1.png";
            thoughtBubble.classList.remove('show');
        } else {
            penguinImg.src = "img/pinguin2.png";
            thoughtBubble.classList.add('show');
        }
    };

    showDailyFact();

    // Define the function to display tips
function displayTips() {
    const tips = [
        "<strong>רשימת מילים:</strong> <bdi>.לפני כל פרק, עבור על רשימת המילים שאתה עתיד ללמוד זה יעזור לך להכיר ולזהות את המילים במהלך הצפייה</bdi>",
        "<strong>צפייה פעילה:</strong> <bdi>.כשאתה צופה בסדרה, שים לב במיוחד למילים וביטויים שלמדת נסה להיות ממוקד ולהבין איך הם משולבים בדיאלוג</bdi>",
        "<strong>חזרה על המילים:</strong> <bdi>.לאחר סיום הפרק, חזור על רשימת המילים נסה לכתוב משפט אחד לפחות עם כל מילה לשילוב הטכניקה שלמדת</bdi>",
        "<strong>שימוש בתרגומים:</strong> <bdi>.אם יש מילה שאתה לא מבין, עזור לעצמך במילון או בתרגום כדי להבין את משמעותה המדויקת</bdi>",
        "<strong>צפייה מחודשת:</strong> <bdi>.צפה שוב בפרקים שכבר ראית, כעת נסה להבין את התוכן והשפה ללא תרגום זה מאפשר תרגול יעיל יותר של ההבנה</bdi>",
        "<strong>תרגול עם חברים:</strong> <bdi>.שוחח על הסדרות והמילים שלמדת עם חברים שלומדים גם הם אנגלית זה ישפר את הדיבור והבנת השפה</bdi>",
        "<strong>הקלט והאזן:</strong> <bdi>.הקלט את עצמך מדבר באנגלית ואז האזן להקלטה זה יסייע לך לזהות איזו תיקון נדרש בהגייה ובשימוש בשפה</bdi>",
        "<strong>שימוש ביומן:</strong> <bdi>.רשום ביומן את התובנות והשאלות שלך לגבי הלמידה זה יעזור לך לעקוב אחרי ההתקדמות ולהתמיד בלמידה</bdi>",
        "<strong>חשיבה באנגלית:</strong> <bdi>.נסה לחשוב על התוכן שראית באנגלית זה יכול להיות מאתגר אך יעזור לך להפנים את השפה באופן יותר טבעי</bdi>",
        "<strong>הכנת תקצירים:</strong> <bdi>.אחרי הצפייה בפרק, כתוב תקציר קצר באנגלית של העלילה והשימושים שזיהית במילים שלמדת זה יעזור לך לחזק את הידע ולזכור את המילים בהקשרן</bdi>",
        "<strong>משחקים אינטראקטיביים:</strong> <bdi>.השתמש במשחקים האינטראקטיביים שהאתר מציע לאחר כל פרק כדי לבחון את הבנתך וזכירתך של המילים המשחקים מותאמים לרמתך ויעזרו לך לחזק את הידע בצורה מהנה</bdi>",
        "<strong>צפייה עם כתוביות:</strong> <bdi>.נסה לצפות בפרקים עם כתוביות באנגלית זה יכול לעזור לך לשפר את ההבנה ואת יכולת הקריאה שלך באנגלית</bdi>",
        "<strong>שימוש בכרטיסיות:</strong> <bdi>.צור כרטיסיות לכל מילה חדשה עם דוגמאות מהקונטקסט של הסדרה, וסקור אותן באופן קבוע</bdi>",
        "<strong>תרגול כתיבה:</strong> <bdi>.כתוב חיבורים קצרים או יומנים באנגלית, תוך שימוש במילים ובביטויים שלמדת מהסדרות זה יעזור לך לחזק את המילים החדשות ולשפר את יכולת הכתיבה שלך</bdi>",
        "<strong>מעקב אחרי דמויות:</strong> <bdi>.בחר דמות אהובה מהסדרה ונסה לעקוב אחרי השפה והביטויים שהיא משתמשת בהם זה יעזור לך להבין את הסגנון והקונטקסט שבו משתמשים במילים שונות</bdi>",
        "<strong>השוואת גרסאות:</strong> <bdi>.אם יש גרסאות שונות של אותה סדרה (לדוגמה, גרסה בריטית וגרסה אמריקאית), נסה לצפות בשתיהן ולשים לב להבדלים בשפה ובתרבות</bdi>",
        "<strong>לימוד תרבותי:</strong> <bdi>.בנוסף ללימוד השפה, נסה להבין את ההקשרים התרבותיים של הסדרה זה יכול לכלול התנהגויות, מסורות או מבטאים מקומיים</bdi>",
        "<strong>צפייה בז'אנרים שונים:</strong> <bdi>.נסה לצפות בסדרות מז'אנרים שונים (דרמה, קומדיה, מתח וכו') כל ז'אנר יכול להעשיר את אוצר המילים שלך בדרכים שונות</bdi>",
        "<strong>ניתוח סצנות:</strong> <bdi>.בחר סצנות מעניינות ונסה לנתח אותן מבחינת השפה, השימוש בביטויים והדיאלוגים זה יעזור לך להבין לעומק את השימוש בשפה</bdi>",
        "<strong>שימוש באפליקציות עזר:</strong> <bdi>.השתמש באפליקציות שמספקות כתוביות, תרגומים וכלים נוספים ללימוד אנגלית אפליקציות אלו יכולות לסייע בלמידה מעמיקה וממוקדת יותר</bdi>",
        "<strong>לימוד באמצעות שירים:</strong> <bdi>.אם הסדרה כוללת פסקול, נסה ללמוד את מילות השירים שירים יכולים להיות דרך מהנה ויעילה לשיפור השפה</bdi>",
        "<strong>שיפור תשומת הלב לשפה:</strong> <bdi>.השימוש באתר שלנו עוזר לשים יותר טוב לשפה האנגלית ולשיפור הדיבור כאשר צופים בסדרות סתם כך, פעמים רבות מתמקדים בכתוביות ולא בשפה עצמה האתר שלנו מאפשר לך ללמוד ולקרוא את המילים מראש, מה שמגביר את תשומת הלב לשפה ומוביל לשיפור מהיר יותר</bdi>"
    ];
    const tipsContainer = document.querySelector('.tips-container');
    tipsContainer.innerHTML = '';
    tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip-card');
        tipElement.innerHTML = `<p>${tip}</p>`;
        tipsContainer.appendChild(tipElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayTips();
});

document.addEventListener('DOMContentLoaded', function() {
    displayTips();
});


document.addEventListener('DOMContentLoaded', function() {
    displayTips();
});



    function openTipsModal() {
        document.getElementById('tipsModal').style.display = 'block';
    }

    function closeTipsModal() {
        document.getElementById('tipsModal').style.display = 'none';
    }

    document.getElementById('to-tips').addEventListener('click', function(e) {
        e.preventDefault();
        displayTips();
        openTipsModal();
    });

    // Ensure correct closing functionality for tips modal
    document.querySelector('#tipsModal .close').addEventListener('click', function() {
        closeTipsModal();
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('tipsModal');
        if (event.target == modal) {
            closeTipsModal();
        }
    });

    // New code to handle the modals for personal area, forum, and about
    window.showModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showModal(modalId);
        });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.closest('.modal').id;
            closeModal(modalId);
        });
    });

    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });


    // Handle the series request modal
    var requestSeriesModal = document.getElementById('requestSeriesModal');
    var requestSeriesBtn = document.getElementById('to-request');
    var requestSeriesCloseBtn = document.querySelector('#requestSeriesModal .close');

    requestSeriesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        requestSeriesModal.style.display = 'block';
    });

    requestSeriesCloseBtn.addEventListener('click', function() {
        requestSeriesModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == requestSeriesModal) {
            requestSeriesModal.style.display = 'none';
        }
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '🔝';
    backToTopButton.className = 'back-to-top-button';
    document.body.appendChild(backToTopButton);
    document.getElementById('to-bot').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'bot.html';
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

function handleSeriesClick() {
    const seriesSection = document.getElementById('series-section');
    const searchBarContainer = document.getElementById("searchBarContainer");
    // Ensure searchBarContainer is not null
    if (searchBarContainer) {
        seriesSection.insertBefore(searchBarContainer, seriesSection.firstChild);
        searchBarContainer.style.display = 'flex';
    }
    seriesSection.style.display = 'block';

    // Delay scrolling to ensure the layout has updated
    setTimeout(() => {
        seriesSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 150);  // Increased delay to 150ms
}

const seriesButton = document.getElementById('to-series');
seriesButton.addEventListener('click', function(e) {
    e.preventDefault();
    handleSeriesClick();
});

seriesButton.addEventListener('touchend', function(e) {
    e.preventDefault();
    handleSeriesClick();
});

const searchInputSeries = document.getElementById("searchInputSeries");
const tvShowElements = document.querySelectorAll(".tv-show");
searchInputSeries.addEventListener("input", function() {
    const searchTerm = searchInputSeries.value.toLowerCase();
    tvShowElements.forEach(function(tvShow) {
        const title = tvShow.querySelector(".tv-show-title").textContent.toLowerCase();
        tvShow.style.display = title.includes(searchTerm) ? "" : "none";
    });
});



    const tvShows = [
        { id: "friends", totalSeasons: 10, episodesPerSeason: [24, 24, 25, 24, 24, 25, 24, 24, 24, 18] },
        { id: "brooklyn99", totalSeasons: 8, episodesPerSeason: [22, 23, 23, 22, 22, 18, 10, 10] },
        { id: "the100", totalSeasons: 7, episodesPerSeason: [13, 16, 16, 13, 13, 13, 16] },
        { id: "bigbang", totalSeasons: 12, episodesPerSeason: [17, 23, 23, 24, 24, 24, 24, 23, 24, 24, 24, 24] },
        { id: "modernfamily", totalSeasons: 11, episodesPerSeason: [24, 24, 24, 24, 24, 24, 24, 22, 22, 22, 18] },
        { id: "himym", totalSeasons: 9, episodesPerSeason: [22, 22, 20, 24, 24, 24, 24, 24, 24] },
        { id: "seinfeld", totalSeasons: 9, episodesPerSeason: [5, 12, 23, 24, 22, 24, 24, 22, 24] },
        { id: "newgirl", totalSeasons: 7, episodesPerSeason: [24, 25, 23, 22, 22, 22, 8] },
        { id: "theoffice", totalSeasons: 9, episodesPerSeason: [6, 22, 23, 14, 26, 26, 24, 24, 25] },
        { id: "simpsons", totalSeasons: 34, episodesPerSeason: [13, 22, 24, 22, 22, 25, 25, 25, 25, 23, 22, 21, 22, 22, 22, 22, 22, 22, 20, 21, 23, 22, 22, 22, 22, 22, 22, 22, 22, 23, 22, 22, 22, 22] },
        { id: "thegoodplace", totalSeasons: 4, episodesPerSeason: [13, 13, 13, 14] },
        { id: "Bigmouth", totalSeasons: 6, episodesPerSeason: [10, 10, 11, 10, 10, 10] }
    ];

    tvShowElements.forEach((tvShowElement) => {
        tvShowElement.addEventListener("click", () => {
            const tvShowId = tvShowElement.id;
            const tvShow = tvShows.find((show) => show.id === tvShowId);
            if (tvShow) {
                openSeasonModal(tvShow);
            }
        });
    });

    var favoritesModal = document.getElementById('favoritesModal');
    var favoritesBtn = document.getElementById('favoritesBtn');
    var span = document.getElementsByClassName('close')[0];

    favoritesBtn.onclick = function() {
        favoritesModal.style.display = 'block';
    }

    span.onclick = function() {
        favoritesModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == favoritesModal) {
            favoritesModal.style.display = 'none';
        }
    }

    document.querySelectorAll('.tv-show').forEach(function(tvShow) {
        tvShow.addEventListener('click', function(event) {
            if (event.target === tvShow) {
                openModal(tvShow.id);
            }
        });
    });

    function updateFavoritesList(type, item) {
        const listId = type === 'word' ? 'favoriteWordsList' : 'favoriteSeriesList';
        const list = document.getElementById(listId);
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    }

    function closeFavoritesModal() {
        favoritesModal.style.display = 'none';
    }

    function getWordTreasure(tvShowId, seasonNum, episodeNum, difficulty) {
        const showsEnum = {
            friends: friendsItemList,
            himym: howItemList,
            the100: the100itemList,
            bigbang: bigbang,
            simpsons: simpsons,
            brooklyn99: brooklyn99,
            modernfamily: modernfamily,
            Bigmouth: BigmouthItemList,
            thegoodplace: thegoodplaceItemList,
            theoffice : theofficeItemList,
            newgirl: newgirlItemList,
            seinfeld : seinfeldItemList,
        };
        const tvShow = showsEnum[tvShowId];
        if (!tvShow) return null;

        const episodeData = tvShow[`season-${seasonNum}`]?.[`episode-${episodeNum}`];
        if (!episodeData) return null;

        const difficultyData = episodeData[difficulty];
        return difficultyData ? difficultyData : null;
    }

    function toggleFavorite(type, identifier, event) {
        event.stopPropagation();
        event.preventDefault();

        const elemId = `star-${type}-${identifier}`;
        const elem = document.getElementById(elemId);

        if (!elem) return;

        elem.classList.toggle('favorited');

        updateFavorites(type, identifier, elem.classList.contains('favorited'));
    }

    function updateFavorites(type, identifier, isFavorited) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || { series: [], words: [] };

        if (isFavorited) {
            if (!favorites[type].includes(identifier)) {
                favorites[type].push(identifier);
            }
        } else {
            favorites[type] = favorites[type].filter(favIdentifier => favIdentifier !== identifier);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateUIFavorites(type, identifier, isFavorited);
    }

    function updateUIFavorites(type, identifier, isFavorited) {
        const starIcon = document.getElementById(`star-${type}-${identifier}`);
        if (starIcon) {
            if (isFavorited) {
                starIcon.classList.add('favorited');
            } else {
                starIcon.classList.remove('favorited');
            }
        }
    }

    function loadFavorites() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || { series: [], words: [] };
        Object.keys(favorites).forEach(type => {
            favorites[type].forEach(identifier => {
                const starIcon = document.getElementById(`star-${type}-${identifier}`);
                if (starIcon) {
                    starIcon.classList.add('favorited');
                }
            });
        });
    }

    loadFavorites();

    

    document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const type = this.dataset.type;
            const identifier = this.dataset.identifier;
            toggleFavorite(type, identifier, event);
        });
    });

    document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const type = this.dataset.type;
            const identifier = this.dataset.identifier;
            toggleFavorite(type, identifier, event);
        });
    });


    var modal = document.getElementById("requestSeriesModal");
    var trigger = document.getElementById("to-request");
    var closeBtn = document.querySelector(".modal .close");

    trigger.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

  fetch('episodeLinks.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        window.episodeLinksData = data;
        console.log("Episode Links Data Loaded:", data);
    })
    .catch(error => console.error('Error fetching episode links:', error));


        
        let currentTvShowId, currentSeason, currentEpisode, currentDifficulty;
        let modalHistory = [];
        let currentWordTreasureModal = null;
function openWordTreasureModal(tvShowId, season, episode, prevModal, difficulty = 'easy') {
    currentTvShowId = tvShowId;
    currentSeason = season;
    currentEpisode = episode;
    currentDifficulty = difficulty;

    if (prevModal) {
        prevModal.style.display = "none";
    }

    let modal = document.getElementById(`modalWordTreasure-${tvShowId}-${season}-${episode}`);
    if (!modal) {
        modal = createModal(`modalWordTreasure-${tvShowId}-${season}-${episode}`);
    } else {
        modal.style.display = "block";
    }

    currentWordTreasureModal = modal;

    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = ''; // מאתחל את התוכן בכל פעם שהמודל נפתח מחדש

    // הוספת כפתור להחלפת כיוון הטקסט
    const directionToggleHtml = `
        <div class="direction-toggle">
            <button class="toggle-direction-btn">⇆</button>
        </div>
    `;
    modalContent.innerHTML = directionToggleHtml;

    const difficultyTabsHtml = `
        <div id="difficulty-tabs" class="difficulty-tabs-fixed">
            <button class="tablink" data-difficulty="easy">קל</button>
            <button class="tablink" data-difficulty="medium">בינוני</button>
            <button class="tablink" data-difficulty="hard">קשה</button>
        </div>
        <div id="easy" class="tabcontent"></div>
        <div id="medium" class="tabcontent"></div>
        <div id="hard" class="tabcontent"></div>
        <button class="test-knowledge-button">בחן את הידע שלך</button>
        <div id="episode-links" class="episode-links">
            <h3>קישורים לפרק:</h3>
            <div id="links-container"></div>
        </div>
    `;
    modalContent.innerHTML += difficultyTabsHtml;

    // הגדרת כיוון טקסט ותוכן ראשוני
    modalContent.style.direction = 'ltr';
    modalContent.style.textAlign = 'left';

    const episodeData = window.episodeLinksData?.[tvShowId]?.[`season-${season}`]?.[`episode-${episode}`];
    const linksContainer = modal.querySelector('#links-container');
    if (episodeData && episodeData.links) {
        linksContainer.innerHTML = '';

        if (episodeData.links.netflix && episodeData.links.netflix.trim() !== "") {
            const netflixButton = createLinkButton('לצפייה ב-Netflix', episodeData.links.netflix, 'netflix.png');
            linksContainer.appendChild(netflixButton);
        }
        if (episodeData.links.disney && episodeData.links.disney.trim() !== "") {
            const disneyButton = createLinkButton('לצפייה ב-Disney+', episodeData.links.disney, 'disney.png');
            linksContainer.appendChild(disneyButton);
        }
        if (episodeData.links.appletv && episodeData.links.appletv.trim() !== "") {
            const appleTVButton = createLinkButton('לצפייה ב-Apple TV', episodeData.links.appletv, 'appletv.png');
            linksContainer.appendChild(appleTVButton);
        }
        if (episodeData.links.amazon && episodeData.links.amazon.trim() !== "") {
            const amazonButton = createLinkButton('לצפייה ב-Amazon', episodeData.links.amazon, 'amazon.png');
            linksContainer.appendChild(amazonButton);
        }
    } else {
        linksContainer.innerHTML = '<p>לא נמצאו קישורים לפרק זה.</p>';
    }

    function createLinkButton(platformText, url, imageName) {
        const button = document.createElement('a');
        button.href = url;
        button.target = '_blank';
        button.className = 'link-button';
        button.innerHTML = `
            <img src="img/${imageName}" alt="${platformText} logo" class="platform-logo">
            ${platformText}
        `;
        return button;
    }

    function loadContentForDifficulty(tvShowId, season, episodeNum, difficulty) {
        const words = getWordTreasure(tvShowId, season, episodeNum, difficulty);
        const targetDiv = modal.querySelector(`#${difficulty}`);
        targetDiv.innerHTML = '';

        if (words && words.length > 0) {
            const wordsHtml = words.map(item => {
                const sentenceHighlighted = item.sentence.replace(new RegExp(item.word, 'gi'), `<span class="highlight">${item.word}</span>`);
                return `
                    <div class="word-item">
                        <span class="word"><strong>${item.word}</strong></span> - 
                        <span class="translation">${item.translate}</span>
                        <p class="sentence">${sentenceHighlighted}</p>
                    </div>
                `;
            }).join('');
            targetDiv.innerHTML = `<h2>אוצר מילים - עונה ${season}, פרק ${episodeNum}:</h2>
                                   <div class="word-treasure-container">${wordsHtml}</div>`;
        } else {
            targetDiv.innerHTML = "<p>No Words</p>";
        }

        // ודא שהטאבים מוצגים מעל התוכן
        const difficultyTabs = document.querySelector('.difficulty-tabs-fixed');
        if (difficultyTabs) {
            difficultyTabs.style.display = 'flex';
        }
        targetDiv.style.paddingTop = '50px'; // מוסיף ריווח בראש התוכן
    }

    loadContentForDifficulty(tvShowId, season, episode, difficulty);
    modal.querySelector(`.tablink[data-difficulty='${difficulty}']`).classList.add("active");

    modal.querySelectorAll(".tablink").forEach(tab => {
        tab.addEventListener("click", function () {
            modal.querySelectorAll(".tablink").forEach(t => {
                t.classList.remove("active");
                modal.querySelector(`#${t.getAttribute("data-difficulty")}`).style.display = "none";
            });

            this.classList.add("active");
            const newDifficulty = this.getAttribute("data-difficulty");
            currentDifficulty = newDifficulty;
            modal.querySelector(`#${newDifficulty}`).style.display = "block";
            loadContentForDifficulty(tvShowId, season, episode, newDifficulty);
        });
    });

    const testButton = modal.querySelector(".test-knowledge-button");
    testButton.addEventListener('click', () => {
        const activeDifficulty = modal.querySelector(".tablink.active").getAttribute("data-difficulty");
        const vocabulary = getWordTreasure(tvShowId, season, episode, activeDifficulty);
        openGameSelectionModal(vocabulary, modal);
    });

    let exitButton = modal.querySelector(".exit-button");
    if (!exitButton) {
        exitButton = document.createElement("button");
        exitButton.textContent = "יציאה";
        exitButton.className = "exit-button";
        exitButton.addEventListener("click", () => {
            modal.style.display = "none";
            if (prevModal) prevModal.style.display = "block";
        });
        modalContent.insertBefore(exitButton, modalContent.firstChild);
    }

    // הוספת מאזין לכפתור לשינוי כיוון הטקסט
    const toggleDirectionBtn = modalContent.querySelector(".toggle-direction-btn");
    toggleDirectionBtn.addEventListener('click', () => {
        if (modalContent.style.direction === 'ltr') {
            modalContent.style.direction = 'rtl';
            modalContent.style.textAlign = 'right';
        } else {
            modalContent.style.direction = 'ltr';
            modalContent.style.textAlign = 'left';
        }
    });

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalContent.innerHTML = ''; // מאתחל את התוכן כאשר המודל נסגר
            if (prevModal) prevModal.style.display = "block";
        }
    });

    modal.style.display = "block";
}

        
        function openGameSelectionModal(vocabulary, prevModal) {
            prevModal.style.display = "none";
        
            const modal = createModal('gameSelectionModal');
            const modalContent = modal.querySelector('.modal-content');
        
            modalContent.innerHTML = '<h2>בחר משחק</h2>';
            
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'flex';
            buttonsContainer.style.flexDirection = 'column';
            buttonsContainer.style.alignItems = 'center';
            buttonsContainer.style.gap = '10px';
        
            const quizGameOption = document.createElement('button');
            quizGameOption.textContent = 'Quiz Game';
            quizGameOption.onclick = function() {
                modalContent.innerHTML = '';
                startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
            };
        
            const memoryGameOption = document.createElement('button');
            memoryGameOption.textContent = 'Memory Game';
            memoryGameOption.onclick = function() {
                modalContent.innerHTML = '';
                startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
            };
        
            const sentenceCompletionGameOption = document.createElement('button');
            sentenceCompletionGameOption.textContent = 'Sentence Completion Game';
            sentenceCompletionGameOption.onclick = function() {
                modalContent.innerHTML = '';
                startFillInTheBlankGame(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
            };
        
            const penguinCarRaceGameOption = document.createElement('button');
            penguinCarRaceGameOption.textContent = 'Penguin Car Race';
            penguinCarRaceGameOption.onclick = function() {
                modalContent.innerHTML = '';
                startPenguinCarRaceGame(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
            };
        
            buttonsContainer.appendChild(quizGameOption);
            buttonsContainer.appendChild(memoryGameOption);
            buttonsContainer.appendChild(sentenceCompletionGameOption);
            buttonsContainer.appendChild(penguinCarRaceGameOption);
        
            const backButton = document.createElement('button');
            backButton.textContent = 'חזור לאוצר מילים';
            backButton.onclick = function() {
                modal.style.display = 'none';
                if (currentWordTreasureModal) {
                    currentWordTreasureModal.style.display = 'block';
                } else {
                    prevModal.style.display = 'block';
                }
            };
            backButton.style.padding = '10px 20px';
            backButton.style.fontSize = '18px';
            backButton.style.cursor = 'pointer';
            backButton.style.border = 'none';
            backButton.style.borderRadius = '5px';
            backButton.style.backgroundColor = '#28a745';
            backButton.style.color = 'white';
            backButton.style.transition = 'background-color 0.3s';
            backButton.style.marginTop = '20px';
            backButton.style.width = '100%';
        
            backButton.onmouseover = function() {
                backButton.style.backgroundColor = '#218838';
            };
        
            backButton.onmouseout = function() {
                backButton.style.backgroundColor = '#28a745';
            };
        
            buttonsContainer.appendChild(backButton);
        
            const closeButton = document.createElement('button');
            closeButton.textContent = '✖';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.fontSize = '24px';
            closeButton.style.background = 'none';
            closeButton.style.border = 'none';
            closeButton.style.color = 'red';
            closeButton.style.cursor = 'pointer';
            closeButton.onclick = function() {
                document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
                modalContent.parentNode.style.display = 'none'; // Assuming the modalContent is directly under the modal div
            };
        
            modalContent.appendChild(closeButton);
            modalContent.appendChild(buttonsContainer);
        
            modal.style.display = 'block';
        }
      
        // Example usage:
        // To open a new modal and close the current one
        manageModals('newModalId', 'currentModalId');
        
        

        function closeAllModals() {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
                const modalContent = modal.querySelector(".modal-content");
                if (modalContent) {
                    modalContent.innerHTML = ''; // Reset content when the modal is closed
                }
            });
        }
        
        
        
        
        function openModal(modalId) {
            closeAllModals(); 
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        }
        // פונקציה לסגירת המודל ואיפוס התוכן
        function closeModal() {
            if (modalInstance) {
                const modalContent = modalInstance.querySelector(".modal-content");
                modalInstance.style.display = "none";
                modalContent.innerHTML = ''; // מאתחל את התוכן כאשר המודל נסגר
                modalInstance = null; // מאפס את משתנה המודל הגלובלי
            }
        }
        
        // הפונקציה הפותחת את מודל אוצר המילים מחדש אם יצאנו
        function reopenWordTreasureModal(tvShowId, season, episodeNum) {
            const modal = document.getElementById(`modalWordTreasure-${tvShowId}-${season}-${episodeNum}`);
            if (modal) {
                openWordTreasureModal(tvShowId, season, episodeNum, null);
            }
        }
        
        // פונקציה לפתיחת המודל הכללי של המשחקים
        function openGameModal(gameContent) {
            const gameModal = document.getElementById('gameModal');
            const contentDiv = document.getElementById('gameContent');
            contentDiv.innerHTML = gameContent;
            gameModal.style.display = 'block';
        }
        
        // פונקציה לסגירת המודל הכללי של המשחקים
        function closeGameModal() {
            const gameModal = document.getElementById('gameModal');
            const contentDiv = document.getElementById('gameContent');
            contentDiv.innerHTML = ''; // מאתחל את התוכן כאשר המודל נסגר
            gameModal.style.display = 'none';
        }
        
        // דוגמה לפתיחת משחק חידון
        function openQuizGame() {
            const quizContent = `
                <h2>What is the translation for "hospital"?</h2>
                <button class="game-button">בית חולים</button>
                <button class="game-button">תינוק</button>
                <button class="game-button">גיטרה</button>
                <button class="game-button">כרטיס</button>
            `;
            openGameModal(quizContent);
        }
        
        // דוגמה לפתיחת משחק זיכרון
        function openMemoryGame() {
            const memoryContent = `
                <div class="memory-game-timer"></div>
                <h2>Match the cards</h2>
                <!-- תוכן המשחק -->
            `;
            openGameModal(memoryContent);
        }
        
        // דוגמה לפתיחת משחק השלמת משפטים
        function openFillInTheBlankGame() {
            const fillInTheBlankContent = `
                <div class="fill-in-the-blank-timer"></div>
                <h2>Get your coat. We're going to the ______.</h2>
                <button class="game-button">hospital</button>
                <button class="game-button">fun</button>
                <button class="game-button">shot</button>
                <button class="game-button">sneeze</button>
            `;
            openGameModal(fillInTheBlankContent);
        }
        
        // פונקציות לדוגמה עבור הכפתורים "Play Again" ו-"Back to Games"
        function playAgain() {
            // הוסף את הלוגיקה המתאימה להפעלה מחדש של המשחק
        }
        
        function backToGames() {
            // הוסף את הלוגיקה המתאימה לחזרה לרשימת המשחקים
            closeGameModal();
        }
        
        
        


        
        

    function loadContentForDifficulty(tvShowId, season, episodeNum, difficulty) {
        const words = getWordTreasure(tvShowId, season, episodeNum, difficulty);
        const targetDiv = document.getElementById(difficulty);
        targetDiv.innerHTML = ''; 

        if (words && words.length > 0) {
            words.forEach(word => {
                targetDiv.innerHTML += `<div class="word-item">
                    <span class="word"><strong>${word.word}</strong></span> -
                    <span class="translation"><strong>${word.translate}</strong></span>
                    <p class="sentence">${word.sentence}</p>
                </div>`;
            });
        } else {
            targetDiv.innerHTML = "<p>No words found for this difficulty.</p>";
        }
    }
    function reopenWordTreasureModal() {
        const gameModals = document.querySelectorAll('.modal');
        gameModals.forEach(modal => modal.style.display = 'none');
        openWordTreasureModal(currentTvShowId, currentSeason, currentEpisode, null, currentDifficulty);
    }
    
  
    
    function startFillInTheBlankGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum) {
        const style = document.createElement('style');
        style.innerHTML = `
           body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #f0f8ff;
            overflow: hidden;
        }
        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            box-sizing: border-box;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        .sentence-container {
            font-size: 28px;
            text-align: center;
            margin-bottom: 20px;
            color: #333;
            padding: 10px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .options-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
        }
        .option-button {
            padding: 15px 30px;
            font-size: 20px;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            background: linear-gradient(145deg, #6dd5fa, #2980b9);
            color: white;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .option-button:hover {
            background: linear-gradient(145deg, #2980b9, #6dd5fa);
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        .game-buttons {
            margin-top: 30px;
            display: flex;
            gap: 15px;
        }
        .game-button {
            padding: 15px 30px;
            font-size: 20px;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .play-again-btn {
            background: linear-gradient(145deg, #67b26f, #4ca2cd);
            color: white;
        }
        .play-again-btn:hover {
            background: linear-gradient(145deg, #4ca2cd, #67b26f);
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        .back-to-games-btn {
            background: linear-gradient(145deg, #ff758c, #ff7eb3);
            color: white;
        }
        .back-to-games-btn:hover {
            background: linear-gradient(145deg, #ff7eb3, #ff758c);
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        .back-to-vocabulary-btn {
            background: linear-gradient(145deg, #f7971e, #ffd200);
            color: white;
        }
        .back-to-vocabulary-btn:hover {
            background: linear-gradient(145deg, #ffd200, #f7971e);
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        .clock-container {
            position: absolute;
            bottom: 40px;
            right: 20px;
            font-size: 20px;
            color: #333;
            background: rgba(255, 255, 255, 0.7);
            padding: 8px 12px;
            border-radius: 6px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .clock-container span {
            font-weight: bold;
        }
        .highlight {
            font-weight: bold;
            color: #ffeb3b;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 0 5px;
            border-radius: 3px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .feedback {
            font-size: 22px;
            margin-bottom: 15px;
            color: #ffeb3b;
        }
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 28px;
            background: none;
            border: none;
            color: #f44336;
            cursor: pointer;
            transition: transform 0.3s;
        }
        .close-btn:hover {
            transform: scale(1.2);
        }
        .penguin-image {
            max-width: 150px;
            margin-top: 20px;
            transition: transform 0.3s;
        }
        .penguin-image:hover {
            transform: scale(1.1);
        }
    `;
        document.head.appendChild(style);
    
        modalContent.innerHTML = '<div class="game-container"></div>';
        const gameContainer = modalContent.querySelector('.game-container');
    
        const sentences = filterSentences(vocabulary);
        let currentSentenceIndex = 0;
        let startTime = Date.now();
        let correctAnswers = 0;
    
        function displaySentence(sentence) {
            gameContainer.innerHTML = `
                <button class="close-btn">✖</button>
                <div class="feedback"></div>
                <div class="sentence-container">${sentence.sentence.replace(sentence.word, '<span class="blank">______</span>')}</div>
                <div class="options-container"></div>
                <div class="game-buttons">
                    <button class="game-button play-again-btn">Play Again</button>
                    <button class="game-button back-to-games-btn">Back to Games</button>
                    <button class="game-button back-to-vocabulary-btn">Back to Vocabulary</button>
                </div>
                <div class="clock-container">Clock <span id="clock">00:00</span></div>
            `;
    
            const optionsContainer = gameContainer.querySelector('.options-container');
            const words = [...sentences.map(item => item.word)];
            shuffleArray(words);
            const options = [sentence.word, ...words.slice(0, 3)];
            shuffleArray(options);
    
            options.forEach(word => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = word;
                button.onclick = () => checkAnswer(word);
                optionsContainer.appendChild(button);
            });
    
            gameContainer.querySelector('.close-btn').onclick = () => {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => modal.style.display = 'none');
            };
            gameContainer.querySelector('.play-again-btn').onclick = () => startFillInTheBlankGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
            gameContainer.querySelector('.back-to-games-btn').onclick = () => openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
            gameContainer.querySelector('.back-to-vocabulary-btn').onclick = () => reopenWordTreasureModal();
        }
    
        function checkAnswer(selectedWord) {
            const currentSentence = sentences[currentSentenceIndex];
            const feedbackElement = gameContainer.querySelector('.feedback');
            if (selectedWord === currentSentence.word) {
                correctAnswers++;
                feedbackElement.innerHTML = `<span class="highlight">Correct!</span>`;
                gameContainer.querySelector('.sentence-container').innerHTML = `${currentSentence.sentence.replace(currentSentence.word, `<span class="highlight">${currentSentence.word}</span>`)}`;
                setTimeout(() => {
                    currentSentenceIndex++;
                    if (currentSentenceIndex >= sentences.length) {
                        endGame();
                    } else {
                        displaySentence(sentences[currentSentenceIndex]);
                    }
                }, 1000);
            } else {
                feedbackElement.innerHTML = `<span class="highlight">Incorrect!</span>`;
                gameContainer.querySelector('.sentence-container').innerHTML = `${currentSentence.sentence.replace('<span class="blank">______</span>', `<span class="highlight">${currentSentence.word}</span>`)}`;
                setTimeout(() => {
                    currentSentenceIndex++;
                    if (currentSentenceIndex >= sentences.length) {
                        endGame();
                    } else {
                        displaySentence(sentences[currentSentenceIndex]);
                    }
                }, 2000);
            }
        }
    
        function endGame() {
            const totalTime = (Date.now() - startTime) / 1000;
            gameContainer.innerHTML = `
                <div class="sentence-container">Congratulations! You completed the game with ${correctAnswers} out of ${sentences.length} correct answers in ${totalTime.toFixed(2)} seconds.</div>
                <div class="game-buttons">
                    <button class="game-button play-again-btn">Play Again</button>
                    <button class="game-button back-to-games-btn">Back to Games</button>
                    <button class="game-button back-to-vocabulary-btn">Back to Vocabulary</button>
                </div>
                <div class="clock-container">Clock <span id="clock">00:00</span></div>
                <img src="img/pinguin1.png" alt="Penguin" class="penguin-image">
            `;
            gameContainer.querySelector('.play-again-btn').onclick = () => startFillInTheBlankGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
            gameContainer.querySelector('.back-to-games-btn').onclick = () => openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
            gameContainer.querySelector('.back-to-vocabulary-btn').onclick = () => reopenWordTreasureModal();
        }
    
        function updateClock() {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
            const seconds = String(elapsedTime % 60).padStart(2, '0');
            gameContainer.querySelector('#clock').textContent = `${minutes}:${seconds}`;
        }
    
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    
        displaySentence(sentences[currentSentenceIndex]);
        setInterval(updateClock, 1000);
    }
    
    
    



  function filterSentences(vocabulary) {
    return vocabulary.filter(item => item.sentence && item.sentence.includes(item.word));
}

  





function filterSentences(vocabulary) {
  return vocabulary.filter(item => item.sentence && item.sentence.includes(item.word));
}

function startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum) {
    modalContent.innerHTML = '<div class="game-board"></div>';
    const gameBoard = modalContent.querySelector('.game-board');
    gameBoard.style.gridTemplateColumns = 'repeat(5, 1fr)';

    const controlButtons = document.createElement('div');
    controlButtons.className = 'game-control-buttons';

    const exitButton = document.createElement('button');
    exitButton.textContent = '✖';
    exitButton.className = 'close-btn';
    exitButton.addEventListener('click', closeModals);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'שחק שוב';
    restartButton.className = 'restart-btn';
    restartButton.addEventListener('click', () => {
        startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
    });

    const backToGamesButton = document.createElement('button');
    backToGamesButton.textContent = 'חזרה למשחקים';
    backToGamesButton.className = 'back-to-games-btn';
    backToGamesButton.addEventListener('click', () => {
        openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
    });

    const backToVocabularyButton = document.createElement('button');
    backToVocabularyButton.textContent = 'חזרה לאוצר מילים';
    backToVocabularyButton.className = 'back-to-vocabulary-btn';
    backToVocabularyButton.addEventListener('click', () => {
        reopenWordTreasureModal();
    });

    controlButtons.appendChild(restartButton);
    controlButtons.appendChild(backToGamesButton);
    controlButtons.appendChild(backToVocabularyButton);
    controlButtons.appendChild(exitButton);
    modalContent.appendChild(controlButtons);

    const timerDisplay = document.createElement('div');
    timerDisplay.className = 'timer-display';
    modalContent.appendChild(timerDisplay);

    let firstCard, secondCard;
    let lockBoard = false, matchesFound = 0, attempts = 0;
    let startTime = Date.now();

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function updateTimer() {
        const now = Date.now();
        const elapsedTime = Math.floor((now - startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        timerDisplay.textContent = `Clock: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    let timerInterval = setInterval(updateTimer, 1000);

    let cards = vocabulary.flatMap(item => [{ ...item, lang: 'en' }, { ...item, lang: 'he' }]);
    shuffle(cards);

    cards.forEach(card => gameBoard.appendChild(createCardElement(card)));

    function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.language = card.lang;
        cardElement.dataset.word = card.word;
        cardElement.innerText = card.lang === 'en' ? card.word : card.translate;
        cardElement.addEventListener('click', () => flipCard(cardElement));
        return cardElement;
    }

    function flipCard(card) {
        if (lockBoard || card === firstCard || card.classList.contains('match') || card.classList.contains('flip')) return;
        card.classList.add('flip');
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            attempts++;
            lockBoard = true;
            checkForMatch();
        }
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.word === secondCard.dataset.word;
        isMatch ? handleMatch() : wrongMatch();
    }

    function handleMatch() {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
        matchesFound++;
        if (matchesFound === vocabulary.length) {
            clearInterval(timerInterval);
            setTimeout(endGame, 500);
        }
        resetBoard();
    }

    function wrongMatch() {
        firstCard.classList.add('wrong');
        secondCard.classList.add('wrong');
        setTimeout(() => {
            firstCard.classList.remove('flip', 'wrong');
            secondCard.classList.remove('flip', 'wrong');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function endGame() {
        const totalTime = (Date.now() - startTime) / 1000;
        showEndGameModal(`Congratulations! You found all matches in ${attempts} attempts and it took ${totalTime.toFixed(2)} seconds.`);
    }

    function showEndGameModal(message) {
        const endGameModal = document.createElement('div');
        endGameModal.className = 'end-game-modal';
        endGameModal.innerHTML = `
            <div class="end-game-modal-content">
                <span class="close" id="closeModal">&times;</span>
                <h2>${message}</h2>
                <img src="img/pinguin1.png" alt="Penguin" class="penguin-image">
                <button class="play-again-btn">שחק שוב</button>
                <button class="back-to-games-btn">חזרה למשחקים</button>
                <button class="back-to-vocabulary-btn">חזרה לאוצר מילים</button>
            </div>
        `;
        document.body.appendChild(endGameModal);

        const closeEndGameButton = document.getElementById('closeModal');
        const endPlayAgainButton = document.querySelector('.play-again-btn');
        const endBackToGamesButton = document.querySelector('.back-to-games-btn');
        const endBackToVocabularyButton = document.querySelector('.back-to-vocabulary-btn');

        closeEndGameButton.onclick = closeModals;
        endPlayAgainButton.onclick = function() {
            startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
        };
        endBackToGamesButton.onclick = function() {
            openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
        };
        endBackToVocabularyButton.onclick = function() {
            reopenWordTreasureModal();
        };

        endGameModal.style.display = 'block';
    }

    function closeModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
        clearInterval(timerInterval);
    }
}




function startPenguinCarRaceGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum) {
    function removeEventListeners() {
        const oldPlayAgainBtn = document.querySelector('.play-again-btn');
        const oldBackToGamesBtn = document.querySelector('.back-to-games-btn');
        const oldBackToVocabularyBtn = document.querySelector('.back-to-vocabulary-btn');
        const oldCloseButton = document.querySelector('.close-btn');
        const oldCloseEndGameButton = document.querySelector('#close-end-game');
        const oldEndPlayAgainBtn = document.querySelector('#end-play-again-btn');
        const oldEndBackToGamesBtn = document.querySelector('#end-back-to-games-btn');
        const oldEndBackToVocabularyBtn = document.querySelector('#end-back-to-vocabulary-btn');

        if (oldPlayAgainBtn) oldPlayAgainBtn.onclick = null;
        if (oldBackToGamesBtn) oldBackToGamesBtn.onclick = null;
        if (oldBackToVocabularyBtn) oldBackToVocabularyBtn.onclick = null;
        if (oldCloseButton) oldCloseButton.onclick = null;
        if (oldCloseEndGameButton) oldCloseEndGameButton.onclick = null;
        if (oldEndPlayAgainBtn) oldEndPlayAgainBtn.onclick = null;
        if (oldEndBackToGamesBtn) oldEndBackToGamesBtn.onclick = null;
        if (oldEndBackToVocabularyBtn) oldEndBackToVocabularyBtn.onclick = null;
    }

    removeEventListeners();

    const style = document.createElement('style');
    style.innerHTML = `
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            overflow: hidden;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 90%;
            max-width: 800px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            position: relative;
            height: 750px; /* הגדלת הגובה */
        }
        .close {
            color: black; /* שינוי צבע לשחור */
            position: absolute;
            top: -5px;
            right: -10px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        .close:hover,
        .close:focus {
            color: #333;
            text-decoration: none;
        }
        .game-board {
            position: relative;
            width: 100%;
            height: 550px; /* התאמת הגובה */
            background: url('img/race1.png') repeat-y;
            background-size: cover;
            overflow: hidden;
        }
        .car {
            position: absolute;
            width: 100px;
            height: auto;
            transition: top 0.5s, left 0.5s;
        }
        .penguin-car {
            left: 50%;
            transform: translateX(-100%);
        }
        .opponent-car {
            left: 50%;
        }
        .question-box {
            position: fixed;
            bottom: 140px; /* הורדת השאלה למטה */
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            max-width: 600px;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .answer-btn {
            display: inline-block;
            margin: 5px;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
        }
        .answer-btn:hover {
            background-color: #0056b3;
        }
.play-again-btn, .back-to-games-btn, .back-to-vocabulary-btn {
    flex: 1; /* כל כפתור מתפשט לתפוס חלק שווה מהשטח */
    padding: 10px 20px; /* ריפוד */
    font-size: 16px; /* גודל גופן */
    border: none; /* ללא גבול */
    border-radius: 5px; /* רדיוס העיגול */
    cursor: pointer; /* סמן כפתור */
    background-color: #28a745; /* צבע רקע */
    color: white; /* צבע גופן */
    text-align: center; /* יישור טקסט למרכז */
}
        .play-again-btn:hover {
            background-color: #218838;
        }
        .back-to-games-btn {
            background-color: #007bff;
        }
        .back-to-games-btn:hover {
            background-color: #0056b3;
        }
        .back-to-vocabulary-btn {
            background-color: #ffc107;
        }
        .back-to-vocabulary-btn:hover {
            background-color: #e0a800;
        }
        .end-game-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }
        .end-game-modal-content {
            background-color: #fefefe;
            margin: 10% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .penguin-image {
            width: 100px;
            height: auto;
        }
        .feedback-container {
            position: absolute;
            bottom: 100px; /* הזזת הפידבק למעלה */
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            text-align: center;
            padding: 10px;
            font-size: 1.2em;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: opacity 0.3s;
        }
        .feedback-container.hidden {
            opacity: 0;
        }
        .feedback-container.correct {
            color: #28a745;
            font-weight: bold;
        }
        .feedback-container.incorrect {
            color: #dc3545;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    modalContent.innerHTML = `
        <div class="game-board" id="game-board">
            <img src="img/gamecar2.png" class="car penguin-car" alt="Penguin Car">
            <img src="img/gamecar1.jpg" class="car opponent-car" alt="Opponent Car">
            <div class="question-box">
                <p id="question-text"></p>
                <div id="answer-buttons"></div>
            </div>
        </div>
        <div class="feedback-container hidden" id="feedback-container"></div>
        <div class="game-control-buttons">
            <button class="play-again-btn">שחק שוב</button>
            <button class="back-to-games-btn">חזרה למשחקים</button>
            <button class="back-to-vocabulary-btn">חזרה לאוצר מילים</button>
        </div>
        <span class="close close-btn">✖</span>
    `;

    const penguinCar = modalContent.querySelector('.penguin-car');
    const opponentCar = modalContent.querySelector('.opponent-car');
    const questionBox = modalContent.querySelector('.question-box');
    const questionText = modalContent.querySelector('#question-text');
    const answerButtons = modalContent.querySelector('#answer-buttons');
    const playAgainBtn = modalContent.querySelector('.play-again-btn');
    const backToGamesBtn = modalContent.querySelector('.back-to-games-btn');
    const backToVocabularyBtn = modalContent.querySelector('.back-to-vocabulary-btn');
    const closeButton = modalContent.querySelector('.close-btn');
    const feedbackContainer = modalContent.querySelector('#feedback-container');
    const gameBoard = modalContent.querySelector('#game-board');
    let penguinPosition = 0;
    let opponentPosition = 0;
    let backgroundPosition = 0;
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let penguinSpeed = 0.3; // Initial faster speed
    const opponentSpeedBase = 0.1; // Initial constant speed of the opponent
    let opponentSpeed = opponentSpeedBase;
    const maxSpeed = 0.5; // Maximum speed

    // Handle car movement
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            penguinPosition = Math.max(0, penguinPosition - 10);
        } else if (e.key === 'ArrowRight') {
            penguinPosition = Math.min(gameBoard.clientHeight - penguinCar.clientHeight, penguinPosition + 10);
        }
    });

    closeButton.onclick = () => {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
        document.querySelectorAll('.modal-content').forEach(content => content.innerHTML = '');
    };

    playAgainBtn.onclick = () => {
        removeEventListeners(); // Remove event listeners before restarting
        startPenguinCarRaceGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
    };

    backToGamesBtn.onclick = () => {
        removeEventListeners(); // Remove event listeners before navigating back
        openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
    };

    backToVocabularyBtn.onclick = () => {
        removeEventListeners(); // Remove event listeners before navigating back
        reopenWordTreasureModal();
    };

    function moveCars() {
        backgroundPosition += penguinSpeed;

        gameBoard.style.backgroundPositionY = `${-backgroundPosition % gameBoard.clientHeight}px`;

        penguinCar.style.top = `${Math.min(penguinPosition, gameBoard.clientHeight - penguinCar.clientHeight)}px`;
        opponentCar.style.top = `${Math.min(opponentPosition, gameBoard.clientHeight - opponentCar.clientHeight)}px`;

        requestAnimationFrame(moveCars);
    }

    function showQuestion() {
        if (currentQuestionIndex >= vocabulary.length) {
            endGame();
            return;
        }

        const { word, translate, sentence } = vocabulary[currentQuestionIndex];
        if (!sentence.includes(word)) {
            currentQuestionIndex++;
            showQuestion();
            return;
        }

        const options = vocabulary
            .map(item => item.word) // Change the words to English
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        if (!options.includes(word)) options[Math.floor(Math.random() * 3)] = word;

        questionText.innerHTML = sentence.replace(word, '_______');
        answerButtons.innerHTML = '';

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = option;
            btn.onclick = () => checkAnswer(option, word);
            answerButtons.appendChild(btn);
        });

        questionBox.style.display = 'block';
    }

    function checkAnswer(selected, correct) {
        // Disable all answer buttons to prevent multiple clicks
        const answerBtns = answerButtons.querySelectorAll('.answer-btn');
        answerBtns.forEach(btn => btn.disabled = true);

        feedbackContainer.classList.remove('hidden');
        if (selected === correct) {
            correctAnswers++;
            feedbackContainer.textContent = "✔️ נכון! 👏";
            feedbackContainer.className = 'feedback-container correct';
            penguinSpeed = Math.min(maxSpeed, penguinSpeed + 0.05); // Greater acceleration
            penguinPosition += 30; // Move the penguin car forward
            opponentPosition = Math.max(0, opponentPosition - 15); // Move the opponent car backward slightly
        } else {
            feedbackContainer.textContent = `❌ לא נכון. התשובה הנכונה היא: "${correct}"`;
            feedbackContainer.className = 'feedback-container incorrect';
            opponentSpeed = Math.min(maxSpeed, opponentSpeed + 0.05); // Computer speeds up on a mistake
            opponentPosition += 30; // Move the opponent car forward
            penguinPosition = Math.max(0, penguinPosition - 15); // Move the penguin car backward slightly
        }

        setTimeout(() => {
            feedbackContainer.classList.add('hidden');
            penguinSpeed = Math.max(0.1, penguinSpeed - 0.02); // Return to initial speed
            opponentSpeed = opponentSpeedBase; // Return to initial opponent speed
            if (currentQuestionIndex + 1 < vocabulary.length) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                endGame();
            }
        }, 2000); // Short duration speed change
    }

    function endGame() {
        questionBox.style.display = 'none';

        let message, imgSrc;
        if (correctAnswers >= 10) {
            penguinPosition = gameBoard.clientHeight - penguinCar.clientHeight;
            opponentPosition = gameBoard.clientHeight / 2;
            message = `ניצחת! ענית נכון על ${correctAnswers} מתוך ${vocabulary.length} שאלות.`;
            imgSrc = 'img/user-win.png'; // Change to appropriate path for the user's winning image
        } else {
            penguinPosition = gameBoard.clientHeight / 2;
            opponentPosition = gameBoard.clientHeight - opponentCar.clientHeight;
            message = 'המחשב ניצח!';
            imgSrc = 'img/computer-win.png'; // Change to appropriate path for the computer's winning image
        }

        penguinCar.style.top = `${penguinPosition}px`;
        opponentCar.style.top = `${opponentPosition}px`;

        const endGameModal = document.createElement('div');
        endGameModal.className = 'end-game-modal';
        endGameModal.innerHTML = `
            <div class="modal-content">
                <span class="close" id="close-end-game">✖</span>
                <div class="end-game-modal-content">
                    <h2>${message}</h2>
                    <img src="${imgSrc}" alt="Penguin" class="penguin-image">
                    <button class="play-again-btn" id="end-play-again-btn">שחק שוב</button>
                    <button class="back-to-games-btn" id="end-back-to-games-btn">חזרה לבחירת משחקים</button>
                    <button class="back-to-vocabulary-btn" id="end-back-to-vocabulary-btn">חזרה לאוצר מילים</button>
                </div>
            </div>
        `;
        document.body.appendChild(endGameModal);

        const closeEndGameButton = document.querySelector('#close-end-game');
        const endPlayAgainBtn = document.querySelector('#end-play-again-btn');
        const endBackToGamesBtn = document.querySelector('#end-back-to-games-btn');
        const endBackToVocabularyBtn = document.querySelector('#end-back-to-vocabulary-btn');

        closeEndGameButton.onclick = () => {
            document.querySelector('.end-game-modal').style.display = 'none';
            document.querySelector('.end-game-modal').remove();
        };

        endPlayAgainBtn.onclick = () => {
            removeEventListeners(); // Remove event listeners before restarting
            document.querySelector('.end-game-modal').remove();
            startPenguinCarRaceGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
        };

        endBackToGamesBtn.onclick = () => {
            removeEventListeners(); // Remove event listeners before navigating back
            document.querySelector('.end-game-modal').remove();
            openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
        };

        endBackToVocabularyBtn.onclick = () => {
            removeEventListeners(); // Remove event listeners before navigating back
            document.querySelector('.end-game-modal').remove();
            reopenWordTreasureModal();
        };

        endGameModal.style.display = 'block';
    }

    moveCars();
    setTimeout(showQuestion, 2000); // First question appears after 2 seconds
}





  
    
function startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum) {
    let currentQuestionIndex = 0;
    let score = 0;

    modalContent.innerHTML = '';

    const feedbackContainer = document.createElement('div');
    feedbackContainer.className = 'feedback-container hidden';
    modalContent.appendChild(feedbackContainer);

    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score-display';
    scoreDisplay.textContent = `Score: ${score}/${vocabulary.length}`;
    modalContent.appendChild(scoreDisplay);

    function closeModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
    }

    const controlButtons = document.createElement('div');
    controlButtons.className = 'game-control-buttons';

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'שחק שוב';
    playAgainButton.className = 'play-again-btn';
    playAgainButton.onclick = function() {
        startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
    };

    const backToGamesButton = document.createElement('button');
    backToGamesButton.textContent = 'חזרה למשחקים';
    backToGamesButton.className = 'back-to-games-btn';
    backToGamesButton.onclick = function() {
        openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
    };

    const backToVocabularyButton = document.createElement('button');
    backToVocabularyButton.textContent = 'חזרה לאוצר מילים';
    backToVocabularyButton.className = 'back-to-vocabulary-btn';
    backToVocabularyButton.onclick = function() {
        reopenWordTreasureModal();
    };

    const closeButton = document.createElement('button');
    closeButton.textContent = '✖';
    closeButton.className = 'close-btn';
    closeButton.onclick = closeModals;

    controlButtons.appendChild(playAgainButton);
    controlButtons.appendChild(backToGamesButton);
    controlButtons.appendChild(backToVocabularyButton);
    controlButtons.appendChild(closeButton);

    modalContent.appendChild(controlButtons);

    function displayQuestion(index) {
        const question = vocabulary[index];
        const correctAnswer = question.translate;

        const existingAnswersContainer = modalContent.querySelector('.answers-container');
        if (existingAnswersContainer) {
            existingAnswersContainer.remove();
        }

        const answersContainer = document.createElement('div');
        answersContainer.className = 'answers-container';
        modalContent.insertBefore(answersContainer, controlButtons);

        const questionText = document.createElement('h3');
        questionText.className = 'question';
        questionText.textContent = `What is the translation for "${question.word}"?`;
        answersContainer.appendChild(questionText);

        const answers = [correctAnswer, ...vocabulary.filter(item => item.translate !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(item => item.translate)]
            .sort(() => 0.5 - Math.random());

        answers.forEach(answer => {
            const answerButton = document.createElement('div');
            answerButton.textContent = answer;
            answerButton.className = 'answer';
            answerButton.onclick = () => checkAnswer(answer, correctAnswer);
            answersContainer.appendChild(answerButton);
        });
        function showEndGameModal(message) {
            const endGameModal = document.createElement('div');
            endGameModal.className = 'end-game-modal';
            endGameModal.innerHTML = `
                <div class="end-game-modal-content">
                    <span class="close" id="closeModal">&times;</span>
                    <h2>${message}</h2>
                    <img src="img/pinguin1.png" alt="Penguin" class="penguin-image">
                    <button class="play-again-btn">שחק שוב</button>
                    <button class="back-to-games-btn">חזרה למשחקים</button>
                    <button class="back-to-vocabulary-btn">חזרה לאוצר מילים</button>
                </div>
            `;
            document.body.appendChild(endGameModal);
    
            const closeEndGameButton = document.getElementById('closeModal');
            const endPlayAgainButton = document.querySelector('.play-again-btn');
            const endBackToGamesButton = document.querySelector('.back-to-games-btn');
            const endBackToVocabularyButton = document.querySelector('.back-to-vocabulary-btn');
    
            closeEndGameButton.onclick = closeModals;
            endPlayAgainButton.onclick = function() {
                startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
            };
            endBackToGamesButton.onclick = function() {
                openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
            };
            endBackToVocabularyButton.onclick = function() {
                reopenWordTreasureModal();
            };
    
            endGameModal.style.display = 'block';
        }
    }

    function checkAnswer(selected, correct) {
        feedbackContainer.classList.remove('hidden');
        if (selected === correct) {
            score++;
            feedbackContainer.textContent = "✔️ Correct! 👏";
            feedbackContainer.className = 'feedback-container correct';
        } else {
            feedbackContainer.textContent = `❌ Incorrect. The correct answer is: "${correct}"`;
            feedbackContainer.className = 'feedback-container incorrect';
        }
        scoreDisplay.textContent = `Score: ${score}/${vocabulary.length}`;

        setTimeout(() => {
            feedbackContainer.classList.add('hidden');
            if (currentQuestionIndex + 1 < vocabulary.length) {
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            } else {
                finishQuiz();
            }
        }, 2000);
    }

    function finishQuiz() {
        modalContent.innerHTML = `
            <div class="end-game-modal">
                <h2>Quiz Finished!</h2>
                <p>Your final score: ${score}/${vocabulary.length}</p>
                <img src="img/pinguin1.png" alt="Celebrating Penguin" class="penguin-image">
                <div class="game-control-buttons">
                    <button class="play-again-btn">שחק שוב</button>
                    <button class="back-to-games-btn">חזרה למשחקים</button>
                    <button class="back-to-vocabulary-btn">חזרה לאוצר מילים</button>
                    <button class="close-btn">✖</button>
                </div>
            </div>
        `;

        modalContent.querySelector('.play-again-btn').onclick = function() {
            startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
        };

        modalContent.querySelector('.back-to-games-btn').onclick = function() {
            openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
        };

        modalContent.querySelector('.back-to-vocabulary-btn').onclick = function() {
            reopenWordTreasureModal();
        };

        modalContent.querySelector('.close-btn').onclick = closeModals;
    }

    displayQuestion(currentQuestionIndex);
}


  
  
  
    

    function createModal(modalId) {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.id = modalId;

        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.addEventListener("click", function(event) {
            event.stopPropagation();
        });

        const closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.textContent = "×";
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        return modal;
    }

    

    function openSeasonModal({ id, totalSeasons, episodesPerSeason }) {
        const modal = createModal(`modalSeason-${id}`);
        const modalContent = modal.querySelector(".modal-content");

        modalContent.innerHTML = `<h2>בחר עונה:</h2><button class="exit-button">יציאה</button>`;

        const exitButton = modalContent.querySelector(".exit-button");
        exitButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        for (let season = 1; season <= totalSeasons; season++) {
            const seasonButton = document.createElement("button");
            seasonButton.textContent = `עונה ${season}`;
            seasonButton.addEventListener("click", function() {
                openEpisodeModal(id, season, episodesPerSeason[season - 1], modal);
            });

            modalContent.appendChild(seasonButton);
        }

        modal.style.display = "block";
    }

    function closeCurrentModal() {
        const visibleModal = document.querySelector('.modal:not([style*="display: none"])');
        if (visibleModal) {
            visibleModal.style.display = 'none';
        }
    }

    function returnToGameSection() {
        const gamesSection = document.getElementById('games-section');
        if (gamesSection) {
            gamesSection.style.display = 'block';
            gamesSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Games section not found.');
        }
    }

    function showGameSelectionModal() {
        closeCurrentModal();
        const gameSelectionModal = document.getElementById('gameSelectionModal');
        if (gameSelectionModal) {
            gameSelectionModal.style.display = 'block';
        } else {
            console.error('Game selection modal not found.');
        }
    }

    function openEpisodeModal(tvShowId, season, totalEpisodes, prevModal) {
        prevModal.style.display = "none";
    
        const modal = createModal(`modalEpisode-${tvShowId}-${season}`);
        const modalContent = modal.querySelector(".modal-content");
    
        modalContent.innerHTML = `<h2>בחר פרק - ${tvShowId}, עונה ${season}:</h2><button class="exit-button">חזרה</button>`;
    
        const exitButton = modalContent.querySelector(".exit-button");
        exitButton.addEventListener("click", function() {
            modal.style.display = "none";
            prevModal.style.display = "block";
        });
    
        const gridContainer = document.createElement("div");
        gridContainer.className = "grid-container";
    
        for (let episode = 1; episode <= totalEpisodes; episode++) {
            const episodeButton = document.createElement("button");
            episodeButton.className = "episode-button"; // הוספת מחלקה לכפתורים
            episodeButton.textContent = `פרק ${episode}`;
            episodeButton.addEventListener("click", function() {
                openWordTreasureModal(tvShowId, season, episode, modal);
            });
    
            gridContainer.appendChild(episodeButton);
        }
    
        modalContent.appendChild(gridContainer);
        modal.style.display = "block";
    }
    

    document.getElementById('submit-request-button').addEventListener('click', function() {
        alert('בקשתך נשלחה בהצלחה! תודה.');
    });

    document.querySelector('.button').addEventListener('click', () => {
        alert('כפתור לחוץ!');
    });

    function closeInfoWindow() {
        var infoWindow = document.getElementById('infoWindow');
        if (infoWindow) {
            infoWindow.style.display = 'none';
        } else {
            console.error('Element with ID "infoWindow" not found');
        }
    }
});

