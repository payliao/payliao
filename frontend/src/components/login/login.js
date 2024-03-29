import './login.css';
import '../../global.css';
import logo from '../../images/logo-icon-no-bg.png';

export default function Login(props) {

    const NoMetamask = () => {
        return (
            <div>
                <p>
                    No MetaMask detected. 
                    <br />
                    Please install&nbsp;
                    <span className="login-highlight">
                        METAMASK 
                    </span>
                    &nbsp;to your browser to proceed. 
                </p>
            </div>
        );
    }

    const LoginMetamask = () => {
        return (
            <div>
                <button className="login-button" onClick={props.connectTo}>
                    Login with MetaMask
                </button>
            </div>
        );
    }

    return (
        <div className="login">
            <div className='login-container'>
                <img src={logo} alt="logo" />

                <h2 className="login-headline">Pay with the power of Blockchain</h2>
                
                <h3 className="login-author">
                    PayLiao is a blockchain-powered digital payment solution that promises instant onboarding, zero downtime, and a seamless payment experience.
                </h3>
                
                {props.isHaveMetamask ? <LoginMetamask /> : <NoMetamask />}
            </div>
        </div>
    );
}

