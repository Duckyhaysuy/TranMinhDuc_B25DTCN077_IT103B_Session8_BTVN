const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

let choice;
do{
    choice = +prompt("=== FOOTBALL ANALYTICS MENU ===\n"
        +"1. Xem danh sách\n"
        +"2. Tìm kiếm\n"
        +"3. Lọc theo vị trí\n"
        +"4. Tổng bàn thắng\n"
        +"5. Kiểm tra hiệu suất\n"
        +"0. Thoát");

    switch(choice){
        case 1: displaySquad(); break;
        case 2: searchPlayer(); break;
        case 3:
        case 4:
        case 5:
        case 0:
            alert("Thoát!");
            break;
    }
}while(choice !== 0);


function displaySquad(){
   let listPlayer = "===Danh sách cầu thủ===\n";
   squad.forEach(player => { listPlayer += `${player[0]} - ${player[1]} bàn thắng - ${player[2]}\n`});
   alert(listPlayer);
}

function searchPlayer(){
    let name = prompt("Nhập tên cầu thủ cần tìm:");
    let found = squad.find(player => player[0].trim().toLowerCase() === name.toLowerCase());
    if(found){
        alert(`Tìm thấy: ${found[0]} - ${found[1]} bàn thắng - ${found[2]}`);
    }else{
        alert("Không tìm thấy cầu thủ nào!");
    }
}

