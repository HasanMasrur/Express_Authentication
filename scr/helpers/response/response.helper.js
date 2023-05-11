const ResponseHelper = {
    message: function(status_code,status,message){
        return {status_code,status,message};
    },
    successMessage: function(status_code,status,message="",data=[]){
        const response = this.message(status_code,status,message);
        return {...response,data};
    },
    successMessageToken: function(status_code,status,token="",data=[]){
        const response = this.message(status_code,status,token);
        return {...response,data};
    },
    errorMessage: function (error) {
        let response = this.message(error.statusCode, error.status, error?.message);
        response = { ...response, errorCode: error.errorCode };
        if (process.env.NODE_ENV === "development") {
          return { ...response, stack: error.stack };
        }
    
        // production error and check if it's known error
        if (error.isOperational) return response;
    
        // generic error for unknown exception
        return this.message(
          StatusCode.ServerError,
          Status.ERROR,
          "Something went wrong"
        );
      },
}
export default ResponseHelper;