import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItems">
                        <RssFeedIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Feed</span>
                    </li>  

                    <li className="sidebarListItems">
                        <ChatIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Chats</span>
                    </li> 

                    <li className="sidebarListItems">
                        <PlayCircleIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Videos</span>
                    </li> 

                    <li className="sidebarListItems">
                        <GroupIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Groups</span>
                    </li> 

                    <li className="sidebarListItems">
                        <BookmarkIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Bookmarks</span>
                    </li> 

                    <li className="sidebarListItems">
                        <HelpOutlineIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Questions</span>
                    </li> 

                    <li className="sidebarListItems">
                        <WorkIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Jobs</span>
                    </li> 

                    <li className="sidebarListItems">
                        <EventIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Events</span>
                    </li> 

                    <li className="sidebarListItems">
                        <SchoolIcon className="sidebarListIcon"/>
                        <span className="sidebarListItemTesxt">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show more </button>

                <hr className="sidebarHr"/>

                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div> 
        </div>
    )
}

export default Sidebar;
