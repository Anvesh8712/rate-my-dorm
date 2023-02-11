function Form(){
    return(
        <div>
            <p>
                Form submission
                divided into 2 parts 
                -{">"}validation
                -{">"}actual form to get answers for backend
                -{">"} saves as a json object and sends to backend
                -{">"}backend calculates the value and sends to database and updates the database
                -{">"}should be conrstrcitive i.e every value will have a mathematical implication
            </p>
        </div>
    )
}

export default Form