import './card-info.styles.css';

const CardInfo = ({user}) => {
    const {id, name, email} = user;

    return (
        <div className='card-container'key={id}>
            <img src={`https://robohash.org/${id}?size=180x180`} alt="robo" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default CardInfo;
