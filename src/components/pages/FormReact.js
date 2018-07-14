import React from "react";
class FormReact extends React.Component{

    submit = (data) =>{
        console.log(data);
    };

    render(){
        return(
            <div className="ui container">
                <h1>Form  </h1>
                <FormReact/>
            </div>
        );
    }
}

export default FormReact;