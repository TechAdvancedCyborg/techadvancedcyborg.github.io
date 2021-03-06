targetyears=88;
dob=Date.parse("2/12/2007");

function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}


weekcount=Math.ceil(targetyears*52.1429);
currdate=dob;

function load() {
    var i;

    for (i=0; i < weekcount; i++) {
        var div=document.createElement("div");
        div.className="week";
        div.ariaLabel=(new Date(dob+(7 * 24 * 60 * 60 * 1000)*i)).toISOString()
        div.onclick = function(event) {
        var x = event.clientX;
        var y = event.clientY;
        var elementMouseIsOver = document.elementFromPoint(x, y);
        alert(elementMouseIsOver.ariaLabel)
        }
        document.getElementsByClassName("grid")[0].appendChild(div);
    }
}

function update() {
    weekspassed=weeksBetween(dob, new Date());
    i=0;

    intervalforanim=setInterval(function() {
            if (i <=weekspassed) {
                document.getElementsByClassName("grid")[0].children[i].className +=" passed";
                document.getElementsByClassName("grid")[0].children[i].style="animation: flipdot 0.05s linear;";
            }

            else {
                clearInterval(intervalforanim);
            }

            i++;
        }

        , 10);
}

load();
update();
