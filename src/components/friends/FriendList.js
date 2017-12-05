import React from 'react';

const FriendList = ({ friends }) => {
    console.log("<><><><><><>", friends);

    return(
        <div>
            FRIENDS
        </div>
    );
};

FriendList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default FriendList;
