import './online.css';

function Online({user}) {
    return (
        <>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={user.profilePicture} alt="perso3" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </>
    )
}

export default Online
