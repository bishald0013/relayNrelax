import AlertModel from "../models/alertModel.js";

export default class AlertService {
   
    async setAlert(data, user){
        try {
            if(!data) throw new Error("data is required")
            if(!data.a_start_date || !data.a_end_date) throw new Error("Start date and end date is required")
            // if(data.a_start_date < data.a_end_date) throw new Error("End date should be greater than start date")
            
            const newAlert = new AlertModel({
                a_type: data.a_type,
                a_status: data.a_status,
                a_u_id: user._id,
                a_start_date: data.a_start_date,
                a_end_date: data.a_end_date,
                a_created_by: user.name
            });

            const saveAlert = await newAlert.save();
            return {status: true, data: saveAlert, user: user._id}
            
        } catch (error) {
            return {status: false, message: error.message}
        }
    }

    async updateAlert(data, user){
        try {
            return {data: data, user: user._id}
        } catch (error) {
            return {status: false, message: error.message}
        }
    }
}