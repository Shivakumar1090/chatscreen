import { Box, Paper, Stack, Typography } from "@mui/material";

const ChatCard = ({chat}) => {
    const thismobileuserid = "67eab7475e5e4dd0903e133705213b43";
    return ( 
        <div>
            <Stack 
                direction='row' spacing={1}  
                margin='15px 0px 15px 0px'
            >
                {chat.sender.user_id !== thismobileuserid && 
                    <img src={chat.sender.image} alt="" width='26px' height='26px' style={{borderRadius: '12px'}}></img>
                }
                <Box 
                    width="400px" 
                    textAlign='left' 
                    backgroundColor={chat.sender.user_id === thismobileuserid ? '#1C63D5' : 'white'}
                    fontFamily= "Mulish"
                    color={chat.sender.user_id === thismobileuserid ? 'white' : '#606060'}
                    padding='8px'
                    borderRadius={chat.sender.user_id === thismobileuserid ? "12px 12px 0px 12px" : "0px 12px 12px 12px;"}
                    boxShadow={chat.sender.user_id !== thismobileuserid && "0px 4px 8px rgba(0, 0, 0, 0.08)"}
                >
                    <Typography fontSize='14px' lineHeight='18px'>{chat.message}</Typography>
                </Box>
            </Stack>
        </div>
     );
}
 
export default ChatCard;