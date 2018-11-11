/**
 * @param  {Object} app
 */
function initIndex(app, session) {

    app.get('/', function (req, res) {
          



        
        return res.render('index', {
            title: 'Accueil',
            message: 'Bienvenue'
        });
    });

}

module.exports = initIndex;