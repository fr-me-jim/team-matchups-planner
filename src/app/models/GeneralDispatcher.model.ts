import { AppDispatch } from "../interfaces/redux.interfaces";

// dispatchers
import AuthDispatcher from "./dispatchers/AuthDispatcher.model";
// import PaymentDispatcher from "src/di/models/dispatchers/PaymentDispatcher.model";
// import ProfileDispatcher from "src/di/models/dispatchers/ProfileDispatcher.model";
// import CourseCatalogueDispatcher from "src/di/models/dispatchers/CourseCatalogueDispatcher.model";
// import UsersDispatcher from "src/di/models/dispatchers/UsersDispatcher.model";
// import SeasonCodesDispatcher from "src/di/models/dispatchers/SeasonCodesDispatcher.model";
// import InscriptionsDispatcher from "src/di/models/dispatchers/InscriptionsDispatcher.model";
// import DiscountsDispatcher from "src/di/models/dispatchers/DiscountsDispatcher.model";
// import CourseInstancesDispatcher from "src/di/models/dispatchers/CourseInstancesDispatcher.model";
// import CourseTemplatesDispatcher from "src/di/models/dispatchers/CourseTemplatesDispatcher.model";

export default class GeneralDispatcher {
	readonly AuthDispatcher: AuthDispatcher;
	// readonly PaymentDispatcher: PaymentDispatcher;

	constructor(dispatch: AppDispatch) {
		this.AuthDispatcher = new AuthDispatcher(dispatch);
		// this.PaymentDispatcher = new PaymentDispatcher(dispatch);
	}
}
