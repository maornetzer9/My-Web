import React from 'react';
import './main-header.css';
import MotionDivAnimation from '../UX-UI/MotionDivAnimation';

export default function MainHeader() {




    return (
        <MotionDivAnimation  
            animateDirection='right' 
            className="main-header"
        >
            <p className="title">אפיון, עיצוב ופיתוח דפי נחיתה</p>
            <p className="sub-header">להצלחה בזירה</p>
            <p className="content">של הגדולים</p>
            <p className="subContent"> מתמחה בבניית אתרים ודפי נחיתה פתרונות דיגיטל לעסקים ולחברות. השירות כולל מעטפת מלאה של שירותי גרפיקה נגישות אחסון תמיכה וקידום אתרים </p>
        </MotionDivAnimation>
    );
}
