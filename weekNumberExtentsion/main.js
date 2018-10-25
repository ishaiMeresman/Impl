try {
    Date.prototype.getWeek = function () {
        let target = new Date(this.valueOf());
        let dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        let firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() != 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    }

    let d = new Date();
    if(document.getElementById('weekNumText')) {
        document.getElementById('weekNumText').innerHTML = d.getWeek();
    }
}
catch (e) {
    console.log("Error Week number extension: " + e);
}

