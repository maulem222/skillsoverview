// /lib/routes/crmRoutes.ts

var sql = require('mssql');

var cors = require('cors');


export class Routes {

    public routes(app): void {

        app.route('/saveImage')
        // GET endpoint
        .post(cors(), async function(req, res) {
            const fileName = req.files.myFile.name
            const path = __dirname + '/UserImages/' + fileName
            console.log('you did an api request /saveImage !');
            let image = req.files.myFile;

            image.mv(path, (error) => {
                if (error) {
                  console.error(error)
                  res.writeHead(500, {
                    'Content-Type': 'application/json'
                  })
                  res.end(JSON.stringify({ status: 'error', message: error }))
                  return
                }

                res.writeHead(200, {
                  'Content-Type': 'application/json'
                })
                res.end(JSON.stringify({ status: 'success', path: '/UserImages/' + fileName }))
            })

        });
    }
}
