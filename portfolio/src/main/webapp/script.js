// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
        ['Detective!!!!!!', 'I play with Legos', '9 is my favorite movie', 'I got the eyebrow piercing'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}

async function fetchCall() {
    const response = await fetch('/hello');

    const responsejson = await response.json();

    const index = Math.floor(Math.random() * Object.keys(responsejson).length);

    const textContainer = document.getElementById('text-container');
    textContainer.innerHTML = responsejson[Object.keys(responsejson)[index]];
}

function navigate(event, page) {
    var i;
    var display;

    switch (page) {
        case 'welcome-container':
            display = 'flex';
            break;
        case 'random-facts':
            display = 'block';
            break;
        case 'about-me':
            display = 'block';
            break;
    }

    ids = ['welcome-container', 'random-facts', 'about-me']

    for (i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = "none";
    }

    document.getElementById(page).style.display = display;
    // evt.currentTarget.className += " active";
}

function translation() {
    const text = document.getElementById('about-me-text').innerText;
    const languageCode = document.getElementById('language').value;

    const resultContainer = document.getElementById('about-me-text');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
        method: 'POST',
        body: params
    }).then(response => response.text())
        .then((translatedMessage) => {
            resultContainer.innerText = translatedMessage;
        });
}
