// actions
import AuthActions from "src/redux/actions/auth.actions";

// interfaces
import type { AppDispatch } from "src/interfaces/redux.interfaces";
import type {
	UserLoginActionParams,
	UserLoginFromSessionActionParams,
	UserSigninActionParams,
} from "src/interfaces/User.interfaces";

export default class AuthDispatcher {
	private dispatch: AppDispatch;
	private authActions: AuthActions;

	constructor(dispatch: AppDispatch) {
		this.dispatch = dispatch;
		this.authActions = new AuthActions();
	}

	readonly login = (dispatchData: UserLoginActionParams) =>
		this.dispatch(this.authActions.login(dispatchData)).unwrap();

	readonly loginFromSession = (
		dispatchData: UserLoginFromSessionActionParams
	) => this.dispatch(this.authActions.loginFromSession(dispatchData));

	readonly signin = (dispatchData: UserSigninActionParams) =>
		this.dispatch(this.authActions.signin(dispatchData)).unwrap();

	readonly logout = () => this.dispatch(this.authActions.logout()).unwrap();
}
