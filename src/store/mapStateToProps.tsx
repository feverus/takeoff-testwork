import * as I from '../interfaces';

export function mapStateToProps(component: string) {
	switch (component) {
		case "Main": {
			return function (state: I.StateAll):I.PropsState {
				return {
					page: state.set.page,
					name: state.user.name
				}
			}
		}
		case "Auth": {
			return function (state: I.StateAll):I.PropsState {
				return {
					login: state.user.login,
					password: state.user.password
				}
			}
		}
		default: undefined
	}
}
export type StateProps = typeof mapStateToProps;