import AlertService from "../service/alertService.js";

export default class AlertController {

    constructor() {
        this.AlertService = new AlertService();
    }

    createAlert = async (req, res) => {
        try {
            const setAlert = await this.AlertService.setAlert(req.body, req.user)
            res.send({status: setAlert.status, data: setAlert});
        } catch (error) {
            res.send({status: false, error: error.message});
        }
    }

    updateAlert = async (req, res) => {
        try {
            const updateAlert = await this.AlertService.updateAlert(req.body, req.user)
            res.send({status: updateAlert.status, data: updateAlert});
        } catch (error) {
            res.send({status: false, error: error.message});
        }
    }
}