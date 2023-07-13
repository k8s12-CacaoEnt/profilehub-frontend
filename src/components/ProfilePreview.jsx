import styled from "@emotion/styled";
import { Typography } from "@mui/material";

/*
https://imgur.com/a/bayU3zD
https://imgur.com/LmAxmnt
https://imgur.com/EkQwTNq
https://imgur.com/jzrYhMY
https://imgur.com/GxuKCTB

*/

const ImgWrapper = styled.div`
border-radius: 0;
box-shadow: none;
box-sizing: border-box;
`;

const Img = styled.img`
transition: transform var(--duration-long) ease;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
-o-object-fit: cover;
object-fit: cover;
height: 238px;
width: 238px;
`;

const Wrapper = styled.div`
border-width: 1px;
border-style: solid;
border-color: var(--color-gray-border);
border-radius: 10px;
padding: 0;
width: 240px;
text-align: left;
margin-bottom: 30px;
position: relative;
}

`;

const ProfileName = styled.div`
background-color: black;
font-size: 16px;
line-height: 1.25em;
padding: 7px 10px 8px;
border-radius: 10px;
margin-top:0;
`;

const ProfileDesc = styled.div`

padding: 3px 3px;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
`;

const ProfileBtns = styled.div`
`;

function ProfilePreview(){
    return(
        <Wrapper>
            <ImgWrapper>
             <Img src="https://i.imgur.com/kd0MikB.jpeg"/>
            </ImgWrapper>
            <ProfileName>
                <Typography sx={{fontWeight:'bold'}} >kimchi jjigae</Typography>
            </ProfileName>
            <ProfileDesc>
                <ul style={{'list-style-type': 'none'}}>
                    <li>서초구, 서울시</li>
                    <li>ddd년</li>
                    <li>어쩌구</li>
                </ul>

            </ProfileDesc>

        </Wrapper>
    )
}
export default ProfilePreview;