// makeTitleOfApp.js

function makeTitleOfApp()
{
    let container = ce('div');
    container.style.width = 100 + 'px';
    container.style.position = 'absolute';
    container.style.right = '0px';
    container.style.top = '5px';
    ba(container);

    //-//

    let titleOfApplication = ce("a");
    titleOfApplication.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_File_Reader'
    titleOfApplication.target = '_blank';
    titleOfApplication.textContent = ' CATopalian JavaScript File Reader';
    titleOfApplication.style.fontSize = '15px';
    titleOfApplication.style.fontWeight = 'bold';
    titleOfApplication.style.color = 'rgb(130, 130, 130)';
    titleOfApplication.style.textDecoration = 'none';
    container.append(titleOfApplication);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

