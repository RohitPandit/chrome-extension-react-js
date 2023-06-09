import "./style.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';

import { goTo } from 'react-chrome-extension-router';
import PrivacyPolicyPageComponent from "../privacy-policy";

function WelcomePageComponent() {

    const routeChange = () => {
        goTo(PrivacyPolicyPageComponent, { message: "Hi" })
    }

    return (
        <>
            <div>
                <h2 className="font-clash-display" style={{ fontWeight: 500 }}>
                    Welcome to the safest <br /> Crypto Wallet
                </h2>
                <div className="centerDiv">
                    <img className="animate__animated animate__jackInTheBox" src="../../assets/Image.png" />
                </div>
                <div className="centerBottonDiv">
                    <Fab onClick={() => routeChange()} aria-label="next" style={{ background: "#27378C", color: "#ffffff" }}>
                        <EastIcon />
                    </Fab>
                </div>
            </div>
        </>
    )
}
export default WelcomePageComponent;