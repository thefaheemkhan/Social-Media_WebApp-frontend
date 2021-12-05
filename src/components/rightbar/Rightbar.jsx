import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar({profile}) {

    const HomeRightBar =()=>{
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="bth" className="birthdayImg" />
                    <span className="birthdayText"> 
                    <b>Sanchit Shukla</b> and <b>3 other friends</b> have a birthday today 
                    </span>
                </div>
                <img src="/assets/ad.png" alt="ad" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar=()=>{
        return(
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New Delhi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Delhi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarfollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Divya Shukla</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Avinash</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jasmeet Kaur</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Insha Meraj</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Himani</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Riya</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}

export default Rightbar
