export default {
    adminLogin_request(state) {
        state.adminState.loading = true 
    },
    adminLogin_success(state) {
        state.adminState.loading = false
    },
    adminLogin_error(state) {
        state.adminState.loading = false
    }

}