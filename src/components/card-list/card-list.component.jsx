import CardInfo from '../card-info/card-info.component';
import './card-list.styles.css';

const CardList = ({users}) => (
    <div className='card-list'>
        {users.map((user) => {
            return <CardInfo user={user} key={user.id} />                            
        })}
    </div>
);

export default CardList

