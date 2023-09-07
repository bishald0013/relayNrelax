import AlertService from "../service/alertService.js";

export default class AlertController {

    async createAlert (req, res) {
        try {
            const alert = new AlertService();
            const setAlert = await alert.setAlert(req.body, req.user)
            res.send({status: true, data: setAlert});
        } catch (error) {
            res.send({status: false, error: error.message});
        }
    }
}