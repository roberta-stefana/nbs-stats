export const selectors = {
    getCurrentUser: state => state.user.currentUser,
    getUserList: state => state.user.users,
    getLoginFailMessage: state => state.user.loginFailMessage,
    getRegisterSuccessMessage: state => state.user.registerSuccessMessage,
    getListLoader: state => state.user.listLoader,
    getButtonLoader: state => state.user.buttonLoader,
    getDialogLoader: state => state.user.dialogLoader,
    getBigLoader: state => state.user.bigLoader
};
