import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import javascript from '../assets/svg/javascript.svg'
import react from '../assets/svg/react.svg'
import mongoDB from '../assets/svg/mongoDB.svg'
import git from '../assets/svg/git.svg'
import expressjs from '../assets/svg/expressjs.svg'
import nodejs from '../assets/svg/nodejs.svg'
import materialui from '../assets/svg/materialui.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'nodejs':
            return nodejs;
        case 'mongodb':
            return mongoDB;
        case 'express':
            return expressjs;
        case 'react':
            return react;
        case 'material ui':
            return materialui;
        case 'git':
            return git;
        default:
            break;
    }
}