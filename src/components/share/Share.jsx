import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/3.jpeg" alt="Person 3" className="shareProfileImg" />
                    <input placeholder='whats in your mind faheem ?' className="shareInput"/>
                </div>

               <hr className='shareHr'/>

               <div className="shareBottom">
                    <div className="shareOptions">

                        <div className="shareOption">
                            <PermMediaIcon htmlColor='Tomato' className='shareIcon'/>
                            <span className="shareOptionText">Photos or Videos</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='green' className='shareIcon'/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                            <span className="shareOptionText">Feeling</span>
                        </div>

                    </div>

                    <div className="shareButton">Share</div>

               </div>

            </div>

            
        </div>
    )
}

export default Share
