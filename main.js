let currentChoice = '';

function openModal(choice) {
    currentChoice = choice;
    document.getElementById('team-modal').style.display = 'block';
// チームのリストをモーダルに表示するロジックをここに追加
}

function closeModal() {
    document.getElementById('team-modal').style.display = 'none';
}

function selectTeam(teamName) {
    var elem = document.getElementById(currentChoice + '-choice');

    switch(teamName){
        case 0:
            elem.src = "emblem/Arsenal.png";
            break;
        case 1:
            elem.src = "emblem/AstonVilla.png";
            break;
        case 2:
            elem.src = "emblem/Bournemouth.png";
            break;
        case 3:
            elem.src = "emblem/Brentford.png";
            break;
        case 4:
            elem.src = "emblem/Brighton.png";
            break;
        case 5:
            elem.src = "emblem/Burnley.png";
            break;        
        case 6:
            elem.src = "emblem/Chelsea.png";
            break;        
        case 7:
            elem.src = "emblem/Crystal.png";
            break;
        case 8:
            elem.src = "emblem/Everton.png";
            break;        
        case 9:
            elem.src = "emblem/Fulham.png";
            break; 
        case 10:
            elem.src = "emblem/Liverpool.png";
            break;        
        case 11:
            elem.src = "emblem/Luton.png";
            break;
        case 12:
            elem.src = "emblem/ManCity.png";
            break;     
        case 13:
            elem.src = "emblem/ManUnited.png";
            break;  
        case 14:
            elem.src = "emblem/Newcastle.png";
            break;        
        case 15:
            elem.src = "emblem/NotForest.png";
            break;
        case 16:
            elem.src = "emblem/Sheffield.png";
            break;        
        case 17:
            elem.src = "emblem/Tottenham.png";
            break;        
        case 18:
            elem.src = "emblem/WestHam.png";
            break;        
        case 19:
            elem.src = "emblem/Wolves.png";
            break;       
                    
            
    }

    closeModal();
}

// チーム選択用のロジックも追加する必要があります。
// たとえば、モーダル内のチームアイコンがクリックされた時、そのチーム名を selectTeam に渡すなど。
