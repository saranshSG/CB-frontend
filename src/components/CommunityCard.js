// import React from 'react'
// import { memo, useMemo } from "react";
import "./CommunityCard.css";
const CommunityCard = ({ communityDescription, propAlignSelf, propWidth }) => {
    const communitySecStyle={
        alignSelf: propAlignSelf,
        width: propWidth,
      }

    return (
      <div className="communitysec1" style={communitySecStyle}>
        <div className="content474">
          <div className="join-our-diaspora1">{communityDescription}</div>
          <div className="button90">
            <div className="join-now17">Join Now</div>
          </div>
        </div>
      </div>
    );
  }

export default CommunityCard;
