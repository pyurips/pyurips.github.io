function hoverFunction (topic) {
    document.getElementById(topic).addEventListener('mouseover', (target) => {
        document.getElementById(topic).style.backgroundColor = 'black';
        document.getElementById(topic).style.color = 'white';
    });
    
    document.getElementById(topic).addEventListener('mouseout', (target) => {
        document.getElementById(topic).style.backgroundColor = 'white';
        document.getElementById(topic).style.color = 'black';
    });
}

function showAboutMe () {

}

function showProjects () {

}

const initialStyleConfigs = {
    firstTopic: [document.getElementById('firstTopic').style.width, document.getElementById('firstTopic').style.margin, document.getElementById('firstTopic').style.top, document.getElementById('firstTopic').style.letterSpacing, document.getElementById('firstTopic').style.cursor, document.getElementById('firstTopic').style.display, document.getElementById('firstTopic').style.left],
    secondTopic: [document.getElementById('secondTopic').style.width, document.getElementById('secondTopic').style.margin, document.getElementById('secondTopic').style.top, document.getElementById('secondTopic').style.letterSpacing, document.getElementById('secondTopic').style.cursor, document.getElementById('secondTopic').style.display, document.getElementById('secondTopic').style.left]
}

document.getElementById('firstTopic').addEventListener('click', (target) => {
    document.getElementById('firstTopic').style.width = '100vw';
    document.getElementById('firstTopic').style.margin = '0';
    document.getElementById('firstTopic').style.top = '0';
    document.getElementById('secondTopic').style.display = 'none';
    document.getElementById('firstTopic').style.letterSpacing = '5px';
    document.getElementById('firstTopic').style.cursor = 'default';
    document.body.style.backgroundColor = 'rgb(20, 20, 20)';
    document.getElementById('firstTopic').addEventListener('mouseover', (target) => {
        document.getElementById('firstTopic').style.backgroundColor = 'white';
        document.getElementById('firstTopic').style.color = 'black';
    });
    setTimeout(() => {
        document.getElementById('backButton').style.display = 'inline';
        document.getElementById('aboutMe').style.display = 'inline';
        document.getElementById('backButton').addEventListener('click', () => {
            backButton();
            hoverFunction('firstTopic');
            document.body.style.backgroundColor = 'rgb(46, 46, 46)';
            document.getElementById('backButton').style.display = 'none';
            document.getElementById('aboutMe').style.display = 'none';
        })
    }, 200);
});

document.getElementById('secondTopic').addEventListener('click', (target) => {
    document.getElementById('secondTopic').style.width = '100vw';
    document.getElementById('secondTopic').style.margin = '0';
    document.getElementById('secondTopic').style.top = '0';
    document.getElementById('secondTopic').style.left = '0';
    document.getElementById('firstTopic').style.display = 'none';
    document.getElementById('secondTopic').style.letterSpacing = '5px';
    document.getElementById('secondTopic').style.cursor = 'default';
    document.getElementById('secondTopic').style.backgroundColor = 'white';
    document.getElementById('secondTopic').style.color = 'black';
    document.body.style.backgroundColor = 'rgb(20, 20, 20)';
    document.getElementById('secondTopic').addEventListener('mouseover', (target) => {
        document.getElementById('secondTopic').style.backgroundColor = 'white';
        document.getElementById('secondTopic').style.color = 'black';
    });
    setTimeout(() => {
        document.getElementById('backButton').style.display = 'inline';
        document.getElementById('projects').style.display = 'inline';
        document.getElementById('backButton').addEventListener('click', () => {
            backButton();
            hoverFunction('secondTopic');
            document.getElementById('projects').style.display = 'none';
            document.body.style.backgroundColor = 'rgb(46, 46, 46)';
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
                case 6: document.getElementById(x).style.left = element; break;
            }
        });
    }
}

document.getElementById('box01').addEventListener('mouseover', (target) => {
    document.getElementById('infoDatalife').style.display = 'inline';
    document.getElementById('box01').style.zIndex = '3';
});

document.getElementById('box01').addEventListener('mouseout', (target) => {
    document.getElementById('infoDatalife').style.display = 'none';
});