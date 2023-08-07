

function ConceptItem(props){
    //console.log(props)
        return(
            <li  className="concept">
            {/* the value which is coming from App.js file using props. "Props can accessing value from one component to another component*/}
             <img src={props.img}  /> 
             <h2>{props.title}</h2>
             <p>{props.description}</p>  
            </li>   
        );
    }
    export default  ConceptItem;