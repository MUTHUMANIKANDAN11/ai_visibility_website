const heroCardsData = [
    {
        title: "Number of Pages indexed",
        content: "Unique pages indexed on your domain",
        count: "109",
        signal: "3",
        isUp: true,
        className: "card1"
    },
    {
        title: "Number of Conversations",
        content: "Humans purchasing items on your site",
        count: "12.3k",
        signal: "1k",
        isUp: true,
        className: "card2"
    },
    {
        title: "Referrals from AI Search",
        content: "Humans visits referred by AI Search Engines",
        count: "65k",
        signal: "4k",
        isUp: false,
        className: "card3"
    },
    {
        title: "Visibility Score",
        content: "How often your brand appears in answers",
        count: "86%",
        signal: "8%",
        isUp: true,
        className: "card4"
    },
    {
        title: "AI Traffic Percentage",
        content: "Percentage of traffic coming from AI Crawlers",
        count: "24.2%",
        signal: "3.47%",
        isUp: true,
        className: "card5"
    },
    {
        title: "Share of Voice",
        content: "Mentions of your brand related to competitors",
        count: "56%",
        signal: "4%",
        isUp: false,
        className: "card6"
    }
];

const hero5GridData = [
    {
        name: "Dylan Babbs",
        date: "16 Dec, 2024",
        type: "/ Product",
        head: "Prompt Volumes: The first tool to reveal AI Search Volume",
        body: "Profound is excited to unveil a groundbreaking new feature that transforms modern maketing: real-time...",
        profileImg: "images/user-profile.png"
    },
    {
        name: "Dylan Babbs",
        date: "16 Dec, 2024",
        type: "/ Product",
        head: "Prompt Volumes: The first tool to reveal AI Search Volume",
        body: "Profound is excited to unveil a groundbreaking new feature that transforms modern maketing: real-time...",
        profileImg: "images/user-profile.png"
    },
    {
        name: "James Cadwailader",
        date: "1 Nov, 2024",
        type: "/ Blueprints",
        head: "How AI Answer Engines Will Transform the Future",
        body: "AI Answer Engines are driving a platform shift more manumental than social media in 2009, mobile in...",
        profileImg: "images/user-profile.png"
    },
    {
        name: "James Cadwailader",
        date: "1 Nov, 2024",
        type: "/ Blueprints",
        head: "How AI Answer Engines Will Transform the Future",
        body: "AI Answer Engines are driving a platform shift more manumental than social media in 2009, mobile in...",
        profileImg: "images/user-profile.png"
    }
];

function renderHeroCards() {
    const heroContainer = document.querySelector('.hero');
    const cardsContainer = document.createElement('div');

    heroCardsData.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.className}`;

        const arrow = card.isUp ? '&#11014;' : '&#8595;';
        const signalClass = card.isUp ? 'card-responce-up-signal' : 'card-responce-down-signal';

        cardDiv.innerHTML = `
      <p class="card-head">${card.title}</p>
      <p class="card-content">${card.content}</p>
      <div class="card-responce-box">
          <p class="card-responce-count">${card.count}</p>
          <div class="${signalClass}">${arrow} ${card.signal}</div>
      </div>
    `;

        heroContainer.appendChild(cardDiv);
    });
}

function renderHero5Grid() {
    const gridContainer = document.querySelector('.hero5-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    hero5GridData.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'hero5-column';

        colDiv.innerHTML = `
      <div class="column-header">
          <div class="header-left">
              <img src="${item.profileImg}" class="user-profile" alt="">
              <div class="user-name">${item.name}</div>
          </div>
          <div class="header-right">
              <div class="date">${item.date}</div>
              <div class="type"> ${item.type}</div>
          </div>
      </div>
      <div class="column-content">
          <div class="content-head">${item.head}</div>
          <div class="content-body">${item.body}</div>
      </div>
    `;

        gridContainer.appendChild(colDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeroCards();
    renderHero5Grid();
});
