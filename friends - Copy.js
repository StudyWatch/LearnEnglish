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

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        modal.innerHTML = ''; // איפוס התוכן כדי למנוע בעיות פתיחה מחדש
        modal.parentNode.removeChild(modal); // הסרת המודל מה-DOM
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const didYouKnowFacts = [
        { word: "Elixir", explanation: "משקה קסום שמעניק חיי נצח או מרפא לכל מחלה. מקורה בערבית, \"al-iksir\" שפירושו אבן החכמים." },
        { word: "Phoenix", explanation: "עוף החול המיתולוגי שמתחדש מחורבותיו. מקור המילה במיתולוגיה היוונית." },
        { word: "Renaissance", explanation: "תקופת התחדשות תרבותית ואומנותית באירופה. מקורה בלטינית, \"renasci\" שפירושו להיוולד מחדש." },
        { word: "Labyrinthine", explanation: "מסובך ומבוך. מקורה במיתוס היווני של המינוטאור." },
        { word: "Nefarious", explanation: "רע ומרושע. מקורה בלטינית, \"nefas\" שפירושו פשע גדול." },
        { word: "Esoteric", explanation: "ידוע למעטים בלבד. מקורה ביוונית, \"esoterikos\" שפירושו פנימי." },
        { word: "Abyss", explanation: "תהום אין סופית. מקורה ביוונית, \"abyssos\" שפירושו ללא תחתית." },
        { word: "Gossamer", explanation: "דק ועדין כמו קורי עכביש. מקורה באנגלית תיכונה, \"goose summer\" בגלל קורי העכביש שמופיעים באוויר בסתיו." },
        { word: "Zephyr", explanation: "רוח קלילה ונעימה. מקורה במיתולוגיה היוונית, שם \"זפירוס\" היה אל הרוח המערבית." },
        { word: "Obsidian", explanation: "סוג של זכוכית געשית. מקורה בלטינית, שם \"obsidianus\" נכתב על פי האגדה על Obsius שגילה אותה." },
        { word: "Lethargy", explanation: "עייפות רבה או שינה עמוקה. מקורה במיתולוגיה היוונית, שם נהר \"Lethe\" היה נהר השכחה." },
        { word: "Pandemonium", explanation: "כאוס ובלגן גדול. מקורה בלטינית, \"pan\" פירושו הכל ו-\"demonium\" פירושו שדים, תואר זה ניתן לעיר השדים ביצירתו של מילטון, \"גן עדן האבוד\"." },
        { word: "Cacophony", explanation: "רעש צורם ולא נעים. מקורה ביוונית, \"kakophonia\" שפירושו צליל רע." },
        { word: "Mirage", explanation: "אשליה אופטית במדבר. מקורה בצרפתית, \"mirer\" שפירושו להסתכל." },
        { word: "Ethereal", explanation: "אוורירי ועדין כאלמנט שמימי. מקורה ביוונית, \"aither\" שפירושו שמיים." },
        { word: "Maelstrom", explanation: "מערבולת חזקה בים. מקורה בהולנדית, \"malen\" שפירושו לטחון ו-\"stroom\" שפירושו זרם." },
        { word: "Nebula", explanation: "ענן גז בחלל. מקורה בלטינית, \"nebula\" שפירושו ערפל." },
        { word: "Eclipse", explanation: "ליקוי. מקורה ביוונית, \"ekleipsis\" שפירושו נטישה." },
        { word: "Chimera", explanation: "יצור מיתולוגי שמורכב מחלקי גוף של חיות שונות. מקורה במיתולוגיה היוונית." },
        { word: "Aurora", explanation: "זוהר צפוני. מקורה ברומית, שם אורורה הייתה אלת השחר." },
        { word: "Horizon", explanation: "קו שבו השמיים והארץ נפגשים. מקורה ביוונית, \"horizōn\" שפירושו להגביל." },
        { word: "Turbulence", explanation: "תנועה סוערת באוויר או מים. מקורה בלטינית, \"turbulentus\" שפירושו סוער." },
        { word: "Cascade", explanation: "מפל מים קטן. מקורה בלטינית, \"cascare\" שפירושו ליפול." },
        { word: "Myriad", explanation: "מספר גדול מאוד. מקורה ביוונית, \"myrios\" שפירושו עשרת אלפים." },
        { word: "Tranquility", explanation: "שלווה ורוגע. מקורה בלטינית, \"tranquillitas\" שפירושו שקט." },
        { word: "Tempest", explanation: "סערה חזקה. מקורה בלטינית, \"tempestas\" שפירושו מזג אוויר סוער." },
        { word: "Tapestry", explanation: "שטיח קיר עם ציורים. מקורה בצרפתית, \"tapisserie\" שפירושו שטיח." },
        { word: "Nebulous", explanation: "מעורפל ולא ברור. מקורה בלטינית, \"nebulosus\" שפירושו מעורפל." }
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

    function displayTips() {
        const tips = [
            "צפייה פעילה: כשאתה צופה בסדרה, נסה להיות פעיל וממוקד במילים ובביטויים שלמדת.",
            "רשימת מילים: לפני התחלת הפרק, קח כמה דקות לעבור על רשימת המילים שאתה עומד ללמוד.",
            "חזרה על המילים: לאחר סיום הפרק, חזור על רשימת המילים ונסה לכתוב משפט אחד לפחות עם כל מילה.",
            "שימוש בתרגומים: אם אתה מתקשה להבין מילה מסוימת, אל תהסס להשתמש בתרגומים או במילון.",
            "חשיבה באנגלית: נסה לחשוב על התוכן שראית באנגלית, גם אם זה דורש מאמץ.",
            "צפייה מחודשת: צפה בפרקים שאהבת מחדש והפעם נסה להבין את התוכן והשפה בלי להסתכל על התרגום.",
            "תרגול עם חברים: אם יש לך חברים שלומדים אנגלית, נסו לדבר על הסדרות שצפיתם בהן באנגלית.",
            "הקלט והאזן: הקלט את עצמך קורא או מדבר באנגלית ואז האזן להקלטה.",
            "השתמש ביומן: רשום ביומן או ביומן מקוון את התובנות והשאלות שלך לגבי השפה.",
            "למידה דרך סדרות היא דרך כיפית ויעילה לשפר את השפה שלך."
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

    document.querySelector('.close').addEventListener('click', function() {
        closeTipsModal();
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('tipsModal');
        if (event.target == modal) {
            closeTipsModal();
        }
    });

    function handleSeriesClick() {
        const seriesSection = document.getElementById('series-section');
        const searchBarContainer = document.getElementById("searchBarContainer");
        seriesSection.insertBefore(searchBarContainer, seriesSection.firstChild);
        searchBarContainer.style.display = 'flex';
        seriesSection.style.display = 'block';
        seriesSection.scrollIntoView({ behavior: 'smooth' });
    }

    const seriesButton = document.getElementById('to-series');
    seriesButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSeriesClick();
    });

    const searchInputSeries = document.getElementById("searchInputSeries");
    const tvShowElements = document.querySelectorAll(".tv-show");
    searchInputSeries.addEventListener("input", () => {
        const searchTerm = searchInputSeries.value.toLowerCase();
        tvShowElements.forEach((tvShow) => {
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

    const backToTopButton = document.querySelector(".back-to-top-button");

    function scrollHandler() {
        if (window.scrollY > 500) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", scrollHandler);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    scrollHandler();

    const accessibilityBtn = document.getElementById('accessibilityBtn');
    const accessibilityOptions = document.getElementById('accessibilityOptions');
    const increaseTextBtn = document.getElementById('increaseText');
    const decreaseTextBtn = document.getElementById('decreaseText');
    let textSize = 100;

    accessibilityBtn.addEventListener('click', () => {
        accessibilityOptions.style.display = accessibilityOptions.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('toggleContrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
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

    document.getElementById('to-bot').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'bot.html';
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

    fetch('path/to/episodeLinks.json')
        .then(response => response.json())
        .then(data => {
            window.episodeLinksData = data;
            console.log("Episode Links Data Loaded:", data);
        })
        .catch(error => console.error('Error fetching episode links:', error));

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
        function openWordTreasureModal(tvShowId, season, episodeNum, prevModal) {
            if (prevModal) {
                prevModal.style.display = "none";
            }
        
            let modal = document.getElementById(`modalWordTreasure-${tvShowId}-${season}-${episodeNum}`);
            if (!modal) {
                modal = createModal(`modalWordTreasure-${tvShowId}-${season}-${episodeNum}`);
            } else {
                const modalContent = modal.querySelector(".modal-content");
                modalContent.innerHTML = ''; // איפוס התוכן הקיים כדי לטעון מחדש
            }
        
            const modalContent = modal.querySelector(".modal-content");
            const difficultyTabsHtml = `
                <div id="difficulty-tabs" style="margin-bottom: 20px;">
                    <button class="tablink" data-difficulty="easy">קל</button>
                    <button class="tablink" data-difficulty="medium">בינוני</button>
                    <button class="tablink" data-difficulty="hard">קשה</button>
                </div>
                <div id="easy" class="tabcontent"></div>
                <div id="medium" class="tabcontent" style="display: none;"></div>
                <div id="hard" class="tabcontent" style="display: none;"></div>
                <button class="test-knowledge-button">בחן את הידע שלך</button>
                <div id="episode-links" class="episode-links">
                    <h3>קישורים לפרק:</h3>
                    <div id="links-container"></div>
                </div>
            `;
            modalContent.innerHTML = difficultyTabsHtml;
        
            const episodeData = window.episodeLinksData?.[tvShowId]?.[`season-${season}`]?.[`episode-${episodeNum}`];
            const linksContainer = modal.querySelector('#links-container');
            if (episodeData && episodeData.links) {
                linksContainer.innerHTML = '';
        
                if (episodeData.links.netflix && episodeData.links.netflix.trim() !== "") {
                    const netflixButton = createLinkButton('לצפייה ב', episodeData.links.netflix, 'netflix.png');
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
            }
        
            loadContentForDifficulty(tvShowId, season, episodeNum, 'easy'); 
            modal.querySelector(".tablink[data-difficulty='easy']").classList.add("active");
        
            modal.querySelectorAll(".tablink").forEach(tab => {
                tab.addEventListener("click", function() {
                    modal.querySelectorAll(".tablink").forEach(t => {
                        t.classList.remove("active");
                        modal.querySelector(`#${t.getAttribute("data-difficulty")}`).style.display = "none";
                    });
        
                    this.classList.add("active");
                    const difficulty = this.getAttribute("data-difficulty");
                    modal.querySelector(`#${difficulty}`).style.display = "block";
                    loadContentForDifficulty(tvShowId, season, episodeNum, difficulty);
                });
            });
        
            const testButton = modal.querySelector(".test-knowledge-button");
            testButton.addEventListener('click', () => {
                const activeDifficulty = modal.querySelector(".tablink.active").getAttribute("data-difficulty");
                const vocabulary = getWordTreasure(tvShowId, season, episodeNum, activeDifficulty);
                openGameSelectionModal(vocabulary, modalContent, modal, tvShowId, season, episodeNum);
            });
        
            const exitButton = document.createElement("button");
            exitButton.textContent = "יציאה";
            exitButton.className = "exit-button";
            exitButton.addEventListener("click", () => {
                modal.style.display = "none";
                modal.remove(); // מסיר את המודל מה-DOM כדי לוודא שאין תוכן שנותר ומשפיע על העיצוב
                if (prevModal) prevModal.style.display = "block";
            });
            modalContent.insertBefore(exitButton, modalContent.firstChild);
        
            modal.style.display = "block";
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
            startQuizGame(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
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
            startSentenceCompletionGame(vocabulary, modalContent, openGameSelectionModal, prevModal, currentTvShowId, currentSeason, currentEpisode);
        };
    
        buttonsContainer.appendChild(quizGameOption);
        buttonsContainer.appendChild(memoryGameOption);
        buttonsContainer.appendChild(sentenceCompletionGameOption);
    
        const backButton = document.createElement('button');
        backButton.textContent = 'חזור לאוצר מילים';
        backButton.onclick = reopenWordTreasureModal;
        buttonsContainer.appendChild(backButton);
    
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '20px';
        closeButton.onclick = function() {
            modalContent.style.display = 'none';
            if (prevModal) prevModal.style.display = 'block';
        };
    
        buttonsContainer.appendChild(closeButton);
        modalContent.appendChild(buttonsContainer);
    
        modal.style.display = 'block';
    }
    
    console.log("Checking if all pairs are matched");
    if (allPairsMatched) {
      console.log("All pairs matched, showing modal");
      showModal();
      console.log("Modal should now be visible");
    }
    
    function startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum) {
      modalContent.innerHTML = '<div class="game-board"></div>';
      const gameBoard = modalContent.querySelector('.game-board');
      gameBoard.style.gridTemplateColumns = 'repeat(5, minmax(80px, 1fr))';

      const controlButtons = document.createElement('div');
      controlButtons.className = 'game-control-buttons';

      const exitButton = document.createElement('button');
      exitButton.textContent = '✖';
      exitButton.className = 'close-btn';
      exitButton.addEventListener('click', () => {
          const modals = document.querySelectorAll('.modal');
          modals.forEach(modal => modal.style.display = 'none');
          if (prevModal) {
              prevModal.style.display = 'block';
          }
      });
      controlButtons.appendChild(exitButton);

      const restartButton = document.createElement('button');
      restartButton.textContent = 'Play Again';
      restartButton.className = 'restart-btn';
      restartButton.addEventListener('click', () => {
          startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
      });
      controlButtons.appendChild(restartButton);

      const backToGamesButton = document.createElement('button');
      backToGamesButton.textContent = 'Back to Games';
      backToGamesButton.className = 'back-to-games-btn';
      backToGamesButton.addEventListener('click', () => {
          openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
      });
      controlButtons.appendChild(backToGamesButton);

      modalContent.appendChild(controlButtons);

      let firstCard, secondCard;
      let lockBoard = false, matchesFound = 0, attempts = 0;
      let startTime = Date.now();

      function shuffle(array) {
          array.sort(() => Math.random() - 0.5);
      }

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
                  <h2>${message}</h2>
                  <img src="path/to/penguin-image.png" alt="Penguin" class="penguin-image">
                  <button class="play-again-btn">Play Again</button>
                  <button class="back-to-games-btn">Back to Games Selection</button>
              </div>
          `;
          document.body.appendChild(endGameModal);

          document.querySelector('.play-again-btn').addEventListener('click', () => {
              endGameModal.remove();
              startMemoryGame(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
          });

          document.querySelector('.back-to-games-btn').addEventListener('click', () => {
              endGameModal.remove();
              openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
          });
      }
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

    const controlButtons = document.createElement('div');
    controlButtons.className = 'game-control-buttons';

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Play Again';
    restartButton.className = 'play-again-btn';
    restartButton.onclick = function() {
        startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
    };
    controlButtons.appendChild(restartButton);

    const backToGamesButton = document.createElement('button');
    backToGamesButton.textContent = 'Back to Games';
    backToGamesButton.className = 'back-to-games-btn';
    backToGamesButton.onclick = function() {
        openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
    };
    controlButtons.appendChild(backToGamesButton);

    const closeButton = document.createElement('button');
    closeButton.textContent = '✖';
    closeButton.className = 'close-btn';
    closeButton.onclick = function() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
        if (prevModal) {
            prevModal.style.display = 'block';
        }
    };
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
        questionText.style.fontSize = '20px'; // הקטנת הכותרת
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
                <button class="play-again-btn">Play Again</button>
                <button class="back-to-games-btn">Back to Games</button>
            </div>
        `;

        const playAgainButton = modalContent.querySelector('.play-again-btn');
        playAgainButton.onclick = function() {
            startQuiz(vocabulary, modalContent, openGameSelectionModal, prevModal, tvShowId, season, episodeNum);
        };

        const backToGamesButton = modalContent.querySelector('.back-to-games-btn');
        backToGamesButton.onclick = function() {
            openGameSelectionModal(vocabulary, modalContent, prevModal, tvShowId, season, episodeNum);
        };

        const closeButton = modalContent.querySelector('.close-btn');
        closeButton.onclick = function() {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => modal.style.display = 'none');
            if (prevModal) {
                prevModal.style.display = 'block';
            }
        };
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

    function openModal(modalId) {
        closeAllModals(); 
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
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
