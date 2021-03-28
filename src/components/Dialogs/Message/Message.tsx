import React from "react";
import {MessagesType} from "../../../redux/state";




function Message  (props:MessagesType) {



    return(
        <div>
            {props.message}
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwow.zamimg.com%2Fuploads%2Fscreenshots%2Fnormal%2F661494-battle-net-avatars.jpg&imgrefurl=https%3A%2F%2Fwww.wowhead.com%2Fgallery%3D648%2Fbattle-net-avatars&tbnid=jqqVa82t7Uw6IM&vet=12ahUKEwj6xZ6XrqXvAhUDvSoKHUmkCSsQMygAegUIARCUAQ..i&docid=lOX_sYxjRXCjRM&w=256&h=256&q=net%20avatar&ved=2ahUKEwj6xZ6XrqXvAhUDvSoKHUmkCSsQMygAegUIARCUAQ'/>
        </div>

    )
}




export default Message;