/**
 * @param  {Object} app
 */
function initIndex(app, session, client, moment, arriverGDL, departMelun, heuredepart, heures) {

  app.get('/', (req, res, next) => {

    var position = req.params.position;
    positionMelunToGDL = () => {

      client.get('journeys' + '?' + 'to=' + arriverGDL + '&' + 'from=' + departMelun + '&' + 'datetime_represents=departure' + '&' + heuredepart + '&').then(function (result) {
        const departure = result.body.journeys[0].departure_date_time;
        const arrival = result.body.journeys[0].arrival_date_time;
        heureDemander = result.body.journeys[0].requested_date_time;
        heures.dateDepart = moment(departure).format('LLLL');
        heures.dateArrivee = moment(arrival).format('LLLL');
        heures.dateDemander = moment(heureDemander).format('LLLL');
        res.render('index', {
          arriver: heures.dateArrivee,
          depart: heures.dateDepart,
        });
        return heures;
      }).catch((error) => {
        console.log(error);
      });
    };

    // getBestJourney = () => {
    //   client.get('coord/' + position + '/places_nearby?distance=20000&type%5B%5D=stop_point&start_page=1&count=100&').then(function (result) {
    //     console.log(result);
    //   });

    // };
    const test = new Promise((resolve, reject) => {
      resolve(positionMelunToGDL());
      // resolve(getBestJourney());
    });
  });

  app.get('/test/:position', (req, res) => {

    var position = req.params.position;
		console.log("​initIndex -> position", position)
    client.get('coord/'+ position + '/places_nearby?distance=20000&type%5B%5D=stop_point&count=200&').then(function (result) {
      console.log(result.body);
      res.send(result.body);
    });
  });
};

module.exports = initIndex;
