import {Component} from 'react';
import CardInfo from '../card-info/card-info.component';
import './card-list.styles.css';


class CardList extends Component {

    render() {
        console.log(this.props.users)
        console.log('render card-list');
        const {users} = this.props;

        return (
            <div className='card-list'>
              {users.map((user) => {
               return (
                <CardInfo user={user} key={user.id}/>
               )                      
               })}
            </div>
        )
    }
}
export default CardList;