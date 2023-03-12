import './client-styles.css'


const Client = (props) =>{
    return(
        <div className='cliente'>
            <div className='cliente__name'> {props.name} </div>
            <div className='cliente__instagram'>{props.instagram} </div>
            <div className='cliente__phone'> {props.phone} </div>
            <div className='cliente__action'> {props.action} </div>
        </div>
    )
}

export default Client

