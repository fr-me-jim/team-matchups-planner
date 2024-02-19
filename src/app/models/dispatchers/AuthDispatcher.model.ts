// actions
import AuthActions from "src/app/redux/actions/auth.actions";

// interfaces
import type { AppDispatch } from "src/app/interfaces/redux.interfaces";
import type {
	UserLoginActionParams,
	UserSigninActionParams,
} from "src/app/interfaces/User.interfaces";

export default class AuthDispatcher {
	private dispatch: AppDispatch;
	private authActions: AuthActions;

	constructor(dispatch: AppDispatch) {
		this.dispatch = dispatch;
		this.authActions = new AuthActions();
	}

	readonly login = (dispatchData: UserLoginActionParams) =>
		this.dispatch(this.authActions.login(dispatchData)).unwrap();

	readonly signin = (dispatchData: UserSigninActionParams) =>
		this.dispatch(this.authActions.signin(dispatchData)).unwrap();

	readonly logout = () => this.dispatch(this.authActions.logout());
}
