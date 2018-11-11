/** 
 * @param  {Object} app 
 */ 
function initIndex(app, session, client, moment, arriverGDL, departMelun, heuredepart, heures) { 
 
    app.get("/", (req, res) => {
        testa = () => {
            client.get('journeys' + '?' + 'to=' + arriverGDL + '&' + 'from=' + departMelun + '&' + 'datetime_represents=departure' + '&' + heuredepart + '&').then(function (result) {
                var departure = result.body.journeys[0].departure_date_time;
                var arrival = result.body.journeys[0].arrival_date_time;
                heureDemander = result.body.journeys[0].requested_date_time;
                heures.dateDepart = moment(departure).format("LLLL");
                heures.dateArrivee = moment(arrival).format("LLLL");
                heures.dateDemander = moment(heureDemander).format("LLLL");
                res.render('index', {
                    arriver: heures.dateArrivee,
                    depart: heures.dateDepart
                });
                return heures
            }).catch(error => {
                console.log(error);
            });
        }
        var test = new Promise((resolve, reject) => {
            resolve(testa());
        });
    });
} 
 
module.exports = initIndex;