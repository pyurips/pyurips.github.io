const initialStyleConfigs = {
    firstTopic: [document.getElementById('firstTopic').style.width, document.getElementById('firstTopic').style.margin, document.getElementById('firstTopic').style.top, document.getElementById('firstTopic').style.letterSpacing, document.getElementById('firstTopic').style.cursor, document.getElementById('firstTopic').style.display],
    secondTopic: [document.getElementById('secondTopic').style.width, document.getElementById('secondTopic').style.margin, document.getElementById('secondTopic').style.top, document.getElementById('secondTopic').style.letterSpacing, document.getElementById('secondTopic').style.cursor, document.getElementById('secondTopic').style.display],
    thirdTopic: [document.getElementById('thirdTopic').style.width, document.getElementById('thirdTopic').style.margin, document.getElementById('thirdTopic').style.top, document.getElementById('thirdTopic').style.letterSpacing, document.getElementById('thirdTopic').style.cursor, document.getElementById('thirdTopic').style.display]
}

document.getElementById('firstTopic').addEventListener('click', (target) => {
    document.getElementById('firstTopic').style.width = '100vw';
    document.getElementById('firstTopic').style.margin = '0';
    document.getElementById('firstTopic').style.top = '0';
    document.getElementById('secondTopic').style.display = 'none';
    document.getElementById('thirdTopic').style.display = 'none';
    document.getElementById('firstTopic').style.letterSpacing = '5px';
    document.getElementById('firstTopic').style.cursor = 'default';
    setTimeout(() => {
        document.getElementById('backButton').style.display = 'inline';
        document.getElementById('backButton').addEventListener('click', () => {
            backButton();
            document.getElementById('backButton').style.display = 'none';
        })
    }, 200);
});

document.getElementById('secondTopic').addEventListener('click', (target) => {
    document.getElementById('secondTopic').style.width = '100vw';
    document.getElementById('secondTopic').style.margin = '0';
    document.getElementById('secondTopic').style.top = '0';
    document.getElementById('firstTopic').style.display = 'none';
    document.getElementById('thirdTopic').style.display = 'none';
    document.getElementById('secondTopic').style.letterSpacing = '5px';
    document.getElementById('secondTopic').style.cursor = 'default';
    document.getElementById('firstTopic').style.cursor = 'default';
    setTimeout(() => {
        document.getElementById('backButton').style.display = 'inline';
        document.getElementById('backButton').addEventListener('click', () => {
            backButton();
            document.getElementById('backButton').style.display = 'none';
        })
    }, 200);
});

document.getElementById('thirdTopic').addEventListener('click', (target) => {
    document.getElementById('thirdTopic').style.width = '100vw';
    document.getElementById('thirdTopic').style.margin = '0';
    document.getElementById('thirdTopic').style.top = '0';
    document.getElementById('firstTopic').style.display = 'none';
    document.getElementById('secondTopic').style.display = 'none';
    document.getElementById('thirdTopic').style.letterSpacing = '5px';
    document.getElementById('thirdTopic').style.cursor = 'default';
    document.getElementById('firstTopic').style.cursor = 'default';
    setTimeout(() => {
        document.getElementById('backButton').style.display = 'inline';
        document.getElementById('backButton').addEventListener('click', () => {
            backButton();
            document.getElementById('backButton').style.display = 'none';
        })
    }, 200);
});


function backButton () {
    for (let x in initialStyleConfigs) {
        initialStyleConfigs[x].forEach((element, index) => {
            switch (index) {
                case 0: document.getElementById(x).style.width = element; break;
                case 1: document.getElementById(x).style.margin = element; break;
                case 2: document.getElementById(x).style.top = element; break;
                case 3: document.getElementById(x).style.letterSpacing = element; break;
                case 4: document.getElementById(x).style.cursor = element; break;
                case 5: document.getElementById(x).style.display = element; break;
            }
        });
    }
}