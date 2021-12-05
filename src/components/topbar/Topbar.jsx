import './topbar.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Topbar() {
    return (
        <div className="topbarContainer">


            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>


            <div className="topbarCenter">
                <div className="searchar">
                    <SearchIcon className="searchicon"/>
                    <input placeholder="Search Friends" className="searchInput" />
                </div>
            </div>

            
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitems">
                        <PersonIcon/>
                        <span className="topbariconbadge">11</span>
                    </div>
                    <div className="topbariconitems">
                        <ChatIcon/>
                        <span className="topbariconbadge">2</span>
                    </div>
                    <div className="topbariconitems">
                        <NotificationsIcon/>
                        <span className="topbariconbadge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="Profile" className="topbarImage" />
            </div>
        </div>
    )
}

export default Topbar;
