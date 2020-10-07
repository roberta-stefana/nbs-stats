export const selectors = {
    getCurrentUser: state => state.user.currentUser,
    getUserList: state => state.user.users,
    getLoginFail: state => state.user.loginFail,
    getRegisterSuccessMessage: state => state.user.registerSuccessMessage,
    getListLoader: state => state.user.listLoader,
    getButtonLoader: state => state.user.buttonLoader,
    getDialogLoader: state => state.user.dialogLoader,
    getBigLoader: state => state.user.bigLoader
};
