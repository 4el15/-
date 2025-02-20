const allowedIDs = {1160: 0, 1701: 0, 2700: 'admin', 6680: 0};
let userID = null;

function checkID() {
    userID = parseInt(document.getElementById("userID").value);
    if (allowedIDs.hasOwnProperty(userID)) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("userPoints").innerText = allowedIDs[userID];

        if (userID === 2700) {
            document.getElementById("adminControls").style.display = "block";
        }
    } else {
        alert("ID غير مسموح!");
    }
}

function logout() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function toggleAccount() {
    let targetID = parseInt(document.getElementById("manageID").value);
    if (allowedIDs.hasOwnProperty(targetID) && targetID !== 2700) {
        allowedIDs[targetID] = allowedIDs[targetID] === null ? 0 : null;
        alert(`تم ${allowedIDs[targetID] === null ? 'إيقاف' : 'تفعيل'} الحساب ${targetID}`);
    } else {
        alert("ID غير صحيح!");
    }
}

function addPoints() {
    let targetID = parseInt(document.getElementById("addPointsID").value);
    let amount = parseInt(document.getElementById("pointsAmount").value);

    if (allowedIDs.hasOwnProperty(targetID) && targetID !== 2700 && allowedIDs[targetID] !== null) {
        allowedIDs[targetID] += amount;
        alert(`تمت إضافة ${amount} نقطة إلى ID ${targetID}`);
    } else {
        alert("ID غير صحيح أو الحساب مغلق!");
    }
}
