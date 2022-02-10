import { $ } from '../modules/selector';

let principalLocation  = window.pageYOffset;

export const hideHeader = () => {
    window.onscroll = () => {
        let actualMove = window.pageYOffset;
        $('#header').style.top = (principalLocation >= actualMove)? '0' : '-100px';
        principalLocation = actualMove;
    }
}