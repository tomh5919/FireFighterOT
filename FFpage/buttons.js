

var firebaseConfig = {
    apiKey: "AIzaSyDVvAibXH-FVEFSbDv3GijB25kWPcp_eqI",
    authDomain: "firefighter-overtime-tracker.firebaseapp.com",
    databaseURL: "https://firefighter-overtime-tracker-default-rtdb.firebaseio.com",
    projectId: "firefighter-overtime-tracker",
    storageBucket: "firefighter-overtime-tracker.appspot.com",
    messagingSenderId: "813982058887",
    appId: "1:813982058887:web:420ba87bbe91be3be0eb22",
    measurementId: "G-P2FNLG9DGV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function showPref() {
    element = document.querySelector('.pref');
    element.style.visibility = 'visible';
    Pref 
}
function hidePref() {
    element = document.querySelector('.pref');
    element.style.visibility = 'hidden';

    for (i = 0; i < 6; i++) {

        if (document.getElementById("cb" + i).checked) {
             Pref.push(document.getElementById("cb"+i).name);
             //var q = Pref.pop();
             //alert(q);
    };

    }
}
Unpref = [];

var Pref = [];
function logout() {
    Unpref = JSON.stringify(cal.data).split(",");
    var Unavail = [];
    var v = Unpref.length;
    //alert(Unpref[0])
    var m = cal.sMth + 1;
  //  alert(m)
    if (Unpref[0] != "{}") {

        for (i = 0; i < v; i++) {
            
            var t = Unpref[i].replace(/"|{|}|Unavailable/g, '').replace(/:/g, "/") + m + "/" + cal.sYear;
            Unavail[i] = t;
           // alert(t);
        }

        var UpData = Unavail.join();
        //alert(UpData);

        var userId = 0;
        firebase.database().ref('Firefighters/' + userId).update({
            availability: (UpData)
        })
    } else {
        var userId = 0;
        firebase.database().ref('Firefighters/' + userId).update({
            availability: (0)
        })
    }
    if (Pref.length != 0) {
         var SavedPreff = Pref.join();
         //alert(SavedPreff);

        var userId = 0;
        firebase.database().ref('Firefighters/' + userId).update({
            unpreferredStations: (SavedPreff)
        })

         Pref = [];
    } else {
        var userId = 0;
        firebase.database().ref('Firefighters/' + userId).update({
            unpreferredStations: (0)
        })
    }
   
}

