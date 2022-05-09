import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react"

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    

    return (
        <div className="flex margin-bottom: 50px;">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <GiHamburgerMenu size='30px' color="black" /> 
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>
            </div>  
    );
}
