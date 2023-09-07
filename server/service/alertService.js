import AlertModel from "../models/alertModel.js";

export default class AlertService {
   
    async setAlert(data, user){
        try {
            if(!data) throw new Error("data is required")
            const alert = new AlertModel({a_type: data.a_type, a_status: data.a_status, a_u_id: user._id, a_start_date: data.a_start_date, a_end_date: data.a_end_date, a_created_by: user.name});
            const savedAlert = await alert.save();
        } catch (error) {
            return {status: false, message: error.message}
        }
    }
}