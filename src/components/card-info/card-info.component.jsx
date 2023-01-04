import {Component} from 'react';
import './card-info.styles.css';

class CardInfo extends Component {

    render() {
        
        const {id, name, email} = this.props.user;

        return (            
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?size=180x180`} alt="robo" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}
export default CardInfo;
