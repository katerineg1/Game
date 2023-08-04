import * as gameControl from "./game1.js";

function displaySection() {
    let section = document.createElement("section");
    let gameInterface = document.createElement("div");

    let head = `
    
    <div style="padding:1rem 2rem; display: flex; align-items: center; justify-content: space-evenly; font-size: 36px; font-family: 'Josefin Sans', sans-serif;">
        <svg height="32px" width="32px" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M872.533 185.601c0-12.8-4.267-21.333-12.8-29.867l-128-128c-12.8-12.8-25.6-17.067-38.4-12.8h-473.6C189.866 10.667 160 36.267 151.466 70.401v874.666c0 38.4 29.867 68.267 68.267 68.267H800c38.4 0 68.267-29.867 68.267-68.267V194.134l4.267-8.533c0 4.267 0 4.267 0 0zm-42.667 0c4.267 4.267 0 12.8-4.267 12.8h-115.2c-12.8 0-21.333-8.533-21.333-21.333v-115.2c0-8.533 8.533-8.533 12.8-4.267l128 128zm4.267 759.466c0 17.067-12.8 29.867-29.867 29.867H219.733c-17.067 0-29.867-12.8-29.867-29.867v-870.4c4.267-12.8 12.8-21.333 29.867-21.333H646.4v123.734c0 34.133 25.6 64 64 64h123.733v704z"></path></g></svg>
        <span style="margin: 0 15px 0 5px">Paper</span>

        <svg height="32px" width="32px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><linearGradient id="IconifyId17ecdb2904d178eab19914" gradientUnits="userSpaceOnUse" x1="87.616" y1="21.04" x2="41.548" y2="138.084"><stop offset="0" stop-color="#9e958e"></stop><stop offset=".46" stop-color="#8e8884"></stop><stop offset="1" stop-color="#757575"></stop></linearGradient><path d="M8.93 90.74c-.53-1.25-1.04-2.5-1.54-3.75c-3.77-9.51.96-18.09 5.18-26.49l6.12-12.16c1.23-2.45 3.12-4.51 5.44-5.95l17.6-10.92l17.39-17.98a8.147 8.147 0 0 1 3.97-2.27l11.84-2.86c5.73-1.37 8.19-1.15 10.04 1.48c6.41 9.1 10.7 16.59 16.41 25.66c3.11 4.94 10.29 16.29 10.74 17.04c1.38 2.32.82 4.26.77 6.92c-.12 6.13.96 12.29 3.2 18c.67 1.7 1.44 3.38 1.79 5.17c.32 1.61-.11 11.84-.44 15.3c-.27 2.81-6.91 13.3-9.29 14.57c-2.62 1.4-22.04 8.54-26.33 9.76s-22.89-3.03-32.55-4.51c-5.97-.91-11.95-1.83-17.92-2.74c-5.18-.79-10.33-.19-13.23-5.42c-3.41-6.12-6.47-12.41-9.19-18.85z" fill="url(#IconifyId17ecdb2904d178eab19914)"></path><linearGradient id="IconifyId17ecdb2904d178eab19915" gradientUnits="userSpaceOnUse" x1="8.859" y1="120.137" x2="47.171" y2="77.536"><stop offset="0" stop-color="#37474f"></stop><stop offset=".612" stop-color="#42565f" stop-opacity=".192"></stop><stop offset=".757" stop-color="#455a64" stop-opacity="0"></stop></linearGradient><path d="M31.34 115c5.97.91 11.95 1.83 17.92 2.74c3.11.48 7.15 1.24 11.34 2.02c-2.82-3.34-7.03-7.3-9.85-10.64c-.61-.72-1.23-1.47-1.45-2.39c-.23-.98.03-1.99.3-2.96c.86-3.18 1.08-6.63 1.94-9.81c-5.33 1.24-17.61 3.6-18.62 3.31c-1.12-.32-2.03-1.13-2.9-1.92c-6.33-5.78-11.28-11.61-16.12-18.66c-.57-.83-1.15-1.69-1.36-2.68c-.2-.93-.05-1.89.1-2.82c.36-2.32 1.16-8.75 1.8-14.42l-1.88 3.73C8.35 68.9 3.62 77.48 7.4 86.99c.5 1.26 1.01 2.51 1.54 3.75a192.48 192.48 0 0 0 9.17 18.83c2.89 5.24 8.05 4.64 13.23 5.43z" fill="url(#IconifyId17ecdb2904d178eab19915)"></path><linearGradient id="IconifyId17ecdb2904d178eab19916" gradientUnits="userSpaceOnUse" x1="99.553" y1="66.702" x2="74.778" y2="11.745"><stop offset="0" stop-color="#9e958e"></stop><stop offset=".442" stop-color="#aea298"></stop><stop offset="1" stop-color="#c9b8a9"></stop></linearGradient><path d="M85.05 9.95c-1.23-1.45-3.63-1.17-6.15 1.13l-9.06 9.06c-.56.56-.86 1.33-.81 2.12l.97 18.5c.03.62.26 1.2.66 1.67c3.22 3.76 14.6 21.83 17.9 21.83c3.29 0 9.04-12.82 11.97-12.75c.5.01 3.11.17 5.66.95c2.38.72 3.31-2.55 2.82-4.87c-2.46-3.9-5.77-9.13-7.63-12.09c-5.69-9.03-9.97-16.5-16.33-25.55z" fill="url(#IconifyId17ecdb2904d178eab19916)"></path><linearGradient id="IconifyId17ecdb2904d178eab19917" gradientUnits="userSpaceOnUse" x1="37.502" y1="104.545" x2="47.502" y2="50.295"><stop offset="0" stop-color="#4c5c64"></stop><stop offset="1" stop-color="#455a64" stop-opacity="0"></stop></linearGradient><path d="M42.89 46.37c3.33-.5 14.44-2.39 16.53-3.21C63.5 41.55 67.1 34.69 69.48 31c0 0 .82 12.03 0 16.73C68.91 51 66.76 68.1 64.6 72.2L51.54 93.96L32.35 74.77c-1.63-1.63-2.67-2.49-3.26-4.8c-1.35-5.28-3.8-13.07-3.81-17.66s12.36-5.16 17.61-5.94z" fill="url(#IconifyId17ecdb2904d178eab19917)"></path><linearGradient id="IconifyId17ecdb2904d178eab19918" gradientUnits="userSpaceOnUse" x1="41.732" y1="20.416" x2="70.782" y2="20.416"><stop offset="0" stop-color="#4c5c64"></stop><stop offset="1" stop-color="#455a64" stop-opacity="0"></stop></linearGradient><path d="M67.16 20.74c-1.28-1.53-1.64-3.7-1.2-5.64c.37-1.62 3.73-4.75 4.82-5.74l-7.69 1.86a8.226 8.226 0 0 0-3.97 2.27L41.73 31.47s16.84-7.02 25.43-10.73z" fill="url(#IconifyId17ecdb2904d178eab19918)"></path><linearGradient id="IconifyId17ecdb2904d178eab19919" gradientUnits="userSpaceOnUse" x1="87.261" y1="76.607" x2="121.616" y2="90.767"><stop offset="0" stop-color="#9e958e"></stop><stop offset=".25" stop-color="#aea298"></stop><stop offset=".566" stop-color="#c9b8a9"></stop></linearGradient><path d="M116.08 77.46a46.38 46.38 0 0 1-3.06-13.39c-5.74 3.93-8.95 9.03-18.19 10.28c-2.45.33-6.24.79-8.63 1.42c-2.96.78-5.7 2.97-10.14 3.38c-3.16.3-11.13.07-9.93 1.85c1.2 1.78 8.35 5.37 10.13 6.82c2.53 2.03 4.73 4.42 6.84 6.88c1.1 1.29 2.75 4.42 4.67 5.27c.49.22 1.01.28 1.53.12c.91-.27 1.64-.93 2.35-1.56a94.403 94.403 0 0 1 22.97-15.02c.89-.41 1.85-.87 2.29-1.75c.19-.39.27-.92.28-1.49c-.35-.94-.74-1.87-1.11-2.81z" fill="url(#IconifyId17ecdb2904d178eab19919)"></path><linearGradient id="IconifyId17ecdb2904d178eab19920" gradientUnits="userSpaceOnUse" x1="104.646" y1="123.357" x2="97.606" y2="95.587"><stop offset="0" stop-color="#37474f"></stop><stop offset=".808" stop-color="#42565f" stop-opacity=".192"></stop><stop offset="1" stop-color="#455a64" stop-opacity="0"></stop></linearGradient><path d="M117.87 82.63c-.13-.65-.32-1.29-.54-1.92c-.17.59-.54 1.24-1.34 1.85c-2.3 1.76-11.17 4.47-20.93 13.02c-6.37 5.58-6.38 6.33-7.75 12.48c-2.24 10.07-5.8 13.73-6.48 14.35c.37-.04.7-.09.97-.17c4.3-1.21 23.71-8.36 26.33-9.76c2.38-1.27 9.02-11.76 9.29-14.57c.34-3.44.77-13.67.45-15.28z" fill="url(#IconifyId17ecdb2904d178eab19920)"></path></g></svg>
        <span style="margin: 0 15px 0 5px">Rock</span>

        <svg height="32px" width="32px" version="1.1" id="_x34_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#B2B1B1;" d="M423.9,35.44c-0.398,7.566-2.628,15.929-6.61,25.088l-88.403,182.461l-10.115,20.867 c0,0-13.539,1.513-30.264,8.84c-10.433,4.46-22.141,11.229-32.494,21.185c-5.256,5.017-10.194,10.991-14.415,17.84 c-1.991,3.345-3.902,6.292-5.734,9.159l-29.468-23.574c2.469-2.867,4.699-5.893,6.531-8.76l10.592-15.849l32.494-48.821 l21.504-32.255l55.511-83.306L405.184,0C418.484,8.84,424.696,20.627,423.9,35.44z"></path> </g> <g> <path style="fill:#AFAFAF;" d="M305.63,297.305l-29.467,23.574c-1.832-2.867-3.743-5.814-5.734-9.159 c-4.221-6.849-9.159-12.822-14.415-17.84c-10.353-9.955-22.061-16.725-32.494-21.185c-16.725-7.327-30.264-8.84-30.264-8.84 l-5.176-10.593L94.737,60.528c-9.318-21.185-8.92-37.91,1.115-50.573c2.867-3.664,6.531-7.009,10.991-9.955l41.812,62.758 l91.907,138.02l15.451,23.097l32.494,48.821l10.593,15.849C300.932,291.412,303.161,294.438,305.63,297.305z"></path> </g> <path style="fill:#DC6D41;" d="M212.05,356.161c10.991-16.486,17.123-25.087,23.813-35.282l-29.468-23.574 c-8.442,9.876-20.468,18.397-38.467,14.097c-10.274-4.221-21.105-6.292-31.777-6.212c-5.097,0.079-10.194,0.637-15.132,1.592 c-20.309,4.062-39.184,15.928-51.528,34.485l-29.866,44.919c-5.735,8.522-9.557,17.761-11.628,27.158 c-2.549,11.15-2.628,22.619-0.398,33.609c0.16,0.877,0.398,1.752,0.637,2.629c4.46,19.273,16.087,37.033,33.848,48.82 c8.283,5.496,17.203,9.32,26.362,11.389c11.389,2.707,23.176,2.867,34.406,0.637c20.229-4.062,39.104-15.929,51.449-34.485 l29.946-44.919c12.344-18.556,16.088-40.538,11.946-60.767C215.236,365.479,213.882,360.781,212.05,356.161z M172.707,410 l-29.945,44.917c-6.61,9.955-16.486,16.168-27.317,18.398c-10.911,2.15-22.38,0.159-32.335-6.452 c-9.955-6.61-16.167-16.486-18.397-27.317c-2.15-10.911-0.239-22.38,6.451-32.335l29.866-44.918 c6.69-9.955,16.566-16.168,27.397-18.318c10.832-2.15,22.38-0.239,32.335,6.371c9.955,6.611,16.088,16.486,18.318,27.397 C181.229,388.576,179.317,400.125,172.707,410z"></path> <path style="fill:#DC6D41;" d="M472.959,387.063c-0.159-0.318-0.398-0.558-0.557-0.876l-29.866-44.919 c-11.946-17.919-29.945-29.627-49.378-34.008c-0.637-0.159-1.354-0.318-2.071-0.478c-15.451-3.106-31.857-1.672-46.989,4.619 c-17.999,4.301-30.025-4.221-38.467-14.097l-29.467,23.574c6.61,10.194,12.822,18.796,23.813,35.282 c-1.832,4.619-3.186,9.318-4.142,14.097c-4.142,20.229-0.398,42.211,11.946,60.767l29.946,44.919 c12.345,18.556,31.22,30.423,51.449,34.485c20.229,4.062,42.211,0.319,60.767-12.026c18.556-12.344,30.423-31.219,34.485-51.449 C488.41,427.043,484.906,405.46,472.959,387.063z M447.315,439.547c-2.23,10.831-8.442,20.707-18.397,27.317 c-9.955,6.611-21.424,8.602-32.335,6.452c-10.832-2.23-20.707-8.443-27.317-18.398L339.319,410 c-6.61-9.876-8.522-21.424-6.371-32.256c2.23-10.911,8.362-20.787,18.318-27.397c9.955-6.611,21.504-8.522,32.335-6.371 c10.831,2.15,20.707,8.362,27.397,18.318l29.866,44.918C447.553,417.167,449.465,428.636,447.315,439.547z"></path> <circle style="fill:#8A8B8A;" cx="255.388" cy="259.89" r="11.482"></circle> </g> </g></svg>
        <span style="margin: 0 0 0 5px">Scissors</span>
    </div>`;
    let playerDiv = `
    <div style="display:flex; flex-direction:column; align-items:center">
        <h2>Choose an option</h2>
        <select style="height: 22px; width: 150px; margin: 0 auto;" id="playerInput">
            <option value="paper">Paper</option> 
            <option value="rock">Rock</option> 
            <option value="scissors">Scissors</option>
        </select>
    </div>
    `;

    let computerDiv = `
    <div style="display:flex; flex-direction:column; align-items:center">
        <h2>Computer has chosen</h2>
        <input type="text" id="computerInput" readonly value="">
    </div>
    `;

    let buttons = `
    <div style="margin: 20px 0; display: flex; justify-content: center; gap: 2rem">
        <button type="button" id="playButton" style="padding: 5px 20px; border-radius: 10px;border: 2px solid #000; font-weight: 600">Play</button>
        <button type="button" id="restartButton" style="padding: 5px 20px; border-radius: 10px;border: 2px solid #000; font-weight: 600">Restart Game</button>
    </div>`;

    let result = `
        <span id="result" style="font-size: 40px; text-align:center;"></span>
    `;

    document.body.appendChild(section);
    section.appendChild(gameInterface);
    
    gameInterface.innerHTML = head + `<div style= "display:flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem">` + playerDiv + computerDiv + `</div>` + buttons + result;

    /* Body styles */
    document.body.style.fontFamily="'Josefin Sans', sans-serif";

    /* Section styles */
    section.style.display = "flex";
    section.style.height = "100vh";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";

    /* GameInterface styles */
    gameInterface.style.backgroundColor = "#bdedfc";
    gameInterface.style.border = "solid 2px #bdedfc";
    gameInterface.style.borderRadius = "15px";
    gameInterface.style.display = "flex";
    gameInterface.style.flexDirection = "column";

}

displaySection();

function buttonFuntionality(){
    let playButton = document.getElementById("playButton");
    let restartButton = document.getElementById("restartButton");
    const computerInput = document.getElementById("computerInput");

    playButton.addEventListener("click", function(){
        gameControl.computerChoice();
        gameControl.playRound(computerInput.value)
    });

    restartButton.addEventListener("click", gameControl.restartGame);

}

buttonFuntionality()