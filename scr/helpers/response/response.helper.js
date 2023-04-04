const ResponseHelper = {
    message: function(status_code,status,message){
        return {status_code,status,message};
    },
    successMessage: function(status_code,status,message="",data=[]){
        const response = this.message(status_code,status,message);
        return {...response,data};
    }
}
export default ResponseHelper;