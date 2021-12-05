import './closeFriend.css';

function CloseFriend({user}) {
    return (
        <>
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="Avinash DP" className='sidebarFriendImg' />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </>
    )
}

export default CloseFriend
