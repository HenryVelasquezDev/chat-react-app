import React from 'react'

export const SideBarChatItem = () => {
    return (
        <div className="chat_list ">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    )
}
